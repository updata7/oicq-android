"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Utlis_1 = require("../Utlis");
const Ecdh_1 = __importDefault(require("./Ecdh"));
const TcpHandle_1 = __importDefault(require("./TcpHandle"));
require("./Struct");
require("../Expansion");
const EventManage_1 = __importDefault(require("./EventManage"));
const CommandHandle_1 = __importDefault(require("./CommandHandle"));
const Byte_1 = __importDefault(require("../Byte"));
const SereverList = [
    {
        ip: "125.94.60.146",
        port: 80
    },
    {
        ip: "183.36.108.144",
        port: 8080
    },
    {
        ip: "120.232.19.182",
        port: 8080
    },
    {
        ip: "125.94.60.146",
        port: 80
    }, {
        ip: "42.81.169.46",
        port: 8080
    }, {
        ip: "114.221.148.59",
        port: 14000
    },
    {
        ip: "42.81.172.147",
        port: 443
    }, {
        ip: "114.221.144.215",
        port: 80
    }, {
        ip: "42.81.172.22",
        port: 80
    }
];
class QQAndroid {
    constructor(Version, TimeOut = 10) {
        this.Info = {};
        this.Logintime = 0;
        this.SyncCookieConst1 = Utlis_1.Utlis.RnadomNumber(4473458544039327315, 8272108514498746855);
        this.SyncCookieConst2 = Utlis_1.Utlis.RnadomNumber(4473458544039327315, 8272108514498746855);
        this.EventMange = new EventManage_1.default();
        this.ProtocolType = "";
        this.ProtocolId = [];
        this.MsgSeq = 220;
        this.ReqTimeOut = 0;
        let result = Ecdh_1.default.Generate();
        if (result) {
            this.Info.EcdhKey = result;
        }
        else {
            process.exit(0);
        }
        switch (Version) {
            case 0:
                this.ProtocolType = "Android";
                this.ProtocolId = [32, 2, 241, 77];
                break;
            case 1:
                this.ProtocolType = "Pad";
                this.ProtocolId = [32, 2, 236, 9];
                break;
        }
        this.ReqTimeOut = TimeOut;
        this.Info.TgKey = Utlis_1.Utlis.GenerateHexString(16).HexStringToNumber();
        this.CommandHandle = new CommandHandle_1.default(this, this.EventMange);
        this.TcpClient = new TcpHandle_1.default(this.EventMange);
        this.Info.Seq = Byte_1.default.FillToHexList(10000, 4);
        this.Info.RequestPackSeq = 1921334513;
        this.EventMange.Trigger("Initialize", {});
    }
    SetGlobalMemoryObserve(Flag) {
        this.EventMange.SetGlobalMemoryObserve(Flag);
    }
    GetCookies() {
        return this.Info.KeyStore.WebCookies;
    }
    ShutUpGroupMember(GroupCode, GroupMember, Time) {
        this.CommandHandle.Sumbit("OidbSvc.0x570_8", GroupCode, GroupMember, Time);
    }
    SetLoginConfig(Config = {
        Brand: "HUAWEI",
        Model: "DUK-AL20",
        Imsi: "460006058178331",
        Imei: "860138155766279",
        AndroidId: "df6a975f61fea11f",
        WifiBssid: "5c:28:b3:17:09:7f",
        WifiSsid: "今晚吃什么",
        Mac: "e6:fd:07:7b:10:49",
        Guid: "a6be1c68-2f85-4b24-b504-4214f9890d68",
        AndroidVersion: "5.1.1",
        BaseBand: "not message",
        Bootloader: "moto",
        InnerVersion: 'eng.se.infra.20191230.112159',
        Fingerprint: "HUAWEI/HUAWEI/DUK-AL20:5.1.1/20171130.376229:user/release-keys",
        Incremental: "eng.se.infra.20191230.112159",
        Codename: "REL",
        ProcVersion: "Linux version 4.0.9 (dxu@mv-mobl1) (gcc version 4.8 (GCC) ) #27 SMP PREEMPT Mon Dec 30 11:06:57 CST 2019",
        Variable: ""
    }) {
        this.Info.DeviceInfo = Config;
        this.Info.DeviceInfo.Variable = "|" + this.Info.DeviceInfo.Imsi + "|" + "A8.1.8.1470fc04";
    }
    OnClose(CallBack) {
        this.EventMange.OnEvent("Close", (Params) => {
            CallBack(Params);
        });
    }
    async Login(QQ, PassWord) {
        if (!this.Info.DeviceInfo) {
            this.SetLoginConfig();
        }
        if (QQ < 10000) {
            return Promise.reject(5);
        }
        this.Info.QQ = QQ;
        this.Info.QQBuff = Buffer.from(QQ.toString()).toJSON().data;
        this.Info.QQHex = Byte_1.default.FillToHexList(QQ, 4);
        for (let i = 0; i < SereverList.length; i++) {
            let El = SereverList[i];
            let Flag = await this.TcpClient.Connenct(El.ip, El.port);
            if (Flag) {
                break;
            }
        }
        this.Info.PassWord = PassWord;
        this.CommandHandle.Sumbit("wtlogin.login");
        return new Promise((resolve) => {
            this.EventMange.RegisterOnceEvent("LoginNotify", (Result) => {
                if ("Flag" in Result) {
                    if (Result.Flag === 0) {
                        this.CommandHandle.Sumbit("StatSvc.register", true);
                    }
                    resolve(Result.Flag);
                }
            });
        });
    }
    GetFirendList(CallBack) {
        this.CommandHandle.Sumbit("GetFriendListReq");
        this.EventMange.OnEvent("GetFriendListFinish", (Params => {
            CallBack(Params.FriendList);
        }));
    }
    GetGroupList(CallBack) {
        this.CommandHandle.Sumbit("GetTroopListReqV2SimplifyReq");
        this.EventMange.OnEvent("GetGroupListFinish", (Params => {
            CallBack(Params.GroupList);
        }));
    }
    GetGroupMembers(GroupCode, GroupUin, CallBack) {
        this.CommandHandle.Sumbit("GetTroopMemberListReq", GroupCode, GroupUin);
        this.EventMange.OnEvent("GetGroupMemberListFinish", (Params => {
            CallBack(Params.MemberList);
        }));
    }
    OnFriendMessage(CallBack) {
        this.EventMange.OnEvent("FriendMessage", (Message) => {
            CallBack(Message);
        });
    }
    OnGroupMessage(CallBack) {
        this.EventMange.OnEvent("GroupMessage", (Message) => {
            CallBack(Message);
        });
    }
    OnRegister(CallBack) {
        this.EventMange.OnEvent("Register", () => {
            CallBack();
        });
    }
    SendFriendMessage(ToUin, MessageStruct) {
        this.CommandHandle.Sumbit("MessageSvc.PbSendMsg", ToUin, MessageStruct, "Friend");
    }
    SendGroupMessage(GroupCode, MessageStruct) {
        this.CommandHandle.Sumbit("MessageSvc.PbSendMsg", GroupCode, MessageStruct, "Group");
    }
}
module.exports = QQAndroid;
