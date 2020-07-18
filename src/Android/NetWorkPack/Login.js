"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Tlv_1 = require("../Tlv");
var Utlis_1 = require("../../Utlis");
var Byte_1 = require("../../Byte");
var Global_1 = require("../Global");
var Tea_1 = require("../../Tea");
require("../Struct");
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.PasswordLogin = function (ProtocolId, DeviceInfo, QQHex, QQBuff, PassWord, TgKey, Seq, ShareKey, PublicKey) {
        var TlvPack = new Utlis_1.Package();
        var Guid = DeviceInfo.Guid, WifiSsid = DeviceInfo.WifiSsid, WifiBssid = DeviceInfo.WifiBssid, Imsi = DeviceInfo.Imsi, AndroidId = DeviceInfo.AndroidId, Imei = DeviceInfo.Imei, Brand = DeviceInfo.Brand, Model = DeviceInfo.Model, Mac = DeviceInfo.Mac, AndroidVersion = DeviceInfo.AndroidVersion, BaseBand = DeviceInfo.BaseBand, ProcVersion = DeviceInfo.ProcVersion, InnerVersion = DeviceInfo.InnerVersion, Incremental = DeviceInfo.Incremental, Fingerprint = DeviceInfo.Fingerprint, Codename = DeviceInfo.Codename, Bootloader = DeviceInfo.Bootloader, Variable = DeviceInfo.Variable;
        var BaseBandHex = BaseBand.ToHexArray();
        var ProcVersionHex = ProcVersion.ToHexArray();
        var InnerVersionHex = InnerVersion.ToHexArray();
        var IncrementalHex = Incremental.ToHexArray();
        var FingerprintHex = Fingerprint.ToHexArray();
        var CodenameHex = Codename.ToHexArray();
        var BootloaderHex = Bootloader.ToHexArray();
        var GuidHex = Utlis_1.Utlis.MD5HexArray(Guid.ToHexArray());
        var WifiSsidHex = WifiSsid.ToHexArray();
        var WifiBssidHex = WifiBssid.ToHexArray();
        var ImeiHex = Imei.ToHexArray();
        var VariableHex = Variable.ToHexArray();
        var ImsiHex = Imsi.ToHexArray();
        var AndroidIdHex = AndroidId.ToHexArray();
        var BrandHex = Brand.ToHexArray();
        var ModelHex = Model.ToHexArray();
        var MacHex = Mac.ToHexArray();
        var AndroidVersionHex = AndroidVersion.ToHexArray();
        var PassWordBuff = PassWord.ToHexArray();
        var NowTime = parseInt(String(new Date().getTime() / 1000));
        var NowTimeHex = Byte_1["default"].DecToHexList(NowTime);
        TlvPack.SetHex([0, 9]);
        TlvPack.SetHex([0, 25]);
        TlvPack.SetHex(Tlv_1["default"].Tag0018(QQHex, Global_1["default"]
            .Appid));
        TlvPack.SetHex(Tlv_1["default"].Tag0001(QQHex, NowTimeHex));
        TlvPack.SetHex(Tlv_1["default"].Tag0106(QQHex, QQBuff, PassWordBuff, NowTimeHex, TgKey, GuidHex, Global_1["default"].Appid, ProtocolId));
        TlvPack.SetHex(Tlv_1["default"].Tag0116(Global_1["default"].MiscBitmap, Global_1["default"].MiscBitmap));
        TlvPack.SetHex(Tlv_1["default"].Tag0100(Global_1["default"].Appid, ProtocolId));
        TlvPack.SetHex(Tlv_1["default"].Tag0107());
        TlvPack.SetHex(Tlv_1["default"].Tag0142());
        TlvPack.SetHex(Tlv_1["default"].Tag0144(TgKey, GuidHex, AndroidIdHex, BrandHex, ModelHex, AndroidVersionHex, FingerprintHex, InnerVersionHex, IncrementalHex, CodenameHex, ProcVersionHex, BootloaderHex, BaseBandHex));
        TlvPack.SetHex(Tlv_1["default"].Tag0145(GuidHex));
        TlvPack.SetHex(Tlv_1["default"].Tag0147(Global_1["default"].AppClientVersion, Global_1["default"].AppSign));
        TlvPack.SetHex(Tlv_1["default"].Tag0154(Seq));
        TlvPack.SetHex(Tlv_1["default"].Tag0141());
        TlvPack.SetHex(Tlv_1["default"].Tag0008());
        TlvPack.SetHex(Tlv_1["default"].Tag0551());
        TlvPack.SetHex(Tlv_1["default"].Tag0187(MacHex));
        TlvPack.SetHex(Tlv_1["default"].Tag0188(AndroidIdHex));
        TlvPack.SetHex(Tlv_1["default"].Tag0194(ImsiHex));
        TlvPack.SetHex(Tlv_1["default"].Tag0191());
        TlvPack.SetHex(Tlv_1["default"].Tag0202(WifiSsidHex, WifiBssidHex));
        TlvPack.SetHex(Tlv_1["default"].Tag0177());
        TlvPack.SetHex(Tlv_1["default"].Tag0516());
        TlvPack.SetHex(Tlv_1["default"].Tag0521());
        TlvPack.SetHex(Tlv_1["default"].Tag0525());
        TlvPack.SetHex(Tlv_1["default"].Tag0544());
        TlvPack.SetHex(Tlv_1["default"].Tag0545(ImeiHex));
        var TeaClass = new Tea_1["default"]();
        var EncrypData = TeaClass.Encrypt(TlvPack.Get(), ShareKey);
        var HeadBody = new Utlis_1.Package();
        var CMD = "wtlogin.login";
        var CMDBuff = CMD.ToHexArray();
        var CMDLength = Byte_1["default"].FillToHexList(CMDBuff.length + 4, 4);
        HeadBody.SetHex(Seq);
        HeadBody.SetHex(ProtocolId);
        HeadBody.SetHex(ProtocolId);
        HeadBody.SetHex([1, 0, 0, 0]);
        HeadBody.SetHex([0, 0, 0, 0]);
        HeadBody.SetHex([0, 0, 1, 0]);
        HeadBody.SetHex([0, 0, 0, 4]);
        HeadBody.SetHex(CMDLength);
        HeadBody.SetHex(CMDBuff);
        HeadBody.SetHex([0, 0, 0, 8]);
        HeadBody.SetString(Utlis_1.Utlis.GenerateHexString(4));
        HeadBody.SetHex([
            0, 0, 0, ImeiHex.length + 4
        ]);
        HeadBody.SetHex(ImeiHex);
        HeadBody.SetHex([0, 0, 0, 4]);
        HeadBody.SetHex([0, VariableHex.length + 2]);
        HeadBody.SetHex(VariableHex);
        HeadBody.SetHex([0, 0, 0, 4]);
        var HeadData = HeadBody.Get();
        var Head = __spreadArrays(Byte_1["default"].FillToHexList(HeadData.length + 4, 4), HeadData);
        var PackBody = new Utlis_1.Package();
        PackBody.SetString("1F 41 08 10 00 01");
        PackBody.SetHex(QQHex);
        PackBody.SetString("03 87 00 00 00 00 02 00 00 00 00 00 00 00 00 01 01");
        PackBody.SetString(Utlis_1.Utlis.GenerateHexString(16));
        PackBody.SetString("01 02 00 19");
        PackBody.SetHex(PublicKey);
        PackBody.SetHex(EncrypData);
        var BlockData = PackBody.Get();
        var Pack0203 = __spreadArrays([2], Byte_1["default"].FillToHexList(BlockData.length + 4, 2), BlockData, [3]);
        Pack0203 = __spreadArrays(Byte_1["default"].FillToHexList(Pack0203.length + 4, 4), Pack0203);
        var ResultPack = Head.concat(Pack0203);
        TeaClass = new Tea_1["default"]();
        return TeaClass.Encrypt(ResultPack, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    };
    Login.KeyLogin = function () {
    };
    return Login;
}());
module.exports = Login;
