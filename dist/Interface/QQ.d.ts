interface QQBase {
    Login(QQ?: number, PassWord?: string): any;
    SendFriendMessage(FriendUin: number, MessageStruct: any, Type: any, CallBack: Function): any;
    SendGroupMessage(GroupUin: number, MessageStruct: any, Type: any, CallBack: Function): any;
    GetFirendList(...args: any[]): any;
    GetGroupList(...args: any[]): any;
}
export = QQBase;
