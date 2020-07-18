import QQBase from '../Interface/QQ';
import './Struct';
import '../Expansion';
import CommandHandle from "./CommandHandle";
declare const enum Protocol {
    Andorid = 0,
    Apad = 1
}
declare class QQAndroid implements QQBase {
    TcpClient: any;
    Info: QQAndroidInfo;
    CommandHandle: CommandHandle;
    Logintime: number;
    SyncCookieConst1: number;
    SyncCookieConst2: number;
    private EventMange;
    ProtocolType: string;
    ProtocolId: Array<number>;
    SyncCookie?: Uint8Array;
    MsgSeq: number;
    ReqTimeOut: number;
    constructor(Version: Protocol, TimeOut?: number);
    SetGlobalMemoryObserve(Flag: boolean): void;
    GetCookies(): WebCookies;
    ShutUpGroupMember(GroupCode: number, GroupMember: number, Time: number): void;
    SetLoginConfig(Config?: DeviceConfig): void;
    OnClose(CallBack: Function): void;
    Login(QQ: number, PassWord: string): Promise<number>;
    GetFirendList(CallBack: Function): void;
    GetGroupList(CallBack: Function): void;
    GetGroupMembers(GroupCode: number, GroupUin: number, CallBack: Function): void;
    OnFriendMessage(CallBack: Function): void;
    OnGroupMessage(CallBack: Function): void;
    OnRegister(CallBack: Function): void;
    SendFriendMessage(ToUin: number, MessageStruct: MessageStruct): void;
    SendGroupMessage(GroupCode: number, MessageStruct: MessageStruct): void;
}
export = QQAndroid;
