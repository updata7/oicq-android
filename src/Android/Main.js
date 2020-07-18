"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Utlis_1 = require("../Utlis");
var Ecdh_1 = require("./Ecdh");
var TcpHandle_1 = require("./TcpHandle");
require("./Struct");
require("../Expansion");
var EventManage_1 = require("./EventManage");
var CommandHandle_1 = require("./CommandHandle");
var Byte_1 = require("../Byte");
var SereverList = [
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
var QQAndroid = /** @class */ (function () {
    function QQAndroid(Version, TimeOut) {
        if (TimeOut === void 0) { TimeOut = 10; }
        this.Info = {};
        this.Logintime = 0;
        //long 范围
        this.SyncCookieConst1 = Utlis_1.Utlis.RnadomNumber(4473458544039327315, 8272108514498746855);
        this.SyncCookieConst2 = Utlis_1.Utlis.RnadomNumber(4473458544039327315, 8272108514498746855);
        this.EventMange = new EventManage_1["default"]();
        this.ProtocolType = "";
        this.ProtocolId = [];
        this.MsgSeq = 220;
        this.ReqTimeOut = 0;
        var result = Ecdh_1["default"].Generate();
        if (result) {
            this.Info.EcdhKey = result;
        }
        else {
            process.exit(0);
        }
        switch (Version) {
            case 0 /* Andorid */:
                this.ProtocolType = "Android";
                this.ProtocolId = [32, 2, 241, 77];
                break;
            case 1 /* Apad */:
                this.ProtocolType = "Pad";
                this.ProtocolId = [32, 2, 236, 9];
                break;
        }
        this.ReqTimeOut = TimeOut;
        this.Info.TgKey = Utlis_1.Utlis.GenerateHexString(16).HexStringToNumber();
        this.CommandHandle = new CommandHandle_1["default"](this, this.EventMange);
        this.TcpClient = new TcpHandle_1["default"](this.EventMange);
        this.Info.Seq = Byte_1["default"].FillToHexList(10000, 4);
        this.Info.RequestPackSeq = 1921334513;
        this.EventMange.Trigger("Initialize", {});
    }
    QQAndroid.prototype.SetGlobalMemoryObserve = function (Flag) {
        this.EventMange.SetGlobalMemoryObserve(Flag);
    };
    QQAndroid.prototype.GetCookies = function () {
        return this.Info.KeyStore.WebCookies;
    };
    QQAndroid.prototype.ShutUpGroupMember = function (GroupCode, GroupMember, Time) {
        this.CommandHandle.Sumbit("OidbSvc.0x570_8" /* OidbSvc0x570_8 */, GroupCode, GroupMember, Time);
    };
    QQAndroid.prototype.SetLoginConfig = function (Config) {
        if (Config === void 0) { Config = {
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
        }; }
        this.Info.DeviceInfo = Config;
        this.Info.DeviceInfo.Variable = "|" + this.Info.DeviceInfo.Imsi + "|" + "A8.1.8.1470fc04";
    };
    /***
     *
     * @constructor 异常 心跳包超时等事件
     */
    QQAndroid.prototype.OnClose = function (CallBack) {
        this.EventMange.OnEvent("Close", function (Params) {
            // 参数 { Message:string }
            CallBack(Params);
        });
    };
    QQAndroid.prototype.Login = function (QQ, PassWord) {
        return __awaiter(this, void 0, void 0, function () {
            var i, El, Flag;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.Info.DeviceInfo) {
                            this.SetLoginConfig();
                        }
                        //现在QQ最多多少位了???
                        if (QQ < 10000) {
                            return [2 /*return*/, Promise.reject(5 /* error */)];
                        }
                        this.Info.QQ = QQ;
                        this.Info.QQBuff = Buffer.from(QQ.toString()).toJSON().data;
                        this.Info.QQHex = Byte_1["default"].FillToHexList(QQ, 4);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < SereverList.length)) return [3 /*break*/, 4];
                        El = SereverList[i];
                        return [4 /*yield*/, this.TcpClient.Connenct(El.ip, El.port)];
                    case 2:
                        Flag = _a.sent();
                        if (Flag) {
                            return [3 /*break*/, 4];
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.Info.PassWord = PassWord;
                        this.CommandHandle.Sumbit("wtlogin.login" /* WtloginLogin */);
                        return [2 /*return*/, new Promise(function (resolve) {
                                _this.EventMange.RegisterOnceEvent("LoginNotify", function (Result) {
                                    if ("Flag" in Result) {
                                        if (Result.Flag === 0 /* success */) {
                                            _this.CommandHandle.Sumbit("StatSvc.register" /* StatSvcRegister */, true);
                                        }
                                        resolve(Result.Flag);
                                    }
                                });
                            })];
                }
            });
        });
    };
    QQAndroid.prototype.GetFirendList = function (CallBack) {
        this.CommandHandle.Sumbit("GetFriendListReq" /* GetFriendListReq */);
        this.EventMange.OnEvent("GetFriendListFinish", (function (Params) {
            CallBack(Params.FriendList);
        }));
    };
    QQAndroid.prototype.GetGroupList = function (CallBack) {
        this.CommandHandle.Sumbit("GetTroopListReqV2SimplifyReq" /* GetTroopListReqV2SimplifyReq */);
        this.EventMange.OnEvent("GetGroupListFinish", (function (Params) {
            CallBack(Params.GroupList);
        }));
    };
    QQAndroid.prototype.GetGroupMembers = function (GroupCode, GroupUin, CallBack) {
        this.CommandHandle.Sumbit("GetTroopMemberListReq" /* GetTroopMemberListReq */, GroupCode, GroupUin);
        this.EventMange.OnEvent("GetGroupMemberListFinish", (function (Params) {
            CallBack(Params.MemberList);
        }));
    };
    QQAndroid.prototype.OnFriendMessage = function (CallBack) {
        this.EventMange.OnEvent("FriendMessage", function (Message) {
            CallBack(Message);
        });
    };
    QQAndroid.prototype.OnGroupMessage = function (CallBack) {
        this.EventMange.OnEvent("GroupMessage", function (Message) {
            CallBack(Message);
        });
    };
    QQAndroid.prototype.OnRegister = function (CallBack) {
        this.EventMange.OnEvent("Register", function () {
            CallBack();
        });
    };
    QQAndroid.prototype.SendFriendMessage = function (ToUin, MessageStruct) {
        this.CommandHandle.Sumbit("MessageSvc.PbSendMsg" /* MessageSvcPbSendMsg */, ToUin, MessageStruct, "Friend");
    };
    QQAndroid.prototype.SendGroupMessage = function (GroupCode, MessageStruct) {
        this.CommandHandle.Sumbit("MessageSvc.PbSendMsg" /* MessageSvcPbSendMsg */, GroupCode, MessageStruct, "Group");
    };
    return QQAndroid;
}());
module.exports = QQAndroid;
