import {RequesPack} from "./Tars/Build/RequestPacketTars";
import Tars from "@tars/stream";
import EventManage from "./EventManage";
import MsgPb from "./Proto/Build/Msg";
import {ConfigPushSvcTars} from "./Tars/Build/ConfigPushSvcTars";
import {GroupTars} from "./Tars/Build/GroupTars"
import FileStorageServerListInfo = ConfigPushSvcTars.FileStorageServerListInfo;
import {PushNotify} from "./Tars/Build/PushNotifyTars";
import {FriendTars} from "./Tars/Build/FriendTars";
import Zlib from "zlib"

interface RequestResult {
    MapFunction: string,
    Response: Tars.BinBuffer
}

class TarsMessageHandle {


    //开头首字节是类型 小程序和模板消息都可以用这个解析
    public static RichAndLightAppMessageParser(Body: Buffer) {
        let Type = Body.readInt8()
        let Content = Body.slice(1)
        switch (Type) {
            case 0:
                //直接转字符串即可 Node编码utf8会乱码
                return Content
            case 1:
                return Zlib.inflateSync(Content)
        }
        return null
    }

    private PbMemberListMsgParser(Pack: Tars.BinBuffer) {
        let MemberList;
        try {
            let In = new Tars.TarsInputStream(Pack)
            MemberList = <GroupTars.GetTroopMemberListResp>In.readStruct(0, true, GroupTars.GetTroopMemberListResp)
            this.EventManage.Trigger("GetGroupMemberList", {
                List: MemberList.VecTroopMember.value,
                NextUin: MemberList.NextUin,
                GroupCode: MemberList.GroupCode,
                GroupUin: MemberList.GroupUin,
            })
        } catch (e) {
            this.EventManage.Trigger("PbParserError", {Cmd: Cmd.GetTroopMemberListRes, Pack: Pack})
        }

    }

    private PbGroupListMsgParser(Pack: Tars.BinBuffer) {
        let GroupList;
        try {
            let In = new Tars.TarsInputStream(Pack)
            GroupList = <GroupTars.GetTroopListRespV2>In.readStruct(0, true, GroupTars.GetTroopListRespV2)
            this.EventManage.Trigger("GetGroupList", {
                List: GroupList.VecTroopList.value,
                Count: GroupList.TroopCount
            })
        } catch (e) {
            this.EventManage.Trigger("PbParserError", {Cmd: Cmd.FriendlistGetTroopListReqV2Res, Pack: Pack})
        }
    }

    private PbFirendListMsgParser(Pack: Tars.BinBuffer) {
        let FriendList;
        try {
            let In = new Tars.TarsInputStream(Pack)
            FriendList = <FriendTars.GetFriendListResp>In.readStruct(0, true, FriendTars.GetFriendListResp)
            this.EventManage.Trigger("GetFriendList", {
                List: FriendList.VecFriendInfo.value,
                Count: FriendList.TotoalFriendCount
            })
        } catch (e) {
            this.EventManage.Trigger("PbParserError", {Cmd: Cmd.GetFriendListReq, Pack: Pack})
        }
    }

    private PbMsgGroupParser(Pack: Buffer) {
        let GroupMsg
        try {
            GroupMsg = MsgPb.Msg.PbPushGroupMsg.decode(Pack)
            let MsgList: Array<MsgItem> = []
            let {FromUin, ToUin, MsgType, MsgSeq, MsgUid} = GroupMsg.Msg.MsgHead
            this.EventManage.Trigger("GroupMessage", GroupMsg.Msg)
            if ("toNumber" in FromUin) {
                FromUin = FromUin.toString()
            }
            if ("toNumber" in ToUin) {
                ToUin = ToUin.toString()
            }
            if ("toNumber" in MsgUid) {
                MsgUid = MsgUid.toString()
            }
            MsgList.push({
                FromUin, ToUin, MsgSeq, MsgUid, MsgType: 187
            })
            return MsgList
        } catch (e) {
            this.EventManage.Trigger("PbParserError", {Cmd: Cmd.OnlinePushPbPushGroupMsg, Pack: Pack})
        }
        return null
    }


    /***
     * 包含自己的消息 并且还有之前的消息内容
     * @param Pack
     * @constructor
     */
    private PbMsgParser(Pack: Buffer) {
        let MsgStruct;
        try {
            MsgStruct = MsgPb.Msg.PbGetMsgResp.decode(Pack)
            var MsgList: Array<MsgItem> = []
            if (MsgStruct.Result === 0) {
                if (MsgStruct.UinPairMsgs.length) {
                    MsgStruct.UinPairMsgs.map((value) => {
                        value.MsgList.map((value2) => {
                            let {FromUin, ToUin, MsgType, MsgSeq, MsgUid} = value2.MsgHead
                            this.EventManage.Trigger("FriendMessage", value2)
                            if ("toNumber" in FromUin) {
                                FromUin = FromUin.toString()
                            }
                            if ("toNumber" in ToUin) {
                                ToUin = ToUin.toString()
                            }
                            if ("toNumber" in MsgUid) {
                                MsgUid = MsgUid.toString()
                            }
                            MsgList.push({
                                FromUin, ToUin, MsgSeq, MsgUid, MsgType: 187
                            })
                        })
                    })
                }
                this.EventManage.MessageHandleLogger.Info("PbGetMsg get message num:", MsgList.length)
                return {
                    SyncCookie: MsgStruct.SyncCookie,
                    MsgList
                }
            }
        } catch (e) {
            this.EventManage.Trigger("PbParserError", {Cmd: Cmd.MessageSvcPbGetMsg, Pack: Pack})

        }
        return null

    }

