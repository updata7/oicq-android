"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const GroupTars_1 = require("../Tars/Build/GroupTars");
const TarsRequesPack_1 = __importDefault(require("../Tars/TarsRequesPack"));
class Group {
    static GetList(RequestId, QQ) {
        let ReqPack = new TarsRequesPack_1.default();
        ReqPack.SetPackFunc("GetTroopListReqV2Simplify");
        ReqPack.SetPackServantName("mqq.IMService.FriendListServiceServantObj");
        ReqPack.SetPackVersion(3);
        ReqPack.SetPackReqId(RequestId);
        ReqPack.SetMapKey("GetTroopListReqV2Simplify");
        let GetTroopListReqV2Simplify = GroupTars_1.GroupTars.GetTroopListReqV2SimplifyReq.new();
        GetTroopListReqV2Simplify.Uin = QQ;
        GetTroopListReqV2Simplify.GetMSFMsgFlag = 0;
        GetTroopListReqV2Simplify.GroupFlagExt = 1;
        GetTroopListReqV2Simplify.ShVersion = 7;
        GetTroopListReqV2Simplify.DwCompanyId = 0;
        GetTroopListReqV2Simplify.VersionNum = 1;
        GetTroopListReqV2Simplify.GetLongGroupName = 1;
        ReqPack.SetStruct(GetTroopListReqV2Simplify);
        return ReqPack.Generate();
    }
    static GetMemberList(QQ, RequestId, TargetGroupCode, TargetGroupUin, NextUin = 0) {
        let ReqPack = new TarsRequesPack_1.default();
        ReqPack.SetPackFunc("GetTroopMemberListReq");
        ReqPack.SetPackServantName("mqq.IMService.FriendListServiceServantObj");
        ReqPack.SetPackVersion(3);
        ReqPack.SetPackReqId(RequestId);
        ReqPack.SetMapKey("GTML");
        let GetTroopMemberListReq = GroupTars_1.GroupTars.GetTroopMemberListReq.new();
        GetTroopMemberListReq.GroupCode = TargetGroupCode;
        GetTroopMemberListReq.GroupUin = TargetGroupUin;
        GetTroopMemberListReq.Uin = QQ;
        GetTroopMemberListReq.ReqType = 0;
        GetTroopMemberListReq.Version = 2;
        GetTroopMemberListReq.NextUin = NextUin;
        ReqPack.SetStruct(GetTroopMemberListReq);
        return ReqPack.Generate();
    }
}
module.exports = Group;
