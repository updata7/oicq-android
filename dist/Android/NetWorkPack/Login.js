"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Tlv_1 = __importDefault(require("../Tlv"));
const Utlis_1 = require("../../Utlis");
const Byte_1 = __importDefault(require("../../Byte"));
const Global_1 = __importDefault(require("../Global"));
const Tea_1 = __importDefault(require("../../Tea"));
require("../Struct");
class Login {
    static PasswordLogin(ProtocolId, DeviceInfo, QQHex, QQBuff, PassWord, TgKey, Seq, ShareKey, PublicKey) {
        let TlvPack = new Utlis_1.Package();
        let { Guid, WifiSsid, WifiBssid, Imsi, AndroidId, Imei, Brand, Model, Mac, AndroidVersion, BaseBand, ProcVersion, InnerVersion, Incremental, Fingerprint, Codename, Bootloader, Variable } = DeviceInfo;
        let BaseBandHex = BaseBand.ToHexArray();
        let ProcVersionHex = ProcVersion.ToHexArray();
        let InnerVersionHex = InnerVersion.ToHexArray();
        let IncrementalHex = Incremental.ToHexArray();
        let FingerprintHex = Fingerprint.ToHexArray();
        let CodenameHex = Codename.ToHexArray();
        let BootloaderHex = Bootloader.ToHexArray();
        let GuidHex = Utlis_1.Utlis.MD5HexArray(Guid.ToHexArray());
        let WifiSsidHex = WifiSsid.ToHexArray();
        let WifiBssidHex = WifiBssid.ToHexArray();
        let ImeiHex = Imei.ToHexArray();
        let VariableHex = Variable.ToHexArray();
        let ImsiHex = Imsi.ToHexArray();
        let AndroidIdHex = AndroidId.ToHexArray();
        let BrandHex = Brand.ToHexArray();
        let ModelHex = Model.ToHexArray();
        let MacHex = Mac.ToHexArray();
        let AndroidVersionHex = AndroidVersion.ToHexArray();
        let PassWordBuff = PassWord.ToHexArray();
        let NowTime = parseInt(String(new Date().getTime() / 1000));
        let NowTimeHex = Byte_1.default.DecToHexList(NowTime);
        TlvPack.SetHex([0, 9]);
        TlvPack.SetHex([0, 25]);
        TlvPack.SetHex(Tlv_1.default.Tag0018(QQHex, Global_1.default
            .Appid));
        TlvPack.SetHex(Tlv_1.default.Tag0001(QQHex, NowTimeHex));
        TlvPack.SetHex(Tlv_1.default.Tag0106(QQHex, QQBuff, PassWordBuff, NowTimeHex, TgKey, GuidHex, Global_1.default.Appid, ProtocolId));
        TlvPack.SetHex(Tlv_1.default.Tag0116(Global_1.default.MiscBitmap, Global_1.default.MiscBitmap));
        TlvPack.SetHex(Tlv_1.default.Tag0100(Global_1.default.Appid, ProtocolId));
        TlvPack.SetHex(Tlv_1.default.Tag0107());
        TlvPack.SetHex(Tlv_1.default.Tag0142());
        TlvPack.SetHex(Tlv_1.default.Tag0144(TgKey, GuidHex, AndroidIdHex, BrandHex, ModelHex, AndroidVersionHex, FingerprintHex, InnerVersionHex, IncrementalHex, CodenameHex, ProcVersionHex, BootloaderHex, BaseBandHex));
        TlvPack.SetHex(Tlv_1.default.Tag0145(GuidHex));
        TlvPack.SetHex(Tlv_1.default.Tag0147(Global_1.default.AppClientVersion, Global_1.default.AppSign));
        TlvPack.SetHex(Tlv_1.default.Tag0154(Seq));
        TlvPack.SetHex(Tlv_1.default.Tag0141());
        TlvPack.SetHex(Tlv_1.default.Tag0008());
        TlvPack.SetHex(Tlv_1.default.Tag0551());
        TlvPack.SetHex(Tlv_1.default.Tag0187(MacHex));
        TlvPack.SetHex(Tlv_1.default.Tag0188(AndroidIdHex));
        TlvPack.SetHex(Tlv_1.default.Tag0194(ImsiHex));
        TlvPack.SetHex(Tlv_1.default.Tag0191());
        TlvPack.SetHex(Tlv_1.default.Tag0202(WifiSsidHex, WifiBssidHex));
        TlvPack.SetHex(Tlv_1.default.Tag0177());
        TlvPack.SetHex(Tlv_1.default.Tag0516());
        TlvPack.SetHex(Tlv_1.default.Tag0521());
        TlvPack.SetHex(Tlv_1.default.Tag0525());
        TlvPack.SetHex(Tlv_1.default.Tag0544());
        TlvPack.SetHex(Tlv_1.default.Tag0545(ImeiHex));
        let TeaClass = new Tea_1.default();
        let EncrypData = TeaClass.Encrypt(TlvPack.Get(), ShareKey);
        let HeadBody = new Utlis_1.Package();
        let CMD = "wtlogin.login";
        let CMDBuff = CMD.ToHexArray();
        let CMDLength = Byte_1.default.FillToHexList(CMDBuff.length + 4, 4);
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
        let HeadData = HeadBody.Get();
        let Head = [...Byte_1.default.FillToHexList(HeadData.length + 4, 4), ...HeadData];
        let PackBody = new Utlis_1.Package();
        PackBody.SetString("1F 41 08 10 00 01");
        PackBody.SetHex(QQHex);
        PackBody.SetString("03 87 00 00 00 00 02 00 00 00 00 00 00 00 00 01 01");
        PackBody.SetString(Utlis_1.Utlis.GenerateHexString(16));
        PackBody.SetString("01 02 00 19");
        PackBody.SetHex(PublicKey);
        PackBody.SetHex(EncrypData);
        let BlockData = PackBody.Get();
        let Pack0203 = [2, ...Byte_1.default.FillToHexList(BlockData.length + 4, 2), ...BlockData, 3];
        Pack0203 = [...Byte_1.default.FillToHexList(Pack0203.length + 4, 4), ...Pack0203];
        let ResultPack = Head.concat(Pack0203);
        TeaClass = new Tea_1.default();
        return TeaClass.Encrypt(ResultPack, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    static KeyLogin() {
    }
}
module.exports = Login;
