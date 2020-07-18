import Tlv from "../Tlv";
import {Package, Utlis} from "../../Utlis";
import Byte from "../../Byte";
import Global from "../Global";
import Tea from "../../Tea";
import "../Struct"

class Login {
    public static PasswordLogin(ProtocolId: Array<number>, DeviceInfo: DeviceConfig, QQHex: Array<number>, QQBuff: Array<number>, PassWord: string, TgKey: Array<number>, Seq: Array<number>, ShareKey: Array<number>, PublicKey: Array<number>) {
        let TlvPack = new Package()
        let {Guid, WifiSsid, WifiBssid, Imsi, AndroidId, Imei, Brand, Model, Mac, AndroidVersion, BaseBand, ProcVersion, InnerVersion, Incremental, Fingerprint, Codename, Bootloader, Variable} = DeviceInfo
        let BaseBandHex = BaseBand.ToHexArray()
        let ProcVersionHex = ProcVersion.ToHexArray()
        let InnerVersionHex = InnerVersion.ToHexArray()
        let IncrementalHex = Incremental.ToHexArray()
        let FingerprintHex = Fingerprint.ToHexArray()
        let CodenameHex = Codename.ToHexArray()
        let BootloaderHex = Bootloader.ToHexArray()
        let GuidHex = Utlis.MD5HexArray(Guid.ToHexArray())
        let WifiSsidHex = WifiSsid.ToHexArray()
        let WifiBssidHex = WifiBssid.ToHexArray()
        let ImeiHex = Imei.ToHexArray()
        let VariableHex = Variable.ToHexArray()
        let ImsiHex = Imsi.ToHexArray()
        let AndroidIdHex = AndroidId.ToHexArray()
        let BrandHex = Brand.ToHexArray()
        let ModelHex = Model.ToHexArray()
        let MacHex = Mac.ToHexArray()
        let AndroidVersionHex = AndroidVersion.ToHexArray()
        let PassWordBuff = PassWord.ToHexArray()
        let NowTime = parseInt(String(new Date().getTime() / 1000))
        let NowTimeHex = Byte.DecToHexList(NowTime)
        TlvPack.SetHex([0, 9])
        TlvPack.SetHex([0, 25])
        TlvPack.SetHex(
            Tlv.Tag0018(QQHex, Global
                .Appid)
        )
        TlvPack.SetHex(
            Tlv.Tag0001(QQHex, NowTimeHex)
        )
        TlvPack.SetHex(
            Tlv.Tag0106(
                QQHex,
                QQBuff,
                PassWordBuff,
                NowTimeHex,
                TgKey,
                GuidHex,
                Global.Appid,
                ProtocolId
            )
        )
        TlvPack.SetHex(
            Tlv.Tag0116(Global.MiscBitmap, Global.MiscBitmap)
        )
        TlvPack.SetHex(
            Tlv.Tag0100(Global.Appid, ProtocolId)
        )
        TlvPack.SetHex(
            Tlv.Tag0107()
        )
        TlvPack.SetHex(
            Tlv.Tag0142()
        )
        TlvPack.SetHex(
            Tlv.Tag0144(
                TgKey,
                GuidHex,
                AndroidIdHex,
                BrandHex,
                ModelHex,
                AndroidVersionHex,
                FingerprintHex, InnerVersionHex, IncrementalHex, CodenameHex, ProcVersionHex, BootloaderHex, BaseBandHex
            )
        )

        TlvPack.SetHex(
            Tlv.Tag0145(GuidHex)
        )
        TlvPack.SetHex(
            Tlv.Tag0147(Global.AppClientVersion, Global.AppSign)
        )
        TlvPack.SetHex(
            Tlv.Tag0154(Seq)
        )

        TlvPack.SetHex(
            Tlv.Tag0141()
        )
        TlvPack.SetHex(
            Tlv.Tag0008()
        )
        TlvPack.SetHex(
            Tlv.Tag0551()
        )
        TlvPack.SetHex(
            Tlv.Tag0187(MacHex)
        )

        TlvPack.SetHex(
            Tlv.Tag0188(AndroidIdHex)
        )
        TlvPack.SetHex(
            Tlv.Tag0194(ImsiHex)
        )
        TlvPack.SetHex(
            Tlv.Tag0191()
        )
        TlvPack.SetHex(
            Tlv.Tag0202(WifiSsidHex, WifiBssidHex)
        )
        TlvPack.SetHex(
            Tlv.Tag0177()
        )
        TlvPack.SetHex(
            Tlv.Tag0516()
        )
        TlvPack.SetHex(
            Tlv.Tag0521()
        )
        TlvPack.SetHex(
            Tlv.Tag0525()
        )
        TlvPack.SetHex(
            Tlv.Tag0544()
        )
        TlvPack.SetHex(
            Tlv.Tag0545(ImeiHex)
        )
        let TeaClass = new Tea()
        let EncrypData = TeaClass.Encrypt(TlvPack.Get(), ShareKey)


        let HeadBody = new Package()
        let CMD = "wtlogin.login"
        let CMDBuff = CMD.ToHexArray()
        let CMDLength = Byte.FillToHexList(CMDBuff.length + 4, 4)
        HeadBody.SetHex(Seq)
        HeadBody.SetHex(ProtocolId)
        HeadBody.SetHex(ProtocolId)
        HeadBody.SetHex([1, 0, 0, 0])
        HeadBody.SetHex([0, 0, 0, 0])
        HeadBody.SetHex([0, 0, 1, 0])
        HeadBody.SetHex([0, 0, 0, 4])
        HeadBody.SetHex(CMDLength)
        HeadBody.SetHex(CMDBuff)
        HeadBody.SetHex([0, 0, 0, 8])
        HeadBody.SetString(Utlis.GenerateHexString(4))
        HeadBody.SetHex([
            0, 0, 0, ImeiHex.length + 4
        ])
        HeadBody.SetHex(ImeiHex)
        HeadBody.SetHex([0, 0, 0, 4])
        HeadBody.SetHex([0, VariableHex.length + 2])
        HeadBody.SetHex(VariableHex)
        HeadBody.SetHex([0, 0, 0, 4])

        let HeadData = HeadBody.Get()
        let Head = [...Byte.FillToHexList(HeadData.length + 4, 4), ...HeadData]

        let PackBody = new Package()

        PackBody.SetString("1F 41 08 10 00 01")
        PackBody.SetHex(QQHex)
        PackBody.SetString("03 87 00 00 00 00 02 00 00 00 00 00 00 00 00 01 01")
        PackBody.SetString(Utlis.GenerateHexString(16))
        PackBody.SetString("01 02 00 19")
        PackBody.SetHex(PublicKey)
        PackBody.SetHex(EncrypData)

        let BlockData = PackBody.Get()
        let Pack0203 = [2, ...Byte.FillToHexList(BlockData.length + 4, 2), ...BlockData, 3]
        Pack0203 = [...Byte.FillToHexList(Pack0203.length + 4, 4), ...Pack0203]
        let ResultPack = Head.concat(Pack0203)
        TeaClass = new Tea()
        return TeaClass.Encrypt(ResultPack, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }

    public static KeyLogin() {
    }
}

export = Login