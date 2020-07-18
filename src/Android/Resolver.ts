import '../Expansion'
import Tea from "../Tea";
import Ecdh from "./Ecdh";
import './Struct'
import Tlv from "./Tlv";
import Buff from "./Buff";

const ZeroKey = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

class Resolver {
    static HeartBeatParser(Pack: Buffer): number | boolean {
        let PackBuff = new Buff()
        PackBuff.SetBuffer(Pack)
        let PackLength = PackBuff.ReadInt()
        let Type = PackBuff.ReadInt()
        PackBuff.OffsetAdd(4)
        let QQLen = PackBuff.ReadShort() - 4
        let QQ = PackBuff.ReadBytes(QQLen)
        let CmdPackLen = PackBuff.ReadInt()
        let Seq = PackBuff.ReadInt()
        PackBuff.OffsetAdd(12)
        let CmdStr = PackBuff.ReadBytes(15).toString()
        if (CmdStr === Cmd.HeartbeatAlive) {
            return Seq
        } else {
            return false
        }

    }

    static Parser(Pack: Buffer, Key: Array<number> = ZeroKey): RecvPack | null {
        let PackBuff = new Buff()
        PackBuff.SetBuffer(Pack)
        let PackLength = PackBuff.ReadInt()
        let Type = PackBuff.ReadInt()
        let Encryption = PackBuff.ReadByte()
        PackBuff.OffsetAdd(4)
        let QQBuffLen = PackBuff.ReadByte() - 4
        let QQ = PackBuff.ReadBytes(QQBuffLen).toString()
        let Body = PackBuff.GetBufferOffset()
        let BoydArray = Body.toJSON().data
        let TeaClass = new Tea()
        let Result: Array<number> | null;
        Result = TeaClass.Decrypt(BoydArray, Key)
        if (!Result) {
            Result = TeaClass.Decrypt(BoydArray, ZeroKey)
            if (Result) {
            } else {
                return null
            }
        }
        let CmdPackBuff = new Buff()
        CmdPackBuff.SetBuffer(Buffer.from(Result))
        let Headlen = CmdPackBuff.ReadInt()
        let Seq = CmdPackBuff.ReadInt()
        CmdPackBuff.OffsetAdd(8)
        let CmdLen = CmdPackBuff.ReadInt() - 4
        let CmdStr = CmdPackBuff.ReadBytes(CmdLen).toString()
        CmdPackBuff.OffsetAdd(12)
        let CmdPackBodyLen = CmdPackBuff.ReadInt()
        let CmdPackBody = CmdPackBuff.GetBufferOffset()
        return {Body: CmdPackBody, Cmd: CmdStr, Encryption: Encryption, QQ, Type: Type}

    }

