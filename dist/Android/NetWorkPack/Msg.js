"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Msg_1 = __importDefault(require("../Proto/Build/Msg"));
const Utlis_1 = require("../../Utlis");
let TextPbReserver = "eAD4AQDIAgA=";
let TextMessageTemplate = {
    "Text": {
        "Str": "",
        "Link": "",
        "AttrBuff6": "",
        "AttrBuff7": "",
        "Buff": "",
        "PbReserve": ""
    },
};
let GeneralFlags = {
    "GeneralFlags": {
        "Bubblediytextid": 0,
        "Groupflagnew": 0,
        "Uin": "0",
        "Rpid": "",
        "Prpfold": 0,
        "Longtextflag": 0,
        "Longtextresid": "",
        "Grouptype": 0,
        "Touinflag": 0,
        "Glamourlevel": 0,
        "Memberlevel": 0,
        "Grouprankseq": "0",
        "Olympictorch": 0,
        "Babyqguidemsgcookie": "",
        "Uin32expertflag": 0,
        "Bubblesubid": 0,
        "Pendantid": "0",
        "Rpindex": "",
        "Pbreserve": ""
    }
};
let JsonTemplate = {
    "RoutingHead": {},
    "ContentHead": { "PkgNum": 1, "PkgIndex": 0, "DivSeq": 0, "AutoReply": 0 },
    "MsgBody": {
        "RichText": {
            "MutableList": []
        }, "MsgContent": "", "MsgEncryptContent": ""
    },
    "MsgSeq": 0,
    "MsgRand": 0,
    "SyncCookie": "",
    "MsgVia": 1,
    "DataStatist": 0,
    "MultiSendSeq": 0
};
let LongTextPbReserver = null;
const CopyJson = (JSONObject) => {
    return JSON.parse(JSON.stringify(JSONObject));
};
class Msg {
    TempPbSendMsg() {
    }
    static GroupPbSendMsg(GroupCode, MsgSeq, MessageStruct) {
        let MsgRand = Utlis_1.Utlis.RnadomNumber(1160113631, 1190113631);
        let PbStruct = JSON.parse(JSON.stringify(JsonTemplate));
        PbStruct.RoutingHead["Grp"] = { "GroupCode": GroupCode.toString() };
        PbStruct.MsgSeq = MsgSeq;
        PbStruct.MsgRand = MsgRand;
        let PbGeneralFlagsStruct = JSON.parse(JSON.stringify(GeneralFlags));
        switch (MessageStruct.Type) {
            case "Text":
                let TextStrcut = JSON.parse(JSON.stringify(TextMessageTemplate));
                TextStrcut.Text.Str = MessageStruct.Content;
                PbGeneralFlagsStruct.GeneralFlags.Pbreserve = TextPbReserver;
                PbStruct.MsgBody.RichText.MutableList.push(TextStrcut);
                PbStruct.MsgBody.RichText.MutableList.push(PbGeneralFlagsStruct);
                break;
            case "Coustom":
                break;
        }
        let PbSendMsg = Msg_1.default.Msg.PbSendMsg.fromObject(PbStruct);
        return Array.from(Msg_1.default.Msg.PbSendMsg.encode(PbSendMsg).finish());
    }
    static FriendPbSendMsg(ToUin, MsgSeq, Const1, Const2, MessageStruct) {
        let MsgRand = Utlis_1.Utlis.RnadomNumber(1160113631, 1190113631);
        let PbStruct = JSON.parse(JSON.stringify(JsonTemplate));
        PbStruct.RoutingHead["C2c"] = { "ToUin": ToUin.toString() };
        PbStruct.MsgSeq = MsgSeq;
        PbStruct.MsgRand = MsgRand;
        let PbGeneralFlagsStruct = JSON.parse(JSON.stringify(GeneralFlags));
        switch (MessageStruct.Type) {
            case "Text":
                let TextStrcut = JSON.parse(JSON.stringify(TextMessageTemplate));
                TextStrcut.Text.Str = MessageStruct.Content;
                PbGeneralFlagsStruct.GeneralFlags.Pbreserve = TextPbReserver;
                PbStruct.MsgBody.RichText.MutableList.push(TextStrcut);
                PbStruct.MsgBody.RichText.MutableList.push(PbGeneralFlagsStruct);
                break;
            case "Coustom":
                break;
        }
        let CurrentTime = Math.floor(new Date().getTime() / 1000);
        let SyncCookie = Msg_1.default.Msg.SyncCookie.encode({
            time1: null,
            time2: CurrentTime,
            param1: Utlis_1.Utlis.RnadomNumber(2578082878242715600, 8272108514498746855),
            param2: Utlis_1.Utlis.RnadomNumber(2578082878242715600, 8272108514498746855),
            param3: Const1,
            param4: Const2,
            param5: 29,
            LastSyncTime: null,
            param6: 0
        }).finish();
        let PbSendMsg = Msg_1.default.Msg.PbSendMsg.fromObject(PbStruct);
        PbSendMsg.SyncCookie = SyncCookie;
        return Array.from(Msg_1.default.Msg.PbSendMsg.encode(PbSendMsg).finish());
    }
    static PgDeleteMsgReq(MsgItem) {
        let MsgList = [];
        let Sturct = {
            MsgList: MsgList
        };
        MsgItem.map((value => {
            Sturct.MsgList.push({
                FromUin: value.FromUin,
                ToUin: value.ToUin,
                MsgType: value.MsgType,
                MsgSeq: value.MsgSeq,
                MsgUid: value.MsgUid,
                Sig: ""
            });
        }));
        let PbDelMsg = Msg_1.default.Msg.PbDeleteMsgReq.fromObject(Sturct);
        return Array.from(Msg_1.default.Msg.PbDeleteMsgReq.encode(PbDelMsg).finish());
    }
    static PbGetMsgReq(Const1, Const2, SereverSyncCookie) {
        let CurrentTime = Math.floor(new Date().getTime() / 1000);
        let SyncCookie;
        if (SereverSyncCookie) {
            SyncCookie = SereverSyncCookie;
        }
        else {
            SyncCookie = Msg_1.default.Msg.SyncCookie.encode({
                time1: null,
                time2: CurrentTime,
                param1: Utlis_1.Utlis.RnadomNumber(2578082878242715600, 8272108514498746855),
                param2: Utlis_1.Utlis.RnadomNumber(2578082878242715600, 8272108514498746855),
                param3: Const1,
                param4: Const2,
                param5: 29,
                LastSyncTime: null,
                param6: 0
            }).finish();
        }
        let GetMsgPack = Msg_1.default.Msg.PbGetMsgReq.encode({
            MsgReqType: 1,
            ContextFlag: 1,
            RambleFlag: 0,
            LatestRambleNumber: 20,
            OtherRambleNumber: 3,
            OnlineSyncFlag: 1,
            WhisperSessionId: 0,
            Flag: Msg_1.default.Msg.SyncFlag.Start,
            SyncCookie: SyncCookie,
            ServerBuf: null,
            MsgCtrlBuf: null,
        }).finish();
        return Array.from(GetMsgPack);
    }
}
module.exports = Msg;
