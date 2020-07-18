"use strict";
var RequestPacketTars_1 = require("./Tars/Build/RequestPacketTars");
var stream_1 = require("@tars/stream");
var Msg_1 = require("./Proto/Build/Msg");
var ConfigPushSvcTars_1 = require("./Tars/Build/ConfigPushSvcTars");
var GroupTars_1 = require("./Tars/Build/GroupTars");
var FileStorageServerListInfo = ConfigPushSvcTars_1.ConfigPushSvcTars.FileStorageServerListInfo;
var FriendTars_1 = require("./Tars/Build/FriendTars");
var zlib_1 = require("zlib");
var TarsMessageHandle = /** @class */ (function () {
    function TarsMessageHandle(Manage) {
        this.EventManage = Manage;
    }
    //开头首字节是类型 小程序和模板消息都可以用这个解析
    TarsMessageHandle.RichAndLightAppMessageParser = function (Body) {
        var Type = Body.readInt8();
        var Content = Body.slice(1);
        switch (Type) {
            case 0:
                //直接转字符串即可 Node编码utf8会乱码
                return Content;
            case 1:
                return zlib_1["default"].inflateSync(Content);
        }
        return null;
    };
    TarsMessageHandle.prototype.PbMemberListMsgParser = function (Pack) {
        var MemberList;
        try {
            var In = new stream_1["default"].TarsInputStream(Pack);
            MemberList = In.readStruct(0, true, GroupTars_1.GroupTars.GetTroopMemberListResp);
            this.EventManage.Trigger("GetGroupMemberList", {
                List: MemberList.VecTroopMember.value,
                NextUin: MemberList.NextUin,
                GroupCode: MemberList.GroupCode,
                GroupUin: MemberList.GroupUin
            });
        }
        catch (e) {
            this.EventManage.Trigger("PbParserError", { Cmd: "friendlist.GetTroopMemberListReq" /* GetTroopMemberListRes */, Pack: Pack });
        }
    };
    TarsMessageHandle.prototype.PbGroupListMsgParser = function (Pack) {
        var GroupList;
        try {
            var In = new stream_1["default"].TarsInputStream(Pack);
            GroupList = In.readStruct(0, true, GroupTars_1.GroupTars.GetTroopListRespV2);
            this.EventManage.Trigger("GetGroupList", {
                List: GroupList.VecTroopList.value,
                Count: GroupList.TroopCount
            });
        }
        catch (e) {
            this.EventManage.Trigger("PbParserError", { Cmd: "friendlist.GetTroopListReqV2" /* FriendlistGetTroopListReqV2Res */, Pack: Pack });
        }
    };
    TarsMessageHandle.prototype.PbFirendListMsgParser = function (Pack) {
        var FriendList;
        try {
            var In = new stream_1["default"].TarsInputStream(Pack);
            FriendList = In.readStruct(0, true, FriendTars_1.FriendTars.GetFriendListResp);
            this.EventManage.Trigger("GetFriendList", {
                List: FriendList.VecFriendInfo.value,
                Count: FriendList.TotoalFriendCount
            });
        }
        catch (e) {
            this.EventManage.Trigger("PbParserError", { Cmd: "GetFriendListReq" /* GetFriendListReq */, Pack: Pack });
        }
    };
    TarsMessageHandle.prototype.PbMsgGroupParser = function (Pack) {
        var GroupMsg;
        try {
            GroupMsg = Msg_1["default"].Msg.PbPushGroupMsg.decode(Pack);
            var MsgList = [];
            var _a = GroupMsg.Msg.MsgHead, FromUin = _a.FromUin, ToUin = _a.ToUin, MsgType_1 = _a.MsgType, MsgSeq = _a.MsgSeq, MsgUid = _a.MsgUid;
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
                FromUin: FromUin, ToUin: ToUin, MsgSeq: MsgSeq, MsgUid: MsgUid,
                MsgType: 187
            });
            return MsgList;
        }
        catch (e) {
            this.EventManage.Trigger("PbParserError", { Cmd: "OnlinePush.PbPushGroupMsg" /* OnlinePushPbPushGroupMsg */, Pack: Pack });
        }
        return null;
    };
    /***
     * 包含自己的消息 并且还有之前的消息内容
     * @param Pack
     * @constructor
     */
    TarsMessageHandle.prototype.PbMsgParser = function (Pack) {
        var _this = this;
        var MsgStruct;
        try {
            MsgStruct = Msg_1["default"].Msg.PbGetMsgResp.decode(Pack);
            var MsgList = [];
            if (MsgStruct.Result === 0) {
                if (MsgStruct.UinPairMsgs.length) {
                    MsgStruct.UinPairMsgs.map(function (value) {
                        value.MsgList.map(function (value2) {
                            var _a = value2.MsgHead, FromUin = _a.FromUin, ToUin = _a.ToUin, MsgType = _a.MsgType, MsgSeq = _a.MsgSeq, MsgUid = _a.MsgUid;
                            _this.EventManage.Trigger("FriendMessage", value2);
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
                                FromUin: FromUin, ToUin: ToUin, MsgSeq: MsgSeq, MsgUid: MsgUid,
                                MsgType: 187
                            });
                        });
                    });
                }
                this.EventManage.MessageHandleLogger.Info("PbGetMsg get message num:", MsgList.length);
                return {
                    SyncCookie: MsgStruct.SyncCookie,
                    MsgList: MsgList
                };
            }
        }
        catch (e) {
            this.EventManage.Trigger("PbParserError", { Cmd: "MessageSvc.PbGetMsg" /* MessageSvcPbGetMsg */, Pack: Pack });
        }
        return null;
    };
    TarsMessageHandle.prototype.ParserRequesPack = function (Pack) {
        try {
            var Req = RequestPacketTars_1.RequesPack.Pack.create(new stream_1["default"].TarsInputStream(new stream_1["default"].BinBuffer(Pack)));
            var Map_1;
            var Out = new stream_1["default"].TarsInputStream(Req.Buffer);
            var ResponseMap = void 0;
            var ResponseBuff = void 0;
            var MapFunction = void 0;
            switch (Req.ServantName) {
                case "mqq.IMService.FriendListServiceServantObj":
                    Map_1 = new stream_1["default"].Map(stream_1["default"].String, stream_1["default"].BinBuffer);
                    ResponseMap = Out.readMap(0, true, Map_1);
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
    };
    //这个结构体没有带结构体头
    /*    struct FileStoragePushFSSvcList
    {
        0  optional vector<FileStorageServerListInfo> UpLoadList;
        1  optional vector<FileStorageServerListInfo> PicDownLoadList;
        2  optional vector<FileStorageServerListInfo> GPicDownLoadList;
        3  optional vector<FileStorageServerListInfo> QzoneProxyServiceList;
        4  optional vector<FileStorageServerListInfo> UrlEncodeServiceList;
        5  optional BigDataChannel                    BigDataChannel;
        6  optional vector<FileStorageServerListInfo> VipEmotionList;
        7  optional vector<FileStorageServerListInfo> C2CPicDownList;
        8  optional FmtIPInfo                         FmtIPInfo;
        9  optional DomainIpChannel                   DomainIpChannel;
        10 optional vector<byte>                      Pttlist;
    };*/
    TarsMessageHandle.prototype.ConfigPushSvcPushReqParser = function (Buff) {
        var Input = new stream_1["default"].TarsInputStream(Buff);
        var PushReq = Input.readStruct(0, true, ConfigPushSvcTars_1.ConfigPushSvcTars.PushReq);
        var Struct = new stream_1["default"].TarsInputStream(PushReq.Buff);
        return PushReq;
        var UpLoadList = Struct.readList(0, false, stream_1["default"].List(FileStorageServerListInfo));
        var PicDownLoadList = Struct.readList(1, false, stream_1["default"].List(FileStorageServerListInfo));
        var GPicDownLoadList = Struct.readList(2, false, stream_1["default"].List(FileStorageServerListInfo));
        var QzoneProxyServiceList = Struct.readList(3, false, stream_1["default"].List(FileStorageServerListInfo));
        var UrlEncodeServiceList = Struct.readList(4, false, stream_1["default"].List(FileStorageServerListInfo));
        //有结构体头需要嵌套
        //  let BigDataChannel = Struct.readList(5, false, ConfigPushSvcTars.BigDataChannel)
        var VipEmotionList = Struct.readList(6, false, stream_1["default"].List(FileStorageServerListInfo));
        var C2CPicDownList = Struct.readList(7, false, stream_1["default"].List(FileStorageServerListInfo));
        var FmtIPInfo = Struct.readStruct(8, false, ConfigPushSvcTars_1.ConfigPushSvcTars.FmtIPInfo);
        //  let DomainIpChannel = Struct.readStruct(9, false, ConfigPushSvcTars.DomainIpChannel)
        var Pttlist = Struct.readBytes(10, false, stream_1["default"].BinBuffer);
    };
    TarsMessageHandle.prototype.Parser = function (Pack, ResponseCmd) {
        var Res;
        switch (ResponseCmd) {
            case "MessageSvc.PbSendMsg" /* MessageSvcPbSendMsg */:
                var SendResponse = Msg_1["default"].Msg.PbSendMsgResp.decode(Pack);
                this.EventManage.Trigger("SendResponse", {
                    Result: SendResponse.Result,
                    Time: SendResponse.SendTime
                });
                break;
            case "OnlinePush.PbPushGroupMsg" /* OnlinePushPbPushGroupMsg */:
                return this.PbMsgGroupParser(Pack);
                break;
            case "StatSvc.register" /* StatSvcRegister */:
                Res = this.ParserRequesPack(Pack);
                break;
            case "ConfigPushSvc.PushReq" /* ConfigPushSvcPushReq */:
                Res = this.ParserRequesPack(Pack);
                if (!Res) {
                    return null;
                }
                return this.ConfigPushSvcPushReqParser(Res.Response);
                break;
            case "friendlist.getFriendGroupList" /* FriendlistGetFriendGroupListRes */:
                Res = this.ParserRequesPack(Pack);
                Res ? this.PbFirendListMsgParser(Res.Response) : this.EventManage.Trigger("TarsParserError", {
                    Pack: Pack,
                    Cmd: ResponseCmd
                });
                break;
            case "MessageSvc.PbGetMsg" /* MessageSvcPbGetMsg */:
                return this.PbMsgParser(Pack);
                break;
            case "friendlist.GetTroopListReqV2" /* FriendlistGetTroopListReqV2Res */:
                Res = this.ParserRequesPack(Pack);
                Res ? this.PbGroupListMsgParser(Res.Response) : this.EventManage.Trigger("TarsParserError", {
                    Pack: Pack,
                    Cmd: ResponseCmd
                });
                break;
            case "ConfigPushSvc.PushReq" /* ConfigPushSvcPushReq */:
                break;
            case "friendlist.GetTroopMemberListReq" /* GetTroopMemberListRes */:
                Res = this.ParserRequesPack(Pack);
                Res ? this.PbMemberListMsgParser(Res.Response) : this.EventManage.Trigger("TarsParserError", {
                    Pack: Pack,
                    Cmd: ResponseCmd
                });
                break;
        }
        return [];
    };
    return TarsMessageHandle;
}());
module.exports = TarsMessageHandle;
