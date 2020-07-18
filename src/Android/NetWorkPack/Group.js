"use strict";
var GroupTars_1 = require("../Tars/Build/GroupTars");
var TarsRequesPack_1 = require("../Tars/TarsRequesPack");
var Group = /** @class */ (function () {
    function Group() {
    }
    /***
     *
     * @param RequestId
     * @param QQ
     *
     * @constructor
     */
    Group.GetList = function (RequestId, QQ) {
        var ReqPack = new TarsRequesPack_1["default"]();
        ReqPack.SetPackFunc("GetTroopListReqV2Simplify");
        ReqPack.SetPackServantName("mqq.IMService.FriendListServiceServantObj");
        ReqPack.SetPackVersion(3);
        ReqPack.SetPackReqId(RequestId);
        ReqPack.SetMapKey("GetTroopListReqV2Simplify");
        var GetTroopListReqV2Simplify = GroupTars_1.GroupTars.GetTroopListReqV2SimplifyReq["new"]();
        GetTroopListReqV2Simplify.Uin = QQ;
        GetTroopListReqV2Simplify.GetMSFMsgFlag = 0;
        GetTroopListReqV2Simplify.GroupFlagExt = 1;
        GetTroopListReqV2Simplify.ShVersion = 7;
        GetTroopListReqV2Simplify.DwCompanyId = 0;
        GetTroopListReqV2Simplify.VersionNum = 1;
        GetTroopListReqV2Simplify.GetLongGroupName = 1;
        ReqPack.SetStruct(GetTroopListReqV2Simplify);
        return ReqPack.Generate();
    };
    Group.GetMemberList = function (QQ, RequestId, TargetGroupCode, TargetGroupUin, NextUin) {
        if (NextUin === void 0) { NextUin = 0; }
        var ReqPack = new TarsRequesPack_1["default"]();
        ReqPack.SetPackFunc("GetTroopMemberListReq");
        ReqPack.SetPackServantName("mqq.IMService.FriendListServiceServantObj");
        ReqPack.SetPackVersion(3);
        ReqPack.SetPackReqId(RequestId);
        ReqPack.SetMapKey("GTML");
        var GetTroopMemberListReq = GroupTars_1.GroupTars.GetTroopMemberListReq["new"]();
        GetTroopMemberListReq.GroupCode = TargetGroupCode;
        GetTroopMemberListReq.GroupUin = TargetGroupUin;
        GetTroopMemberListReq.Uin = QQ;
        GetTroopMemberListReq.ReqType = 0;
        GetTroopMemberListReq.Version = 2;
        GetTroopMemberListReq.NextUin = NextUin;
        ReqPack.SetStruct(GetTroopMemberListReq);
        return ReqPack.Generate();
    };
    return Group;
}());
module.exports = Group;
