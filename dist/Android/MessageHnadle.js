"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const RequestPacketTars_1 = require("./Tars/Build/RequestPacketTars");
const stream_1 = __importDefault(require("@tars/stream"));
const Msg_1 = __importDefault(require("./Proto/Build/Msg"));
const ConfigPushSvcTars_1 = require("./Tars/Build/ConfigPushSvcTars");
const GroupTars_1 = require("./Tars/Build/GroupTars");
var FileStorageServerListInfo = ConfigPushSvcTars_1.ConfigPushSvcTars.FileStorageServerListInfo;
const FriendTars_1 = require("./Tars/Build/FriendTars");
const zlib_1 = __importDefault(require("zlib"));
class TarsMessageHandle {
    constructor(Manage) {
        this.EventManage = Manage;
    }
    static RichAndLightAppMessageParser(Body) {
        let Type = Body.readInt8();
        let Content = Body.slice(1);
        switch (Type) {
            case 0:
                return Content;
            case 1:
                return zlib_1.default.inflateSync(Content);
        }
        return null;
    }
    PbMemberListMsgParser(Pack) {
        let MemberList;
        try {
            let In = new stream_1.default.TarsInputStream(Pack);
            MemberList = In.readStruct(0, true, GroupTars_1.GroupTars.GetTroopMemberListResp);
            this.EventManage.Trigger("GetGroupMemberList", {
                List: MemberList.VecTroopMember.value,
                NextUin: MemberList.NextUin,
                GroupCode: MemberList.GroupCode,
                GroupUin: MemberList.GroupUin,
            });
        }
        catch (e) {
            this.EventManage.Trigger("PbParserError", { Cmd: "friendlist.GetTroopMemberListReq", Pack: Pack });
        }
    }
    PbGroupListMsgParser(Pack) {
        let GroupList;
        try {
            let In = new stream_1.default.TarsInputStream(Pack);
            GroupList = In.readStruct(0, true, GroupTars_1.GroupTars.GetTroopListRespV2);
            this.EventManage.Trigger("GetGroupList", {
                List: GroupList.VecTroopList.value,
                Count: GroupList.TroopCount
            });
        }
        catch (e) {
            this.EventManage.Trigger("PbParserError", { Cmd: "friendlist.GetTroopListReqV2", Pack: Pack });
        }
    }
    PbFirendListMsgParser(Pack) {
        let FriendList;
        try {
            let In = new stream_1.default.TarsInputStream(Pack);
            FriendList = In.readStruct(0, true, FriendTars_1.FriendTars.GetFriendListResp);
            this.EventManage.Trigger("GetFriendList", {
                List: FriendList.VecFriendInfo.value,
                Count: FriendList.TotoalFriendCount
            });
        }
        catch (e) {
            this.EventManage.Trigger("PbParserError", { Cmd: "GetFriendListReq", Pack: Pack });
        }
    }
    PbMsgGroupParser(Pack) {
        let GroupMsg;
        try {
            GroupMsg = Msg_1.default.Msg.PbPushGroupMsg.decode(Pack);
            let MsgList = [];
            let { FromUin, ToUin, MsgType, MsgSeq, MsgUid } = GroupMsg.Msg.MsgHead;
            this.EventManage.Trigger("GroupMessage", GroupMsg.Msg);
            if ("toNumber" in FromUin) {
                FromUin = FromUin.toString();
            }
            if ("toNumber" in ToUin) {
                ToUin = ToUin.toString();
            }
            if ("toNumber" in MsgUid) {
                MsgUid = MsgUid.toString();
            }
            MsgList.push({
                FromUin, ToUin, MsgSeq, MsgUid, MsgType: 187
            });
            return MsgList;
        }
        catch (e) {
            this.EventManage.Trigger("PbParserError", { Cmd: "OnlinePush.PbPushGroupMsg", Pack: Pack });
        }
        return null;
    }
    PbMsgParser(Pack) {
        let MsgStruct;
        try {
            MsgStruct = Msg_1.default.Msg.PbGetMsgResp.decode(Pack);
            var MsgList = [];
            if (MsgStruct.Result === 0) {
                if (MsgStruct.UinPairMsgs.length) {
                    MsgStruct.UinPairMsgs.map((value) => {
                        value.MsgList.map((value2) => {
                            let { FromUin, ToUin, MsgType, MsgSeq, MsgUid } = value2.MsgHead;
                            this.EventManage.Trigger("FriendMessage", value2);
                            if ("toNumber" in FromUin) {
                                FromUin = FromUin.toString();
                            }
                            if ("toNumber" in ToUin) {
                                ToUin = ToUin.toString();
                            }
                            if ("toNumber" in MsgUid) {
                                MsgUid = MsgUid.toString();
                            }
                            MsgList.push({
                                FromUin, ToUin, MsgSeq, MsgUid, MsgType: 187
                            });
                        });
                    });
                }
                this.EventManage.MessageHandleLogger.Info("PbGetMsg get message num:", MsgList.length);
                return {
                    SyncCookie: MsgStruct.SyncCookie,
                    MsgList
                };
            }
        }
        catch (e) {
            this.EventManage.Trigger("PbParserError", { Cmd: "MessageSvc.PbGetMsg", Pack: Pack });
        }
        return null;
    }
    ParserRequesPack(Pack) {
        try {
            let Req = RequestPacketTars_1.RequesPack.Pack.create(new stream_1.default.TarsInputStream(new stream_1.default.BinBuffer(Pack)));
            let Map;
            let Out = new stream_1.default.TarsInputStream(Req.Buffer);
            let ResponseMap;
            let ResponseBuff;
            let MapFunction;
            switch (Req.ServantName) {
                case "mqq.IMService.FriendListServiceServantObj":
                    Map = new stream_1.default.Map(stream_1.default.String, stream_1.default.BinBuffer);
                    ResponseMap = Out.readMap(0, true, Map);
                    MapFunction = Object.keys(ResponseMap.value)[0];
                    ResponseBuff = ResponseMap.get(MapFunction);
                    break;
            }
            return {
                Response: ResponseBuff,
                MapFunction: MapFunction
            };
        }
        catch (e) {
            return null;
        }
    }
    ConfigPushSvcPushReqParser(Buff) {
        let Input = new stream_1.default.TarsInputStream(Buff);
        let PushReq = Input.readStruct(0, true, ConfigPushSvcTars_1.ConfigPushSvcTars.PushReq);
        let Struct = new stream_1.default.TarsInputStream(PushReq.Buff);
        return PushReq;
        let UpLoadList = Struct.readList(0, false, stream_1.default.List(FileStorageServerListInfo));
        let PicDownLoadList = Struct.readList(1, false, stream_1.default.List(FileStorageServerListInfo));
        let GPicDownLoadList = Struct.readList(2, false, stream_1.default.List(FileStorageServerListInfo));
        let QzoneProxyServiceList = Struct.readList(3, false, stream_1.default.List(FileStorageServerListInfo));
        let UrlEncodeServiceList = Struct.readList(4, false, stream_1.default.List(FileStorageServerListInfo));
        let VipEmotionList = Struct.readList(6, false, stream_1.default.List(FileStorageServerListInfo));
        let C2CPicDownList = Struct.readList(7, false, stream_1.default.List(FileStorageServerListInfo));
        let FmtIPInfo = Struct.readStruct(8, false, ConfigPushSvcTars_1.ConfigPushSvcTars.FmtIPInfo);
        let Pttlist = Struct.readBytes(10, false, stream_1.default.BinBuffer);
    }
    Parser(Pack, ResponseCmd) {
        let Res;
        switch (ResponseCmd) {
            case "MessageSvc.PbSendMsg":
                let SendResponse = Msg_1.default.Msg.PbSendMsgResp.decode(Pack);
                this.EventManage.Trigger("SendResponse", {
                    Result: SendResponse.Result,
                    Time: SendResponse.SendTime
                });
                break;
            case "OnlinePush.PbPushGroupMsg":
                return this.PbMsgGroupParser(Pack);
                break;
            case "StatSvc.register":
                Res = this.ParserRequesPack(Pack);
                break;
            case "ConfigPushSvc.PushReq":
                Res = this.ParserRequesPack(Pack);
                if (!Res) {
                    return null;
                }
                return this.ConfigPushSvcPushReqParser(Res.Response);
                break;
            case "friendlist.getFriendGroupList":
                Res = this.ParserRequesPack(Pack);
                Res ? this.PbFirendListMsgParser(Res.Response) : this.EventManage.Trigger("TarsParserError", {
                    Pack: Pack,
                    Cmd: ResponseCmd
                });
                break;
            case "MessageSvc.PbGetMsg":
                return this.PbMsgParser(Pack);
                break;
            case "friendlist.GetTroopListReqV2":
                Res = this.ParserRequesPack(Pack);
                Res ? this.PbGroupListMsgParser(Res.Response) : this.EventManage.Trigger("TarsParserError", {
                    Pack: Pack,
                    Cmd: ResponseCmd
                });
                break;
            case "ConfigPushSvc.PushReq":
                break;
            case "friendlist.GetTroopMemberListReq":
                Res = this.ParserRequesPack(Pack);
                Res ? this.PbMemberListMsgParser(Res.Response) : this.EventManage.Trigger("TarsParserError", {
                    Pack: Pack,
                    Cmd: ResponseCmd
                });
                break;
        }
        return [];
    }
}
module.exports = TarsMessageHandle;
