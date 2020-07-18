"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
require("../Expansion");
var Utlis_1 = require("../Utlis");
var Tea_1 = require("../Tea");
require("./Struct");
var DeviceInfo_1 = require("./Proto/Build/DeviceInfo");
var Tlv = /** @class */ (function () {
    function Tlv() {
    }
    Tlv.Tag0001 = function (QQ, Time) {
        var Pack = new Utlis_1.Package();
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([0, 1]);
        Pack.SetHex([0, 1]);
        Pack.SetString(Utlis_1.Utlis.GenerateHexString(4));
        Pack.SetHex(QQ);
        Pack.SetHex(Time);
        //ip 192.168.1.125
        Pack.SetHex([192, 168, 1, 125]);
        Pack.SetHex([0, 0]);
        TlvPack.SetValue(Pack.Get());
        return TlvPack.Generate();
    };
    Tlv.Tag0018 = function (QQ, Appid) {
        var Pack = new Utlis_1.Package();
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([0, 24]);
        Pack.SetHex([0, 1]); //_ping_version
        Pack.SetHex([0, 0, 6, 0]);
        Pack.SetHex(Appid);
        Pack.SetHex([0, 0, 0, 0]);
        Pack.SetHex(QQ);
        Pack.SetHex([0, 0, 0, 0]);
        TlvPack.SetValue(Pack.Get());
        return TlvPack.Generate();
    };
    Tlv.Tag0106 = function (QQ, QQBuff, PassWord, Time, TgKey, Guid, Appid, SubAppid) {
        var Pack = new Utlis_1.Package();
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 6]);
        Pack.SetHex([0, 4]); //TGTGTVer
        Pack.SetString(Utlis_1.Utlis.GenerateHexString(4));
        Pack.SetHex([0, 0, 0, 7]); //SSOVer
        Pack.SetHex(Appid);
        Pack.SetHex([0, 0, 0, 0, 0, 0, 0, 0]);
        Pack.SetHex(QQ);
        Pack.SetHex(Time);
        Pack.SetHex([0, 0, 0, 0, 1]);
        Pack.SetHex(Utlis_1.Utlis.MD5HexArray(PassWord));
        Pack.SetHex(TgKey);
        Pack.SetHex([0, 0, 0, 0]);
        //isGuidAvailable
        Pack.SetHex([1]);
        Pack.SetHex(Utlis_1.Utlis.MD5HexArray(Guid));
        Pack.SetHex(SubAppid);
        //login type 1密码登录 3短信验证
        Pack.SetHex([0, 0, 0, 1]);
        var QQLength = QQBuff.length;
        Pack.SetHex([0, QQLength]);
        Pack.SetHex(QQBuff);
        Pack.SetHex([0, 0]);
        var PassWordMd5Hex = Utlis_1.Utlis.MD5HexArray(PassWord);
        PassWordMd5Hex = PassWordMd5Hex.concat([0, 0, 0, 0]).concat(QQ);
        var EncryptKey = Utlis_1.Utlis.MD5HexArray(PassWordMd5Hex);
        var TeaClass = new Tea_1["default"]();
        TlvPack.SetValue(TeaClass.Encrypt(Pack.Get(), EncryptKey));
        return TlvPack.Generate();
    };
    Tlv.Tag0116 = function (MiscBitMaP, SubSigMap) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 22]);
        TlvPack.SetValue(__spreadArrays([
            0
        ], MiscBitMaP, SubSigMap, [
            1,
            95, 94, 16, 226
        ]));
        return TlvPack.Generate();
    };
    Tlv.Tag0100 = function (Appid, SubAppid) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 0]);
        TlvPack.SetValue(__spreadArrays([
            0, 1,
            0, 0, 0, 7
        ], Appid, SubAppid, [
            0, 0, 0, 0,
            //sigMap 34869472
            2, 20, 16, 224
        ]));
        return TlvPack.Generate();
    };
    Tlv.Tag0107 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 7]);
        TlvPack.SetValue([0, 0, 0, 0, 0, 1]);
        return TlvPack.Generate();
    };
    Tlv.Tag0142 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 66]);
        TlvPack.SetValue([
            0, 0,
            0, 20,
            //com.tencent.mobileqq
            99, 111, 109, 46, 116, 101, 110, 99, 101, 110, 116, 46, 109, 111, 98, 105, 108, 101, 113, 113
        ]);
        return TlvPack.Generate();
    };
    Tlv.Tag0109 = function (AndroidID) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 9]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(AndroidID));
        return TlvPack.Generate();
    };
    Tlv.Tag052D = function (Guid, AndroidId, Fingerprint, InnerVersion, Incremental, CodeName, ProcVersion, Bootloader, BaseBand) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 45]);
        var DeviceParams = DeviceInfo_1.DeviceInfo.Struct.encode({
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
    };
    Tlv.Tag0124 = function (AndroidVersion) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 36]);
        TlvPack.SetValue(__spreadArrays([
            0, 7,
            97, 110, 100, 114, 111, 105, 100,
            0, AndroidVersion.length
        ], AndroidVersion, [
            0, 2,
            0, 0,
            0, 0, 0, 4,
            119, 105, 102, 105 //networkname : wifi
        ]));
        return TlvPack.Generate();
    };
    Tlv.Tag016E = function (Model) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 110]);
        TlvPack.SetValue(Model);
        return TlvPack.Generate();
    };
    Tlv.Tag0128 = function (GUID, Brand, Model) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 40]);
        var Pack = new Utlis_1.Package();
        Pack.SetHex([0, 0, 1, 1, 0, 17, 0, 0, 0]);
        Pack.SetHex([0, Model.length]);
        Pack.SetHex(Model);
        Pack.SetHex(([0, 16]));
        Pack.SetHex(GUID);
        Pack.SetHex([0, Brand.length]);
        Pack.SetHex(Brand);
        TlvPack.SetValue(Pack.Get());
        return TlvPack.Generate();
    };
    Tlv.Tag0144 = function (TGKey, GUID, AndroidID, Brand, Model, AndroidVersion, Fingerprint, InnerVersion, Incremental, CodeName, ProcVersion, Bootloader, BaseBand) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 68]);
        var Pack = new Utlis_1.Package();
        var TlvPack0109 = Tlv.Tag0109(AndroidID);
        var TlvPack052D = Tlv.Tag052D(GUID, AndroidID, Fingerprint, InnerVersion, Incremental, CodeName, ProcVersion, Bootloader, BaseBand);
        var TlvPack0124 = Tlv.Tag0124(AndroidVersion);
        var TlvPack0128 = Tlv.Tag0128(GUID, Brand, Model);
        var TlvPack016E = Tlv.Tag016E(Model);
        var TeaClass = new Tea_1["default"]();
        Pack.SetHex([0, 5]);
        Pack.SetHex(TlvPack0109);
        Pack.SetHex(TlvPack052D);
        Pack.SetHex(TlvPack0124);
        Pack.SetHex(TlvPack0128);
        Pack.SetHex(TlvPack016E);
        var EncryptionData = TeaClass.Encrypt(Pack.Get(), TGKey);
        TlvPack.SetValue(EncryptionData);
        return TlvPack.Generate();
    };
    Tlv.Tag0145 = function (GUID) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 69]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(GUID));
        return TlvPack.Generate();
    };
    Tlv.Tag0147 = function (AppClientVersion, AppSig) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 71]);
        TlvPack.SetValue(__spreadArrays([
            0, 0, 0, 16,
            0, 5
        ], AppClientVersion, [
            0, 16
        ], AppSig //apksign
        ));
        return TlvPack.Generate();
    };
    Tlv.Tag0154 = function (SSOVersion) {
        if (SSOVersion === void 0) { SSOVersion = [0, 0, 39, 16]; }
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 84]);
        TlvPack.SetValue(SSOVersion);
        return TlvPack.Generate();
    };
    Tlv.Tag0141 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 65]);
        TlvPack.SetValue([0, 1,
            0, 0, 0, 2,
            0, 4,
            119, 105, 102, 105 //wifi
        ]);
        return TlvPack.Generate();
    };
    Tlv.Tag0008 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([0, 8]);
        TlvPack.SetValue([0, 0,
            0, 0, 8, 4,
            0, 0]);
        return TlvPack.Generate();
    };
    Tlv.Tag0551 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        var Pack = new Utlis_1.Package();
        TlvPack.SetTag([5, 17]);
        var Domain = [
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
        Domain.map(function (value, index) {
            Pack.SetHex([1, 0]); //分隔
            var DomainBuff = Buffer.from(value).toJSON().data;
            Pack.SetHex([DomainBuff.length]); //domain length
            Pack.SetHex(DomainBuff);
        });
        TlvPack.SetValue(Pack.Get());
        return TlvPack.Generate();
    };
    Tlv.Tag0187 = function (Mac) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 135]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(Mac));
        return TlvPack.Generate();
    };
    Tlv.Tag0188 = function (AndroidID) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 136]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(AndroidID));
        return TlvPack.Generate();
    };
    Tlv.Tag0194 = function (IMSI) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 148]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(IMSI));
        return TlvPack.Generate();
    };
    Tlv.Tag0191 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 145]);
        TlvPack.SetValue([1]);
        return TlvPack.Generate();
    };
    Tlv.Tag0202 = function (WifiSSID, WifiName) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([2, 2]);
        var Pack = new Utlis_1.Package();
        var SSIDMd5 = Utlis_1.Utlis.MD5HexArray(WifiSSID);
        Pack.SetHex([0, SSIDMd5.length]);
        Pack.SetHex(SSIDMd5);
        Pack.SetHex([0, WifiName.length]);
        Pack.SetHex(WifiName);
        TlvPack.SetValue(Pack.Get());
        return TlvPack.Generate();
    };
    Tlv.Tag0177 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([1, 119]);
        TlvPack.SetValue([
            1,
            94, 83, 242, 2,
            0, 10,
            //??version 6.0.0.2423 bver
            54, 46, 48, 46, 48, 46, 50, 52, 50, 51
        ]);
        return TlvPack.Generate();
    };
    Tlv.Tag0516 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 22]);
        TlvPack.SetValue([
            0, 0, 0, 0 //sourceType
        ]);
        return TlvPack.Generate();
    };
    Tlv.Tag0521 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 33]);
        TlvPack.SetValue([
            0, 0, 0, 0,
            0, 0
        ]);
        return TlvPack.Generate();
    };
    Tlv.Tag0525 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 37]);
        TlvPack.SetValue([
            0, 1, 5, 54, 0, 2, 1, 0
        ]);
        return TlvPack.Generate();
    };
    Tlv.Tag0544 = function () {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 68]);
        TlvPack.SetValue([
            0, 0, 7, 217,
            0, 0, 0, 0,
            0, 34,
            0, 32,
            48, 242, 54, 141, 177, 200, 157, 109, 238, 245, 47, 195, 114, 111, 81, 220, 224, 109, 31, 18, 218, 134, 64, 3, 104, 215, 130, 58, 149, 117, 52, 225,
            //
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
            113, 59, 139, 68, 58, 116, 50, 103, 113, 119, 119, 50, 113, 119, 120,
            0, 20,
            //com.tencent.mobileqq
            99, 111, 109, 46, 116, 101, 110, 99, 101, 110, 116, 46, 109, 111, 98, 105, 108, 101, 113, 113,
            65, 54, 66, 55, 52, 53, 66, 70, 50, 52, 65, 50, 67, 50, 55, 55, 53, 50, 55, 55, 49, 54, 70, 54, 70, 51, 54, 69, 66, 54, 56, 68,
            4, 250, 150, 190,
            0, 0, 0, 0
        ]);
        return TlvPack.Generate();
    };
    Tlv.Tag0545 = function (IMEI) {
        var TlvPack = new Utlis_1.TlvPackage();
        TlvPack.SetTag([5, 69]);
        TlvPack.SetValue(Utlis_1.Utlis.MD5HexArray(IMEI));
        return TlvPack.Generate();
    };
    Tlv.Tag011AParser = function (Data) {
        var Face = Data.splice(0, 2);
        var Age = Data.splice(0, 1);
        var Gender = Data.splice(0, 1)[0];
        var NickLen = Data.splice(0, 1)[0];
        var Nick = Buffer.from(Data).toString();
        return {
            Face: Face.HexNumberToNumber(),
            Age: Age[0],
            Gender: Gender,
            Nick: Nick
        };
    };
    Tlv.Tag0537Parser = function (Data) {
        Data.splice(0, 6); //unkonw
        var QQ = Data.splice(0, 4);
        Data.splice(0, 1); //split ip length
        var CurrentIp = Data.splice(0, 4).join("");
        var CurrentTime = Data.splice(0, 4).HexNumberToNumber();
        var Version = Data.HexNumberToNumber();
        return {
            CurrentIp: CurrentIp,
            CurrentTime: CurrentTime,
            Version: Version
        };
    };
    Tlv.Tag0512Parser = function (Data) {
        var ForNum = Data.splice(0, 2)[1];
        var Ret = Object.create(null);
        for (var i = 0; i < ForNum; i++) {
            var DomainLength = Data.splice(0, 2)[1];
            var Domain = Buffer.from(Data.splice(0, DomainLength)).toString();
            var CookieLength = Data.splice(0, 2)[1];
            var Cookie = Buffer.from(Data.splice(0, CookieLength)).toString();
            Data.splice(0, 2); //分割符号
            Ret[Domain] = Cookie;
        }
        return Ret;
    };
    Tlv.Tag0130Parser = function (Data) {
        Data.splice(0, 2); //标志位么?
        var ServerTime = Data.splice(0, 4).HexNumberToNumber();
        var Ip = Data.splice(0, 4).join(".");
        return {
            ServerTime: ServerTime, Ip: Ip
        };
    };
    Tlv.Tag0522Parser = function (Data) {
        Data.splice(0, 4); //???
        var QQ = Data.splice(0, 4).HexNumberToNumber();
        var CurrentIp = Data.splice(0, 4);
        var Time = Data.splice(0, 4);
        Data.splice(0, 2); //端口数据长度
        var Port = Data; //是端口 具体不知道谁的
    };
    //0522 0537基本一样 无视
    Tlv.Tag0550Parser = function (Data) {
        //不知道代表什么
    };
    //cookie有效时间?
    Tlv.Tag0138 = function (Data) {
        //00 00 00 01 01 0a 00 27 8d 00 00 00 00 00
        Data.splice(0, 4);
        Data.splice(0, 4); //tag and length+2
        Data.splice(0, 4); //time =2592000
    };
    return Tlv;
}());
module.exports = Tlv;
