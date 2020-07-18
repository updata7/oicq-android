"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
require("../Expansion");
const Utlis_1 = require("../Utlis");
const Tea_1 = __importDefault(require("../Tea"));
require("./Struct");
const DeviceInfo_1 = require("./Proto/Build/DeviceInfo");
class Tlv {
    static Tag0001(QQ, Time) {
        let Pack = new Utlis_1.Package();
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([0, 1]);
        Pack.SetHex([0, 1]);
        Pack.SetString(Utlis_1.Utlis.GenerateHexString(4));
        Pack.SetHex(QQ);
        Pack.SetHex(Time);
        Pack.SetHex([192, 168, 1, 125]);
        Pack.SetHex([0, 0]);
        TlvPack.SetValue(Pack.Get());
        return TlvPack.Generate();
    }
    static Tag0018(QQ, Appid) {
        let Pack = new Utlis_1.Package();
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([0, 24]);
        Pack.SetHex([0, 1]);
        Pack.SetHex([0, 0, 6, 0]);
        Pack.SetHex(Appid);
        Pack.SetHex([0, 0, 0, 0]);
        Pack.SetHex(QQ);
        Pack.SetHex([0, 0, 0, 0]);
        TlvPack.SetValue(Pack.Get());
        return TlvPack.Generate();
    }
    static Tag0106(QQ, QQBuff, PassWord, Time, TgKey, Guid, Appid, SubAppid) {
        let Pack = new Utlis_1.Package();
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 6]);
        Pack.SetHex([0, 4]);
        Pack.SetString(Utlis_1.Utlis.GenerateHexString(4));
        Pack.SetHex([0, 0, 0, 7]);
        Pack.SetHex(Appid);
        Pack.SetHex([0, 0, 0, 0, 0, 0, 0, 0]);
        Pack.SetHex(QQ);
        Pack.SetHex(Time);
        Pack.SetHex([0, 0, 0, 0, 1]);
        Pack.SetHex(Utlis_1.Utlis.MD5HexArray(PassWord));
        Pack.SetHex(TgKey);
        Pack.SetHex([0, 0, 0, 0]);
        Pack.SetHex([1]);
        Pack.SetHex(Utlis_1.Utlis.MD5HexArray(Guid));
        Pack.SetHex(SubAppid);
        Pack.SetHex([0, 0, 0, 1]);
        let QQLength = QQBuff.length;
        Pack.SetHex([0, QQLength]);
        Pack.SetHex(QQBuff);
        Pack.SetHex([0, 0]);
        let PassWordMd5Hex = Utlis_1.Utlis.MD5HexArray(PassWord);
        PassWordMd5Hex = PassWordMd5Hex.concat([0, 0, 0, 0]).concat(QQ);
        let EncryptKey = Utlis_1.Utlis.MD5HexArray(PassWordMd5Hex);
        let TeaClass = new Tea_1.default();
        TlvPack.SetValue(TeaClass.Encrypt(Pack.Get(), EncryptKey));
        return TlvPack.Generate();
    }
    static Tag0116(MiscBitMaP, SubSigMap) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 22]);
        TlvPack.SetValue([
            0,
            ...MiscBitMaP,
            ...SubSigMap,
            1,
            95, 94, 16, 226
        ]);
        return TlvPack.Generate();
    }
    static Tag0100(Appid, SubAppid) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 0]);
        TlvPack.SetValue([
            0, 1,
            0, 0, 0, 7,
            ...Appid,
            ...SubAppid,
            0, 0, 0, 0,
            2, 20, 16, 224
        ]);
        return TlvPack.Generate();
    }
    static Tag0107() {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 7]);
        TlvPack.SetValue([0, 0, 0, 0, 0, 1]);
        return TlvPack.Generate();
    }
    static Tag0142() {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 66]);
        TlvPack.SetValue([
            0, 0,
            0, 20,
            99, 111, 109, 46, 116, 101, 110, 99, 101, 110, 116, 46, 109, 111, 98, 105, 108, 101, 113, 113
        ]);
        return TlvPack.Generate();
    }
    static Tag0109(AndroidID) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 9]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(AndroidID));
        return TlvPack.Generate();
    }
    static Tag052D(Guid, AndroidId, Fingerprint, InnerVersion, Incremental, CodeName, ProcVersion, Bootloader, BaseBand) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 45]);
        let DeviceParams = DeviceInfo_1.DeviceInfo.Struct.encode({
            AndroidId: new Uint8Array(AndroidId),
            BootId: new Uint8Array(Guid),
            Fingerprint: new Uint8Array(Fingerprint),
            InnerVersion: new Uint8Array(InnerVersion),
            Codename: new Uint8Array(CodeName),
            Incremental: new Uint8Array(Incremental),
            BaseBand: new Uint8Array(BaseBand),
            Bootloader: new Uint8Array(Bootloader),
            ProcVersion: new Uint8Array(ProcVersion)
        });
        TlvPack.SetValue(Array.from(DeviceParams.finish()));
        return TlvPack.Generate();
    }
    static Tag0124(AndroidVersion) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 36]);
        TlvPack.SetValue([
            0, 7,
            97, 110, 100, 114, 111, 105, 100,
            0, AndroidVersion.length,
            ...AndroidVersion,
            0, 2,
            0, 0,
            0, 0, 0, 4,
            119, 105, 102, 105
        ]);
        return TlvPack.Generate();
    }
    static Tag016E(Model) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 110]);
        TlvPack.SetValue(Model);
        return TlvPack.Generate();
    }
    static Tag0128(GUID, Brand, Model) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 40]);
        let Pack = new Utlis_1.Package();
        Pack.SetHex([0, 0, 1, 1, 0, 17, 0, 0, 0]);
        Pack.SetHex([0, Model.length]);
        Pack.SetHex(Model);
        Pack.SetHex(([0, 16]));
        Pack.SetHex(GUID);
        Pack.SetHex([0, Brand.length]);
        Pack.SetHex(Brand);
        TlvPack.SetValue(Pack.Get());
        return TlvPack.Generate();
    }
    static Tag0144(TGKey, GUID, AndroidID, Brand, Model, AndroidVersion, Fingerprint, InnerVersion, Incremental, CodeName, ProcVersion, Bootloader, BaseBand) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 68]);
        let Pack = new Utlis_1.Package();
        let TlvPack0109 = Tlv.Tag0109(AndroidID);
        let TlvPack052D = Tlv.Tag052D(GUID, AndroidID, Fingerprint, InnerVersion, Incremental, CodeName, ProcVersion, Bootloader, BaseBand);
        let TlvPack0124 = Tlv.Tag0124(AndroidVersion);
        let TlvPack0128 = Tlv.Tag0128(GUID, Brand, Model);
        let TlvPack016E = Tlv.Tag016E(Model);
        let TeaClass = new Tea_1.default();
        Pack.SetHex([0, 5]);
        Pack.SetHex(TlvPack0109);
        Pack.SetHex(TlvPack052D);
        Pack.SetHex(TlvPack0124);
        Pack.SetHex(TlvPack0128);
        Pack.SetHex(TlvPack016E);
        let EncryptionData = TeaClass.Encrypt(Pack.Get(), TGKey);
        TlvPack.SetValue(EncryptionData);
        return TlvPack.Generate();
    }
    static Tag0145(GUID) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 69]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(GUID));
        return TlvPack.Generate();
    }
    static Tag0147(AppClientVersion, AppSig) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 71]);
        TlvPack.SetValue([
            0, 0, 0, 16,
            0, 5,
            ...AppClientVersion,
            0, 16,
            ...AppSig
        ]);
        return TlvPack.Generate();
    }
    static Tag0154(SSOVersion = [0, 0, 39, 16]) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 84]);
        TlvPack.SetValue(SSOVersion);
        return TlvPack.Generate();
    }
    static Tag0141() {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 65]);
        TlvPack.SetValue([0, 1,
            0, 0, 0, 2,
            0, 4,
            119, 105, 102, 105
        ]);
        return TlvPack.Generate();
    }
    static Tag0008() {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([0, 8]);
        TlvPack.SetValue([0, 0,
            0, 0, 8, 4,
            0, 0]);
        return TlvPack.Generate();
    }
    static Tag0551() {
        let TlvPack = new Utlis_1.TlvPackage();
        let Pack = new Utlis_1.Package();
        TlvPack.SetTag([5, 17]);
        let Domain = [
            "tenpay.com",
            "openmobile.qq.com",
            "docs.qq.com",
            "connect.qq.com",
            "qzone.qq.com",
            "vip.qq.com",
            "gamecenter.qq.com",
            "qun.qq.com",
            "game.qq.com",
            "qqweb.qq.com",
            "ti.qq.com",
            "office.qq.com",
            "mail.qq.com",
            "mma.qq.com"
        ];
        Pack.SetHex([0, Domain.length]);
        Domain.map((value, index) => {
            Pack.SetHex([1, 0]);
            let DomainBuff = Buffer.from(value).toJSON().data;
            Pack.SetHex([DomainBuff.length]);
            Pack.SetHex(DomainBuff);
        });
        TlvPack.SetValue(Pack.Get());
        return TlvPack.Generate();
    }
    static Tag0187(Mac) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 135]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(Mac));
        return TlvPack.Generate();
    }
    static Tag0188(AndroidID) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 136]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(AndroidID));
        return TlvPack.Generate();
    }
    static Tag0194(IMSI) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 148]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(IMSI));
        return TlvPack.Generate();
    }
    static Tag0191() {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 145]);
        TlvPack.SetValue([1]);
        return TlvPack.Generate();
    }
    static Tag0202(WifiSSID, WifiName) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([2, 2]);
        let Pack = new Utlis_1.Package();
        let SSIDMd5 = Utlis_1.Utlis.MD5HexArray(WifiSSID);
        Pack.SetHex([0, SSIDMd5.length]);
        Pack.SetHex(SSIDMd5);
        Pack.SetHex([0, WifiName.length]);
        Pack.SetHex(WifiName);
        TlvPack.SetValue(Pack.Get());
        return TlvPack.Generate();
    }
    static Tag0177() {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 119]);
        TlvPack.SetValue([
            1,
            94, 83, 242, 2,
            0, 10,
            54, 46, 48, 46, 48, 46, 50, 52, 50, 51
        ]);
        return TlvPack.Generate();
    }
    static Tag0516() {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 22]);
        TlvPack.SetValue([
            0, 0, 0, 0
        ]);
        return TlvPack.Generate();
    }
    static Tag0521() {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 33]);
        TlvPack.SetValue([
            0, 0, 0, 0,
            0, 0
        ]);
        return TlvPack.Generate();
    }
    static Tag0525() {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 37]);
        TlvPack.SetValue([
            0, 1, 5, 54, 0, 2, 1, 0
        ]);
        return TlvPack.Generate();
    }
    static Tag0544() {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 68]);
        TlvPack.SetValue([
            0, 0, 7, 217,
            0, 0, 0, 0,
            0, 34,
            0, 32,
            48, 242, 54, 141, 177, 200, 157, 109, 238, 245, 47, 195, 114, 111, 81, 220, 224, 109, 31, 18, 218, 134, 64, 3, 104, 215, 130, 58, 149, 117, 52, 225,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
            113, 59, 139, 68, 58, 116, 50, 103, 113, 119, 119, 50, 113, 119, 120,
            0, 20,
            99, 111, 109, 46, 116, 101, 110, 99, 101, 110, 116, 46, 109, 111, 98, 105, 108, 101, 113, 113,
            65, 54, 66, 55, 52, 53, 66, 70, 50, 52, 65, 50, 67, 50, 55, 55, 53, 50, 55, 55, 49, 54, 70, 54, 70, 51, 54, 69, 66, 54, 56, 68,
            4, 250, 150, 190,
            0, 0, 0, 0
        ]);
        return TlvPack.Generate();
    }
    static Tag0545(IMEI) {
        let TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 69]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(IMEI));
        return TlvPack.Generate();
    }
    static Tag011AParser(Data) {
        let Face = Data.splice(0, 2);
        let Age = Data.splice(0, 1);
        let Gender = Data.splice(0, 1)[0];
        let NickLen = Data.splice(0, 1)[0];
        let Nick = Buffer.from(Data).toString();
        return {
            Face: Face.HexNumberToNumber(),
            Age: Age[0],
            Gender,
            Nick
        };
    }
    static Tag0537Parser(Data) {
        Data.splice(0, 6);
        let QQ = Data.splice(0, 4);
        Data.splice(0, 1);
        let CurrentIp = Data.splice(0, 4).join("");
        let CurrentTime = Data.splice(0, 4).HexNumberToNumber();
        let Version = Data.HexNumberToNumber();
        return {
            CurrentIp,
            CurrentTime,
            Version
        };
    }
    static Tag0512Parser(Data) {
        let ForNum = Data.splice(0, 2)[1];
        let Ret = Object.create(null);
        for (let i = 0; i < ForNum; i++) {
            let DomainLength = Data.splice(0, 2)[1];
            let Domain = Buffer.from(Data.splice(0, DomainLength)).toString();
            let CookieLength = Data.splice(0, 2)[1];
            let Cookie = Buffer.from(Data.splice(0, CookieLength)).toString();
            Data.splice(0, 2);
            Ret[Domain] = Cookie;
        }
        return Ret;
    }
    static Tag0130Parser(Data) {
        Data.splice(0, 2);
        let ServerTime = Data.splice(0, 4).HexNumberToNumber();
        let Ip = Data.splice(0, 4).join(".");
        return {
            ServerTime, Ip
        };
    }
    static Tag0522Parser(Data) {
        Data.splice(0, 4);
        let QQ = Data.splice(0, 4).HexNumberToNumber();
        let CurrentIp = Data.splice(0, 4);
        let Time = Data.splice(0, 4);
        Data.splice(0, 2);
        let Port = Data;
    }
    static Tag0550Parser(Data) {
    }
    static Tag0138(Data) {
        Data.splice(0, 4);
        Data.splice(0, 4);
        Data.splice(0, 4);
    }
}
module.exports = Tlv;
