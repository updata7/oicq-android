/// <reference types="node" />
import EventManage from "./EventManage";
import { ConfigPushSvcTars } from "./Tars/Build/ConfigPushSvcTars";
declare class TarsMessageHandle {
    static RichAndLightAppMessageParser(Body: Buffer): Buffer | null;
    private PbMemberListMsgParser;
    private PbGroupListMsgParser;
    private PbFirendListMsgParser;
    private PbMsgGroupParser;
    private PbMsgParser;
    private ParserRequesPack;
    private ConfigPushSvcPushReqParser;
    Parser(Pack: Buffer, ResponseCmd: string): MsgItem[] | ConfigPushSvcTars.PushReq | {
        SyncCookie: any;
        MsgList: MsgItem[];
    } | null;
    private EventManage;
    constructor(Manage: EventManage);
}
export = TarsMessageHandle;
