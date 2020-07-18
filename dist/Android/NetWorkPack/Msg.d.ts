declare class Msg {
    TempPbSendMsg(): void;
    static GroupPbSendMsg(GroupCode: number, MsgSeq: number, MessageStruct: MessageStruct): number[];
    static FriendPbSendMsg(ToUin: number, MsgSeq: number, Const1: number, Const2: number, MessageStruct: MessageStruct): number[];
    static PgDeleteMsgReq(MsgItem: Array<MsgItem>): number[];
    static PbGetMsgReq(Const1: number, Const2: number, SereverSyncCookie?: Uint8Array): number[];
}
export = Msg;
