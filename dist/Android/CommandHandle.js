"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Resolver_1 = __importDefault(require("./Resolver"));
const Assembly_1 = __importDefault(require("./Assembly"));
require("./Struct");
const Byte_1 = __importDefault(require("../Byte"));
const MessageHnadle_1 = __importDefault(require("./MessageHnadle"));
const Msg_1 = require("./Proto/Build/Msg");
const zlib_1 = __importDefault(require("zlib"));
class CommandHandle {
    constructor(Bot, EventManage) {
        this.CmdQueue = [];
        this.TempFirendList = [];
        this.TempFirendInfo = {
            Count: 0
        };
        this.TempGroupMemberInfo = {
            GroupUin: 0,
            GroupCode: 0,
            NextUin: 0
        };
        this.TempGroupMember = [];
        this.TaskQueue = [];
        this.Bot = Bot;
        this.EventManage = EventManage;
        this.Assembly = new Assembly_1.default(Bot);
        this.MessageHandle = new MessageHnadle_1.default(EventManage);
        this.SetPackHandle();
        this.SetCmdParserHandle();
        this.FriendListHandle();
        this.GroupListHandle();
        this.QueueCheckPolling(30);
        this.GroupMembersHandle();
        this.CmdTaskListHandle();
    }
    SetHeartbeatPolling(Flag) {
        if (Flag) {
            if (this.HeartbeatTimer) {
            }
            else {
                this.HeartbeatTimer = setInterval(() => {
                    this.Sumbit("SQQzoneSvc.getUndealCount");
                }, 60000);
            }
        }
        else {
            clearInterval(this.HeartbeatTimer);
        }
    }
    ServerCmdHandle(ServerBody, ServerCmd) {
        let Res;
        if (ServerBody.readInt8() === 120) {
            ServerBody = zlib_1.default.inflateSync(ServerBody);
        }
        switch (ServerCmd) {
            case "MessageSvc.PbDeleteMsg":
                Res = Msg_1.Msg.PbDeleteMsgResp.decode(ServerBody);
                if (Res.Result === 0) {
                }
                else {
                    this.EventManage.MessageHandleLogger.Error("PbDeleteMsg Error,ErrorMsg:", Res.ErrorMsg);
                }
                break;
            case "MessageSvc.PbSendMsg":
                this.MessageHandle.Parser(ServerBody, ServerCmd);
                break;
            case "friendlist.GetTroopMemberListReq":
                Res = this.MessageHandle.Parser(ServerBody, ServerCmd);
                break;
            case "SQQzoneSvc.getUndealCount":
                break;
            case "MessageSvc.PbGetMsg":
                Res = this.MessageHandle.Parser(ServerBody, ServerCmd);
                this.Bot.SyncCookie = Res.SyncCookie;
                this.Sumbit("MessageSvc.PbDeleteMsg", Res.MsgList);
                break;
            case "MessageSvc.PushForceOffline":
            case "StatSvc.ReqMSFOffline":
                this.CloseAll();
                break;
            case "OnlinePush.PbPushTransMsg":
                break;
            case "wtlogin.login":
                let Result = Resolver_1.default.LoginPackageParser(ServerBody, this.Bot.Info.EcdhKey.PublicKey, this.Bot.Info.EcdhKey.ShareKey, this.Bot.Info.EcdhKey.ClientPrivateKey, this.Bot.Info.TgKey);
                Result ? this.LoginHandle(Result) : null;
                break;
            case "StatSvc.register":
                this.Bot.Logintime = Math.floor(new Date().getTime() / 1000);
                this.Bot.Info.LoginSucess = true;
                this.SetHeartbeatPolling(true);
                this.Sumbit("SQQzoneSvc.getUndealCount");
                this.EventManage.Trigger("Register", {});
                setTimeout(() => {
                    this.Sumbit("MessageSvc.PbGetMsg");
                }, 5000);
                break;
            case "friendlist.GetTroopListReqV2":
                this.Bot.Info.RequestPackSeq += 2;
                this.MessageHandle.Parser(ServerBody, ServerCmd);
                break;
            case "GetTroopMemberListReq":
                this.Bot.Info.RequestPackSeq += 2;
                this.MessageHandle.Parser(ServerBody, ServerCmd);
                break;
            case "MessageSvc.PushNotify":
                this.Sumbit("MessageSvc.PbGetMsg");
                break;
            case "friendlist.getFriendGroupList":
                this.Bot.Info.RequestPackSeq += 2;
                this.MessageHandle.Parser(ServerBody, ServerCmd);
                break;
            case "OnlinePush.PbPushGroupMsg":
                Res = this.MessageHandle.Parser(ServerBody, ServerCmd);
                this.Sumbit("MessageSvc.PbDeleteMsg", Res);
                break;
            case "ConfigPushSvc.PushReq":
                break;
            case "MessageSvc.PushReaded":
                break;
        }
    }
    LoginHandle(Result) {
        switch (Result.Notice) {
            case 4:
                this.CloseAll();
                break;
            case 1:
                this.CloseAll();
                break;
            case 5:
                this.CloseAll();
                break;
            case 0:
                if (Result.NoticeData != null) {
                    if ("D2Key" in Result.NoticeData) {
                        let { Ksid, Key0163, Key010C, Key010E, Key0106, Key016A, MainDisplayName, Skey, TgtKey, SuperKey, WebCookies, UserInfo, TlvData, DeviceToken, UserStWebSig, D2Key, Key010A, Key0143, StSig, WtSessionTicket, WtSessionTicketKey, CookiesExpireTime, SereverPublicKey, ExShareKey } = Result.NoticeData;
                        this.Bot.Info.UserInfo = UserInfo;
                        this.Bot.Info.TlvData = TlvData;
                        this.Bot.Info.CookiesExpireTime = CookiesExpireTime;
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
                        };
                        this.Bot.Info.ServerPublicKey = SereverPublicKey;
                        this.Bot.Info.ExShareKey = ExShareKey;
                        this.Bot.Info.LoginSucess = true;
                    }
                }
                break;
            case 2:
                this.CloseAll();
                break;
        }
        this.EventManage.Trigger("LoginNotify", {
            Flag: Result.Notice
        });
    }
    Sumbit(SendCmd, ...args) {
        let Pack;
        let Response = "";
        switch (SendCmd) {
            case "OidbSvc.0x570_8":
                Pack = this.Assembly.ShutUpGroupMember(args[0], args[1], args[2]);
                Response = "OidbSvc.0x570_8";
                break;
            case "MessageSvc.PbSendMsg":
                switch (args[2]) {
                    case "Friend":
                        Pack = this.Assembly.SendFriendMessage(args[0], args[1]);
                        break;
                    case "Group":
                        Pack = this.Assembly.SendGroupMessage(args[0], args[1]);
                        break;
                }
                this.Bot.MsgSeq += 1;
                Response = "MessageSvc.PbSendMsg";
                break;
            case "SQQzoneSvc.getUndealCount":
                Pack = this.Assembly.GetUndealCount();
                Response = "SQQzoneSvc.getUndealCount";
                break;
            case "Heartbeat.Alive":
                Pack = this.Assembly.Heartbeat();
                Response = "Heartbeat.Alive";
                break;
            case "MessageSvc.PbGetMsg":
                Pack = this.Assembly.GetMessage();
                Response = "MessageSvc.PbGetMsg";
                break;
            case "GetTroopMemberListReq":
                args.length === 3 ? Pack = this.Assembly.GetGroupMemberList(args[0], args[1], args[2]) : Pack = this.Assembly.GetGroupMemberList(args[0], args[1]);
                Response = "friendlist.GetTroopMemberListReq";
                if (!this.TempGroupMemberInfo.GroupCode) {
                    this.TempGroupMemberInfo.GroupCode = args[0];
                    this.TempGroupMemberInfo.GroupUin = args[1];
                }
                break;
            case "GetFriendListReq":
                args.length ? Pack = this.Assembly.GetFriendList(...args) : Pack = this.Assembly.GetFriendList();
                Response = "friendlist.getFriendGroupList";
                break;
            case "GetTroopListReqV2SimplifyReq":
                Pack = this.Assembly.GetGroupList();
                Response = "friendlist.GetTroopListReqV2";
                break;
            case "wtlogin.login":
                Pack = this.Assembly.Login();
                Response = "wtlogin.login";
                break;
            case "StatSvc.register":
                args[0] ? Pack = this.Assembly.SetStatus(true) : Pack = this.Assembly.SetStatus(false);
                Response = "StatSvc.register";
                break;
            case "MessageSvc.PbDeleteMsg":
                let Msg = args[0];
                Pack = this.Assembly.DelMessage(Msg);
                this.EventManage.MessageHandleLogger.Trace("PbDelete message num:", Msg.length);
                Response = "MessageSvc.PbDeleteMsg";
                break;
        }
        this.EventManage.Trigger("SubmitCmd", {
            Pack: Pack,
            Cmd: SendCmd
        });
        this.CmdQueue.push({ Send: SendCmd, Response: Response, SendTime: new Date().getTime() });
    }
    SetCmdParserHandle() {
        this.EventManage.OnEvent("CmdParser", (Params => {
            if (Params.Cmd === "Heartbeat.Alive") {
                this.Bot.Info.Seq = Byte_1.default.FillToHexList(Params.Seq + 2, 4);
            }
            else {
                this.ServerCmdHandle(Params.Body, Params.Cmd);
            }
            for (let i = 0; i < this.CmdQueue.length; i++) {
                let El = this.CmdQueue[i];
                if (El.Response === Params.Cmd) {
                    this.CmdQueue.splice(i, 1);
                    this.EventManage.Trigger("RequestSuccess", { Cmd: Params.Cmd });
                    return;
                }
            }
            this.EventManage.Trigger("ServerPush", { Cmd: Params.Cmd });
        }));
    }
    SetPackHandle() {
        this.EventManage.OnEvent("RecvFullPack", (Params) => {
            let Pack = Params.Pack;
            let RecvPack;
            if (this.Bot.Info.LoginSucess) {
                RecvPack = Resolver_1.default.Parser(Pack, this.Bot.Info.KeyStore.D2Key);
                RecvPack ? this.EventManage.Trigger("CmdParser", RecvPack) : (() => {
                    let Flag = Resolver_1.default.HeartBeatParser(Pack);
                    if (Flag) {
                        this.EventManage.Trigger("CmdParser", {
                            Cmd: "Heartbeat.Alive",
                            Seq: Flag
                        });
                    }
                    else {
                        this.EventManage.Trigger("CmdParserError", {
                            Pack
                        });
                    }
                })();
            }
            else {
                RecvPack = Resolver_1.default.Parser(Pack);
                RecvPack ? this.EventManage.Trigger("CmdParser", RecvPack) : this.EventManage.Trigger("CmdParserError", {
                    Pack
                });
            }
        });
    }
    GroupListHandle() {
        this.EventManage.OnEvent("GetGroupList", (Params) => {
            let GroupList = Params.List;
            let Count = Params.Count;
            this.EventManage.Trigger("GetGroupListFinish", { GroupList: GroupList });
        });
    }
    CloseAll() {
        this.Bot.TcpClient.TCP.end();
        this.Bot.TcpClient.TCP.destroy();
        this.EventManage.SetGlobalMemoryObserve(false);
        this.SetHeartbeatPolling(false);
        clearInterval(this.QueueTimer);
    }
    QueueCheckPolling(Time) {
        if (this.QueueTimer) {
        }
        else {
            this.QueueTimer = setInterval(() => {
                if (this.CmdQueue.length) {
                    let PackNum = 0;
                    for (let i = 0; i < this.CmdQueue.length; i++) {
                        let El = this.CmdQueue[i];
                        if (El.Send === "SQQzoneSvc.getUndealCount") {
                            PackNum += 1;
                        }
                        else {
                            let Interval = Math.floor((new Date().getTime() - El.SendTime) / 1000);
                            if (Interval > this.Bot.ReqTimeOut) {
                                this.EventManage.MessageHandleLogger.Warn("Sendcmd:", El.Send, "Sendtime:", new Date(El.SendTime).toLocaleString(), "timeout");
                                this.EventManage.Trigger("Timeout", { Cmd: El.Send });
                                switch (El.Send) {
                                    case "GetTroopMemberListReq":
                                        this.TempGroupMemberInfo.NextUin ? this.Sumbit("GetTroopMemberListReq", this.TempGroupMemberInfo.GroupUin, this.TempGroupMemberInfo.GroupCode, this.TempGroupMemberInfo.NextUin) : null;
                                        break;
                                    case "GetFriendListReq":
                                        this.TempFirendInfo.Count ? this.Sumbit("GetTroopMemberListReq", this.TempFirendInfo.Count) : null;
                                        break;
                                }
                            }
                            this.CmdQueue.splice(i, 1);
                        }
                    }
                    if (PackNum > 1) {
                        this.CloseAll();
                        this.EventManage.Trigger("Close", {
                            Message: "Heartbeat timeout"
                        });
                    }
                }
            }, Time * 1000);
        }
    }
    GroupMembersHandle() {
        this.EventManage.OnEvent("GetGroupMemberList", (Params => {
            let MemberList = Params.List;
            let NextUin = Params.NextUin;
            if (NextUin === 0) {
                if (this.TempGroupMember.length) {
                    this.EventManage.Trigger("GetGroupMemberListFinish", {
                        MemberList: this.TempGroupMember.concat(MemberList)
                    });
                    this.TempGroupMember = [];
                }
                else {
                    this.EventManage.Trigger("GetGroupMemberListFinish", {
                        MemberList: MemberList
                    });
                    this.TempGroupMemberInfo.GroupUin = 0;
                    this.TempGroupMemberInfo.GroupCode = 0;
                    this.TempGroupMemberInfo.NextUin = 0;
                }
            }
            else {
                let { GroupCode, GroupUin } = Params;
                this.TempGroupMember = this.TempGroupMember.concat(MemberList);
                this.Sumbit("GetTroopMemberListReq", GroupUin, GroupCode, NextUin);
                this.TempGroupMemberInfo = {
                    GroupUin, GroupCode, NextUin
                };
            }
        }));
    }
    FriendListHandle() {
        this.EventManage.OnEvent("GetFriendList", (Params => {
            let FriendList = Params.List;
            let Count = Params.Count;
            if (FriendList.length === Count) {
                this.EventManage.Trigger("GetFriendListFinish", {
                    FriendList: FriendList
                });
                this.TempFirendList.length ? this.TempFirendList = [] : null;
            }
            else {
                this.TempFirendList = this.TempFirendList.concat(FriendList);
                if (this.TempFirendList.length === Count) {
                    this.EventManage.Trigger("GetFriendListFinish", {
                        FriendList: this.TempFirendList
                    });
                    this.TempFirendList = [];
                    this.TempFirendInfo.Count = 0;
                }
                else {
                    this.Sumbit("GetFriendListReq", 1, this.TempFirendList.length, 0, 0, 0);
                    this.TempFirendInfo.Count = this.TempFirendList.length;
                }
            }
        }));
    }
    CmdTaskListHandle() {
        this.EventManage.OnEvent("SubmitCmd", (Params => {
            if (this.TaskQueue.length) {
                this.TaskQueue.push(Params);
            }
            else {
                this.EventManage.Trigger("SendTcpPack", {
                    Pack: Params.Pack
                });
            }
        }));
        this.EventManage.OnEvent("TcpSendFinish", () => {
            if (this.TaskQueue.length) {
                let First = this.TaskQueue.splice(0, 1);
                this.EventManage.Trigger("SendTcpPack", {
                    Pack: First.Pack
                });
            }
        });
    }
}
module.exports = CommandHandle;
