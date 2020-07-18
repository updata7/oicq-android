"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Utlis_1 = require("../Utlis");
var Tea_1 = require("../Tea");
require("./Struct");
var SvcRegister_1 = require("./NetWorkPack/SvcRegister");
var Msg_1 = require("./NetWorkPack/Msg");
var Heartbeat_1 = require("./NetWorkPack/Heartbeat");
var Byte_1 = require("../Byte");
var Group_1 = require("./NetWorkPack/Group");
var Friend_1 = require("./NetWorkPack/Friend");
var SQQzoneSvc_1 = require("./NetWorkPack/SQQzoneSvc");
var Login_1 = require("./NetWorkPack/Login");
var OidbSvc_1 = require("./NetWorkPack/OidbSvc");
/***
 * 登录上线都用到
 */
var Package10 = /** @class */ (function () {
    function Package10() {
        this.PackType = 1;
        this.QQBuff = [];
        this.Data = [];
        this.Extra = [];
    }
    Package10.prototype.Generate = function () {
        var Pack = new Utlis_1.Package();
        Pack.SetHex([0, 0, 0, 10]);
        Pack.SetHex([this.PackType]);
        Pack.SetHex(this.Extra);
        Pack.SetHex([0, this.QQBuff.length + 4]);
        Pack.SetHex(this.QQBuff);
        Pack.SetHex(this.Data);
        var Data = Pack.Get();
        return __spreadArrays(Byte_1["default"].FillToHexList(Data.length + 4, 4), Data);
    };
    return Package10;
}());
var SSOPackType = /** @class */ (function () {
    function SSOPackType() {
        this.Seq = [];
        this.QQBuff = [];
        this.CmdPack = [];
        this.Cmd = "";
        this.D2Key = [];
        this.ReqPack = [];
    }
    SSOPackType.prototype.GenerateHead = function () {
        var Pack = new Utlis_1.Package();
        Pack.SetHex(Byte_1["default"].FillToHexList(this.Cmd.length + 4, 4));
        Pack.SetHex(this.Cmd.ToHexArray());
        Pack.SetHex([0, 0, 0, 8]);
        Pack.SetString(Utlis_1.Utlis.GenerateHexString(4));
        Pack.SetHex([0, 0, 0, 4]);
        Pack.SetHex(Byte_1["default"].FillToHexList(this.ReqPack.length + 4, 4));
        var Block = Pack.Get();
        var Body = __spreadArrays(Byte_1["default"].FillToHexList(Block.length, 4), Block, this.ReqPack);
        this.CmdPack = new Tea_1["default"]().Encrypt(Body, this.D2Key);
    };
    SSOPackType.prototype.Generate = function () {
        var Pack = new Utlis_1.Package();
        this.GenerateHead();
        Pack.SetHex([0, 0, 0, 11]);
        Pack.SetHex([1]);
        Pack.SetHex(this.Seq);
        Pack.SetHex([0, 0, 0, 0]);
        Pack.SetHex([this.QQBuff.length + 4]);
        Pack.SetHex(this.QQBuff);
        Pack.SetHex(this.CmdPack);
        var Data = Pack.Get();
        return __spreadArrays(Byte_1["default"].FillToHexList(Data.length + 4, 4), Data);
    };
    return SSOPackType;
}());
var Assembly = /** @class */ (function () {
    function Assembly(Bot) {
        this.Bot = Bot;
    }
    Assembly.prototype.GetUndealCount = function () {
        var Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        Pack.Cmd = "SQQzoneSvc.getUndealCount";
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        Pack.ReqPack = SQQzoneSvc_1["default"].GetUndealCount(this.Bot.Info.QQ, this.Bot.Info.QQBuff, this.Bot.Info.DeviceInfo.Mac, this.Bot.Info.DeviceInfo.Imsi);
        return Pack.Generate();
    };
    Assembly.prototype.GetGroupMemberList = function (TargetGroupUin, TargetGoupCode, NextUin) {
        var Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Cmd = "friendlist.GetTroopMemberListReq";
        Pack.Seq = this.Bot.Info.Seq;
        Pack.ReqPack = Group_1["default"].GetMemberList(this.Bot.Info.QQ, this.Bot.Info.RequestPackSeq, TargetGoupCode, TargetGroupUin, NextUin ? NextUin : 0);
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    };
    Assembly.prototype.GetFriendList = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        Pack.Cmd = "friendlist.getFriendGroupList";
        if (args.length) {
            var Reflush = args[0], StartIndex = args[1], GroupstartIndex = args[2], GetgroupCount = args[3], GetGroupInfo = args[4];
            Pack.ReqPack = Friend_1["default"].GetListFirst(this.Bot.Info.QQ, Reflush, StartIndex, GroupstartIndex, GetgroupCount, GetGroupInfo);
        }
        else {
            Pack.ReqPack = Friend_1["default"].GetListFirst(this.Bot.Info.QQ);
        }
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    };
    Assembly.prototype.GetGroupList = function () {
        var Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        Pack.Cmd = "friendlist.GetTroopListReqV2";
        Pack.ReqPack = Group_1["default"].GetList(this.Bot.Info.RequestPackSeq, this.Bot.Info.QQ);
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    };
    Assembly.prototype.SendGroupMessage = function (GroupCode, MessageStruct) {
        var Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Cmd = "MessageSvc.PbSendMsg";
        Pack.Seq = this.Bot.Info.Seq;
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        Pack.ReqPack = Msg_1["default"].GroupPbSendMsg(GroupCode, this.Bot.MsgSeq, MessageStruct);
        return Pack.Generate();
    };
    Assembly.prototype.SendFriendMessage = function (ToUin, MessageStruct) {
        var Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Cmd = "MessageSvc.PbSendMsg";
        Pack.Seq = this.Bot.Info.Seq;
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        Pack.ReqPack = Msg_1["default"].FriendPbSendMsg(ToUin, this.Bot.MsgSeq, this.Bot.SyncCookieConst1, this.Bot.SyncCookieConst2, MessageStruct);
        return Pack.Generate();
    };
    Assembly.prototype.GetMessage = function () {
        var Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        if (this.Bot.SyncCookie) {
            Pack.ReqPack = Msg_1["default"].PbGetMsgReq(this.Bot.SyncCookieConst1, this.Bot.SyncCookieConst2, this.Bot.SyncCookie);
        }
        else {
            Pack.ReqPack = Msg_1["default"].PbGetMsgReq(this.Bot.SyncCookieConst1, this.Bot.SyncCookieConst2);
        }
        Pack.Cmd = "MessageSvc.PbGetMsg";
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    };
    Assembly.prototype.DelMessage = function (MsgItem) {
        var Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        Pack.ReqPack = Msg_1["default"].PgDeleteMsgReq(MsgItem);
        Pack.Cmd = "MessageSvc.PbDeleteMsg";
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    };
    Assembly.prototype.ShutUpGroupMember = function (GroupCode, GroupMember, Time) {
        var Pack = new SSOPackType();
        Pack.QQBuff = this.Bot.Info.QQBuff;
        Pack.Seq = this.Bot.Info.Seq;
        Pack.ReqPack = OidbSvc_1["default"].Svc570_8(GroupCode, GroupMember, Time);
        Pack.Cmd = "OidbSvc.0x570_8";
        Pack.D2Key = this.Bot.Info.KeyStore.D2Key;
        return Pack.Generate();
    };
    Assembly.prototype.UploadFriendImage = function () { };
    Assembly.prototype.UploadGroupImage = function () { };
    Assembly.prototype.Heartbeat = function () {
        var CmdPack = new Heartbeat_1["default"]({
            Imei: this.Bot.Info.DeviceInfo.Imei.ToHexArray(),
            Ksid: this.Bot.Info.KeyStore.Ksid,
            Seq: this.Bot.Info.Seq,
            ProtocolId: this.Bot.ProtocolId
        }).Generate();
        var ReusltPack = new Utlis_1.Package();
        ReusltPack.SetHex([0, 0, 0, 10]);
        ReusltPack.SetHex([
            0
        ]);
        ReusltPack.SetHex([0, 0, 0, 4]);
        ReusltPack.SetHex([
            0, 0, 0, 0
        ]);
        ReusltPack.SetHex(__spreadArrays([
            this.Bot.Info.QQBuff.length + 4
        ], this.Bot.Info.QQBuff));
        ReusltPack.SetHex(CmdPack);
        var Data = ReusltPack.Get();
        return __spreadArrays([0, 0, 0, Data.length + 4], Data);
    };
    Assembly.prototype.SetStatus = function (Type) {
        if (Type === void 0) { Type = true; }
        var PackBody = SvcRegister_1["default"].SetStatus(Type, this.Bot.Info.QQ, this.Bot.Info.DeviceInfo.Guid.ToHexArray(), this.Bot.Info.DeviceInfo.AndroidVersion, this.Bot.Info.DeviceInfo.Model);
        var PackHead = new Utlis_1.Package();
        var Cmd = "StatSvc.register";
        var CmdBuff = Cmd.ToHexArray();
        var CmdLen = Byte_1["default"].FillToHexList(CmdBuff.length + 4, 4);
        PackHead.SetHex(this.Bot.Info.Seq);
        PackHead.SetHex(this.Bot.ProtocolId);
        PackHead.SetHex(this.Bot.ProtocolId);
        PackHead.SetHex([1, 0, 0, 0]);
        PackHead.SetHex([0, 0, 0, 0]);
        PackHead.SetHex([0, 0, 1, 0]);
        PackHead.SetHex(Byte_1["default"].FillToHexList(this.Bot.Info.KeyStore.Key010A.length + 4, 4));
        PackHead.SetHex(this.Bot.Info.KeyStore.Key010A);
        PackHead.SetHex(CmdLen);
        PackHead.SetHex(CmdBuff);
        PackHead.SetHex([0, 0, 0, 8]);
        PackHead.SetString(Utlis_1.Utlis.GenerateHexString(4));
        PackHead.SetHex([0, 0, 0, this.Bot.Info.DeviceInfo.Imei.length + 4]);
        PackHead.SetHex(this.Bot.Info.DeviceInfo.Imei.ToHexArray());
        PackHead.SetHex([0, 0, 0, 4]);
        var Variable = this.Bot.Info.DeviceInfo.Variable.ToHexArray();
        PackHead.SetHex([0, Variable.length + 2]);
        PackHead.SetHex(Variable);
        var BlockData = PackHead.Get();
        var Head = __spreadArrays([0, 0, 0, BlockData.length + 4], BlockData);
        var TeaClass = new Tea_1["default"]();
        var EncryptData = TeaClass.Encrypt(__spreadArrays(Head, [0, 0, 0, PackBody.length + 4], PackBody), this.Bot.Info.KeyStore.D2Key);
        var ResultPack = new Package10();
        ResultPack.PackType = 1;
        ResultPack.QQBuff = this.Bot.Info.QQBuff;
        ResultPack.Extra = __spreadArrays(Byte_1["default"].FillToHexList(this.Bot.Info.KeyStore.Key0143.length + 4, 4), this.Bot.Info.KeyStore.Key0143, [
            0, 0, 0
        ]);
        ResultPack.Data = EncryptData;
        return ResultPack.Generate();
    };
    Assembly.prototype.Login = function () {
        var PackBody = Login_1["default"].PasswordLogin(this.Bot.ProtocolId, this.Bot.Info.DeviceInfo, this.Bot.Info.QQHex, this.Bot.Info.QQBuff, this.Bot.Info.PassWord, this.Bot.Info.TgKey, this.Bot.Info.Seq, this.Bot.Info.EcdhKey.ShareKey, this.Bot.Info.EcdhKey.PublicKey);
        var ResultPack = new Package10();
        ResultPack.PackType = 2;
        ResultPack.QQBuff = this.Bot.Info.QQBuff;
        ResultPack.Data = PackBody;
        ResultPack.Extra = [0, 0, 0, 4, 0, 0, 0];
        return ResultPack.Generate();
    };
    return Assembly;
}());
module.exports = Assembly;
