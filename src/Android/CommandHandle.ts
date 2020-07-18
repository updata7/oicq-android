import EventManage from './EventManage'
import Resolver from "./Resolver";
import Assembly from "./Assembly";
import './Struct'
import QQAndroid from "./Main";
import Byte from "../Byte";
import MessageHandle from "./MessageHnadle";
import {GroupTars} from "./Tars/Build/GroupTars";
import {FriendTars} from "./Tars/Build/FriendTars";
import {Msg} from "./Proto/Build/Msg";
import Zlib from "zlib"


class CommandHandle {
    /***
     *  用心跳包服务器会断开连接 用刷新空间动态包就不会 ???
     * @param Flag
     * @constructor
     */
    private SetHeartbeatPolling(Flag: boolean) {
        if (Flag) {
            if (this.HeartbeatTimer) {
            } else {
                this.HeartbeatTimer = setInterval(() => {
                    this.Sumbit(Cmd.SQQzoneSvcGetUndealCount)
                }, 60000)
            }
        } else {
            clearInterval(this.HeartbeatTimer)
        }
    }

    public ServerCmdHandle(ServerBody: Buffer, ServerCmd: string) {
        let Res;
        //压缩数据特征头为78 即十进制120
        if (ServerBody.readInt8() === 120) {
            //会不会影响ServerBody内存的释放???
            ServerBody = Zlib.inflateSync(ServerBody)
        }
        switch (ServerCmd) {
            case Cmd.MessageSvcPbDeleteMsg:
                Res = Msg.PbDeleteMsgResp.decode(ServerBody)
                if (Res.Result === 0) {

                } else {
                    this.EventManage.MessageHandleLogger.Error("PbDeleteMsg Error,ErrorMsg:", Res.ErrorMsg)
                }
                break;
            case Cmd.MessageSvcPbSendMsg:
                this.MessageHandle.Parser(ServerBody, ServerCmd)
                break;
            case Cmd.GetTroopMemberListRes:
                Res = this.MessageHandle.Parser(ServerBody, ServerCmd)
                break;
            case Cmd.SQQzoneSvcGetUndealCount:
                break;
            case Cmd.MessageSvcPbGetMsg:
                Res = this.MessageHandle.Parser(ServerBody, ServerCmd)
                this.Bot.SyncCookie = Res.SyncCookie
                this.Sumbit(Cmd.MessageSvcPbDeleteMsg, Res.MsgList)
                break;
            case Cmd.MessageSvcPushForceOffline:
            case Cmd.StatSvcReqMSFOffline:
                this.CloseAll()
                break;
            case Cmd.OnlinePushPbPushTransMsg:
                break;
            case Cmd.WtloginLogin:
                let Result = Resolver.LoginPackageParser(ServerBody, this.Bot.Info.EcdhKey.PublicKey, this.Bot.Info.EcdhKey.ShareKey, this.Bot.Info.EcdhKey.ClientPrivateKey, this.Bot.Info.TgKey)
                Result ? this.LoginHandle(Result) : null
                break;
            case Cmd.StatSvcRegister:
                this.Bot.Logintime = Math.floor(new Date().getTime() / 1000)
                this.Bot.Info.LoginSucess = true
                this.SetHeartbeatPolling(true)
                this.Sumbit(Cmd.SQQzoneSvcGetUndealCount)
                this.EventManage.Trigger("Register", {})
                setTimeout(() => {
                    //拉取以往的数据
                    this.Sumbit(Cmd.MessageSvcPbGetMsg)
                }, 5000)
                break;
            case Cmd.FriendlistGetTroopListReqV2Res:
                this.Bot.Info.RequestPackSeq += 2
                this.MessageHandle.Parser(ServerBody, ServerCmd)
                break;
            case Cmd.GetTroopMemberListReq:
                this.Bot.Info.RequestPackSeq += 2
                this.MessageHandle.Parser(ServerBody, ServerCmd)
                break;
            case Cmd.MessageSvcPushNotify:
                /*let Notify = this.MessageHandle.Parser(ServerPack.Body, ServerPack.Cmd)*/
                this.Sumbit(Cmd.MessageSvcPbGetMsg)
                break;
            case Cmd.FriendlistGetFriendGroupListRes:
                this.Bot.Info.RequestPackSeq += 2
                this.MessageHandle.Parser(ServerBody, ServerCmd)
                break;
            case Cmd.OnlinePushPbPushGroupMsg:
                Res = this.MessageHandle.Parser(ServerBody, ServerCmd)
                this.Sumbit(Cmd.MessageSvcPbDeleteMsg, Res)
                break;
            case Cmd.ConfigPushSvcPushReq:
                /* Res = this.MessageHandle.Parser(ServerBody, ServerCmd)
                 this.Sumbit(Cmd.ConfigPushSvcPushResp, Res)*/
                break;
            case Cmd.MessageSvcPushReaded:
                //读取了一条消息
                break;
        }
    }

