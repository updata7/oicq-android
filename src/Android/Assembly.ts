import {Package, Utlis} from "../Utlis";
import Tea from "../Tea";
import './Struct'
import SvcRegister from "./NetWorkPack/SvcRegister";
import Msg from "./NetWorkPack/Msg"
import Heartbeat from "./NetWorkPack/Heartbeat";
import Byte from "../Byte";
import QQAndroid from "./Main";
import Group from "./NetWorkPack/Group";
import Friend from "./NetWorkPack/Friend";
import SQQzoneSvc from "./NetWorkPack/SQQzoneSvc";
import Login from "./NetWorkPack/Login";
import OidbSvc from "./NetWorkPack/OidbSvc";

/***
 * 登录上线都用到
 */
class Package10 {
    public PackType: number = 1
    public QQBuff: Array<number> = []
    public Data: Array<number> = []
    public Extra: Array<number> = []

    public Generate(): Array<number> {
        let Pack = new Package()
        Pack.SetHex([0, 0, 0, 10])
        Pack.SetHex([this.PackType])
        Pack.SetHex(this.Extra)
        Pack.SetHex([0, this.QQBuff.length + 4])
        Pack.SetHex(this.QQBuff)
        Pack.SetHex(this.Data)
        let Data = Pack.Get()
        return [
            ...Byte.FillToHexList(Data.length + 4, 4), ...Data
        ]
    }
}

class SSOPackType {
    public Seq: Array<number> = []
    public QQBuff: Array<number> = []
    private CmdPack: Array<number> = []
    public Cmd: string = ""
    public D2Key: Array<number> = []
    public ReqPack: Array<number> = []

    private GenerateHead() {
        let Pack = new Package()
        Pack.SetHex(Byte.FillToHexList(this.Cmd.length + 4, 4))
        Pack.SetHex(this.Cmd.ToHexArray())
        Pack.SetHex([0, 0, 0, 8])
        Pack.SetString(Utlis.GenerateHexString(4))
        Pack.SetHex([0, 0, 0, 4])
        Pack.SetHex(Byte.FillToHexList(this.ReqPack.length + 4, 4))
        let Block = Pack.Get()
        let Body = [...Byte.FillToHexList(Block.length, 4), ...Block, ...this.ReqPack]
        this.CmdPack = new Tea().Encrypt(Body, this.D2Key)
    }

    public Generate(): Array<number> {
        let Pack = new Package()
        this.GenerateHead()
        Pack.SetHex([0, 0, 0, 11])
        Pack.SetHex([1])
        Pack.SetHex(this.Seq)
        Pack.SetHex([0, 0, 0, 0])
        Pack.SetHex([this.QQBuff.length + 4])
        Pack.SetHex(this.QQBuff)
        Pack.SetHex(this.CmdPack)
        let Data = Pack.Get()
        return [...Byte.FillToHexList(Data.length + 4, 4), ...Data]
    }
}

class Assembly {
    private Bot: QQAndroid

    constructor(Bot) {
        this.Bot = Bot
    }

    public GetUndealCount() {
        let Pack = new SSOPackType()
        Pack.QQBuff = this.Bot.Info.QQBuff
        Pack.Seq = this.Bot.Info.Seq
        Pack.Cmd = "SQQzoneSvc.getUndealCount"
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key
        Pack.ReqPack = SQQzoneSvc.GetUndealCount(this.Bot.Info.QQ, this.Bot.Info.QQBuff, this.Bot.Info.DeviceInfo.Mac, this.Bot.Info.DeviceInfo.Imsi)

        return Pack.Generate()
    }

    public GetGroupMemberList(TargetGroupUin: number, TargetGoupCode: number, NextUin?: number) {
        let Pack = new SSOPackType()
        Pack.QQBuff = this.Bot.Info.QQBuff
        Pack.Cmd = "friendlist.GetTroopMemberListReq"
        Pack.Seq = this.Bot.Info.Seq
        Pack.ReqPack = Group.GetMemberList(this.Bot.Info.QQ,
            this.Bot.Info.RequestPackSeq,
            TargetGoupCode,
            TargetGroupUin, NextUin ? NextUin : 0)
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key
        return Pack.Generate()
    }

