/// <reference types="node" />
import * as TarsStream from "@tars/stream";
export declare namespace FriendTars {
    class StUinInfo {
        Dwuin: number;
        DwFlag: number;
        SName: string;
        Gender: string;
        SPhone: string;
        SEmail: string;
        SRemark: string;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): StUinInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): StUinInfo.Object;
        readFromObject(json: StUinInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): StUinInfo;
        static create(is: TarsStream.TarsInputStream): StUinInfo;
    }
    namespace StUinInfo {
        interface Object {
            Dwuin: number;
            DwFlag: number;
            SName: string;
            Gender: string;
            SPhone: string;
            SEmail: string;
            SRemark: string;
        }
    }
    class ModifyGroupCardReq {
        DwZero: number;
        DwGroupCode: number;
        DwNewSeq: number;
        VecUinInfo: TarsStream.List<FriendTars.StUinInfo>;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): ModifyGroupCardReq;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): ModifyGroupCardReq.Object;
        readFromObject(json: ModifyGroupCardReq.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): ModifyGroupCardReq;
        static create(is: TarsStream.TarsInputStream): ModifyGroupCardReq;
    }
    namespace ModifyGroupCardReq {
        interface Object {
            DwZero: number;
            DwGroupCode: number;
            DwNewSeq: number;
            VecUinInfo: Array<FriendTars.StUinInfo.Object>;
        }
    }
    class GetFriendListReq {
        ReqType: number;
        IfReflush: number;
        Uin: number;
        StartIndex: number;
        GetfriendCount: number;
        GroupId: number;
        IfGetGroupInfo: number;
        GroupstartIndex: number;
        GetgroupCount: number;
        IfGetMSFGroup: number;
        IfShowTermType: number;
        Version: number;
        EAppType: number;
        IfGetDOVId: number;
        IfGetBothFlag: number;
        Vec0xd50Req: TarsStream.BinBuffer;
        Vec0xd6bReq: TarsStream.BinBuffer;
        VecSnsTypelist: TarsStream.List<number>;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): GetFriendListReq;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): GetFriendListReq.Object;
        readFromObject(json: GetFriendListReq.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): GetFriendListReq;
        static create(is: TarsStream.TarsInputStream): GetFriendListReq;
    }
    namespace GetFriendListReq {
        interface Object {
            ReqType?: number;
            IfReflush?: number;
            Uin?: number;
            StartIndex?: number;
            GetfriendCount?: number;
            GroupId?: number;
            IfGetGroupInfo?: number;
            GroupstartIndex?: number;
            GetgroupCount?: number;
            IfGetMSFGroup?: number;
            IfShowTermType?: number;
            Version?: number;
            EAppType?: number;
            IfGetDOVId?: number;
            IfGetBothFlag?: number;
            Vec0xd50Req?: Buffer;
            Vec0xd6bReq?: Buffer;
            VecSnsTypelist?: Array<number>;
        }
    }
    class VipOpenInfo {
        Open: boolean;
        IVipType: number;
        IVipLevel: number;
        IVipFlag: number;
        NameplateId: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): VipOpenInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): VipOpenInfo.Object;
        readFromObject(json: VipOpenInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): VipOpenInfo;
        static create(is: TarsStream.TarsInputStream): VipOpenInfo;
    }
    namespace VipOpenInfo {
        interface Object {
            Open?: boolean;
            IVipType?: number;
            IVipLevel?: number;
            IVipFlag?: number;
            NameplateId?: number;
        }
    }
    class VipBaseInfo {
        MOpenInfo: TarsStream.Map<number, FriendTars.VipOpenInfo>;
        INameplateVipType: number;
        IGrayNameplateFlag: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): VipBaseInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): VipBaseInfo.Object;
        readFromObject(json: VipBaseInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): VipBaseInfo;
        static create(is: TarsStream.TarsInputStream): VipBaseInfo;
    }
    namespace VipBaseInfo {
        interface Object {
            MOpenInfo?: Record<number, FriendTars.VipOpenInfo.Object>;
            INameplateVipType?: number;
            IGrayNameplateFlag?: number;
        }
    }
    class FriendInfo {
        Uin: number;
        GroupId: number;
        FaceId: number;
        Remark: string;
        Sqqtype: number;
        Status: number;
        MemberLevel: number;
        IsMqqOnLine: number;
        SqqOnLineState: number;
        IsIphoneOnline: number;
        DetalStatusFlag: number;
        SqqOnLineStateV2: number;
        SShowName: string;
        IsRemark: number;
        Nick: string;
        SpecialFlag: number;
        VecIMGroupID: TarsStream.BinBuffer;
        VecMSFGroupID: TarsStream.BinBuffer;
        ITermType: number;
        OVipInfo: FriendTars.VipBaseInfo;
        Network: number;
        VecRing: TarsStream.BinBuffer;
        UAbiFlag: number;
        UlFaceAddonId: number;
        NetworkType: number;
        VipFont: number;
        IconType: number;
        TermDesc: string;
        ColorRing: number;
        ApolloFlag: number;
        UApolloTimestamp: number;
        Sex: number;
        FounderFont: number;
        EimId: string;
        EimMobile: string;
        OlympicTorch: number;
        UApolloSignTime: number;
        ULaviUin: number;
        UTagUpdateTime: number;
        UGameLastLoginTime: number;
        UGameAppid: number;
        VecCardID: TarsStream.BinBuffer;
        UlBitSet: number;
        KingOfGloryFlag: number;
        UlKingOfGloryRank: number;
        MasterUin: string;
        ULastMedalUpdateTime: number;
        UFaceStoreId: number;
        UFontEffect: number;
        SDOVId: string;
        UBothFlag: number;
        CentiShow3DFlag: number;
        VecIntimateInfo: TarsStream.BinBuffer;
        ShowNameplate: number;
        NewLoverDiamondFlag: number;
        VecExtSnsFrdData: TarsStream.BinBuffer;
        VecMutualMarkData: TarsStream.BinBuffer;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): FriendInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): FriendInfo.Object;
        readFromObject(json: FriendInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): FriendInfo;
        static create(is: TarsStream.TarsInputStream): FriendInfo;
    }
    namespace FriendInfo {
        interface Object {
            Uin: number;
            GroupId: number;
            FaceId: number;
            Remark: string;
            Sqqtype: number;
            Status: number;
            MemberLevel?: number;
            IsMqqOnLine?: number;
            SqqOnLineState?: number;
            IsIphoneOnline?: number;
            DetalStatusFlag?: number;
            SqqOnLineStateV2?: number;
            SShowName?: string;
            IsRemark?: number;
            Nick?: string;
            SpecialFlag?: number;
            VecIMGroupID?: Buffer;
            VecMSFGroupID?: Buffer;
            ITermType?: number;
            OVipInfo?: FriendTars.VipBaseInfo.Object;
            Network?: number;
            VecRing?: Buffer;
            UAbiFlag?: number;
            UlFaceAddonId?: number;
            NetworkType?: number;
            VipFont?: number;
            IconType?: number;
            TermDesc?: string;
            ColorRing?: number;
            ApolloFlag?: number;
            UApolloTimestamp?: number;
            Sex?: number;
            FounderFont?: number;
            EimId?: string;
            EimMobile?: string;
            OlympicTorch?: number;
            UApolloSignTime?: number;
            ULaviUin?: number;
            UTagUpdateTime?: number;
            UGameLastLoginTime?: number;
            UGameAppid?: number;
            VecCardID?: Buffer;
            UlBitSet?: number;
            KingOfGloryFlag?: number;
            UlKingOfGloryRank?: number;
            MasterUin?: string;
            ULastMedalUpdateTime?: number;
            UFaceStoreId?: number;
            UFontEffect?: number;
            SDOVId?: string;
            UBothFlag?: number;
            CentiShow3DFlag?: number;
            VecIntimateInfo?: Buffer;
            ShowNameplate?: number;
            NewLoverDiamondFlag?: number;
            VecExtSnsFrdData?: Buffer;
            VecMutualMarkData?: Buffer;
        }
    }
    class GroupInfo {
        GroupId: number;
        Groupname: string;
        FriendCount: number;
        OnlineFriendCount: number;
        Seqid: number;
        SqqOnLineCount: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): GroupInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): GroupInfo.Object;
        readFromObject(json: GroupInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): GroupInfo;
        static create(is: TarsStream.TarsInputStream): GroupInfo;
    }
    namespace GroupInfo {
        interface Object {
            GroupId: number;
            Groupname: string;
            FriendCount: number;
            OnlineFriendCount: number;
            Seqid?: number;
            SqqOnLineCount?: number;
        }
    }
    class FriendListSubSrvRspCode {
        WGetMutualMarkRspCode: number;
        WGetIntimateInfoRspCode: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): FriendListSubSrvRspCode;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): FriendListSubSrvRspCode.Object;
        readFromObject(json: FriendListSubSrvRspCode.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): FriendListSubSrvRspCode;
        static create(is: TarsStream.TarsInputStream): FriendListSubSrvRspCode;
    }
    namespace FriendListSubSrvRspCode {
        interface Object {
            WGetMutualMarkRspCode?: number;
            WGetIntimateInfoRspCode?: number;
        }
    }
    class GetFriendListResp {
        ReqType: number;
        IfReflush: number;
        Uin: number;
        StartIndex: number;
        GetfriendCount: number;
        TotoalFriendCount: number;
        FriendCount: number;
        VecFriendInfo: TarsStream.List<FriendTars.FriendInfo>;
        Groupid: number;
        IfGetGroupInfo: number;
        GroupstartIndex: number;
        GetgroupCount: number;
        TotoalGroupCount: number;
        GroupCount: number;
        VecGroupInfo: TarsStream.List<FriendTars.GroupInfo>;
        Result: number;
        ErrorCode: number;
        OnlineFriendCount: number;
        ServerTime: number;
        SqqOnLineCount: number;
        VecMSFGroupInfo: TarsStream.List<FriendTars.GroupInfo>;
        RespType: number;
        HasOtherRespFlag: number;
        StSelfInfo: FriendTars.FriendInfo;
        ShowPcIcon: number;
        WGetExtSnsRspCode: number;
        StSubSrvRspCode: FriendTars.FriendListSubSrvRspCode;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): GetFriendListResp;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): GetFriendListResp.Object;
        readFromObject(json: GetFriendListResp.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): GetFriendListResp;
        static create(is: TarsStream.TarsInputStream): GetFriendListResp;
    }
    namespace GetFriendListResp {
        interface Object {
            ReqType: number;
            IfReflush: number;
            Uin: number;
            StartIndex: number;
            GetfriendCount: number;
            TotoalFriendCount: number;
            FriendCount: number;
            VecFriendInfo: Array<FriendTars.FriendInfo.Object>;
            Groupid?: number;
            IfGetGroupInfo: number;
            GroupstartIndex?: number;
            GetgroupCount?: number;
            TotoalGroupCount?: number;
            GroupCount?: number;
            VecGroupInfo?: Array<FriendTars.GroupInfo.Object>;
            Result: number;
            ErrorCode?: number;
            OnlineFriendCount?: number;
            ServerTime?: number;
            SqqOnLineCount?: number;
            VecMSFGroupInfo?: Array<FriendTars.GroupInfo.Object>;
            RespType?: number;
            HasOtherRespFlag?: number;
            StSelfInfo?: FriendTars.FriendInfo.Object;
            ShowPcIcon?: number;
            WGetExtSnsRspCode?: number;
            StSubSrvRspCode?: FriendTars.FriendListSubSrvRspCode.Object;
        }
    }
}