    public LoginHandle(Result: LoginNotify) {
        switch (Result.Notice) {
            case LoginStatus.deviceverify:
                this.CloseAll()
                break;
            case LoginStatus.fail:
                this.CloseAll()
                break;
            case LoginStatus.error:
                this.CloseAll()
                break;
            case LoginStatus.success:
                if (Result.NoticeData != null) {
                    if ("D2Key" in Result.NoticeData) {
                        let {
                            Ksid,
                            Key0163,
                            Key010C,
                            Key010E,
                            Key0106,
                            Key016A,
                            MainDisplayName,
                            Skey,
                            TgtKey,
                            SuperKey,
                            WebCookies,
                            UserInfo,
                            TlvData,
                            DeviceToken,
                            UserStWebSig,
                            D2Key,
                            Key010A,
                            Key0143,
                            StSig,
                            WtSessionTicket,
                            WtSessionTicketKey,
                            CookiesExpireTime,
                            SereverPublicKey,
                            ExShareKey
                        } = Result.NoticeData
                        this.Bot.Info.UserInfo = UserInfo
                        this.Bot.Info.TlvData = TlvData
                        this.Bot.Info.CookiesExpireTime = CookiesExpireTime
                        this.Bot.Info.KeyStore = {
                            Key010A,
                            Key010C,
                            Key010E,
                            Key016A,
                            Key0106,
                            Key0143,
                            Key0163,
                            Ksid,
                            Skey,
                            SuperKey,
                            TgtKey,
                            DeviceToken,
                            StSig,
                            WebCookies,
                            WtSessionTicket,
                            WtSessionTicketKey,
                            UserStWebSig,
                            D2Key,
                            MainDisplayName,
                        }
                        this.Bot.Info.ServerPublicKey = SereverPublicKey
                        this.Bot.Info.ExShareKey = ExShareKey
                        this.Bot.Info.LoginSucess = true
                    }
                }
                break;
            case LoginStatus.verifycode:
                this.CloseAll()
                break;
        }
        this.EventManage.Trigger("LoginNotify", {
            Flag: Result.Notice
        })
    }

    public Sumbit(SendCmd: Cmd, ...args: any[]): void {
        let Pack;
        let Response: string = "";
        switch (SendCmd) {
            case Cmd.OidbSvc0x570_8:
                Pack = this.Assembly.ShutUpGroupMember(args[0], args[1], args[2])
                Response = Cmd.OidbSvc0x570_8
                break;
            case Cmd.MessageSvcPbSendMsg:
                switch (args[2]) {
                    case "Friend":
                        Pack = this.Assembly.SendFriendMessage(args[0], args[1])
                        break;
                    case "Group":
                        Pack = this.Assembly.SendGroupMessage(<number>args[0], <MessageStruct>args[1])
                        break;
                }
                this.Bot.MsgSeq += 1
                Response = Cmd.MessageSvcPbSendMsg
                break;
            case Cmd.SQQzoneSvcGetUndealCount:
                Pack = this.Assembly.GetUndealCount()
                Response = Cmd.SQQzoneSvcGetUndealCount
                break;
            case Cmd.HeartbeatAlive:
                Pack = this.Assembly.Heartbeat()
                Response = Cmd.HeartbeatAlive
                break;
            case Cmd.MessageSvcPbGetMsg:
                Pack = this.Assembly.GetMessage()
                Response = Cmd.MessageSvcPbGetMsg
                break
            case Cmd.GetTroopMemberListReq:
                args.length === 3 ? Pack = this.Assembly.GetGroupMemberList(args[0], args[1], args[2]) : Pack = this.Assembly.GetGroupMemberList(args[0], args[1])
                Response = Cmd.GetTroopMemberListRes
                if (!this.TempGroupMemberInfo.GroupCode) {
                    this.TempGroupMemberInfo.GroupCode = args[0]
                    this.TempGroupMemberInfo.GroupUin = args[1]
                }
                break;
            case Cmd.GetFriendListReq:
                args.length ? Pack = this.Assembly.GetFriendList(...args) : Pack = this.Assembly.GetFriendList()
                Response = Cmd.FriendlistGetFriendGroupListRes
                break;
            case Cmd.GetTroopListReqV2SimplifyReq:
                Pack = this.Assembly.GetGroupList()
                Response = Cmd.FriendlistGetTroopListReqV2Res
                break;
            case Cmd.WtloginLogin:
                Pack = this.Assembly.Login()
                Response = Cmd.WtloginLogin
                break;
            case Cmd.StatSvcRegister:
                args[0] ? Pack = this.Assembly.SetStatus(true) : Pack = this.Assembly.SetStatus(false)
                Response = Cmd.StatSvcRegister
                break;
            case Cmd.MessageSvcPbDeleteMsg:
                let Msg = <Array<MsgItem>>args[0]
                Pack = this.Assembly.DelMessage(Msg)
                this.EventManage.MessageHandleLogger.Trace("PbDelete message num:", Msg.length)
                Response = Cmd.MessageSvcPbDeleteMsg
                break;
        }
        this.EventManage.Trigger("SubmitCmd", {
            Pack: Pack,
            Cmd: SendCmd
        })
        this.CmdQueue.push({Send: SendCmd, Response: Response, SendTime: new Date().getTime()})
    }

