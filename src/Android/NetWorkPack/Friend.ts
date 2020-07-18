import {FriendTars} from "../Tars/Build/FriendTars"
import {Vec0xd50} from "../Proto/Build/Vec0xd50"
import Tars from "@tars/stream"
import TarsRequestPack from "../Tars/TarsRequesPack"

class Friend {


    public static GetListFirst(QQ: number, Reflush: number = 0, StartIndex: number = 0, GroupStartIndex: number = 0, GetGroupCount: number = 0, GetGroupInfo: number = 0) {

        let ReqPack = new TarsRequestPack()
        ReqPack.SetPackReqId(1921334514)
        ReqPack.SetPackFunc("GetFriendListReq")
        ReqPack.SetPackServantName("mqq.IMService.FriendListServiceServantObj")
        ReqPack.SetPackVersion(3)
        ReqPack.SetPackType(3)

        ReqPack.SetMapKey("FL")

        let GetFriendListReq = FriendTars.GetFriendListReq.new()
        GetFriendListReq.ReqType = 3
        GetFriendListReq.Uin = QQ
        GetFriendListReq.StartIndex = StartIndex
        GetFriendListReq.IfReflush = Reflush
        GetFriendListReq.GetfriendCount = 150
        GetFriendListReq.GroupId = 0
        GetFriendListReq.IfGetGroupInfo = GetGroupInfo
        GetFriendListReq.GroupstartIndex = GroupStartIndex
        GetFriendListReq.GetgroupCount = GetGroupCount
        GetFriendListReq.IfGetMSFGroup = 0
        GetFriendListReq.IfShowTermType = 1
        GetFriendListReq.Version = 27
        // CmdPack.UinList
        GetFriendListReq.EAppType = 0
        GetFriendListReq.IfGetDOVId = 0
        let Vec0xd50ReqProtocol = Vec0xd50.ReqBody.encode({
            Appid: 10002,
            MaxPkgSize: 0,
            StartTime: 0,
            StartIndex: 0,
            ReqNum: 0,
            ReqMusicSwitch: 1,
            ReqMutualmarkAlienation: 1,
            ReqMutualmarkScore: 0,
            ReqKsingSwitch: 1,
            ReqMutualmarkLbsshare: 1
        })
        let LongList = new Tars.List(Tars.Int64)
        LongList.push(
            13580
        )
        LongList.push(
            13581
        )
        LongList.push(
            13582
        )
        GetFriendListReq.VecSnsTypelist = LongList
        GetFriendListReq.Vec0xd50Req = new Tars.BinBuffer(Buffer.from(Vec0xd50ReqProtocol.finish()))
        ReqPack.SetStruct(GetFriendListReq)
        return ReqPack.Generate()
    }
}

export = Friend