    public GetFriendList(...args: Array<number>) {
        let Pack = new SSOPackType()
        Pack.QQBuff = this.Bot.Info.QQBuff
        Pack.Seq = this.Bot.Info.Seq
        Pack.Cmd = "friendlist.getFriendGroupList"
        if (args.length) {
            let [Reflush, StartIndex, GroupstartIndex, GetgroupCount, GetGroupInfo] = args
            Pack.ReqPack = Friend.GetListFirst(this.Bot.Info.QQ, Reflush, StartIndex, GroupstartIndex, GetgroupCount, GetGroupInfo)
        } else {
            Pack.ReqPack = Friend.GetListFirst(this.Bot.Info.QQ)
        }

        Pack.D2Key = this.Bot.Info.KeyStore.D2Key
        return Pack.Generate()

    }

    public GetGroupList() {
        let Pack = new SSOPackType()
        Pack.QQBuff = this.Bot.Info.QQBuff
        Pack.Seq = this.Bot.Info.Seq
        Pack.Cmd = "friendlist.GetTroopListReqV2"
        Pack.ReqPack = Group.GetList(this.Bot.Info.RequestPackSeq, this.Bot.Info.QQ)
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key
        return Pack.Generate()
    }

    public SendGroupMessage(GroupCode: number, MessageStruct: MessageStruct) {
        let Pack = new SSOPackType()
        Pack.QQBuff = this.Bot.Info.QQBuff
        Pack.Cmd = "MessageSvc.PbSendMsg"
        Pack.Seq = this.Bot.Info.Seq
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key
        Pack.ReqPack = Msg.GroupPbSendMsg(GroupCode, this.Bot.MsgSeq, MessageStruct)
        return Pack.Generate()
    }

    public SendFriendMessage(ToUin: number, MessageStruct: MessageStruct) {
        let Pack = new SSOPackType()
        Pack.QQBuff = this.Bot.Info.QQBuff
        Pack.Cmd = "MessageSvc.PbSendMsg"
        Pack.Seq = this.Bot.Info.Seq
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key
        Pack.ReqPack = Msg.FriendPbSendMsg(ToUin, this.Bot.MsgSeq, this.Bot.SyncCookieConst1, this.Bot.SyncCookieConst2, MessageStruct)
        return Pack.Generate()
    }

    public GetMessage() {
        let Pack = new SSOPackType()
        Pack.QQBuff = this.Bot.Info.QQBuff
        Pack.Seq = this.Bot.Info.Seq
        if (this.Bot.SyncCookie) {
            Pack.ReqPack = Msg.PbGetMsgReq(this.Bot.SyncCookieConst1, this.Bot.SyncCookieConst2, this.Bot.SyncCookie)
        } else {
            Pack.ReqPack = Msg.PbGetMsgReq(this.Bot.SyncCookieConst1, this.Bot.SyncCookieConst2)
        }
        Pack.Cmd = "MessageSvc.PbGetMsg"
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key
        return Pack.Generate()
    }

    public DelMessage(MsgItem: Array<MsgItem>) {
        let Pack = new SSOPackType()
        Pack.QQBuff = this.Bot.Info.QQBuff
        Pack.Seq = this.Bot.Info.Seq
        Pack.ReqPack = Msg.PgDeleteMsgReq(MsgItem)
        Pack.Cmd = "MessageSvc.PbDeleteMsg"
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key
        return Pack.Generate()
    }

    public ShutUpGroupMember(GroupCode: number, GroupMember: number, Time: number) {
        let Pack = new SSOPackType()
        Pack.QQBuff = this.Bot.Info.QQBuff
        Pack.Seq = this.Bot.Info.Seq
        Pack.ReqPack = OidbSvc.Svc570_8(GroupCode, GroupMember, Time)
        Pack.Cmd = "OidbSvc.0x570_8"
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key
        return Pack.Generate()
    }


    public UploadFriendImage(){}

    public UploadGroupImage(){}

