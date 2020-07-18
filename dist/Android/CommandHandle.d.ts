/// <reference types="node" />
import EventManage from './EventManage';
import './Struct';
import QQAndroid from "./Main";
declare class CommandHandle {
    private SetHeartbeatPolling;
    ServerCmdHandle(ServerBody: Buffer, ServerCmd: string): void;
    LoginHandle(Result: LoginNotify): void;
    Sumbit(SendCmd: Cmd, ...args: any[]): void;
    private Bot;
    private EventManage;
    private Assembly;
    private MessageHandle;
    private HeartbeatTimer;
    private CmdQueue;
    private QueueTimer;
    private TempFirendList;
    private TempFirendInfo;
    private TempGroupMemberInfo;
    private TempGroupMember;
    private TaskQueue;
    SetCmdParserHandle(): void;
    SetPackHandle(): void;
    GroupListHandle(): void;
    CloseAll(): void;
    QueueCheckPolling(Time: number): void;
    GroupMembersHandle(): void;
    FriendListHandle(): void;
    CmdTaskListHandle(): void;
    constructor(Bot: QQAndroid, EventManage: EventManage);
}
export = CommandHandle;
