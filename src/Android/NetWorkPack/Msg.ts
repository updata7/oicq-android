import MsgPb from "../Proto/Build/Msg"
import {Utlis} from "../../Utlis"


// new Uint8Array([120, 0, 248, 1, 0, 200, 2, 0])
let TextPbReserver = "eAD4AQDIAgA="

let TextMessageTemplate = {
    "Text": {
        "Str": "",
        "Link": "",
        "AttrBuff6": "",
        "AttrBuff7": "",
        "Buff": "",
        "PbReserve": ""
    },
}

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
}

let JsonTemplate = {
    "RoutingHead": {},
    "ContentHead": {"PkgNum": 1, "PkgIndex": 0, "DivSeq": 0, "AutoReply": 0},
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
}

let LongTextPbReserver = null


const CopyJson = (JSONObject: Object): Object => {
    return JSON.parse(JSON.stringify(JSONObject))
}

class Msg {

    public TempPbSendMsg() {
    }

    public static GroupPbSendMsg(GroupCode: number, MsgSeq: number, MessageStruct: MessageStruct) {
        let MsgRand = Utlis.RnadomNumber(1160113631, 1190113631)
        let PbStruct = JSON.parse(JSON.stringify(JsonTemplate))
        PbStruct.RoutingHead["Grp"] = {"GroupCode": GroupCode.toString()}
        PbStruct.MsgSeq = MsgSeq
        PbStruct.MsgRand = MsgRand
        let PbGeneralFlagsStruct = JSON.parse(JSON.stringify(GeneralFlags))
        switch (MessageStruct.Type) {
            case MsgType.Text:
                let TextStrcut = JSON.parse(JSON.stringify(TextMessageTemplate))
                TextStrcut.Text.Str = <string>MessageStruct.Content
                PbGeneralFlagsStruct.GeneralFlags.Pbreserve = TextPbReserver
                PbStruct.MsgBody.RichText.MutableList.push(TextStrcut)
                PbStruct.MsgBody.RichText.MutableList.push(PbGeneralFlagsStruct)
                break;
            case MsgType.Coustom:
                break;
        }
        let PbSendMsg = MsgPb.Msg.PbSendMsg.fromObject(PbStruct)


        return Array.from(MsgPb.Msg.PbSendMsg.encode(PbSendMsg).finish())

        /*       return Array.from(MsgPb.Msg.PbSendMsg.encode(PbStruct).finish())*/
    }

    public static FriendPbSendMsg(ToUin: number, MsgSeq: number, Const1: number, Const2: number, MessageStruct: MessageStruct) {

        let MsgRand = Utlis.RnadomNumber(1160113631, 1190113631)
        let PbStruct = JSON.parse(JSON.stringify(JsonTemplate))
        PbStruct.RoutingHead["C2c"] = {"ToUin": ToUin.toString()}
        PbStruct.MsgSeq = MsgSeq
        PbStruct.MsgRand = MsgRand
        let PbGeneralFlagsStruct = JSON.parse(JSON.stringify(GeneralFlags))
        switch (MessageStruct.Type) {
            case MsgType.Text:
                let TextStrcut = JSON.parse(JSON.stringify(TextMessageTemplate))
                TextStrcut.Text.Str = <string>MessageStruct.Content
                PbGeneralFlagsStruct.GeneralFlags.Pbreserve = TextPbReserver
                PbStruct.MsgBody.RichText.MutableList.push(TextStrcut)
                PbStruct.MsgBody.RichText.MutableList.push(PbGeneralFlagsStruct)
                break;
            case MsgType.Coustom:
                break;
        }
        let CurrentTime = Math.floor(new Date().getTime() / 1000)
        let SyncCookie = MsgPb.Msg.SyncCookie.encode({
            time1: null,
            time2: CurrentTime,
            param1: Utlis.RnadomNumber(2578082878242715600, 8272108514498746855),
            param2: Utlis.RnadomNumber(2578082878242715600, 8272108514498746855),
            param3: Const1,
            param4: Const2,
            param5: 29,
            LastSyncTime: null,
            param6: 0
        }).finish()
        let PbSendMsg = MsgPb.Msg.PbSendMsg.fromObject(PbStruct)
        PbSendMsg.SyncCookie = SyncCookie

        return Array.from(MsgPb.Msg.PbSendMsg.encode(PbSendMsg).finish())


    }

    public static PgDeleteMsgReq(MsgItem: Array<MsgItem>) {
        let MsgList: Array<{
            FromUin: string,
            ToUin: string,
            MsgType: number,
            MsgSeq: number,
            MsgUid: string,
            Sig: string
        }> = []
        let Sturct = {
            MsgList: MsgList
        }
        MsgItem.map((value => {
            Sturct.MsgList.push({
                FromUin: value.FromUin,
                ToUin: value.ToUin,
                MsgType: value.MsgType,
                MsgSeq: value.MsgSeq,
                MsgUid: value.MsgUid,
                Sig: ""
            })
        }))
        let PbDelMsg = MsgPb.Msg.PbDeleteMsgReq.fromObject(Sturct)

        return Array.from(MsgPb.Msg.PbDeleteMsgReq.encode(PbDelMsg).finish())
    }

    public static PbGetMsgReq(Const1: number, Const2: number, SereverSyncCookie?: Uint8Array) {
        let CurrentTime = Math.floor(new Date().getTime() / 1000)
        let SyncCookie;
        if (SereverSyncCookie) {
            SyncCookie = SereverSyncCookie
        } else {
            SyncCookie = MsgPb.Msg.SyncCookie.encode({
                time1: null,
                time2: CurrentTime,
                param1: Utlis.RnadomNumber(2578082878242715600, 8272108514498746855),
                param2: Utlis.RnadomNumber(2578082878242715600, 8272108514498746855),
                param3: Const1,
                param4: Const2,
                param5: 29,
                LastSyncTime: null,
                param6: 0
            }).finish()
        }
        let GetMsgPack = MsgPb.Msg.PbGetMsgReq.encode(
            {
                MsgReqType: 1,
                ContextFlag: 1,
                RambleFlag: 0,
                LatestRambleNumber: 20,
                OtherRambleNumber: 3,
                OnlineSyncFlag: 1,
                WhisperSessionId: 0,
                Flag: MsgPb.Msg.SyncFlag.Start,
                SyncCookie: SyncCookie,
                ServerBuf: null,
                MsgCtrlBuf: null,
            }
        ).finish()
        return Array.from(GetMsgPack)
    }
}

export = Msg