    private Bot: QQAndroid;
    private EventManage: EventManage;
    private Assembly: Assembly
    private MessageHandle: MessageHandle
    private HeartbeatTimer;
    private CmdQueue: Array<{
        Send: string,
        Response: string,
        SendTime: number
    }> = []
    private QueueTimer;
    private TempFirendList: Array<FriendTars.FriendInfo> = []

    private TempFirendInfo = {
        Count: 0
    }

    private TempGroupMemberInfo = {
        GroupUin: 0,
        GroupCode: 0,
        NextUin: 0
    }

    private TempGroupMember: Array<GroupTars.StTroopMemberInfo> = []


    private TaskQueue: Array<{
        Pack: Array<number>,
        Cmd: string
    }> = []

    public SetCmdParserHandle() {
        this.EventManage.OnEvent("CmdParser", (Params => {
            if (Params.Cmd === Cmd.HeartbeatAlive) {
                this.Bot.Info.Seq = Byte.FillToHexList(Params.Seq + 2, 4)
            } else {
                this.ServerCmdHandle(Params.Body, Params.Cmd)
            }
            for (let i = 0; i < this.CmdQueue.length; i++) {
                let El = this.CmdQueue[i]
                if (El.Response === Params.Cmd) {
                    this.CmdQueue.splice(i, 1)
                    this.EventManage.Trigger("RequestSuccess", {Cmd: Params.Cmd})
                    return
                }
            }
            this.EventManage.Trigger("ServerPush", {Cmd: Params.Cmd})
        }))
    }

    public SetPackHandle() {
        this.EventManage.OnEvent("RecvFullPack", (Params) => {
            let Pack: Buffer = Params.Pack
            let RecvPack;
            if (this.Bot.Info.LoginSucess) {
                RecvPack = Resolver.Parser(Pack, this.Bot.Info.KeyStore.D2Key)
                RecvPack ? this.EventManage.Trigger("CmdParser", RecvPack) : (() => {
                    let Flag = Resolver.HeartBeatParser(Pack)
                    if (Flag) {
                        this.EventManage.Trigger("CmdParser", {
                            Cmd: Cmd.HeartbeatAlive,
                            Seq: Flag
                        })
                    } else {
                        this.EventManage.Trigger("CmdParserError", {
                            Pack
                        })
                    }
                })()
            } else {
                RecvPack = Resolver.Parser(Pack)
                RecvPack ? this.EventManage.Trigger("CmdParser", RecvPack) : this.EventManage.Trigger("CmdParserError", {
                    Pack
                })
            }
        })
    }

    public GroupListHandle() {
        //一次拉取完? 上线150?
        this.EventManage.OnEvent("GetGroupList", (Params) => {
            let GroupList = Params.List
            let Count: number = Params.Count
            this.EventManage.Trigger("GetGroupListFinish", {GroupList: GroupList})
        })
    }

    public CloseAll() {
        this.Bot.TcpClient.TCP.end()
        this.Bot.TcpClient.TCP.destroy()
        this.EventManage.SetGlobalMemoryObserve(false)
        this.SetHeartbeatPolling(false)
        clearInterval(this.QueueTimer)
    }

