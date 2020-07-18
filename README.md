# 实现功能
- 群禁言
- 发送文本消息
- 挂机


# 快速开始
```sh
node ./example/index.js 
Linux系统需要 chmod 755 ./dist/Android/index.out
```

# 例子

```sh
import QQAndroid from "../dist/Android/Main";
let BotConfig = {
    QQ: 123456789,
    PassWord: "123456789"
}
//   1安卓平板 0安卓
let Bot = new QQAndroid(1)
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
})

Bot.Login(BotConfig.QQ, BotConfig.PassWord).then((Notify) => {
    switch (Notify) {
        //登录成功
        case 0:
            let WebCookies = Bot.GetCookies()
            console.log(WebCookies)
            Bot.OnRegister(() => {
                Bot.OnClose(() => {
                    console.log("异常情况")
                })
                console.log("上线成功")
                Bot.SetGlobalMemoryObserve(true)
                //一上线就太快拉取列表的话会出现没有返回的情况
                setTimeout(() => {
                    Bot.OnFriendMessage((Message) => {
                        //消息里面包含了自己所发的消息
                        if (Message.MsgHead.FromUin.toNumber() === Bot.Info.QQ) {
                        } else {
                            //禁言群友
                            /*Bot.ShutUpGroupMember(1021213099, 1077348633, 60)*/
                            /*Bot.SendFriendMessage(770354028, {
                                Type: MsgType.Text,
                                Content: "今晚吃什么"
                            })*/
                        }
                        /*console.log(Message)*/
                    })
                    Bot.GetGroupList((GroupList) => {
                        let {GroupUin, GroupCode} = GroupList[0]
                        console.log("获取群列表成功,群数量:", GroupList.length)
                        Bot.GetGroupMembers(GroupUin, GroupCode, (Members) => {
                            console.log("群Uin:", GroupUin, "群Code:", GroupCode, "群成员数量:", Members.length)
                            /*  console.log(Members)*/
                        })
                        /*     console.log(GroupList)*/
                    })
                    Bot.GetFirendList((FirendList) => {
                        console.log("获取好友列表成功 好友数量:", FirendList.length)
                        /*  console.log(FirendList)*/
                    })
                    Bot.OnGroupMessage((Message) => {
                        console.log("有群消息")
                        /*          console.log(Message)*/
                    })
                }, 2000)

            })
            break;
        // 验证码 暂时未处理
        case 2:
            break;
        //设备验证
        case 4:
            break;
        //账号密码错误
        case 1:
            break;
    }
})
```
