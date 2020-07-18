/// <reference types="node" />
import * as TarsStream from "@tars/stream";
export declare namespace GroupTars {
    class StTroopNumSimplify {
        GroupCode: number;
        DwGroupInfoSeq: number;
        DwGroupFlagExt: number;
        DwGroupRankSeq: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): StTroopNumSimplify;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): StTroopNumSimplify.Object;
        readFromObject(json: StTroopNumSimplify.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): StTroopNumSimplify;
        static create(is: TarsStream.TarsInputStream): StTroopNumSimplify;
    }
    namespace StTroopNumSimplify {
        interface Object {
            GroupCode: number;
            DwGroupInfoSeq: number;
            DwGroupFlagExt: number;
            DwGroupRankSeq: number;
        }
    }
    class StLevelRankPair {
        DwLevel: number;
        Rank: string;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): StLevelRankPair;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): StLevelRankPair.Object;
        readFromObject(json: StLevelRankPair.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): StLevelRankPair;
        static create(is: TarsStream.TarsInputStream): StLevelRankPair;
    }
    namespace StLevelRankPair {
        interface Object {
            DwLevel?: number;
            Rank?: string;
        }
    }
    class StGroupRankInfo {
        DwGroupCode: number;
        GroupRankSysFlag: number;
        GroupRankUserFlag: number;
        VecRankMap: TarsStream.List<GroupTars.StLevelRankPair>;
        DwGroupRankSeq: number;
        OwnerName: string;
        AdminName: string;
        DwOfficeMode: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): StGroupRankInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): StGroupRankInfo.Object;
        readFromObject(json: StGroupRankInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): StGroupRankInfo;
        static create(is: TarsStream.TarsInputStream): StGroupRankInfo;
    }
    namespace StGroupRankInfo {
        interface Object {
            DwGroupCode: number;
            GroupRankSysFlag?: number;
            GroupRankUserFlag?: number;
            VecRankMap?: Array<GroupTars.StLevelRankPair.Object>;
            DwGroupRankSeq?: number;
            OwnerName?: string;
            AdminName?: string;
            DwOfficeMode?: number;
        }
    }
    class StTroopNum {
        GroupUin: number;
        GroupCode: number;
        Flag: number;
        DwGroupInfoSeq: number;
        GroupName: string;
        GroupMemo: string;
        DwGroupFlagExt: number;
        DwGroupRankSeq: number;
        DwCertificationType: number;
        DwShutUpTimestamp: number;
        DwMyShutUpTimestamp: number;
        DwCmdUinUinFlag: number;
        DwAdditionalFlag: number;
        DwGroupTypeFlag: number;
        DwGroupSecType: number;
        DwGroupSecTypeInfo: number;
        DwGroupClassExt: number;
        DwAppPrivilegeFlag: number;
        DwSubscriptionUin: number;
        DwMemberNum: number;
        DwMemberNumSeq: number;
        DwMemberCardSeq: number;
        DwGroupFlagExt3: number;
        DwGroupOwnerUin: number;
        IsConfGroup: number;
        IsModifyConfGroupFace: number;
        IsModifyConfGroupName: number;
        DwCmduinJoinTime: number;
        UlCompanyId: number;
        DwMaxGroupMemberNum: number;
        DwCmdUinGroupMask: number;
        UdwHLGuildAppid: number;
        UdwHLGuildSubType: number;
        UdwCmdUinRingtoneID: number;
        UdwCmdUinFlagEx2: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): StTroopNum;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): StTroopNum.Object;
        readFromObject(json: StTroopNum.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): StTroopNum;
        static create(is: TarsStream.TarsInputStream): StTroopNum;
    }
    namespace StTroopNum {
        interface Object {
            GroupUin: number;
            GroupCode: number;
            Flag?: number;
            DwGroupInfoSeq?: number;
            GroupName?: string;
            GroupMemo?: string;
            DwGroupFlagExt?: number;
            DwGroupRankSeq?: number;
            DwCertificationType?: number;
            DwShutUpTimestamp?: number;
            DwMyShutUpTimestamp?: number;
            DwCmdUinUinFlag?: number;
            DwAdditionalFlag?: number;
            DwGroupTypeFlag?: number;
            DwGroupSecType?: number;
            DwGroupSecTypeInfo?: number;
            DwGroupClassExt?: number;
            DwAppPrivilegeFlag?: number;
            DwSubscriptionUin?: number;
            DwMemberNum?: number;
            DwMemberNumSeq?: number;
            DwMemberCardSeq?: number;
            DwGroupFlagExt3?: number;
            DwGroupOwnerUin: number;
            IsConfGroup?: number;
            IsModifyConfGroupFace?: number;
            IsModifyConfGroupName?: number;
            DwCmduinJoinTime?: number;
            UlCompanyId?: number;
            DwMaxGroupMemberNum?: number;
            DwCmdUinGroupMask?: number;
            UdwHLGuildAppid?: number;
            UdwHLGuildSubType?: number;
            UdwCmdUinRingtoneID?: number;
            UdwCmdUinFlagEx2?: number;
        }
    }
    class StFavoriteGroup {
        DwGroupCode: number;
        DwTimestamp: number;
        DwSnsFlag: number;
        DwOpenTimestamp: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): StFavoriteGroup;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): StFavoriteGroup.Object;
        readFromObject(json: StFavoriteGroup.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): StFavoriteGroup;
        static create(is: TarsStream.TarsInputStream): StFavoriteGroup;
    }
    namespace StFavoriteGroup {
        interface Object {
            DwGroupCode: number;
            DwTimestamp?: number;
            DwSnsFlag?: number;
            DwOpenTimestamp?: number;
        }
    }
    class GetTroopListRespV2 {
        Uin: number;
        TroopCount: number;
        Reuslt: number;
        ErrorCode: number;
        VecCookies: TarsStream.BinBuffer;
        VecTroopList: TarsStream.List<GroupTars.StTroopNum>;
        VecTroopListDel: TarsStream.List<GroupTars.StTroopNum>;
        VecTroopRank: TarsStream.List<GroupTars.StGroupRankInfo>;
        VecFavGroup: TarsStream.List<GroupTars.StFavoriteGroup>;
        VecTroopListExt: TarsStream.List<GroupTars.StTroopNum>;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): GetTroopListRespV2;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): GetTroopListRespV2.Object;
        readFromObject(json: GetTroopListRespV2.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): GetTroopListRespV2;
        static create(is: TarsStream.TarsInputStream): GetTroopListRespV2;
    }
    namespace GetTroopListRespV2 {
        interface Object {
            Uin: number;
            TroopCount: number;
            Reuslt: number;
            ErrorCode?: number;
            VecCookies?: Buffer;
            VecTroopList?: Array<GroupTars.StTroopNum.Object>;
            VecTroopListDel?: Array<GroupTars.StTroopNum.Object>;
            VecTroopRank?: Array<GroupTars.StGroupRankInfo.Object>;
            VecFavGroup?: Array<GroupTars.StFavoriteGroup.Object>;
            VecTroopListExt?: Array<GroupTars.StTroopNum.Object>;
        }
    }
    class GetTroopListReqV2SimplifyReq {
        Uin: number;
        GetMSFMsgFlag: number;
        VecGroupInfo: TarsStream.List<GroupTars.StTroopNumSimplify>;
        GroupFlagExt: number;
        ShVersion: number;
        DwCompanyId: number;
        VersionNum: number;
        GetLongGroupName: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): GetTroopListReqV2SimplifyReq;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): GetTroopListReqV2SimplifyReq.Object;
        readFromObject(json: GetTroopListReqV2SimplifyReq.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): GetTroopListReqV2SimplifyReq;
        static create(is: TarsStream.TarsInputStream): GetTroopListReqV2SimplifyReq;
    }
    namespace GetTroopListReqV2SimplifyReq {
        interface Object {
            Uin: number;
            GetMSFMsgFlag?: number;
            VecGroupInfo?: Array<GroupTars.StTroopNumSimplify.Object>;
            GroupFlagExt?: number;
            ShVersion?: number;
            DwCompanyId?: number;
            VersionNum?: number;
            GetLongGroupName?: number;
        }
    }
    class GetTroopMemberListReq {
        Uin: number;
        GroupCode: number;
        NextUin: number;
        GroupUin: number;
        Version: number;
        ReqType: number;
        GetListAppointTime: number;
        RichCardNameVer: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): GetTroopMemberListReq;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): GetTroopMemberListReq.Object;
        readFromObject(json: GetTroopMemberListReq.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): GetTroopMemberListReq;
        static create(is: TarsStream.TarsInputStream): GetTroopMemberListReq;
    }
    namespace GetTroopMemberListReq {
        interface Object {
            Uin: number;
            GroupCode: number;
            NextUin: number;
            GroupUin: number;
            Version: number;
            ReqType: number;
            GetListAppointTime: number;
            RichCardNameVer: number;
        }
    }
    class QzoneUserInfo {
        StarState: number;
        ExtendInfo: TarsStream.Map<string, string>;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): QzoneUserInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): QzoneUserInfo.Object;
        readFromObject(json: QzoneUserInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): QzoneUserInfo;
        static create(is: TarsStream.TarsInputStream): QzoneUserInfo;
    }
    namespace QzoneUserInfo {
        interface Object {
            StarState?: number;
            ExtendInfo?: Record<string, string>;
        }
    }
    class StTroopMemberInfo {
        MemberUin: number;
        FaceId: number;
        Age: number;
        Gender: number;
        Nick: string;
        Status: number;
        ShowName: string;
        Name: string;
        BGender: number;
        Phone: string;
        Email: string;
        Memo: string;
        AutoRemark: string;
        DwMemberLevel: number;
        DwJoinTime: number;
        DwLastSpeakTime: number;
        DwCreditLevel: number;
        DwFlag: number;
        DwFlagExt: number;
        DwPoint: number;
        Concerned: number;
        Shielded: number;
        SpecialTitle: string;
        DwSpecialTitleExpireTime: number;
        Job: string;
        ApolloFlag: number;
        DwApolloTimestamp: number;
        DwGlobalGroupLevel: number;
        DwTitleId: number;
        DwShutupTimestap: number;
        DwGlobalGroupPoint: number;
        QzoneUserInfo: GroupTars.QzoneUserInfo;
        RichCardNameVer: number;
        DwVipType: number;
        DwVipLevel: number;
        DwBigClubLevel: number;
        DwBigClubFlag: number;
        DwNameplate: number;
        VecGroupHonor: TarsStream.BinBuffer;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): StTroopMemberInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): StTroopMemberInfo.Object;
        readFromObject(json: StTroopMemberInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): StTroopMemberInfo;
        static create(is: TarsStream.TarsInputStream): StTroopMemberInfo;
    }
    namespace StTroopMemberInfo {
        interface Object {
            MemberUin?: number;
            FaceId?: number;
            Age?: number;
            Gender?: number;
            Nick: string;
            Status?: number;
            ShowName?: string;
            Name?: string;
            BGender?: number;
            Phone?: string;
            Email?: string;
            Memo?: string;
            AutoRemark?: string;
            DwMemberLevel?: number;
            DwJoinTime?: number;
            DwLastSpeakTime?: number;
            DwCreditLevel?: number;
            DwFlag?: number;
            DwFlagExt?: number;
            DwPoint?: number;
            Concerned?: number;
            Shielded?: number;
            SpecialTitle?: string;
            DwSpecialTitleExpireTime?: number;
            Job?: string;
            ApolloFlag?: number;
            DwApolloTimestamp?: number;
            DwGlobalGroupLevel?: number;
            DwTitleId?: number;
            DwShutupTimestap?: number;
            DwGlobalGroupPoint?: number;
            QzoneUserInfo?: GroupTars.QzoneUserInfo.Object;
            RichCardNameVer?: number;
            DwVipType?: number;
            DwVipLevel?: number;
            DwBigClubLevel?: number;
            DwBigClubFlag?: number;
            DwNameplate?: number;
            VecGroupHonor?: Buffer;
        }
    }
    class GetTroopMemberListResp {
        Uin: number;
        GroupCode: number;
        GroupUin: number;
        VecTroopMember: TarsStream.List<GroupTars.StTroopMemberInfo>;
        NextUin: number;
        Result: number;
        ErrorCode: number;
        OfficeMode: number;
        NextGetTime: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): GetTroopMemberListResp;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): GetTroopMemberListResp.Object;
        readFromObject(json: GetTroopMemberListResp.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): GetTroopMemberListResp;
        static create(is: TarsStream.TarsInputStream): GetTroopMemberListResp;
    }
    namespace GetTroopMemberListResp {
        interface Object {
            Uin: number;
            GroupCode: number;
            GroupUin: number;
            VecTroopMember: Array<GroupTars.StTroopMemberInfo.Object>;
            NextUin: number;
            Result: number;
            ErrorCode?: number;
            OfficeMode?: number;
            NextGetTime?: number;
        }
    }
}