    private ParserRequesPack(Pack: Buffer): RequestResult | null {
        try {
            let Req = RequesPack.Pack.create(
                new Tars.TarsInputStream(new Tars.BinBuffer(Pack))
            )
            let Map;
            let Out = new Tars.TarsInputStream(Req.Buffer)
            let ResponseMap;
            let ResponseBuff;
            let MapFunction;
            switch (Req.ServantName) {
                case "mqq.IMService.FriendListServiceServantObj":
                    Map = new Tars.Map(Tars.String, Tars.BinBuffer)
                    ResponseMap = Out.readMap(0, true, Map)
                    MapFunction = Object.keys(ResponseMap.value)[0]
                    ResponseBuff = ResponseMap.get(MapFunction)
                    break;
            }
            return {
                Response: ResponseBuff,
                MapFunction: MapFunction
            }
        } catch (e) {
            return null
        }
    }

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

    private ConfigPushSvcPushReqParser(Buff: Tars.BinBuffer) {
        let Input = new Tars.TarsInputStream(Buff)
        let PushReq = Input.readStruct(0, true, ConfigPushSvcTars.PushReq)
        let Struct = new Tars.TarsInputStream(PushReq.Buff)
        return PushReq
        let UpLoadList = Struct.readList(0, false, Tars.List(FileStorageServerListInfo))
        let PicDownLoadList = Struct.readList(1, false, Tars.List(FileStorageServerListInfo))
        let GPicDownLoadList = Struct.readList(2, false, Tars.List(FileStorageServerListInfo))
        let QzoneProxyServiceList = Struct.readList(3, false, Tars.List(FileStorageServerListInfo))
        let UrlEncodeServiceList = Struct.readList(4, false, Tars.List(FileStorageServerListInfo))
        //有结构体头需要嵌套
        //  let BigDataChannel = Struct.readList(5, false, ConfigPushSvcTars.BigDataChannel)
        let VipEmotionList = Struct.readList(6, false, Tars.List(FileStorageServerListInfo))
        let C2CPicDownList = Struct.readList(7, false, Tars.List(FileStorageServerListInfo))
        let FmtIPInfo = Struct.readStruct(8, false, ConfigPushSvcTars.FmtIPInfo)
        //  let DomainIpChannel = Struct.readStruct(9, false, ConfigPushSvcTars.DomainIpChannel)
        let Pttlist = Struct.readBytes(10, false, Tars.BinBuffer)
    }

    public Parser(Pack: Buffer, ResponseCmd: string) {
        let Res
        switch (ResponseCmd) {
            case Cmd.MessageSvcPbSendMsg:
                let SendResponse = MsgPb.Msg.PbSendMsgResp.decode(Pack)
                this.EventManage.Trigger("SendResponse", {
                    Result: SendResponse.Result,
                    Time: SendResponse.SendTime
                })
                break;
            case Cmd.OnlinePushPbPushGroupMsg:
                return this.PbMsgGroupParser(Pack)
                break;
            case Cmd.StatSvcRegister:
                Res = <RequestResult>this.ParserRequesPack(Pack)
                break;
            case Cmd.ConfigPushSvcPushReq:
                Res = <RequestResult>this.ParserRequesPack(Pack)
                if (!Res) {
                    return null
                }
                return this.ConfigPushSvcPushReqParser(Res.Response)

                break;
            case Cmd.FriendlistGetFriendGroupListRes:
                Res = <RequestResult>this.ParserRequesPack(Pack)
                Res ? this.PbFirendListMsgParser(Res.Response) : this.EventManage.Trigger("TarsParserError", {
                    Pack: Pack,
                    Cmd: ResponseCmd
                })
                break;
            case Cmd.MessageSvcPbGetMsg:
                return this.PbMsgParser(Pack)
                break;
            case Cmd.FriendlistGetTroopListReqV2Res:
                Res = <RequestResult>this.ParserRequesPack(Pack)
                Res ? this.PbGroupListMsgParser(Res.Response) : this.EventManage.Trigger("TarsParserError", {
                    Pack: Pack,
                    Cmd: ResponseCmd
                })
                break;
            case Cmd.ConfigPushSvcPushReq:
                break;
            case Cmd.GetTroopMemberListRes:
                Res = <RequestResult>this.ParserRequesPack(Pack)
                Res ? this.PbMemberListMsgParser(Res.Response) : this.EventManage.Trigger("TarsParserError", {
                    Pack: Pack,
                    Cmd: ResponseCmd
                })
                break;
        }
        return []
    }


    private EventManage: EventManage;

    constructor(Manage: EventManage) {
        this.EventManage = Manage

    }
}

export = TarsMessageHandle