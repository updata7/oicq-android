interface QQBase {
    Login(QQ?: number, PassWord?: string)


    SendFriendMessage(FriendUin: number, MessageStruct: any, Type: any, CallBack: Function): any

    SendGroupMessage(GroupUin: number, MessageStruct: any, Type: any, CallBack: Function): any

    GetFirendList(...args): any

    GetGroupList(...args): any


}

export = QQBase