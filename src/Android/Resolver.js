"use strict";
require("../Expansion");
var Tea_1 = require("../Tea");
var Ecdh_1 = require("./Ecdh");
require("./Struct");
var Tlv_1 = require("./Tlv");
var Buff_1 = require("./Buff");
var ZeroKey = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var Resolver = /** @class */ (function () {
    function Resolver() {
    }
    Resolver.HeartBeatParser = function (Pack) {
        var PackBuff = new Buff_1["default"]();
        PackBuff.SetBuffer(Pack);
        var PackLength = PackBuff.ReadInt();
        var Type = PackBuff.ReadInt();
        PackBuff.OffsetAdd(4);
        var QQLen = PackBuff.ReadShort() - 4;
        var QQ = PackBuff.ReadBytes(QQLen);
        var CmdPackLen = PackBuff.ReadInt();
        var Seq = PackBuff.ReadInt();
        PackBuff.OffsetAdd(12);
        var CmdStr = PackBuff.ReadBytes(15).toString();
        if (CmdStr === "Heartbeat.Alive" /* HeartbeatAlive */) {
            return Seq;
        }
        else {
            return false;
        }
    };
    Resolver.Parser = function (Pack, Key) {
        if (Key === void 0) { Key = ZeroKey; }
        var PackBuff = new Buff_1["default"]();
        PackBuff.SetBuffer(Pack);
        var PackLength = PackBuff.ReadInt();
        var Type = PackBuff.ReadInt();
        var Encryption = PackBuff.ReadByte();
        PackBuff.OffsetAdd(4);
        var QQBuffLen = PackBuff.ReadByte() - 4;
        var QQ = PackBuff.ReadBytes(QQBuffLen).toString();
        var Body = PackBuff.GetBufferOffset();
        var BoydArray = Body.toJSON().data;
        var TeaClass = new Tea_1["default"]();
        var Result;
        Result = TeaClass.Decrypt(BoydArray, Key);
        if (!Result) {
            Result = TeaClass.Decrypt(BoydArray, ZeroKey);
            if (Result) {
            }
            else {
                return null;
            }
        }
        var CmdPackBuff = new Buff_1["default"]();
        CmdPackBuff.SetBuffer(Buffer.from(Result));
        var Headlen = CmdPackBuff.ReadInt();
        var Seq = CmdPackBuff.ReadInt();
        CmdPackBuff.OffsetAdd(8);
        var CmdLen = CmdPackBuff.ReadInt() - 4;
        var CmdStr = CmdPackBuff.ReadBytes(CmdLen).toString();
        CmdPackBuff.OffsetAdd(12);
        var CmdPackBodyLen = CmdPackBuff.ReadInt();
        var CmdPackBody = CmdPackBuff.GetBufferOffset();
        return { Body: CmdPackBody, Cmd: CmdStr, Encryption: Encryption, QQ: QQ, Type: Type };
    };
    Resolver.LoginSuccessParser = function (Pack, PublicKey, ShareKey, ClientPrivateKey, TGKey) {
        var TeaClass = new Tea_1["default"]();
        var Result = TeaClass.Decrypt(Pack, ShareKey);
        if (Result) {
            var PublicKeyLength = Result.splice(0, 2)[1];
            var ServerPublicKey = Result.splice(0, PublicKeyLength);
            var ExShareKey = Ecdh_1["default"].ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey);
            if (ExShareKey) {
                var Result2 = TeaClass.Decrypt(Result, ExShareKey);
                if (Result2) {
                    Result2.splice(0, 5); //fix
                    Result2.splice(0, 2); // tlv tag 0119
                    var DataLength = Result2.splice(0, 2).HexNumberToNumber();
                    var Data = TeaClass.Decrypt(Result2.slice(0, DataLength), TGKey);
                    if (!Data) {
                        return null;
                    }
                    Data.splice(0, 2); //fix
                    var LoginSuccess = {};
                    LoginSuccess.ExShareKey = ExShareKey;
                    LoginSuccess.SereverPublicKey = ServerPublicKey;
                    LoginSuccess.TlvData = [];
                    while (Data.length > 0) {
                        var Tag = Data.splice(0, 2).HexNumberToString().join("").toLocaleUpperCase();
                        var Length = Data.splice(0, 2).HexNumberToNumber();
                        var Body = Data.splice(0, Length);
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
                                LoginSuccess.Key0163 = Body;
                                break;
                            case "010C":
                                LoginSuccess.Key010C = Body;
                                break;
                            case "010E":
                                LoginSuccess.Key010E = Body;
                                break;
                            case "0106":
                                LoginSuccess.Key0106 = Body;
                                break;
                            case "016A":
                                LoginSuccess.Key016A = Body;
                                break;
                            case "0118":
                                LoginSuccess.MainDisplayName = Body;
                                break;
                            case "0108":
                                LoginSuccess.Ksid = Body;
                                break;
                            case "0512":
                                LoginSuccess.WebCookies = Tlv_1["default"].Tag0512Parser(Body);
                                break;
                            case "011A":
                                LoginSuccess.UserInfo = Tlv_1["default"].Tag011AParser(Body);
                                break;
                            case "0130":
                                var Tlv0130 = Tlv_1["default"].Tag0130Parser(Body);
                                break;
                            case "0528":
                                var Unkonw = Buffer.from(Body).toString(); //{"QIM_invitation_bit":"1"}
                                //结果是一个json字符串对象 未知 似乎与服务器有关
                                break;
                            case "0120":
                                LoginSuccess.Skey = Buffer.from(Body).toString();
                                break;
                            case "010D":
                                LoginSuccess.TgtKey = Body;
                                break;
                            case "016D":
                                LoginSuccess.SuperKey = Buffer.from(Body).toString();
                                break;
                            case "0322":
                                LoginSuccess.DeviceToken = Body;
                                break;
                            case "0103":
                                LoginSuccess.UserStWebSig = Body;
                                break;
                            case "0305":
                                LoginSuccess.D2Key = Body;
                                break;
                            case "010A":
                                //跟0143组合使用 可以做到使用Token上线
                                LoginSuccess.Key010A = Body;
                                break;
                            case "0143":
                                LoginSuccess.Key0143 = Body;
                                break;
                            case "0114":
                                //???
                                LoginSuccess.StSig = Body;
                                break;
                            case "0133":
                                LoginSuccess.WtSessionTicket = Body;
                                break;
                            case "0134":
                                LoginSuccess.WtSessionTicketKey = Body;
                                break;
                            default:
                                LoginSuccess.TlvData.push({ Tag: Tag, Length: Length, Body: Body });
                                break;
                        }
                    }
                    var CurrentTime = parseInt(String(new Date().getTime() / 1000));
                    var ExpireTime = CurrentTime + 2160000;
                    LoginSuccess.CookiesExpireTime = ExpireTime;
                    return LoginSuccess;
                    return null;
                }
                else {
                    return null;
                }
            }
            else {
            }
        }
        return null;
    };
    Resolver.FriendMessageParser = function () {
    };
    Resolver.GroupMessageParser = function () {
    };
    Resolver.LoginPhoneVerifyParser = function (Pack, PublicKey, ShareKey, ClientPrivateKey) {
        var TeaClass = new Tea_1["default"]();
        var Result = TeaClass.Decrypt(Pack, ShareKey);
        if (Result) {
            var PublicKeyLength = Result.splice(0, 2)[1];
            var ServerPublicKey = Result.splice(0, PublicKeyLength);
            var ExShareKey = Ecdh_1["default"].ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey);
            if (ExShareKey) {
                var Data = TeaClass.Decrypt(Result, ExShareKey);
                if (!Data) {
                    return null;
                }
                Data.splice(0, 4);
                var Flag = Data.splice(0, 1)[0];
                var Ret = {};
                Ret.ExShareKey = ExShareKey;
                while (Data.length) {
                    var Tag = Data.splice(0, 2).HexNumberToString().join("").toLocaleUpperCase();
                    var Length = Data.splice(0, 2).HexNumberToNumber();
                    var Body = Data.splice(0, Length);
                    switch (Tag) {
                        case "0104":
                            Ret.Key0104 = Buffer.from(Body).toString();
                            break;
                        case "0402":
                            Ret.Key0402 = Body;
                            break;
                        case "0403":
                            Ret.Key0403 = Body;
                            break;
                    }
                }
                return Ret;
            }
            return null;
        }
        return null;
    };
    Resolver.LoginDeviceVerifyParser = function (Pack, PublicKey, ShareKey, ClientPrivateKey, TGKey) {
        var TeaClass = new Tea_1["default"]();
        var Result = TeaClass.Decrypt(Pack, ShareKey);
        if (Result) {
            var PublicKeyLength = Result.splice(0, 2)[1];
            var ServerPublicKey = Result.splice(0, PublicKeyLength);
            var ExShareKey = Ecdh_1["default"].ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey);
            if (ExShareKey) {
                var Data = TeaClass.Decrypt(Result, ExShareKey);
                if (!Data) {
                    return null;
                }
                Data.splice(0, 5);
                var Ret = {};
                Ret.ExShareKey = ExShareKey;
                while (Data.length) {
                    var Tag = Data.splice(0, 2).HexNumberToString().join("").toLocaleUpperCase();
                    var Length = Data.splice(0, 2).HexNumberToNumber();
                    var Body = Data.splice(0, Length);
                    switch (Tag) {
                        case "0104":
                            Ret.VerifyKey.Key0104 = Buffer.from(Body).toString();
                            break;
                        case "0174":
                            Ret.Key0174 = Buffer.from(Body).toString();
                            break;
                        case "0178":
                            //phone
                            Body.splice(0, 3);
                            var Len = Body.splice(0, 1)[0];
                            Ret.Phone = Buffer.from(Body.splice(0, Len)).toString();
                            break;
                        case "0179":
                            //pass
                            break;
                        case "017D":
                            //无关紧要的地址
                            break;
                        case "0402":
                            Ret.VerifyKey.Key0402 = Body;
                            break;
                        case "0403":
                            Ret.VerifyKey.Key0403 = Body;
                            break;
                        case "0204":
                            Ret.VerifyUrl = Buffer.from(Body).toString();
                            break;
                        case "017E":
                            Ret.Titps = Buffer.from(Body).toString();
                            break;
                    }
                }
                return Ret;
            }
        }
        return null;
    };
    Resolver.PushForceOfflineParser = function (Pack) {
    };
    Resolver.LoginVerifyCodeParser = function (Pack, PublicKey, ShareKey, ClientPrivateKey) {
        var TeaClass = new Tea_1["default"]();
        var Result = TeaClass.Decrypt(Pack, ShareKey);
        if (Result) {
            var PublicKeyLength = Result.splice(0, 2)[1];
            var ServerPublicKey = Result.splice(0, PublicKeyLength);
            var ExShareKey = Ecdh_1["default"].ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey);
            if (ExShareKey) {
                var Data = TeaClass.Decrypt(Result, ExShareKey);
                if (Data) {
                    /* return {
                         Notice: 2,
                         NoticeData: Buffer.from(Data)
                     }*/
                }
            }
        }
        return null;
    };
    Resolver.LoginPackageParser = function (Pack, PublicKey, ShareKey, ClientPrivateKey, TGKey) {
        var PackBuff = new Buff_1["default"]();
        PackBuff.SetBuffer(Pack);
        PackBuff.OffsetAdd(13);
        var Flag = PackBuff.ReadByte();
        PackBuff.OffsetAdd(2);
        var PackBody = PackBuff.GetBufferOffset().toJSON().data;
        PackBody.pop();
        switch (Flag) {
            // 正常
            case 0:
                var Ret0 = Resolver.LoginSuccessParser(PackBody, PublicKey, ShareKey, ClientPrivateKey, TGKey);
                if (Ret0) {
                    return {
                        Notice: 0 /* success */,
                        NoticeData: Ret0
                    };
                }
                return null;
            //账号密码错误
            case 1:
                return {
                    Notice: 1 /* fail */,
                    NoticeData: null
                };
                break;
            // 验证码
            case 2:
                return {
                    NoticeData: null,
                    Notice: 2 /* verifycode */
                };
                break;
            //不安全登录 需要验证
            case 160:
                return {
                    NoticeData: null,
                    Notice: 4 /* deviceverify */
                };
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
                    Notice: 4 /* deviceverify */
                };
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
        return null;
    };
    return Resolver;
}());
module.exports = Resolver;