    public QueueCheckPolling(Time: number) {
        if (this.QueueTimer) {
        } else {
            this.QueueTimer = setInterval(() => {
                if (this.CmdQueue.length) {
                    let PackNum = 0
                    for (let i = 0; i < this.CmdQueue.length; i++) {
                        let El = this.CmdQueue[i]
                        if (El.Send === Cmd.SQQzoneSvcGetUndealCount) {
                            PackNum += 1
                        } else {
                            // 高频发包可能会导致有的包没有返回结果 个别包需要重发
                            let Interval = Math.floor((new Date().getTime() - El.SendTime) / 1000)
                            if (Interval > this.Bot.ReqTimeOut) {
                                this.EventManage.MessageHandleLogger.Warn("Sendcmd:", El.Send, "Sendtime:", new Date(El.SendTime).toLocaleString(), "timeout")
                                this.EventManage.Trigger("Timeout", {Cmd: El.Send})
                                switch (<Cmd>El.Send) {
                                    //为0说明第一次拉取就翻车了 多次调用也会翻车 因为会改变groupcode 需要做队列
                                    case Cmd.GetTroopMemberListReq:
                                        this.TempGroupMemberInfo.NextUin ? this.Sumbit(Cmd.GetTroopMemberListReq, this.TempGroupMemberInfo.GroupUin, this.TempGroupMemberInfo.GroupCode, this.TempGroupMemberInfo.NextUin) : null
                                        break;
                                    case Cmd.GetFriendListReq:
                                        this.TempFirendInfo.Count ? this.Sumbit(Cmd.GetTroopMemberListReq, this.TempFirendInfo.Count) : null
                                        break;
                                }
                            }
                            this.CmdQueue.splice(i, 1)
                        }
                    }
                    if (PackNum > 1) {
                        this.CloseAll()
                        this.EventManage.Trigger("Close", {
                            Message: "Heartbeat timeout"
                        })
                    }
                }
            }, Time * 1000)
        }
    }

    public GroupMembersHandle() {
        this.EventManage.OnEvent("GetGroupMemberList", (Params => {
            let MemberList = Params.List
            let NextUin = Params.NextUin
            if (NextUin === 0) {
                if (this.TempGroupMember.length) {
                    this.EventManage.Trigger("GetGroupMemberListFinish", {
                        MemberList: this.TempGroupMember.concat(MemberList)
                    })
                    this.TempGroupMember = []
                } else {
                    this.EventManage.Trigger("GetGroupMemberListFinish", {
                        MemberList: MemberList
                    })
                    this.TempGroupMemberInfo.GroupUin = 0
                    this.TempGroupMemberInfo.GroupCode = 0
                    this.TempGroupMemberInfo.NextUin = 0
                }
            } else {
                let {GroupCode, GroupUin} = Params
                this.TempGroupMember = this.TempGroupMember.concat(MemberList)
                this.Sumbit(Cmd.GetTroopMemberListReq, GroupUin, GroupCode, NextUin)
                this.TempGroupMemberInfo = {
                    GroupUin, GroupCode, NextUin
                }
            }
        }))
    }

    public FriendListHandle() {
        this.EventManage.OnEvent("GetFriendList", (Params => {
            let FriendList = Params.List
            let Count: number = Params.Count
            if (FriendList.length === Count) {
                this.EventManage.Trigger("GetFriendListFinish", {
                    FriendList: FriendList
                })
                this.TempFirendList.length ? this.TempFirendList = [] : null
            } else {
                this.TempFirendList = this.TempFirendList.concat(FriendList)
                if (this.TempFirendList.length === Count) {
                    this.EventManage.Trigger("GetFriendListFinish", {
                        FriendList: this.TempFirendList
                    })
                    this.TempFirendList = []
                    this.TempFirendInfo.Count = 0
                } else {
                    //只拉取了好友 忽略讨论组
                    this.Sumbit(Cmd.GetFriendListReq, 1, this.TempFirendList.length, 0, 0, 0)
                    this.TempFirendInfo.Count = this.TempFirendList.length
                }
            }
        }))
    }

    public CmdTaskListHandle() {
        this.EventManage.OnEvent("SubmitCmd", (Params => {
            if (this.TaskQueue.length) {
                this.TaskQueue.push(<{ Cmd: string, Pack: Array<number> }>Params)
            } else {
                this.EventManage.Trigger("SendTcpPack", {
                    Pack: Params.Pack
                })
            }
        }))
        this.EventManage.OnEvent("TcpSendFinish", () => {
            if (this.TaskQueue.length) {
                let First = this.TaskQueue.splice(0, 1)
                this.EventManage.Trigger("SendTcpPack", {
                    // @ts-ignore
                    Pack: First.Pack
                })
            }

        })
    }


    constructor(Bot: QQAndroid, EventManage: EventManage) {
        this.Bot = Bot

        this.EventManage = EventManage
        this.Assembly = new Assembly(Bot)
        this.MessageHandle = new MessageHandle(EventManage)
        this.SetPackHandle()
        this.SetCmdParserHandle()
        this.FriendListHandle()
        this.GroupListHandle()
        this.QueueCheckPolling(30)
        this.GroupMembersHandle()
        this.CmdTaskListHandle()
    }
}


export = CommandHandle