    public Heartbeat(): Array<number> {
        let CmdPack = new Heartbeat(
            {
                Imei: this.Bot.Info.DeviceInfo.Imei.ToHexArray(),
                Ksid: this.Bot.Info.KeyStore.Ksid,
                Seq: this.Bot.Info.Seq,
                ProtocolId: this.Bot.ProtocolId
            }
        ).Generate()
        let ReusltPack = new Package()
        ReusltPack.SetHex(
            [0, 0, 0, 10]
        )
        ReusltPack.SetHex([
            0
        ])
        ReusltPack.SetHex(
            [0, 0, 0, 4]
        )
        ReusltPack.SetHex([
            0, 0, 0, 0
        ])
        ReusltPack.SetHex([
            this.Bot.Info.QQBuff.length + 4, ...this.Bot.Info.QQBuff
        ])
        ReusltPack.SetHex(
            CmdPack
        )
        let Data = ReusltPack.Get()
        return [0, 0, 0, Data.length + 4, ...Data]
    }

    public SetStatus(Type: boolean = true): Array<number> {

        let PackBody = SvcRegister.SetStatus(Type, this.Bot.Info.QQ, this.Bot.Info.DeviceInfo.Guid.ToHexArray(), this.Bot.Info.DeviceInfo.AndroidVersion, this.Bot.Info.DeviceInfo.Model)

        let PackHead = new Package()

        let Cmd = "StatSvc.register"
        let CmdBuff = Cmd.ToHexArray()
        let CmdLen = Byte.FillToHexList(CmdBuff.length + 4, 4)
        PackHead.SetHex(this.Bot.Info.Seq)
        PackHead.SetHex(this.Bot.ProtocolId)
        PackHead.SetHex(this.Bot.ProtocolId)
        PackHead.SetHex([1, 0, 0, 0])
        PackHead.SetHex([0, 0, 0, 0])
        PackHead.SetHex([0, 0, 1, 0])
        PackHead.SetHex(
            Byte.FillToHexList(this.Bot.Info.KeyStore.Key010A.length + 4, 4)
        )
        PackHead.SetHex(this.Bot.Info.KeyStore.Key010A)
        PackHead.SetHex(CmdLen)
        PackHead.SetHex(
            CmdBuff
        )
        PackHead.SetHex([0, 0, 0, 8])
        PackHead.SetString(Utlis.GenerateHexString(4))
        PackHead.SetHex([0, 0, 0, this.Bot.Info.DeviceInfo.Imei.length + 4])
        PackHead.SetHex(this.Bot.Info.DeviceInfo.Imei.ToHexArray())
        PackHead.SetHex([0, 0, 0, 4])
        let Variable = this.Bot.Info.DeviceInfo.Variable.ToHexArray()
        PackHead.SetHex([0, Variable.length + 2])
        PackHead.SetHex(Variable)
        let BlockData = PackHead.Get()
        let Head = [0, 0, 0, BlockData.length + 4, ...BlockData]
        let TeaClass = new Tea()
        let EncryptData = TeaClass.Encrypt([...Head, 0, 0, 0, PackBody.length + 4, ...PackBody], this.Bot.Info.KeyStore.D2Key)
        let ResultPack = new Package10()
        ResultPack.PackType = 1
        ResultPack.QQBuff = this.Bot.Info.QQBuff
        ResultPack.Extra = [
            ...Byte.FillToHexList(this.Bot.Info.KeyStore.Key0143.length + 4, 4), ...this.Bot.Info.KeyStore.Key0143, 0, 0, 0
        ]
        ResultPack.Data = EncryptData

        return ResultPack.Generate()
    }

    public Login(): Array<number> {
        let PackBody = Login.PasswordLogin(this.Bot.ProtocolId, this.Bot.Info.DeviceInfo, this.Bot.Info.QQHex, this.Bot.Info.QQBuff, this.Bot.Info.PassWord, this.Bot.Info.TgKey, this.Bot.Info.Seq, this.Bot.Info.EcdhKey.ShareKey, this.Bot.Info.EcdhKey.PublicKey)
        let ResultPack = new Package10()
        ResultPack.PackType = 2
        ResultPack.QQBuff = this.Bot.Info.QQBuff
        ResultPack.Data = PackBody
        ResultPack.Extra = [0, 0, 0, 4, 0, 0, 0]
        return ResultPack.Generate()

    }
}

export = Assembly