/// <reference types="node" />
import '../Interface/ECDH';
import { Msg } from "../Android/Proto/Build/Msg";
declare global {
    interface WebCookies {
        [Domain: string]: string;
    }
    interface EventParmas {
        [Field: string]: any;
    }
    interface EventCallBack {
        (Params: EventParmas): void;
    }
    interface MessageSturct {
        Text?: Msg.MsgField.ImMsgBody.Text;
        Rich?: Msg.MsgField.ImMsgBody.RichText;
        Image?: Msg.MsgField.ImMsgBody.CustomFace;
        App?: Msg.MsgField.ImMsgBody.LightApp;
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
        Type: MsgType;
        Content: string | object;
    }
    interface MsgItem {
        FromUin: string;
        ToUin: string;
        MsgSeq: number;
        MsgUid: string;
        Sig?: Buffer;
        MsgType: number;
    }
    interface GroupField {
        MsgType: number;
        MsgSeq: number;
        MsgTime: number;
        MsgUid: string;
        FromUin: string;
        ToUin: string;
        GroupCode: string;
        GroupType: string;
        GroupCard: string;
        GroupName: string;
        Content: MessageStruct;
        Power: GroupPower;
    }
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
        Notice: LoginStatus;
        NoticeData: LoginSuccessRet | LoginScanVerify | DeviceVerify | null;
    }
    interface PbGetMsg {
        Msg: Array<MsgItem>;
        SyncCookie: Uint8Array;
    }
    interface QQAndroidInfo {
        QQ: number;
        PassWord: string;
        DeviceInfo: DeviceConfig;
        QQHex: Array<number>;
        QQBuff: Array<number>;
        EcdhKey: EcdhKey;
        TgKey: Array<number>;
        ExShareKey: Array<number>;
        TlvData: Array<TlvStrcut>;
        UserInfo: UserBaseInfo;
        CookiesExpireTime: number;
        ServerPublicKey: Array<number>;
        LoginSucess: boolean;
        Seq: Array<number>;
        RequestPackSeq: number;
        KeyStore: {
            Ksid: Array<number>;
            Key0163: Array<number>;
            Key010C: Array<number>;
            Key010E: Array<number>;
            Key0106: Array<number>;
            Key016A: Array<number>;
            MainDisplayName: Array<number>;
            Skey: string;
            TgtKey: Array<number>;
            SuperKey: string;
            WebCookies: WebCookies;
            DeviceToken: Array<number>;
            UserStWebSig: Array<number>;
            D2Key: Array<number>;
            Key010A: Array<number>;
            Key0143: Array<number>;
            StSig: Array<number>;
            WtSessionTicket: Array<number>;
            WtSessionTicketKey: Array<number>;
        };
    }
    interface UserBaseInfo {
        Face: number;
        Age: number;
        Gender: number;
        Nick: string;
    }
    interface DeviceVerify {
        Key0402: Array<number>;
        Key0403: Array<number>;
        Key0104: string;
        ExShareKey: Array<number>;
    }
    interface LoginScanVerify {
        Key0174: string;
        Phone: string;
        VerifyKey: DeviceVerify;
        VerifyUrl: string;
        Titps: string;
        ExShareKey: Array<number>;
    }
    interface LoginSuccessRet {
        Ksid: Array<number>;
        Key0163: Array<number>;
        Key010C: Array<number>;
        Key010E: Array<number>;
        Key0106: Array<number>;
        Key016A: Array<number>;
        MainDisplayName: Array<number>;
        Skey: string;
        TgtKey: Array<number>;
        SuperKey: string;
        WebCookies: WebCookies;
        UserInfo: UserBaseInfo;
        TlvData: Array<TlvStrcut>;
        DeviceToken: Array<number>;
        UserStWebSig: Array<number>;
        D2Key: Array<number>;
        Key010A: Array<number>;
        Key0143: Array<number>;
        StSig: Array<number>;
        WtSessionTicket: Array<number>;
        WtSessionTicketKey: Array<number>;
        CookiesExpireTime: number;
        SereverPublicKey: Array<number>;
        ExShareKey: Array<number>;
    }
    interface RecvPack {
        Type: number;
        Encryption: number;
        QQ: string;
        Body: Buffer;
        Cmd: string;
    }
    interface TlvStrcut {
        Tag: string;
        Length: number;
        Body: Array<number>;
    }
    interface DeviceConfig {
        Brand: string;
        Model: string;
        Imei: string;
        Imsi: string;
        AndroidId: string;
        WifiSsid: string;
        WifiBssid: string;
        Mac: string;
        Guid: string;
        AndroidVersion: string;
        ProcVersion: string;
        Bootloader: string;
        Fingerprint: string;
        InnerVersion: string;
        Codename: string;
        BaseBand: string;
        Incremental: string;
        Variable: string;
    }
    interface Tlv0537 {
        CurrentIp: string;
        CurrentTime: number;
        Version: number;
    }
    interface Tlv0130 {
        ServerTime: number;
        Ip: string;
    }
}
export {};
