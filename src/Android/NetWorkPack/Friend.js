"use strict";
var FriendTars_1 = require("../Tars/Build/FriendTars");
var Vec0xd50_1 = require("../Proto/Build/Vec0xd50");
var stream_1 = require("@tars/stream");
var TarsRequesPack_1 = require("../Tars/TarsRequesPack");
var Friend = /** @class */ (function () {
    function Friend() {
    }
    Friend.GetListFirst = function (QQ, Reflush, StartIndex, GroupStartIndex, GetGroupCount, GetGroupInfo) {
        if (Reflush === void 0) { Reflush = 0; }
        if (StartIndex === void 0) { StartIndex = 0; }
        if (GroupStartIndex === void 0) { GroupStartIndex = 0; }
        if (GetGroupCount === void 0) { GetGroupCount = 0; }
        if (GetGroupInfo === void 0) { GetGroupInfo = 0; }
        var ReqPack = new TarsRequesPack_1["default"]();
        ReqPack.SetPackReqId(1921334514);
        ReqPack.SetPackFunc("GetFriendListReq");
        ReqPack.SetPackServantName("mqq.IMService.FriendListServiceServantObj");
        ReqPack.SetPackVersion(3);
        ReqPack.SetPackType(3);
        ReqPack.SetMapKey("FL");
        var GetFriendListReq = FriendTars_1.FriendTars.GetFriendListReq["new"]();
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
        // CmdPack.UinList
        GetFriendListReq.EAppType = 0;
        GetFriendListReq.IfGetDOVId = 0;
        var Vec0xd50ReqProtocol = Vec0xd50_1.Vec0xd50.ReqBody.encode({
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
        var LongList = new stream_1["default"].List(stream_1["default"].Int64);
        LongList.push(13580);
        LongList.push(13581);
        LongList.push(13582);
        GetFriendListReq.VecSnsTypelist = LongList;
        GetFriendListReq.Vec0xd50Req = new stream_1["default"].BinBuffer(Buffer.from(Vec0xd50ReqProtocol.finish()));
        ReqPack.SetStruct(GetFriendListReq);
        return ReqPack.Generate();
    };
    return Friend;
}());
module.exports = Friend;
