"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const FriendTars_1 = require("../Tars/Build/FriendTars");
const Vec0xd50_1 = require("../Proto/Build/Vec0xd50");
const stream_1 = __importDefault(require("@tars/stream"));
const TarsRequesPack_1 = __importDefault(require("../Tars/TarsRequesPack"));
class Friend {
    static GetListFirst(QQ, Reflush = 0, StartIndex = 0, GroupStartIndex = 0, GetGroupCount = 0, GetGroupInfo = 0) {
        let ReqPack = new TarsRequesPack_1.default();
        ReqPack.SetPackReqId(1921334514);
        ReqPack.SetPackFunc("GetFriendListReq");
        ReqPack.SetPackServantName("mqq.IMService.FriendListServiceServantObj");
        ReqPack.SetPackVersion(3);
        ReqPack.SetPackType(3);
        ReqPack.SetMapKey("FL");
        let GetFriendListReq = FriendTars_1.FriendTars.GetFriendListReq.new();
        GetFriendListReq.ReqType = 3;
        GetFriendListReq.Uin = QQ;
        GetFriendListReq.StartIndex = StartIndex;
        GetFriendListReq.IfReflush = Reflush;
        GetFriendListReq.GetfriendCount = 150;
        GetFriendListReq.GroupId = 0;
        GetFriendListReq.IfGetGroupInfo = GetGroupInfo;
        GetFriendListReq.GroupstartIndex = GroupStartIndex;
        GetFriendListReq.GetgroupCount = GetGroupCount;
        GetFriendListReq.IfGetMSFGroup = 0;
        GetFriendListReq.IfShowTermType = 1;
        GetFriendListReq.Version = 27;
        GetFriendListReq.EAppType = 0;
        GetFriendListReq.IfGetDOVId = 0;
        let Vec0xd50ReqProtocol = Vec0xd50_1.Vec0xd50.ReqBody.encode({
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
        });
        let LongList = new stream_1.default.List(stream_1.default.Int64);
        LongList.push(13580);
        LongList.push(13581);
        LongList.push(13582);
        GetFriendListReq.VecSnsTypelist = LongList;
        GetFriendListReq.Vec0xd50Req = new stream_1.default.BinBuffer(Buffer.from(Vec0xd50ReqProtocol.finish()));
        ReqPack.SetStruct(GetFriendListReq);
        return ReqPack.Generate();
    }
}
module.exports = Friend;
