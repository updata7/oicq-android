"use strict";
var Resolver_1 = require("./Resolver");
var Assembly_1 = require("./Assembly");
require("./Struct");
var Byte_1 = require("../Byte");
var MessageHnadle_1 = require("./MessageHnadle");
var Msg_1 = require("./Proto/Build/Msg");
var zlib_1 = require("zlib");
var CommandHandle = /** @class */ (function () {
    function CommandHandle(Bot, EventManage) {
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
        this.Assembly = new Assembly_1["default"](Bot);
        this.MessageHandle = new MessageHnadle_1["default"](EventManage);
        this.SetPackHandle();
        this.SetCmdParserHandle();
        this.FriendListHandle();
        this.GroupListHandle();
        this.QueueCheckPolling(30);
        this.GroupMembersHandle();
        this.CmdTaskListHandle();
    }
    /***
     *  用心跳包服务器会断开连接 用刷新空间动态包就不会 ???
     * @param Flag
     * @constructor
     */
    CommandHandle.prototype.SetHeartbeatPolling = function (Flag) {
        var _this = this;
        if (Flag) {
            if (this.HeartbeatTimer) {
            }
            else {
                this.HeartbeatTimer = setInterval(function () {
                    _this.Sumbit("SQQzoneSvc.getUndealCount" /* SQQzoneSvcGetUndealCount */);
                    //更真实一点?
                    setTimeout(function () {
                        _this.Sumbit("Heartbeat.Alive" /* HeartbeatAlive */);
                    }, 5000);
                }, 60000);
            }
        }
        else {
            clearInterval(this.HeartbeatTimer);
        }
    };
    CommandHandle.prototype.ServerCmdHandle = function (ServerBody, ServerCmd) {
        var _this = this;
        var Res;
        //压缩数据特征头为78 即十进制120
        if (ServerBody.readInt8() === 120) {
            //会不会影响ServerBody内存的释放???
            ServerBody = zlib_1["default"].inflateSync(ServerBody);
        }
        switch (ServerCmd) {
            case "MessageSvc.PbDeleteMsg" /* MessageSvcPbDeleteMsg */:
                Res = Msg_1.Msg.PbDeleteMsgResp.decode(ServerBody);
                if (Res.Result === 0) {
                }
                else {
                    this.EventManage.MessageHandleLogger.Error("PbDeleteMsg Error,ErrorMsg:", Res.ErrorMsg);
                }
                break;
            case "MessageSvc.PbSendMsg" /* MessageSvcPbSendMsg */:
                this.MessageHandle.Parser(ServerBody, ServerCmd);
                break;
            case "friendlist.GetTroopMemberListReq" /* GetTroopMemberListRes */:
                Res = this.MessageHandle.Parser(ServerBody, ServerCmd);
                break;
            case "SQQzoneSvc.getUndealCount" /* SQQzoneSvcGetUndealCount */:
                break;
            case "MessageSvc.PbGetMsg" /* MessageSvcPbGetMsg */:
                Res = this.MessageHandle.Parser(ServerBody, ServerCmd);
                this.Bot.SyncCookie = Res.SyncCookie;
                this.Sumbit("MessageSvc.PbDeleteMsg" /* MessageSvcPbDeleteMsg */, Res.MsgList);
                break;
            case "MessageSvc.PushForceOffline" /* MessageSvcPushForceOffline */:
            case "StatSvc.ReqMSFOffline" /* StatSvcReqMSFOffline */:
                this.CloseAll();
                break;
            case "OnlinePush.PbPushTransMsg" /* OnlinePushPbPushTransMsg */:
                break;
            case "wtlogin.login" /* WtloginLogin */:
                var Result = Resolver_1["default"].LoginPackageParser(ServerBody, this.Bot.Info.EcdhKey.PublicKey, this.Bot.Info.EcdhKey.ShareKey, this.Bot.Info.EcdhKey.ClientPrivateKey, this.Bot.Info.TgKey);
                Result ? this.LoginHandle(Result) : null;
                break;
            case "StatSvc.register" /* StatSvcRegister */:
                this.Bot.Logintime = Math.floor(new Date().getTime() / 1000);
                this.Bot.Info.LoginSucess = true;
                this.SetHeartbeatPolling(true);
                this.Sumbit("SQQzoneSvc.getUndealCount" /* SQQzoneSvcGetUndealCount */);
                this.EventManage.Trigger("Register", {});
                setTimeout(function () {
                    //拉取以往的数据
                    _this.Sumbit("MessageSvc.PbGetMsg" /* MessageSvcPbGetMsg */);
                }, 5000);
                break;
            case "friendlist.GetTroopListReqV2" /* FriendlistGetTroopListReqV2Res */:
                this.Bot.Info.RequestPackSeq += 2;
                this.MessageHandle.Parser(ServerBody, ServerCmd);
                break;
            case "GetTroopMemberListReq" /* GetTroopMemberListReq */:
                this.Bot.Info.RequestPackSeq += 2;
                this.MessageHandle.Parser(ServerBody, ServerCmd);
                break;
            case "MessageSvc.PushNotify" /* MessageSvcPushNotify */:
                /*let Notify = this.MessageHandle.Parser(ServerPack.Body, ServerPack.Cmd)*/
                this.Sumbit("MessageSvc.PbGetMsg" /* MessageSvcPbGetMsg */);
                break;
            case "friendlist.getFriendGroupList" /* FriendlistGetFriendGroupListRes */:
                this.Bot.Info.RequestPackSeq += 2;
                this.MessageHandle.Parser(ServerBody, ServerCmd);
                break;
            case "OnlinePush.PbPushGroupMsg" /* OnlinePushPbPushGroupMsg */:
                Res = this.MessageHandle.Parser(ServerBody, ServerCmd);
                this.Sumbit("MessageSvc.PbDeleteMsg" /* MessageSvcPbDeleteMsg */, Res);
                break;
            case "ConfigPushSvc.PushReq" /* ConfigPushSvcPushReq */:
                /* Res = this.MessageHandle.Parser(ServerBody, ServerCmd)
                 this.Sumbit(Cmd.ConfigPushSvcPushResp, Res)*/
                break;
            case "MessageSvc.PushReaded" /* MessageSvcPushReaded */:
                //读取了一条消息
                break;
        }
    };
    CommandHandle.prototype.LoginHandle = function (Result) {
        switch (Result.Notice) {
            case 4 /* deviceverify */:
                break;
            case 1 /* fail */:
                break;
            case 5 /* error */:
                break;
            case 0 /* success */:
                if (Result.NoticeData != null) {
                    if ("D2Key" in Result.NoticeData) {
                        var _a = Result.NoticeData, Ksid = _a.Ksid, Key0163 = _a.Key0163, Key010C = _a.Key010C, Key010E = _a.Key010E, Key0106 = _a.Key0106, Key016A = _a.Key016A, MainDisplayName = _a.MainDisplayName, Skey = _a.Skey, TgtKey = _a.TgtKey, SuperKey = _a.SuperKey, WebCookies = _a.WebCookies, UserInfo = _a.UserInfo, TlvData = _a.TlvData, DeviceToken = _a.DeviceToken, UserStWebSig = _a.UserStWebSig, D2Key = _a.D2Key, Key010A = _a.Key010A, Key0143 = _a.Key0143, StSig = _a.StSig, WtSessionTicket = _a.WtSessionTicket, WtSessionTicketKey = _a.WtSessionTicketKey, CookiesExpireTime = _a.CookiesExpireTime, SereverPublicKey = _a.SereverPublicKey, ExShareKey = _a.ExShareKey;
                        this.Bot.Info.UserInfo = UserInfo;
                        this.Bot.Info.TlvData = TlvData;
                        this.Bot.Info.CookiesExpireTime = CookiesExpireTime;
                        this.Bot.Info.KeyStore = {
                            Key010A: Key010A,
                            Key010C: Key010C,
                            Key010E: Key010E,
                            Key016A: Key016A,
                            Key0106: Key0106,
                            Key0143: Key0143,
                            Key0163: Key0163,
                            Ksid: Ksid,
                            Skey: Skey,
                            SuperKey: SuperKey,
                            TgtKey: TgtKey,
                            DeviceToken: DeviceToken,
                            StSig: StSig,
                            WebCookies: WebCookies,
                            WtSessionTicket: WtSessionTicket,
                            WtSessionTicketKey: WtSessionTicketKey,
                            UserStWebSig: UserStWebSig,
                            D2Key: D2Key,
                            MainDisplayName: MainDisplayName
                        };
                        this.Bot.Info.ServerPublicKey = SereverPublicKey;
                        this.Bot.Info.ExShareKey = ExShareKey;
                        this.Bot.Info.LoginSucess = true;
                    }
                }
                break;
            case 2 /* verifycode */:
                break;
        }
        this.EventManage.Trigger("LoginNotify", {
            Flag: Result.Notice
        });
    };
    CommandHandle.prototype.Sumbit = function (SendCmd) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var Pack;
        var Response = "";
        switch (SendCmd) {
            case "OidbSvc.0x570_8" /* OidbSvc0x570_8 */:
                Pack = this.Assembly.ShutUpGroupMember(args[0], args[1], args[2]);
                Response = "OidbSvc.0x570_8" /* OidbSvc0x570_8 */;
                break;
            case "MessageSvc.PbSendMsg" /* MessageSvcPbSendMsg */:
                switch (args[2]) {
                    case "Friend":
                        Pack = this.Assembly.SendFriendMessage(args[0], args[1]);
                        break;
                    case "Group":
                        Pack = this.Assembly.SendGroupMessage(args[0], args[1]);
                        break;
                }
                this.Bot.MsgSeq += 1;
                Response = "MessageSvc.PbSendMsg" /* MessageSvcPbSendMsg */;
                break;
            case "SQQzoneSvc.getUndealCount" /* SQQzoneSvcGetUndealCount */:
                Pack = this.Assembly.GetUndealCount();
                Response = "SQQzoneSvc.getUndealCount" /* SQQzoneSvcGetUndealCount */;
                break;
            case "Heartbeat.Alive" /* HeartbeatAlive */:
                Pack = this.Assembly.Heartbeat();
                Response = "Heartbeat.Alive" /* HeartbeatAlive */;
                break;
            case "MessageSvc.PbGetMsg" /* MessageSvcPbGetMsg */:
                Pack = this.Assembly.GetMessage();
                Response = "MessageSvc.PbGetMsg" /* MessageSvcPbGetMsg */;
                break;
            case "GetTroopMemberListReq" /* GetTroopMemberListReq */:
                args.length === 3 ? Pack = this.Assembly.GetGroupMemberList(args[0], args[1], args[2]) : Pack = this.Assembly.GetGroupMemberList(args[0], args[1]);
                Response = "friendlist.GetTroopMemberListReq" /* GetTroopMemberListRes */;
                if (!this.TempGroupMemberInfo.GroupCode) {
                    this.TempGroupMemberInfo.GroupCode = args[0];
                    this.TempGroupMemberInfo.GroupUin = args[1];
                }
                break;
            case "GetFriendListReq" /* GetFriendListReq */:
                args.length ? Pack = (_a = this.Assembly).GetFriendList.apply(_a, args) : Pack = this.Assembly.GetFriendList();
                Response = "friendlist.getFriendGroupList" /* FriendlistGetFriendGroupListRes */;
                break;
            case "GetTroopListReqV2SimplifyReq" /* GetTroopListReqV2SimplifyReq */:
                Pack = this.Assembly.GetGroupList();
                Response = "friendlist.GetTroopListReqV2" /* FriendlistGetTroopListReqV2Res */;
                break;
            case "wtlogin.login" /* WtloginLogin */:
                Pack = this.Assembly.Login();
                Response = "wtlogin.login" /* WtloginLogin */;
                break;
            case "StatSvc.register" /* StatSvcRegister */:
                args[0] ? Pack = this.Assembly.SetStatus(true) : Pack = this.Assembly.SetStatus(false);
                Response = "StatSvc.register" /* StatSvcRegister */;
                break;
            case "MessageSvc.PbDeleteMsg" /* MessageSvcPbDeleteMsg */:
                var Msg_2 = args[0];
                Pack = this.Assembly.DelMessage(Msg_2);
                this.EventManage.MessageHandleLogger.Info("PbDelete message num:", Msg_2.length);
                Response = "MessageSvc.PbDeleteMsg" /* MessageSvcPbDeleteMsg */;
                break;
        }
        this.EventManage.Trigger("SubmitCmd", {
            Pack: Pack,
            Cmd: SendCmd
        });
        this.CmdQueue.push({ Send: SendCmd, Response: Response, SendTime: new Date().getTime() });
    };
    CommandHandle.prototype.SetCmdParserHandle = function () {
        var _this = this;
        this.EventManage.OnEvent("CmdParser", (function (Params) {
            if (Params.Cmd === "Heartbeat.Alive" /* HeartbeatAlive */) {
                _this.Bot.Info.Seq = Byte_1["default"].FillToHexList(Params.Seq + 2, 4);
            }
            else {
                _this.ServerCmdHandle(Params.Body, Params.Cmd);
            }
            for (var i = 0; i < _this.CmdQueue.length; i++) {
                var El = _this.CmdQueue[i];
                if (El.Response === Params.Cmd) {
                    _this.CmdQueue.splice(i, 1);
                    _this.EventManage.Trigger("RequestSuccess", { Cmd: Params.Cmd });
                    return;
                }
            }
            _this.EventManage.Trigger("ServerPush", { Cmd: Params.Cmd });
        }));
    };
    CommandHandle.prototype.SetPackHandle = function () {
        var _this = this;
        this.EventManage.OnEvent("RecvFullPack", function (Params) {
            var Pack = Params.Pack;
            var RecvPack;
            if (_this.Bot.Info.LoginSucess) {
                RecvPack = Resolver_1["default"].Parser(Pack, _this.Bot.Info.KeyStore.D2Key);
                RecvPack ? _this.EventManage.Trigger("CmdParser", RecvPack) : (function () {
                    var Flag = Resolver_1["default"].HeartBeatParser(Pack);
                    if (Flag) {
                        _this.EventManage.Trigger("CmdParser", {
                            Cmd: "Heartbeat.Alive" /* HeartbeatAlive */,
                            Seq: Flag
                        });
                    }
                    else {
                        _this.EventManage.Trigger("CmdParserError", {
                            Pack: Pack
                        });
                    }
                })();
            }
            else {
                RecvPack = Resolver_1["default"].Parser(Pack);
                RecvPack ? _this.EventManage.Trigger("CmdParser", RecvPack) : _this.EventManage.Trigger("CmdParserError", {
                    Pack: Pack
                });
            }
        });
    };
    CommandHandle.prototype.GroupListHandle = function () {
        var _this = this;
        //一次拉取完? 上线150?
        this.EventManage.OnEvent("GetGroupList", function (Params) {
            var GroupList = Params.List;
            var Count = Params.Count;
            _this.EventManage.Trigger("GetGroupListFinish", { GroupList: GroupList });
        });
    };
    CommandHandle.prototype.CloseAll = function () {
        this.Bot.TcpClient.TCP.end();
        this.Bot.TcpClient.TCP.destroy();
        this.EventManage.SetGlobalMemoryObserve(false);
        this.SetHeartbeatPolling(false);
        clearInterval(this.QueueTimer);
    };
    CommandHandle.prototype.QueueCheckPolling = function (Time) {
        var _this = this;
        if (this.QueueTimer) {
        }
        else {
            this.QueueTimer = setInterval(function () {
                if (_this.CmdQueue.length) {
                    var PackNum = 0;
                    for (var i = 0; i < _this.CmdQueue.length; i++) {
                        var El = _this.CmdQueue[i];
                        if (El.Send === "SQQzoneSvc.getUndealCount" /* SQQzoneSvcGetUndealCount */) {
                            PackNum += 1;
                        }
                        else {
                            // 高频发包可能会导致有的包没有返回结果 个别包需要重发
                            var Interval = Math.floor((new Date().getTime() - El.SendTime) / 1000);
                            if (Interval > _this.Bot.ReqTimeOut) {
                                _this.EventManage.MessageHandleLogger.Warn("Sendcmd:", El.Send, "Sendtime:", new Date(El.SendTime).toLocaleString(), "timeout");
                                _this.EventManage.Trigger("Timeout", { Cmd: El.Send });
                                switch (El.Send) {
                                    //为0说明第一次拉取就翻车了 多次调用也会翻车 因为会改变groupcode 需要做队列
                                    case "GetTroopMemberListReq" /* GetTroopMemberListReq */:
                                        _this.TempGroupMemberInfo.NextUin ? _this.Sumbit("GetTroopMemberListReq" /* GetTroopMemberListReq */, _this.TempGroupMemberInfo.GroupUin, _this.TempGroupMemberInfo.GroupCode, _this.TempGroupMemberInfo.NextUin) : null;
                                        break;
                                    case "GetFriendListReq" /* GetFriendListReq */:
                                        _this.TempFirendInfo.Count ? _this.Sumbit("GetTroopMemberListReq" /* GetTroopMemberListReq */, _this.TempFirendInfo.Count) : null;
                                        break;
                                }
                            }
                            _this.CmdQueue.splice(i, 1);
                        }
                    }
                    if (PackNum > 1) {
                        _this.CloseAll();
                        _this.EventManage.Trigger("Close", {
                            Message: "Heartbeat timeout"
                        });
                    }
                }
            }, Time * 1000);
        }
    };
    CommandHandle.prototype.GroupMembersHandle = function () {
        var _this = this;
        this.EventManage.OnEvent("GetGroupMemberList", (function (Params) {
            var MemberList = Params.List;
            var NextUin = Params.NextUin;
            if (NextUin === 0) {
                if (_this.TempGroupMember.length) {
                    _this.EventManage.Trigger("GetGroupMemberListFinish", {
                        MemberList: _this.TempGroupMember.concat(MemberList)
                    });
                    _this.TempGroupMember = [];
                }
                else {
                    _this.EventManage.Trigger("GetGroupMemberListFinish", {
                        MemberList: MemberList
                    });
                    _this.TempGroupMemberInfo.GroupUin = 0;
                    _this.TempGroupMemberInfo.GroupCode = 0;
                    _this.TempGroupMemberInfo.NextUin = 0;
                }
            }
            else {
                var GroupCode = Params.GroupCode, GroupUin = Params.GroupUin;
                _this.TempGroupMember = _this.TempGroupMember.concat(MemberList);
                _this.Sumbit("GetTroopMemberListReq" /* GetTroopMemberListReq */, GroupUin, GroupCode, NextUin);
                _this.TempGroupMemberInfo = {
                    GroupUin: GroupUin, GroupCode: GroupCode, NextUin: NextUin
                };
            }
        }));
    };
    CommandHandle.prototype.FriendListHandle = function () {
        var _this = this;
        this.EventManage.OnEvent("GetFriendList", (function (Params) {
            var FriendList = Params.List;
            var Count = Params.Count;
            if (FriendList.length === Count) {
                _this.EventManage.Trigger("GetFriendListFinish", {
                    FriendList: FriendList
                });
                _this.TempFirendList.length ? _this.TempFirendList = [] : null;
            }
            else {
                _this.TempFirendList = _this.TempFirendList.concat(FriendList);
                if (_this.TempFirendList.length === Count) {
                    _this.EventManage.Trigger("GetFriendListFinish", {
                        FriendList: _this.TempFirendList
                    });
                    _this.TempFirendList = [];
                    _this.TempFirendInfo.Count = 0;
                }
                else {
                    //只拉取了好友 忽略讨论组
                    _this.Sumbit("GetFriendListReq" /* GetFriendListReq */, 1, _this.TempFirendList.length, 0, 0, 0);
                    _this.TempFirendInfo.Count = _this.TempFirendList.length;
                }
            }
        }));
    };
    CommandHandle.prototype.CmdTaskListHandle = function () {
        var _this = this;
        this.EventManage.OnEvent("SubmitCmd", (function (Params) {
            if (_this.TaskQueue.length) {
                _this.TaskQueue.push(Params);
            }
            else {
                _this.EventManage.Trigger("SendTcpPack", {
                    Pack: Params.Pack
                });
            }
        }));
        this.EventManage.OnEvent("TcpSendFinish", function () {
            if (_this.TaskQueue.length) {
                var First = _this.TaskQueue.splice(0, 1);
                _this.EventManage.Trigger("SendTcpPack", {
                    // @ts-ignore
                    Pack: First.Pack
                });
            }
        });
    };
    return CommandHandle;
}());
module.exports = CommandHandle;
