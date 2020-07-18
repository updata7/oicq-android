import {GroupTars} from "../Tars/Build/GroupTars"

import TarsRequesPack from "../Tars/TarsRequesPack";

class Group {
    /***
     *
     * @param RequestId
     * @param QQ
     *
     * @constructor
     */
    public static GetList(RequestId: number, QQ: number): Array<number> {
        let ReqPack = new TarsRequesPack()
        ReqPack.SetPackFunc("GetTroopListReqV2Simplify")
        ReqPack.SetPackServantName("mqq.IMService.FriendListServiceServantObj")
        ReqPack.SetPackVersion(3)
        ReqPack.SetPackReqId(RequestId)
        ReqPack.SetMapKey("GetTroopListReqV2Simplify")
        let GetTroopListReqV2Simplify = GroupTars.GetTroopListReqV2SimplifyReq.new()
        GetTroopListReqV2Simplify.Uin = QQ
        GetTroopListReqV2Simplify.GetMSFMsgFlag = 0
        GetTroopListReqV2Simplify.GroupFlagExt = 1
        GetTroopListReqV2Simplify.ShVersion = 7
        GetTroopListReqV2Simplify.DwCompanyId = 0
        GetTroopListReqV2Simplify.VersionNum = 1
        GetTroopListReqV2Simplify.GetLongGroupName = 1

        ReqPack.SetStruct(GetTroopListReqV2Simplify)
        return ReqPack.Generate()
    }


    public static GetMemberList(QQ: number, RequestId: number, TargetGroupCode: number, TargetGroupUin: number, NextUin: number = 0) {
        let ReqPack = new TarsRequesPack()
        ReqPack.SetPackFunc("GetTroopMemberListReq")
        ReqPack.SetPackServantName("mqq.IMService.FriendListServiceServantObj")
        ReqPack.SetPackVersion(3)
        ReqPack.SetPackReqId(RequestId)
        ReqPack.SetMapKey("GTML")

        let GetTroopMemberListReq = GroupTars.GetTroopMemberListReq.new()
        GetTroopMemberListReq.GroupCode = TargetGroupCode
        GetTroopMemberListReq.GroupUin = TargetGroupUin
        GetTroopMemberListReq.Uin = QQ
        GetTroopMemberListReq.ReqType = 0
        GetTroopMemberListReq.Version = 2
        GetTroopMemberListReq.NextUin = NextUin

        ReqPack.SetStruct(GetTroopMemberListReq)
        return ReqPack.Generate()
    }


}

export = Group