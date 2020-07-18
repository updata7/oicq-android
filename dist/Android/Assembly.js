"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Utlis_1 = require("../Utlis");
const Tea_1 = __importDefault(require("../Tea"));
require("./Struct");
const SvcRegister_1 = __importDefault(require("./NetWorkPack/SvcRegister"));
const Msg_1 = __importDefault(require("./NetWorkPack/Msg"));
const Heartbeat_1 = __importDefault(require("./NetWorkPack/Heartbeat"));
const Byte_1 = __importDefault(require("../Byte"));
const Group_1 = __importDefault(require("./NetWorkPack/Group"));
const Friend_1 = __importDefault(require("./NetWorkPack/Friend"));
const SQQzoneSvc_1 = __importDefault(require("./NetWorkPack/SQQzoneSvc"));
const Login_1 = __importDefault(require("./NetWorkPack/Login"));
const OidbSvc_1 = __importDefault(require("./NetWorkPack/OidbSvc"));
class Package10 {
    constructor() {
        this.PackType = 1;
        this.QQBuff = [];
        this.Data = [];
        this.Extra = [];
    }
    Generate() {
        let Pack = new Utlis_1.Package();
        Pack.SetHex([0, 0, 0, 10]);
        Pack.SetHex([this.PackType]);
        Pack.SetHex(this.Extra);
        Pack.SetHex([0, this.QQBuff.length + 4]);
        Pack.SetHex(this.QQBuff);
        Pack.SetHex(this.Data);
        let Data = Pack.Get();
        return [
            ...Byte_1.default.FillToHexList(Data.length + 4, 4), ...Data
        ];
    }
}
class SSOPackType {
    constructor() {
        this.Seq = [];
        this.QQBuff = [];
        this.CmdPack = [];
        this.Cmd = "";
        this.D2Key = [];
        this.ReqPack = [];
    }
    GenerateHead() {
        let Pack = new Utlis_1.Package();
        Pack.SetHex(Byte_1.default.FillToHexList(this.Cmd.length + 4, 4));
        Pack.SetHex(this.Cmd.ToHexArray());
        Pack.SetHex([0, 0, 0, 8]);
        Pack.SetString(Utlis_1.Utlis.GenerateHexString(4));
        Pack.SetHex([0, 0, 0, 4]);
        Pack.SetHex(Byte_1.default.FillToHexList(this.ReqPack.length + 4, 4));
        let Block = Pack.Get();
        let Body = [...Byte_1.default.FillToHexList(Block.length, 4), ...Block, ...this.ReqPack];
        this.CmdPack = new Tea_1.default().Encrypt(Body, this.D2Key);
    }
    Generate() {
        let Pack = new Utlis_1.Package();
        this.GenerateHead();
        Pack.SetHex([0, 0, 0, 11]);
        Pack.SetHex([1]);
        Pack.SetHex(this.Seq);
        Pack.SetHex([0, 0, 0, 0]);
        Pack.SetHex([this.QQBuff.length + 4]);
        Pack.SetHex(this.QQBuff);
        Pack.SetHex(this.CmdPack);
        let Data = Pack.Get();
        return [...Byte_1.default.FillToHexList(Data.length + 4, 4), ...Data];
    }
}
class Assembly {
    constructor(Bot) {
        this.Bot = Bot;
    }
    GetUndealCount() {
        let Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        Pack.Cmd = "SQQzoneSvc.getUndealCount";
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        Pack.ReqPack = SQQzoneSvc_1.default.GetUndealCount(this.Bot.Info.QQ, this.Bot.Info.QQBuff, this.Bot.Info.DeviceInfo.Mac, this.Bot.Info.DeviceInfo.Imsi);
        return Pack.Generate();
    }
    GetGroupMemberList(TargetGroupUin, TargetGoupCode, NextUin) {
        let Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Cmd = "friendlist.GetTroopMemberListReq";
        Pack.Seq = this.Bot.Info.Seq;
        Pack.ReqPack = Group_1.default.GetMemberList(this.Bot.Info.QQ, this.Bot.Info.RequestPackSeq, TargetGoupCode, TargetGroupUin, NextUin ? NextUin : 0);
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    }
    GetFriendList(...args) {
        let Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        Pack.Cmd = "friendlist.getFriendGroupList";
        if (args.length) {
            let [Reflush, StartIndex, GroupstartIndex, GetgroupCount, GetGroupInfo] = args;
            Pack.ReqPack = Friend_1.default.GetListFirst(this.Bot.Info.QQ, Reflush, StartIndex, GroupstartIndex, GetgroupCount, GetGroupInfo);
        }
        else {
            Pack.ReqPack = Friend_1.default.GetListFirst(this.Bot.Info.QQ);
        }
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    }
    GetGroupList() {
        let Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        Pack.Cmd = "friendlist.GetTroopListReqV2";
        Pack.ReqPack = Group_1.default.GetList(this.Bot.Info.RequestPackSeq, this.Bot.Info.QQ);
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    }
    SendGroupMessage(GroupCode, MessageStruct) {
        let Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Cmd = "MessageSvc.PbSendMsg";
        Pack.Seq = this.Bot.Info.Seq;
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        Pack.ReqPack = Msg_1.default.GroupPbSendMsg(GroupCode, this.Bot.MsgSeq, MessageStruct);
        return Pack.Generate();
    }
    SendFriendMessage(ToUin, MessageStruct) {
        let Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Cmd = "MessageSvc.PbSendMsg";
        Pack.Seq = this.Bot.Info.Seq;
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        Pack.ReqPack = Msg_1.default.FriendPbSendMsg(ToUin, this.Bot.MsgSeq, this.Bot.SyncCookieConst1, this.Bot.SyncCookieConst2, MessageStruct);
        return Pack.Generate();
    }
    GetMessage() {
        let Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        if (this.Bot.SyncCookie) {
            Pack.ReqPack = Msg_1.default.PbGetMsgReq(this.Bot.SyncCookieConst1, this.Bot.SyncCookieConst2, this.Bot.SyncCookie);
        }
        else {
            Pack.ReqPack = Msg_1.default.PbGetMsgReq(this.Bot.SyncCookieConst1, this.Bot.SyncCookieConst2);
        }
        Pack.Cmd = "MessageSvc.PbGetMsg";
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    }
    DelMessage(MsgItem) {
        let Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        Pack.ReqPack = Msg_1.default.PgDeleteMsgReq(MsgItem);
        Pack.Cmd = "MessageSvc.PbDeleteMsg";
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    }
    ShutUpGroupMember(GroupCode, GroupMember, Time) {
        let Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        Pack.ReqPack = OidbSvc_1.default.Svc570_8(GroupCode, GroupMember, Time);
        Pack.Cmd = "OidbSvc.0x570_8";
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    }
    UploadFriendImage() { }
    UploadGroupImage() { }
    Heartbeat() {
        let CmdPack = new Heartbeat_1.default({
            Imei: this.Bot.Info.DeviceInfo.Imei.ToHexArray(),
            Ksid: this.Bot.Info.KeyStore.Ksid,
            Seq: this.Bot.Info.Seq,
            ProtocolId: this.Bot.ProtocolId
        }).Generate();
        let ReusltPack = new Utlis_1.Package();
        ReusltPack.SetHex([0, 0, 0, 10]);
        ReusltPack.SetHex([
            0
        ]);
        ReusltPack.SetHex([0, 0, 0, 4]);
        ReusltPack.SetHex([
            0, 0, 0, 0
        ]);
        ReusltPack.SetHex([
            this.Bot.Info.QQBuff.length + 4, ...this.Bot.Info.QQBuff
        ]);
        ReusltPack.SetHex(CmdPack);
        let Data = ReusltPack.Get();
        return [0, 0, 0, Data.length + 4, ...Data];
    }
    SetStatus(Type = true) {
        let PackBody = SvcRegister_1.default.SetStatus(Type, this.Bot.Info.QQ, this.Bot.Info.DeviceInfo.Guid.ToHexArray(), this.Bot.Info.DeviceInfo.AndroidVersion, this.Bot.Info.DeviceInfo.Model);
        let PackHead = new Utlis_1.Package();
        let Cmd = "StatSvc.register";
        let CmdBuff = Cmd.ToHexArray();
        let CmdLen = Byte_1.default.FillToHexList(CmdBuff.length + 4, 4);
        PackHead.SetHex(this.Bot.Info.Seq);
        PackHead.SetHex(this.Bot.ProtocolId);
        PackHead.SetHex(this.Bot.ProtocolId);
        PackHead.SetHex([1, 0, 0, 0]);
        PackHead.SetHex([0, 0, 0, 0]);
        PackHead.SetHex([0, 0, 1, 0]);
        PackHead.SetHex(Byte_1.default.FillToHexList(this.Bot.Info.KeyStore.Key010A.length + 4, 4));
        PackHead.SetHex(this.Bot.Info.KeyStore.Key010A);
        PackHead.SetHex(CmdLen);
        PackHead.SetHex(CmdBuff);
        PackHead.SetHex([0, 0, 0, 8]);
        PackHead.SetString(Utlis_1.Utlis.GenerateHexString(4));
        PackHead.SetHex([0, 0, 0, this.Bot.Info.DeviceInfo.Imei.length + 4]);
        PackHead.SetHex(this.Bot.Info.DeviceInfo.Imei.ToHexArray());
        PackHead.SetHex([0, 0, 0, 4]);
        let Variable = this.Bot.Info.DeviceInfo.Variable.ToHexArray();
        PackHead.SetHex([0, Variable.length + 2]);
        PackHead.SetHex(Variable);
        let BlockData = PackHead.Get();
        let Head = [0, 0, 0, BlockData.length + 4, ...BlockData];
        let TeaClass = new Tea_1.default();
        let EncryptData = TeaClass.Encrypt([...Head, 0, 0, 0, PackBody.length + 4, ...PackBody], this.Bot.Info.KeyStore.D2Key);
        let ResultPack = new Package10();
        ResultPack.PackType = 1;
        ResultPack.QQBuff = this.Bot.Info.QQBuff;
        ResultPack.Extra = [
            ...Byte_1.default.FillToHexList(this.Bot.Info.KeyStore.Key0143.length + 4, 4), ...this.Bot.Info.KeyStore.Key0143, 0, 0, 0
        ];
        ResultPack.Data = EncryptData;
        return ResultPack.Generate();
    }
    Login() {
        let PackBody = Login_1.default.PasswordLogin(this.Bot.ProtocolId, this.Bot.Info.DeviceInfo, this.Bot.Info.QQHex, this.Bot.Info.QQBuff, this.Bot.Info.PassWord, this.Bot.Info.TgKey, this.Bot.Info.Seq, this.Bot.Info.EcdhKey.ShareKey, this.Bot.Info.EcdhKey.PublicKey);
        let ResultPack = new Package10();
        ResultPack.PackType = 2;
        ResultPack.QQBuff = this.Bot.Info.QQBuff;
        ResultPack.Data = PackBody;
        ResultPack.Extra = [0, 0, 0, 4, 0, 0, 0];
        return ResultPack.Generate();
    }
}
module.exports = Assembly;
