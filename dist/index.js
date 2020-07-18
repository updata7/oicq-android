"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = __importDefault(require("../dist/Android/Main"));
let BotConfig = {
    QQ: 770354028,
    PassWord: "qwer34567"
};
let Bot = new Main_1.default(1);
Bot.SetLoginConfig({
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
});
Bot.Login(BotConfig.QQ, BotConfig.PassWord).then((Notify) => {
    switch (Notify) {
        case 0:
            Bot.OnRegister(() => {
                Bot.OnClose(() => {
                    console.log("异常情况");
                });
                console.log("上线成功");
                Bot.SetGlobalMemoryObserve(true);
                setTimeout(() => {
                    Bot.OnFriendMessage((Message) => {
                        if (Message.MsgHead.FromUin.toNumber() === Bot.Info.QQ) {
                        }
                        else {
                        }
                    });
                    Bot.GetGroupList((GroupList) => {
                        let { GroupUin, GroupCode } = GroupList[0];
                        console.log("获取群列表成功,群数量:", GroupList.length);
                        Bot.GetGroupMembers(GroupUin, GroupCode, (Members) => {
                            console.log("群Uin:", GroupUin, "群Code:", GroupCode, "群成员数量:", Members.length);
                        });
                    });
                    Bot.GetFirendList((FirendList) => {
                        console.log("获取好友列表成功 好友数量:", FirendList.length);
                    });
                    Bot.OnGroupMessage((Message) => {
                        console.log("有群消息");
                    });
                }, 2000);
            });
            break;
        case 2:
            break;
        case 4:
            break;
        case 1:
            break;
    }
});
