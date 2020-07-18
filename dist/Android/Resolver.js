"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
require("../Expansion");
const Tea_1 = __importDefault(require("../Tea"));
const Ecdh_1 = __importDefault(require("./Ecdh"));
require("./Struct");
const Tlv_1 = __importDefault(require("./Tlv"));
const Buff_1 = __importDefault(require("./Buff"));
const ZeroKey = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
class Resolver {
    static HeartBeatParser(Pack) {
        let PackBuff = new Buff_1.default();
        PackBuff.SetBuffer(Pack);
        let PackLength = PackBuff.ReadInt();
        let Type = PackBuff.ReadInt();
        PackBuff.OffsetAdd(4);
        let QQLen = PackBuff.ReadShort() - 4;
        let QQ = PackBuff.ReadBytes(QQLen);
        let CmdPackLen = PackBuff.ReadInt();
        let Seq = PackBuff.ReadInt();
        PackBuff.OffsetAdd(12);
        let CmdStr = PackBuff.ReadBytes(15).toString();
        if (CmdStr === "Heartbeat.Alive") {
            return Seq;
        }
        else {
            return false;
        }
    }
    static Parser(Pack, Key = ZeroKey) {
        let PackBuff = new Buff_1.default();
        PackBuff.SetBuffer(Pack);
        let PackLength = PackBuff.ReadInt();
        let Type = PackBuff.ReadInt();
        let Encryption = PackBuff.ReadByte();
        PackBuff.OffsetAdd(4);
        let QQBuffLen = PackBuff.ReadByte() - 4;
        let QQ = PackBuff.ReadBytes(QQBuffLen).toString();
        let Body = PackBuff.GetBufferOffset();
        let BoydArray = Body.toJSON().data;
        let TeaClass = new Tea_1.default();
        let Result;
        Result = TeaClass.Decrypt(BoydArray, Key);
        if (!Result) {
            Result = TeaClass.Decrypt(BoydArray, ZeroKey);
            if (Result) {
            }
            else {
                return null;
            }
        }
        let CmdPackBuff = new Buff_1.default();
        CmdPackBuff.SetBuffer(Buffer.from(Result));
        let Headlen = CmdPackBuff.ReadInt();
        let Seq = CmdPackBuff.ReadInt();
        CmdPackBuff.OffsetAdd(8);
        let CmdLen = CmdPackBuff.ReadInt() - 4;
        let CmdStr = CmdPackBuff.ReadBytes(CmdLen).toString();
        CmdPackBuff.OffsetAdd(12);
        let CmdPackBodyLen = CmdPackBuff.ReadInt();
        let CmdPackBody = CmdPackBuff.GetBufferOffset();
        return { Body: CmdPackBody, Cmd: CmdStr, Encryption: Encryption, QQ, Type: Type };
    }
    static LoginSuccessParser(Pack, PublicKey, ShareKey, ClientPrivateKey, TGKey) {
        let TeaClass = new Tea_1.default();
        let Result = TeaClass.Decrypt(Pack, ShareKey);
        if (Result) {
            let PublicKeyLength = Result.splice(0, 2)[1];
            let ServerPublicKey = Result.splice(0, PublicKeyLength);
            let ExShareKey = Ecdh_1.default.ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey);
            if (ExShareKey) {
                let Result2 = TeaClass.Decrypt(Result, ExShareKey);
                if (Result2) {
                    Result2.splice(0, 5);
                    Result2.splice(0, 2);
                    let DataLength = Result2.splice(0, 2).HexNumberToNumber();
                    let Data = TeaClass.Decrypt(Result2.slice(0, DataLength), TGKey);
                    if (!Data) {
                        return null;
                    }
                    Data.splice(0, 2);
                    let LoginSuccess = {};
                    LoginSuccess.ExShareKey = ExShareKey;
                    LoginSuccess.SereverPublicKey = ServerPublicKey;
                    LoginSuccess.TlvData = [];
                    while (Data.length > 0) {
                        let Tag = Data.splice(0, 2).HexNumberToString().join("").toLocaleUpperCase();
                        let Length = Data.splice(0, 2).HexNumberToNumber();
                        let Body = Data.splice(0, Length);
                        switch (Tag) {
                            case "0550":
                            case "0138":
                            case "011F":
                                continue;
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
                                LoginSuccess.WebCookies = Tlv_1.default.Tag0512Parser(Body);
                                break;
                            case "011A":
                                LoginSuccess.UserInfo = Tlv_1.default.Tag011AParser(Body);
                                break;
                            case "0130":
                                let Tlv0130 = Tlv_1.default.Tag0130Parser(Body);
                                break;
                            case "0528":
                                let Unkonw = Buffer.from(Body).toString();
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
                                LoginSuccess.Key010A = Body;
                                break;
                            case "0143":
                                LoginSuccess.Key0143 = Body;
                                break;
                            case "0114":
                                LoginSuccess.StSig = Body;
                                break;
                            case "0133":
                                LoginSuccess.WtSessionTicket = Body;
                                break;
                            case "0134":
                                LoginSuccess.WtSessionTicketKey = Body;
                                break;
                            default:
                                LoginSuccess.TlvData.push({ Tag, Length, Body });
                                break;
                        }
                    }
                    let CurrentTime = parseInt(String(new Date().getTime() / 1000));
                    let ExpireTime = CurrentTime + 2160000;
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
    }
    static FriendMessageParser() {
    }
    static GroupMessageParser() {
    }
    static LoginPhoneVerifyParser(Pack, PublicKey, ShareKey, ClientPrivateKey) {
        let TeaClass = new Tea_1.default();
        let Result = TeaClass.Decrypt(Pack, ShareKey);
        if (Result) {
            let PublicKeyLength = Result.splice(0, 2)[1];
            let ServerPublicKey = Result.splice(0, PublicKeyLength);
            let ExShareKey = Ecdh_1.default.ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey);
            if (ExShareKey) {
                let Data = TeaClass.Decrypt(Result, ExShareKey);
                if (!Data) {
                    return null;
                }
                Data.splice(0, 4);
                let Flag = Data.splice(0, 1)[0];
                let Ret = {};
                Ret.ExShareKey = ExShareKey;
                while (Data.length) {
                    let Tag = Data.splice(0, 2).HexNumberToString().join("").toLocaleUpperCase();
                    let Length = Data.splice(0, 2).HexNumberToNumber();
                    let Body = Data.splice(0, Length);
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
    }
    static LoginDeviceVerifyParser(Pack, PublicKey, ShareKey, ClientPrivateKey, TGKey) {
        let TeaClass = new Tea_1.default();
        let Result = TeaClass.Decrypt(Pack, ShareKey);
        if (Result) {
            let PublicKeyLength = Result.splice(0, 2)[1];
            let ServerPublicKey = Result.splice(0, PublicKeyLength);
            let ExShareKey = Ecdh_1.default.ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey);
            if (ExShareKey) {
                let Data = TeaClass.Decrypt(Result, ExShareKey);
                if (!Data) {
                    return null;
                }
                Data.splice(0, 5);
                let Ret = {};
                Ret.ExShareKey = ExShareKey;
                while (Data.length) {
                    let Tag = Data.splice(0, 2).HexNumberToString().join("").toLocaleUpperCase();
                    let Length = Data.splice(0, 2).HexNumberToNumber();
                    let Body = Data.splice(0, Length);
                    switch (Tag) {
                        case "0104":
                            Ret.VerifyKey.Key0104 = Buffer.from(Body).toString();
                            break;
                        case "0174":
                            Ret.Key0174 = Buffer.from(Body).toString();
                            break;
                        case "0178":
                            Body.splice(0, 3);
                            let Len = Body.splice(0, 1)[0];
                            Ret.Phone = Buffer.from(Body.splice(0, Len)).toString();
                            break;
                        case "0179":
                            break;
                        case "017D":
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
    }
    static PushForceOfflineParser(Pack) {
    }
    static LoginVerifyCodeParser(Pack, PublicKey, ShareKey, ClientPrivateKey) {
        let TeaClass = new Tea_1.default();
        let Result = TeaClass.Decrypt(Pack, ShareKey);
        if (Result) {
            let PublicKeyLength = Result.splice(0, 2)[1];
            let ServerPublicKey = Result.splice(0, PublicKeyLength);
            let ExShareKey = Ecdh_1.default.ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey);
            if (ExShareKey) {
                let Data = TeaClass.Decrypt(Result, ExShareKey);
                if (Data) {
                }
            }
        }
        return null;
    }
    static LoginPackageParser(Pack, PublicKey, ShareKey, ClientPrivateKey, TGKey) {
        let PackBuff = new Buff_1.default();
        PackBuff.SetBuffer(Pack);
        PackBuff.OffsetAdd(13);
        let Flag = PackBuff.ReadByte();
        PackBuff.OffsetAdd(2);
        let PackBody = PackBuff.GetBufferOffset().toJSON().data;
        PackBody.pop();
        switch (Flag) {
            case 0:
                let Ret0 = Resolver.LoginSuccessParser(PackBody, PublicKey, ShareKey, ClientPrivateKey, TGKey);
                if (Ret0) {
                    return {
                        Notice: 0,
                        NoticeData: Ret0
                    };
                }
                return null;
            case 1:
                return {
                    Notice: 1,
                    NoticeData: null
                };
                break;
            case 2:
                return {
                    NoticeData: null,
                    Notice: 2
                };
                break;
            case 160:
                return {
                    NoticeData: null,
                    Notice: 4
                };
                break;
            case 204:
                return {
                    NoticeData: null,
                    Notice: 4
                };
                break;
            default:
                break;
        }
        return null;
    }
}
module.exports = Resolver;