    static LoginSuccessParser(Pack: Array<number>, PublicKey: Array<number>, ShareKey: Array<number>, ClientPrivateKey: Array<number>, TGKey: Array<number>): LoginSuccessRet | null {
        let TeaClass = new Tea()
        let Result = TeaClass.Decrypt(Pack, ShareKey)
        if (Result) {
            let PublicKeyLength = Result.splice(0, 2)[1]
            let ServerPublicKey = Result.splice(0, PublicKeyLength)
            let ExShareKey = Ecdh.ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey)
            if (ExShareKey) {
                let Result2 = TeaClass.Decrypt(Result, ExShareKey)
                if (Result2) {
                    Result2.splice(0, 5) //fix
                    Result2.splice(0, 2) // tlv tag 0119
                    let DataLength = Result2.splice(0, 2).HexNumberToNumber()
                    let Data = TeaClass.Decrypt(Result2.slice(0, DataLength), TGKey)
                    if (!Data) {
                        return null
                    }
                    Data.splice(0, 2) //fix
                    let LoginSuccess: LoginSuccessRet = {} as LoginSuccessRet
                    LoginSuccess.ExShareKey = ExShareKey
                    LoginSuccess.SereverPublicKey = ServerPublicKey
                    LoginSuccess.TlvData = []
                    while (Data.length > 0) {
                        let Tag = Data.splice(0, 2).HexNumberToString().join("").toLocaleUpperCase()
                        let Length = Data.splice(0, 2).HexNumberToNumber()
                        let Body = Data.splice(0, Length)
                        switch (Tag) {
                            //016d superKey
                            //0512 cookie
                            //0120 skey
                            //010D tgtKey
                            //0305 d2Key sessionkey
                            //0164 sid
                            //0322 deviceToken
                            case "0550": //未知
                            case "0138":
                            case "011F":
                                //011F 也是时间单位不知具体代表哪个
                                //0138应该是cookie过期时间 末尾还有一个应该是对应各种cookie的过期时间
                                //0138结构 00 00 00 0X  数组结构
                                // tag length value value= time +00 00 00 00
                                // 不是必要
                                continue;
                            //基本一样跳过
                            case "0522":
                                break;
                            case "0537":
                                break;
                            case "0163":
                                LoginSuccess.Key0163 = Body
                                break;
                            case "010C":
                                LoginSuccess.Key010C = Body
                                break;
                            case "010E":
                                LoginSuccess.Key010E = Body
                                break;
                            case "0106":
                                LoginSuccess.Key0106 = Body
                                break;
                            case "016A":
                                LoginSuccess.Key016A = Body
                                break;
                            case "0118":
                                LoginSuccess.MainDisplayName = Body
                                break;
                            case "0108":
                                LoginSuccess.Ksid = Body
                                break;
                            case "0512":
                                LoginSuccess.WebCookies = Tlv.Tag0512Parser(Body)
                                break;
                            case "011A":
                                LoginSuccess.UserInfo = Tlv.Tag011AParser(Body)
                                break;
                            case "0130":
                                let Tlv0130 = Tlv.Tag0130Parser(Body)
                                break;
                            case "0528":
                                let Unkonw = Buffer.from(Body).toString()  //{"QIM_invitation_bit":"1"}
                                //结果是一个json字符串对象 未知 似乎与服务器有关
                                break;
                            case "0120":
                                LoginSuccess.Skey = Buffer.from(Body).toString()
                                break;
                            case "010D":
                                LoginSuccess.TgtKey = Body
                                break;
                            case "016D":
                                LoginSuccess.SuperKey = Buffer.from(Body).toString()
                                break;
                            case "0322":
                                LoginSuccess.DeviceToken = Body
                                break;
                            case "0103":
                                LoginSuccess.UserStWebSig = Body
                                break;
                            case "0305":
                                LoginSuccess.D2Key = Body
                                break;
                            case "010A":
                                //跟0143组合使用 可以做到使用Token上线
                                LoginSuccess.Key010A = Body
                                break;
                            case "0143":
                                LoginSuccess.Key0143 = Body
                                break;
                            case "0114":
                                //???
                                LoginSuccess.StSig = Body
                                break;
                            case  "0133":
                                LoginSuccess.WtSessionTicket = Body
                                break;
                            case "0134":
                                LoginSuccess.WtSessionTicketKey = Body
                                break;
                            default:
                                LoginSuccess.TlvData.push({Tag, Length, Body})
                                break;
                        }

                    }
                    let CurrentTime = parseInt(String(new Date().getTime() / 1000))
                    let ExpireTime = CurrentTime + 2160000
                    LoginSuccess.CookiesExpireTime = ExpireTime
                    return LoginSuccess

                    return null

                } else {
                    return null
                }
            } else {
            }

        }
        return null
    }


    static FriendMessageParser() {
    }

    static GroupMessageParser() {
    }


    static LoginPhoneVerifyParser(Pack: Array<number>, PublicKey: Array<number>, ShareKey: Array<number>, ClientPrivateKey: Array<number>): DeviceVerify | null {
        let TeaClass = new Tea()
        let Result = TeaClass.Decrypt(Pack, ShareKey)
        if (Result) {
            let PublicKeyLength = Result.splice(0, 2)[1]
            let ServerPublicKey = Result.splice(0, PublicKeyLength)
            let ExShareKey = Ecdh.ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey)
            if (ExShareKey) {
                let Data = TeaClass.Decrypt(Result, ExShareKey)
                if (!Data) {
                    return null
                }
                Data.splice(0, 4)
                let Flag: number = Data.splice(0, 1)[0]
                let Ret: DeviceVerify = {} as DeviceVerify
                Ret.ExShareKey = ExShareKey
                while (Data.length) {
                    let Tag = Data.splice(0, 2).HexNumberToString().join("").toLocaleUpperCase()
                    let Length = Data.splice(0, 2).HexNumberToNumber()
                    let Body = Data.splice(0, Length)
                    switch (Tag) {
                        case "0104":
                            Ret.Key0104 = Buffer.from(Body).toString()
                            break;
                        case "0402":
                            Ret.Key0402 = Body
                            break;
                        case "0403":
                            Ret.Key0403 = Body
                            break;
                    }
                }
                return Ret

            }
            return null
        }
        return null
    }


    static LoginDeviceVerifyParser(Pack: Array<number>, PublicKey: Array<number>, ShareKey: Array<number>, ClientPrivateKey: Array<number>, TGKey: Array<number>): LoginScanVerify | null {
        let TeaClass = new Tea()
        let Result = TeaClass.Decrypt(Pack, ShareKey)
        if (Result) {
            let PublicKeyLength = Result.splice(0, 2)[1]
            let ServerPublicKey = Result.splice(0, PublicKeyLength)
            let ExShareKey = Ecdh.ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey)
            if (ExShareKey) {
                let Data = TeaClass.Decrypt(Result, ExShareKey)
                if (!Data) {
                    return null
                }
                Data.splice(0, 5)
                let Ret: LoginScanVerify = {} as LoginScanVerify
                Ret.ExShareKey = ExShareKey
                while (Data.length) {
                    let Tag = Data.splice(0, 2).HexNumberToString().join("").toLocaleUpperCase()
                    let Length = Data.splice(0, 2).HexNumberToNumber()
                    let Body = Data.splice(0, Length)
                    switch (Tag) {
                        case "0104":
                            Ret.VerifyKey.Key0104 = Buffer.from(Body).toString()
                            break;
                        case "0174":
                            Ret.Key0174 = Buffer.from(Body).toString()
                            break;
                        case "0178":
                            //phone
                            Body.splice(0, 3)
                            let Len = Body.splice(0, 1)[0]
                            Ret.Phone = Buffer.from(Body.splice(0, Len)).toString()
                            break;
                        case "0179":
                            //pass
                            break;
                        case "017D":
                            //无关紧要的地址
                            break;
                        case "0402":
                            Ret.VerifyKey.Key0402 = Body
                            break;
                        case "0403":
                            Ret.VerifyKey.Key0403 = Body
                            break;
                        case "0204":
                            Ret.VerifyUrl = Buffer.from(Body).toString()
                            break;
                        case "017E":
                            Ret.Titps = Buffer.from(Body).toString()
                            break;
                    }
                }
                return Ret
            }
        }

        return null
    }


    static PushForceOfflineParser(Pack: Array<number>) {

    }

    static LoginVerifyCodeParser(Pack: Array<number>, PublicKey: Array<number>, ShareKey: Array<number>, ClientPrivateKey: Array<number>): LoginNotify | null {
        let TeaClass = new Tea()
        let Result = TeaClass.Decrypt(Pack, ShareKey)
        if (Result) {
            let PublicKeyLength = Result.splice(0, 2)[1]
            let ServerPublicKey = Result.splice(0, PublicKeyLength)
            let ExShareKey = Ecdh.ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey)
            if (ExShareKey) {
                let Data = TeaClass.Decrypt(Result, ExShareKey)
                if (Data) {
                    /* return {
                         Notice: 2,
                         NoticeData: Buffer.from(Data)
                     }*/
                }
            }
        }
        return null

    }


    static LoginPackageParser(Pack: Buffer, PublicKey: Array<number>, ShareKey: Array<number>, ClientPrivateKey: Array<number>, TGKey: Array<number>): LoginNotify | null {

        let PackBuff = new Buff()
        PackBuff.SetBuffer(Pack)

        PackBuff.OffsetAdd(13)
        let Flag = PackBuff.ReadByte()
        PackBuff.OffsetAdd(2)
        let PackBody = PackBuff.GetBufferOffset().toJSON().data
        PackBody.pop()
        switch (Flag) {
            // 正常
            case 0:
                let Ret0: LoginSuccessRet | null = Resolver.LoginSuccessParser(PackBody, PublicKey, ShareKey, ClientPrivateKey, TGKey)
                if (Ret0) {
                    return {
                        Notice: LoginStatus.success,
                        NoticeData: Ret0
                    }
                }
                return null

            //账号密码错误
            case 1:
                return {
                    Notice: LoginStatus.fail,
                    NoticeData: null
                }
                break;
            // 验证码
            case 2:
                return {
                    NoticeData: null,
                    Notice: LoginStatus.verifycode
                }

                break;
            //不安全登录 需要验证
            case 160:
                return {
                    NoticeData: null,
                    Notice: LoginStatus.deviceverify
                }
                /*  let Ret160: LoginScanVerify | null = Resolver.LoginDeviceVerifyParser(PackBody, PublicKey, ShareKey, ClientPrivateKey, TGKey)
                  if (Ret160) {
                      return {
                          Notice: LoginStatus.deviceverify,
                          NoticeData: Ret160
                      }
                  }*/

                break;
            //不安全登录 需要验证
            case 204:
                return {
                    NoticeData: null,
                    Notice: LoginStatus.deviceverify
                }
                /* let Ret204: DeviceVerify | null = Resolver.LoginPhoneVerifyParser(PackBody, PublicKey, ShareKey, ClientPrivateKey)
                 if (Ret204) {
                     return {
                         Notice: LoginStatus.deviceverify,
                         NoticeData: Ret204
                     }
                 }
                 return null*/
                break;
            default:
                /* Log.Error("Unkonw flag,flag:", Flag)*/
                break;
        }
        return null

    }
}

export = Resolver