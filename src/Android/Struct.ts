import '../Interface/ECDH'
import {Msg} from "../Android/Proto/Build/Msg"

declare global {
    interface WebCookies {
        [Domain: string]: string
    }

    interface EventParmas {
        [Field: string]: any
    }

    interface EventCallBack {
        (Params: EventParmas): void
    }

    /***
     * @param Text-文本内容  有AttrBuff6的时候是@人
     * @param Rich-模板消息
     * @param Image -图片
     * @param App -小程序
     * 有WalletMsg 的时候是红包消息 类型是拼手气红包  其他类型的红包消息解析不到
     */
    interface MessageSturct {
        Text?: Msg.MsgField.ImMsgBody.Text,
        Rich?: Msg.MsgField.ImMsgBody.RichText,
        Image?: Msg.MsgField.ImMsgBody.CustomFace,
        App?: Msg.MsgField.ImMsgBody.LightApp
    }


    const enum GroupPower {
        Admin = 16,
        Ownwer = 8,
        General = 0
    }

    const enum MsgType {
        Text = "Text",
        Coustom = "Coustom"
    }


    interface MessageStruct {
        Type: MsgType,
        Content: string | object
    }

    interface MsgItem {
        FromUin: string,
        ToUin: string,
        MsgSeq: number,
        MsgUid: string,
        Sig?: Buffer,
        MsgType: number
    }

    /***
     * @param GroupCode-群号
     * @param FromUin-发送人
     * @param ToUin-接收人
     * @param GroupName-群名
     *
     */
    interface GroupField {
        MsgType: number,
        MsgSeq: number,
        MsgTime: number,
        MsgUid: string,
        FromUin: string,
        ToUin: string,
        GroupCode: string,
        GroupType: string,
        GroupCard: string,
        GroupName: string,
        Content: MessageStruct,
        Power: GroupPower
    }


    /***
     * @param OidbSvc0x570_8 群禁言
     * @param PbMsgWithDrawReq 撤回
     * @param OnlinePushPbPushTransMsg 群事件 管理变更、等等等
     * @param  GetTroopMemberListRes 拉取群成员
     * @param GetTroopListReqV2SimplifyReq 拉群列表
     * @param  GetFriendListReq 好友列表
     * @param  LongConn.OffPicUp 上传好友图片
     * @param  ImgStore.GroupPicUp 上传群图片
     */
    const enum Cmd {
        LongConnOffPicUp = "LongConn.OffPicUp",
        ImgStoreGroupPicUp = "ImgStore.GroupPicUp",
        HeartbeatAlive = "Heartbeat.Alive",
        WtloginLogin = "wtlogin.login",
        MessageSvcPbGetMsg = "MessageSvc.PbGetMsg",

        GetTroopMemberListReq = "GetTroopMemberListReq",
        GetTroopMemberListRes = "friendlist.GetTroopMemberListReq",


        GetTroopListReqV2SimplifyReq = "GetTroopListReqV2SimplifyReq",
        FriendlistGetFriendGroupListRes = "friendlist.getFriendGroupList",


        GetFriendListReq = "GetFriendListReq",
        FriendlistGetTroopListReqV2Res = "friendlist.GetTroopListReqV2",

        MessageSvcPbSendMsg = "MessageSvc.PbSendMsg",
        MessageSvcPbDeleteMsg = "MessageSvc.PbDeleteMsg",

        ConfigPushSvcPushReq = "ConfigPushSvc.PushReq",
        MessageSvcPushReaded = "MessageSvc.PushReaded",
        OnlinePushPbPushGroupMsg = "OnlinePush.PbPushGroupMsg",
        MessageSvcPushForceOffline = "MessageSvc.PushForceOffline",
        StatSvcRegister = "StatSvc.register",

        MessageSvcPushNotify = "MessageSvc.PushNotify",
        StatSvcReqMSFOffline = "StatSvc.ReqMSFOffline",
        OidbSvc0x570_8 = "OidbSvc.0x570_8",
        PbMsgWithDrawReq = "PbMsgWithDrawReq",
        OnlinePushPbPushTransMsg = "OnlinePush.PbPushTransMsg",

        SQQzoneSvcGetUndealCount = "SQQzoneSvc.getUndealCount"
    }

    const enum LoginStatus {
        success = 0,
        fail = 1,
        verifycode = 2,
        deviceverify = 4,
        error = 5
    }


    interface LoginNotify {
        Notice: LoginStatus,
        NoticeData: LoginSuccessRet | LoginScanVerify | DeviceVerify | null
    }

    interface PbGetMsg {
        Msg: Array<MsgItem>,
        SyncCookie: Uint8Array
    }

    interface QQAndroidInfo {
        QQ: number,
        PassWord: string,
        DeviceInfo: DeviceConfig,
        QQHex: Array<number>,
        QQBuff: Array<number>,
        EcdhKey: EcdhKey,
        TgKey: Array<number>,
        ExShareKey: Array<number>,
        TlvData: Array<TlvStrcut>,
        UserInfo: UserBaseInfo,
        CookiesExpireTime: number,
        ServerPublicKey: Array<number>,
        LoginSucess: boolean,
        Seq: Array<number>,
        RequestPackSeq: number,
        KeyStore: {
            Ksid: Array<number>,
            Key0163: Array<number>,
            Key010C: Array<number>,
            Key010E: Array<number>,
            Key0106: Array<number>,
            Key016A: Array<number>,
            MainDisplayName: Array<number>,
            Skey: string,
            TgtKey: Array<number>,
            SuperKey: string,
            WebCookies: WebCookies,
            DeviceToken: Array<number>,
            UserStWebSig: Array<number>,
            D2Key: Array<number>,
            Key010A: Array<number>,
            Key0143: Array<number>,
            StSig: Array<number>,
            WtSessionTicket: Array<number>,
            WtSessionTicketKey: Array<number>,
        }
    }

    interface UserBaseInfo {
        Face: number,
        Age: number,
        Gender: number,
        Nick: string
    }

    /***
     * 0402和0403应该是key 用于登录使用  PC端也有这个数据 0104设备锁ID
     */

    interface DeviceVerify {
        Key0402: Array<number>,
        Key0403: Array<number>,
        Key0104: string,
        ExShareKey: Array<number>
    }


    /***
     * 设备不安全
     * @param Tips 提示语
     * @param VerifyUrl 验证网址
     * @param Key0174 设备锁sign
     */
    interface LoginScanVerify {
        Key0174: string,
        Phone: string,
        VerifyKey: DeviceVerify,
        VerifyUrl: string,
        Titps: string,
        ExShareKey: Array<number>

    }

    /***
     *
     * @param Key010A token登录使用
     * @param Key0143 token登录使用
     * @param Key010E 扫码key
     */
    interface LoginSuccessRet {
        Ksid: Array<number>,
        Key0163: Array<number>,
        Key010C: Array<number>,
        Key010E: Array<number>,
        Key0106: Array<number>,
        Key016A: Array<number>,
        MainDisplayName: Array<number>,
        Skey: string,
        TgtKey: Array<number>,
        SuperKey: string,
        WebCookies: WebCookies,
        UserInfo: UserBaseInfo,
        TlvData: Array<TlvStrcut>,
        DeviceToken: Array<number>,
        UserStWebSig: Array<number>,
        D2Key: Array<number>,
        Key010A: Array<number>,
        Key0143: Array<number>,
        StSig: Array<number>,
        WtSessionTicket: Array<number>,
        WtSessionTicketKey: Array<number>,
        CookiesExpireTime: number,
        SereverPublicKey: Array<number>,
        ExShareKey: Array<number>
    }

    /***
     * 包长度
     * 包类型
     * 加密类型
     *
     *
     * 包数据
     * CMD命令
     */
    interface RecvPack {
        Type: number,
        Encryption: number,
        QQ: string,
        Body: Buffer,
        Cmd: string
    }


    /***
     * Tlv格式
     * @param Tag
     * @param Length 长度
     * @param Body 内容
     */
    interface TlvStrcut {
        Tag: string,
        Length: number,
        Body: Array<number>
    }


    /***
     * @param Brand:品牌 HUAWEI
     * @param Model:型号 DUK-AL20
     * @param Imei:手机序列号
     * @param Imsi:国际移动用户识别码
     * @param AndroidId:设备的唯一标识
     * @param WifiSsid:服务集标识 wifi名字
     * @param WifiBssid:基本服务集 wifimac
     * @param Mac:网卡mac
     * @param Guid:全局唯一标识符
     * @param Ip:登录IP 可以填内网
     * @param AndroidVersion: 安卓系统版本
     * @param Incremental InnerVersion  基带版本 // eng.se.infra.20191230.112159
     * @param ProcVersion 安卓Linux内核版本  cat /proc/version
     * @param CodeName ??? "REL"
     * @param Fingerprint 指纹信息 // HUAWEI/HUAWEI/DUK-AL20:5.1.1/20171130.376229:user/release-keys
     * @param Bootloader 引导加载程序
     * @param Var
     */
    interface DeviceConfig {
        Brand: string,
        Model: string,
        Imei: string,
        Imsi: string,
        AndroidId: string,
        WifiSsid: string,
        WifiBssid: string,
        Mac: string,
        Guid: string,
        AndroidVersion: string,
        ProcVersion: string,
        Bootloader: string,
        Fingerprint: string,
        InnerVersion: string,
        Codename: string,
        BaseBand: string,
        Incremental: string,
        Variable: string
    }


    /***
     * @param CurrentIp 当前公网ip
     */
    interface Tlv0537 {
        CurrentIp: string,
        CurrentTime: number,
        Version: number
    }

    /***
     * @param Ip 跳转用的么?
     */
    interface Tlv0130 {
        ServerTime: number,
        Ip: string
    }
}


export {}