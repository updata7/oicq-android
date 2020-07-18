import './Struct';
declare class Assembly {
    private Bot;
    constructor(Bot: any);
    GetUndealCount(): number[];
    GetGroupMemberList(TargetGroupUin: number, TargetGoupCode: number, NextUin?: number): number[];
    GetFriendList(...args: Array<number>): number[];
    GetGroupList(): number[];
    SendGroupMessage(GroupCode: number, MessageStruct: MessageStruct): number[];
    SendFriendMessage(ToUin: number, MessageStruct: MessageStruct): number[];
    GetMessage(): number[];
    DelMessage(MsgItem: Array<MsgItem>): number[];
    ShutUpGroupMember(GroupCode: number, GroupMember: number, Time: number): number[];
    UploadFriendImage(): void;
    UploadGroupImage(): void;
    Heartbeat(): Array<number>;
    SetStatus(Type?: boolean): Array<number>;
    Login(): Array<number>;
}
export = Assembly;
