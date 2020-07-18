import QQBase from '../Interface/QQ'
import {Utlis} from '../Utlis';
import Ecdh from './Ecdh'
import TcpHandle from "./TcpHandle"
import './Struct'
import '../Expansion'

import EventManage from './EventManage'
import CommandHandle from "./CommandHandle";
import Byte from "../Byte";

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
]

/***
 * 安卓手机 0
 * 安卓平板 1 可跟手机同时存在
 */
const enum Protocol {
    Andorid,
    Apad
}

class QQAndroid implements QQBase {
    public TcpClient;
    public Info: QQAndroidInfo = {} as QQAndroidInfo
    public CommandHandle: CommandHandle
    public Logintime: number = 0
    //long 范围
    public SyncCookieConst1: number = Utlis.RnadomNumber(4473458544039327315, 8272108514498746855)
    public SyncCookieConst2: number = Utlis.RnadomNumber(4473458544039327315, 8272108514498746855)
    private EventMange = new EventManage()
    public ProtocolType: string = ""
    public ProtocolId: Array<number> = []
    public SyncCookie?: Uint8Array;
    public MsgSeq: number = 220
    public ReqTimeOut = 0

    constructor(Version: Protocol, TimeOut: number = 10) {
        let result = Ecdh.Generate()
        if (result) {
            this.Info.EcdhKey = result
        } else {
            process.exit(0)
        }
        switch (Version) {
            case Protocol.Andorid:
                this.ProtocolType = "Android"
                this.ProtocolId = [32, 2, 241, 77]
                break;
            case Protocol.Apad:
                this.ProtocolType = "Pad"
                this.ProtocolId = [32, 2, 236, 9]
                break;
        }
        this.ReqTimeOut = TimeOut
        this.Info.TgKey = Utlis.GenerateHexString(16).HexStringToNumber()
        this.CommandHandle = new CommandHandle(this, this.EventMange)
        this.TcpClient = new TcpHandle(this.EventMange)
        this.Info.Seq = Byte.FillToHexList(10000, 4)
        this.Info.RequestPackSeq = 1921334513
        this.EventMange.Trigger("Initialize", {})
    }

    public SetGlobalMemoryObserve(Flag: boolean) {
        this.EventMange.SetGlobalMemoryObserve(Flag)
    }

    public GetCookies(): WebCookies {
        return this.Info.KeyStore.WebCookies
    }


    public ShutUpGroupMember(GroupCode: number, GroupMember: number, Time: number) {
        this.CommandHandle.Sumbit(Cmd.OidbSvc0x570_8, GroupCode, GroupMember, Time)
    }

    public SetLoginConfig(
        Config: DeviceConfig = {
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
        },
    ) {
        this.Info.DeviceInfo = Config
        this.Info.DeviceInfo.Variable = "|" + this.Info.DeviceInfo.Imsi + "|" + "A8.1.8.1470fc04"
    }

    /***
     *
     * @constructor 异常 心跳包超时等事件
     */
    public OnClose(CallBack: Function) {
        this.EventMange.OnEvent("Close", (Params) => {
            // 参数 { Message:string }
            CallBack(Params)
        })
    }

    public async Login(QQ: number, PassWord: string): Promise<number> {
        if (!this.Info.DeviceInfo) {
            this.SetLoginConfig()
        }
        //现在QQ最多多少位了???
        if (QQ < 10000) {
            return Promise.reject(LoginStatus.error)
        }
        this.Info.QQ = QQ
        this.Info.QQBuff = Buffer.from(QQ.toString()).toJSON().data
        this.Info.QQHex = Byte.FillToHexList(QQ, 4)
        for (let i = 0; i < SereverList.length; i++) {
            let El = SereverList[i]
            let Flag = await this.TcpClient.Connenct(El.ip, El.port)
            if (Flag) {
                break;
            }
        }
        this.Info.PassWord = PassWord
        this.CommandHandle.Sumbit(Cmd.WtloginLogin)
        return new Promise((resolve) => {
            this.EventMange.RegisterOnceEvent("LoginNotify", (Result: EventParmas) => {
                if ("Flag" in Result) {
                    if (Result.Flag === LoginStatus.success) {
                        this.CommandHandle.Sumbit(Cmd.StatSvcRegister, true)
                    }
                    resolve(Result.Flag)
                }

            })
        })
    }


    GetFirendList(CallBack: Function) {
        this.CommandHandle.Sumbit(Cmd.GetFriendListReq)
        this.EventMange.OnEvent("GetFriendListFinish", (Params => {
            CallBack(Params.FriendList)
        }))
    }

    GetGroupList(CallBack: Function) {
        this.CommandHandle.Sumbit(Cmd.GetTroopListReqV2SimplifyReq)
        this.EventMange.OnEvent("GetGroupListFinish", (Params => {
            CallBack(Params.GroupList)
        }))
    }

    GetGroupMembers(GroupCode: number, GroupUin: number, CallBack: Function) {
        this.CommandHandle.Sumbit(Cmd.GetTroopMemberListReq, GroupCode, GroupUin)
        this.EventMange.OnEvent("GetGroupMemberListFinish", (Params => {
            CallBack(Params.MemberList)
        }))
    }

    public OnFriendMessage(CallBack: Function) {
        this.EventMange.OnEvent("FriendMessage", (Message) => {
            CallBack(Message)
        })
    }

    public OnGroupMessage(CallBack: Function) {
        this.EventMange.OnEvent("GroupMessage", (Message) => {
            CallBack(Message)
        })
    }

    public OnRegister(CallBack: Function) {
        this.EventMange.OnEvent("Register", () => {
            CallBack()
        })
    }

    SendFriendMessage(ToUin: number, MessageStruct: MessageStruct) {
        this.CommandHandle.Sumbit(Cmd.MessageSvcPbSendMsg, ToUin, MessageStruct, "Friend")

    }

    SendGroupMessage(GroupCode: number, MessageStruct: MessageStruct) {
        this.CommandHandle.Sumbit(Cmd.MessageSvcPbSendMsg, GroupCode, MessageStruct, "Group")

    }
}

export = QQAndroid