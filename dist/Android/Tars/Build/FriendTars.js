"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendTars = void 0;
const assert = require("assert");
const TarsStream = __importStar(require("@tars/stream"));
const _hasOwnProperty = Object.prototype.hasOwnProperty;
var FriendTars;
(function (FriendTars) {
    class StUinInfo {
        constructor() {
            this.Dwuin = 0;
            this.DwFlag = 0;
            this.SName = "";
            this.Gender = "";
            this.SPhone = "";
            this.SEmail = "";
            this.SRemark = "";
            this._proto_struct_name_ = "";
            this._classname = "FriendTars.StUinInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new StUinInfo;
            tmp.Dwuin = is.readInt64(0, true, 0);
            tmp.DwFlag = is.readInt64(1, true, 0);
            tmp.SName = is.readString(2, true, "");
            tmp.Gender = is.readString(3, true, "");
            tmp.SPhone = is.readString(4, true, "");
            tmp.SEmail = is.readString(5, true, "");
            tmp.SRemark = is.readString(6, true, "");
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Dwuin);
            os.writeInt64(1, this.DwFlag);
            os.writeString(2, this.SName);
            os.writeString(3, this.Gender);
            os.writeString(4, this.SPhone);
            os.writeString(5, this.SEmail);
            os.writeString(6, this.SRemark);
        }
        _equal() {
            assert.fail("this structure not define key operation");
        }
        _genKey() {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        }
        toObject() {
            return {
                Dwuin: this.Dwuin,
                DwFlag: this.DwFlag,
                SName: this.SName,
                Gender: this.Gender,
                SPhone: this.SPhone,
                SEmail: this.SEmail,
                SRemark: this.SRemark
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Dwuin") && (this.Dwuin = json.Dwuin);
            _hasOwnProperty.call(json, "DwFlag") && (this.DwFlag = json.DwFlag);
            _hasOwnProperty.call(json, "SName") && (this.SName = json.SName);
            _hasOwnProperty.call(json, "Gender") && (this.Gender = json.Gender);
            _hasOwnProperty.call(json, "SPhone") && (this.SPhone = json.SPhone);
            _hasOwnProperty.call(json, "SEmail") && (this.SEmail = json.SEmail);
            _hasOwnProperty.call(json, "SRemark") && (this.SRemark = json.SRemark);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new StUinInfo();
        }
        static create(is) {
            return FriendTars.StUinInfo._readFrom(is);
        }
    }
    StUinInfo._classname = "FriendTars.StUinInfo";
    FriendTars.StUinInfo = StUinInfo;
    class ModifyGroupCardReq {
        constructor() {
            this.DwZero = 0;
            this.DwGroupCode = 0;
            this.DwNewSeq = 0;
            this.VecUinInfo = new TarsStream.List(FriendTars.StUinInfo);
            this._proto_struct_name_ = "";
            this._classname = "FriendTars.ModifyGroupCardReq";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new ModifyGroupCardReq;
            tmp.DwZero = is.readInt64(0, true, 0);
            tmp.DwGroupCode = is.readInt64(1, true, 0);
            tmp.DwNewSeq = is.readInt64(2, true, 0);
            tmp.VecUinInfo = is.readList(3, true, TarsStream.List(FriendTars.StUinInfo));
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.DwZero);
            os.writeInt64(1, this.DwGroupCode);
            os.writeInt64(2, this.DwNewSeq);
            os.writeList(3, this.VecUinInfo);
        }
        _equal() {
            assert.fail("this structure not define key operation");
        }
        _genKey() {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        }
        toObject() {
            return {
                DwZero: this.DwZero,
                DwGroupCode: this.DwGroupCode,
                DwNewSeq: this.DwNewSeq,
                VecUinInfo: this.VecUinInfo.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "DwZero") && (this.DwZero = json.DwZero);
            _hasOwnProperty.call(json, "DwGroupCode") && (this.DwGroupCode = json.DwGroupCode);
            _hasOwnProperty.call(json, "DwNewSeq") && (this.DwNewSeq = json.DwNewSeq);
            _hasOwnProperty.call(json, "VecUinInfo") && (this.VecUinInfo.readFromObject(json.VecUinInfo));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new ModifyGroupCardReq();
        }
        static create(is) {
            return FriendTars.ModifyGroupCardReq._readFrom(is);
        }
    }
    ModifyGroupCardReq._classname = "FriendTars.ModifyGroupCardReq";
    FriendTars.ModifyGroupCardReq = ModifyGroupCardReq;
    class GetFriendListReq {
        constructor() {
            this.ReqType = 0;
            this.IfReflush = 0;
            this.Uin = 0;
            this.StartIndex = 0;
            this.GetfriendCount = 0;
            this.GroupId = 0;
            this.IfGetGroupInfo = 0;
            this.GroupstartIndex = 0;
            this.GetgroupCount = 0;
            this.IfGetMSFGroup = 0;
            this.IfShowTermType = 0;
            this.Version = 0;
            this.EAppType = 0;
            this.IfGetDOVId = 0;
            this.IfGetBothFlag = 0;
            this.Vec0xd50Req = new TarsStream.BinBuffer;
            this.Vec0xd6bReq = new TarsStream.BinBuffer;
            this.VecSnsTypelist = new TarsStream.List(TarsStream.Int64);
            this._proto_struct_name_ = "";
            this._classname = "FriendTars.GetFriendListReq";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new GetFriendListReq;
            tmp.ReqType = is.readInt32(0, false, 0);
            tmp.IfReflush = is.readInt8(1, false, 0);
            tmp.Uin = is.readInt64(2, false, 0);
            tmp.StartIndex = is.readInt16(3, false, 0);
            tmp.GetfriendCount = is.readInt16(4, false, 0);
            tmp.GroupId = is.readInt8(5, false, 0);
            tmp.IfGetGroupInfo = is.readInt8(6, false, 0);
            tmp.GroupstartIndex = is.readInt8(7, false, 0);
            tmp.GetgroupCount = is.readInt8(8, false, 0);
            tmp.IfGetMSFGroup = is.readInt8(9, false, 0);
            tmp.IfShowTermType = is.readInt8(10, false, 0);
            tmp.Version = is.readInt64(11, false, 0);
            tmp.EAppType = is.readInt32(13, false, 0);
            tmp.IfGetDOVId = is.readInt8(14, false, 0);
            tmp.IfGetBothFlag = is.readInt8(15, false, 0);
            tmp.Vec0xd50Req = is.readBytes(16, false, TarsStream.BinBuffer);
            tmp.Vec0xd6bReq = is.readBytes(17, false, TarsStream.BinBuffer);
            tmp.VecSnsTypelist = is.readList(18, false, TarsStream.List(TarsStream.Int64));
            return tmp;
        }
        _writeTo(os) {
            os.writeInt32(0, this.ReqType);
            os.writeInt8(1, this.IfReflush);
            os.writeInt64(2, this.Uin);
            os.writeInt16(3, this.StartIndex);
            os.writeInt16(4, this.GetfriendCount);
            os.writeInt8(5, this.GroupId);
            os.writeInt8(6, this.IfGetGroupInfo);
            os.writeInt8(7, this.GroupstartIndex);
            os.writeInt8(8, this.GetgroupCount);
            os.writeInt8(9, this.IfGetMSFGroup);
            os.writeInt8(10, this.IfShowTermType);
            os.writeInt64(11, this.Version);
            os.writeInt32(13, this.EAppType);
            os.writeInt8(14, this.IfGetDOVId);
            os.writeInt8(15, this.IfGetBothFlag);
            os.writeBytes(16, this.Vec0xd50Req);
            os.writeBytes(17, this.Vec0xd6bReq);
            os.writeList(18, this.VecSnsTypelist);
        }
        _equal() {
            assert.fail("this structure not define key operation");
        }
        _genKey() {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        }
        toObject() {
            return {
                ReqType: this.ReqType,
                IfReflush: this.IfReflush,
                Uin: this.Uin,
                StartIndex: this.StartIndex,
                GetfriendCount: this.GetfriendCount,
                GroupId: this.GroupId,
                IfGetGroupInfo: this.IfGetGroupInfo,
                GroupstartIndex: this.GroupstartIndex,
                GetgroupCount: this.GetgroupCount,
                IfGetMSFGroup: this.IfGetMSFGroup,
                IfShowTermType: this.IfShowTermType,
                Version: this.Version,
                EAppType: this.EAppType,
                IfGetDOVId: this.IfGetDOVId,
                IfGetBothFlag: this.IfGetBothFlag,
                Vec0xd50Req: this.Vec0xd50Req.toObject(),
                Vec0xd6bReq: this.Vec0xd6bReq.toObject(),
                VecSnsTypelist: this.VecSnsTypelist.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "ReqType") && (this.ReqType = json.ReqType);
            _hasOwnProperty.call(json, "IfReflush") && (this.IfReflush = json.IfReflush);
            _hasOwnProperty.call(json, "Uin") && (this.Uin = json.Uin);
            _hasOwnProperty.call(json, "StartIndex") && (this.StartIndex = json.StartIndex);
            _hasOwnProperty.call(json, "GetfriendCount") && (this.GetfriendCount = json.GetfriendCount);
            _hasOwnProperty.call(json, "GroupId") && (this.GroupId = json.GroupId);
            _hasOwnProperty.call(json, "IfGetGroupInfo") && (this.IfGetGroupInfo = json.IfGetGroupInfo);
            _hasOwnProperty.call(json, "GroupstartIndex") && (this.GroupstartIndex = json.GroupstartIndex);
            _hasOwnProperty.call(json, "GetgroupCount") && (this.GetgroupCount = json.GetgroupCount);
            _hasOwnProperty.call(json, "IfGetMSFGroup") && (this.IfGetMSFGroup = json.IfGetMSFGroup);
            _hasOwnProperty.call(json, "IfShowTermType") && (this.IfShowTermType = json.IfShowTermType);
            _hasOwnProperty.call(json, "Version") && (this.Version = json.Version);
            _hasOwnProperty.call(json, "EAppType") && (this.EAppType = json.EAppType);
            _hasOwnProperty.call(json, "IfGetDOVId") && (this.IfGetDOVId = json.IfGetDOVId);
            _hasOwnProperty.call(json, "IfGetBothFlag") && (this.IfGetBothFlag = json.IfGetBothFlag);
            _hasOwnProperty.call(json, "Vec0xd50Req") && (this.Vec0xd50Req.readFromObject(json.Vec0xd50Req));
            _hasOwnProperty.call(json, "Vec0xd6bReq") && (this.Vec0xd6bReq.readFromObject(json.Vec0xd6bReq));
            _hasOwnProperty.call(json, "VecSnsTypelist") && (this.VecSnsTypelist.readFromObject(json.VecSnsTypelist));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new GetFriendListReq();
        }
        static create(is) {
            return FriendTars.GetFriendListReq._readFrom(is);
        }
    }
    GetFriendListReq._classname = "FriendTars.GetFriendListReq";
    FriendTars.GetFriendListReq = GetFriendListReq;
    class VipOpenInfo {
        constructor() {
            this.Open = true;
            this.IVipType = 0;
            this.IVipLevel = 0;
            this.IVipFlag = 0;
            this.NameplateId = 0;
            this._proto_struct_name_ = "";
            this._classname = "FriendTars.VipOpenInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new VipOpenInfo;
            tmp.Open = is.readBoolean(0, false, true);
            tmp.IVipType = is.readInt32(1, false, 0);
            tmp.IVipLevel = is.readInt32(2, false, 0);
            tmp.IVipFlag = is.readInt32(3, false, 0);
            tmp.NameplateId = is.readInt64(4, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeBoolean(0, this.Open);
            os.writeInt32(1, this.IVipType);
            os.writeInt32(2, this.IVipLevel);
            os.writeInt32(3, this.IVipFlag);
            os.writeInt64(4, this.NameplateId);
        }
        _equal() {
            assert.fail("this structure not define key operation");
        }
        _genKey() {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        }
        toObject() {
            return {
                Open: this.Open,
                IVipType: this.IVipType,
                IVipLevel: this.IVipLevel,
                IVipFlag: this.IVipFlag,
                NameplateId: this.NameplateId
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Open") && (this.Open = json.Open);
            _hasOwnProperty.call(json, "IVipType") && (this.IVipType = json.IVipType);
            _hasOwnProperty.call(json, "IVipLevel") && (this.IVipLevel = json.IVipLevel);
            _hasOwnProperty.call(json, "IVipFlag") && (this.IVipFlag = json.IVipFlag);
            _hasOwnProperty.call(json, "NameplateId") && (this.NameplateId = json.NameplateId);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new VipOpenInfo();
        }
        static create(is) {
            return FriendTars.VipOpenInfo._readFrom(is);
        }
    }
    VipOpenInfo._classname = "FriendTars.VipOpenInfo";
    FriendTars.VipOpenInfo = VipOpenInfo;
    class VipBaseInfo {
        constructor() {
            this.MOpenInfo = new TarsStream.Map(TarsStream.Int32, FriendTars.VipOpenInfo);
            this.INameplateVipType = 0;
            this.IGrayNameplateFlag = 0;
            this._proto_struct_name_ = "";
            this._classname = "FriendTars.VipBaseInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new VipBaseInfo;
            tmp.MOpenInfo = is.readMap(0, false, TarsStream.Map(TarsStream.Int32, FriendTars.VipOpenInfo));
            tmp.INameplateVipType = is.readInt32(1, false, 0);
            tmp.IGrayNameplateFlag = is.readInt32(2, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeMap(0, this.MOpenInfo);
            os.writeInt32(1, this.INameplateVipType);
            os.writeInt32(2, this.IGrayNameplateFlag);
        }
        _equal() {
            assert.fail("this structure not define key operation");
        }
        _genKey() {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        }
        toObject() {
            return {
                MOpenInfo: this.MOpenInfo.toObject(),
                INameplateVipType: this.INameplateVipType,
                IGrayNameplateFlag: this.IGrayNameplateFlag
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "MOpenInfo") && (this.MOpenInfo.readFromObject(json.MOpenInfo));
            _hasOwnProperty.call(json, "INameplateVipType") && (this.INameplateVipType = json.INameplateVipType);
            _hasOwnProperty.call(json, "IGrayNameplateFlag") && (this.IGrayNameplateFlag = json.IGrayNameplateFlag);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new VipBaseInfo();
        }
        static create(is) {
            return FriendTars.VipBaseInfo._readFrom(is);
        }
    }
    VipBaseInfo._classname = "FriendTars.VipBaseInfo";
    FriendTars.VipBaseInfo = VipBaseInfo;
    class FriendInfo {
        constructor() {
            this.Uin = 0;
            this.GroupId = 0;
            this.FaceId = 0;
            this.Remark = "";
            this.Sqqtype = 0;
            this.Status = 0;
            this.MemberLevel = 0;
            this.IsMqqOnLine = 0;
            this.SqqOnLineState = 0;
            this.IsIphoneOnline = 0;
            this.DetalStatusFlag = 0;
            this.SqqOnLineStateV2 = 0;
            this.SShowName = "";
            this.IsRemark = 0;
            this.Nick = "";
            this.SpecialFlag = 0;
            this.VecIMGroupID = new TarsStream.BinBuffer;
            this.VecMSFGroupID = new TarsStream.BinBuffer;
            this.ITermType = 0;
            this.OVipInfo = new FriendTars.VipBaseInfo;
            this.Network = 0;
            this.VecRing = new TarsStream.BinBuffer;
            this.UAbiFlag = 0;
            this.UlFaceAddonId = 0;
            this.NetworkType = 0;
            this.VipFont = 0;
            this.IconType = 0;
            this.TermDesc = "";
            this.ColorRing = 0;
            this.ApolloFlag = 0;
            this.UApolloTimestamp = 0;
            this.Sex = 0;
            this.FounderFont = 0;
            this.EimId = "";
            this.EimMobile = "";
            this.OlympicTorch = 0;
            this.UApolloSignTime = 0;
            this.ULaviUin = 0;
            this.UTagUpdateTime = 0;
            this.UGameLastLoginTime = 0;
            this.UGameAppid = 0;
            this.VecCardID = new TarsStream.BinBuffer;
            this.UlBitSet = 0;
            this.KingOfGloryFlag = 0;
            this.UlKingOfGloryRank = 0;
            this.MasterUin = "";
            this.ULastMedalUpdateTime = 0;
            this.UFaceStoreId = 0;
            this.UFontEffect = 0;
            this.SDOVId = "";
            this.UBothFlag = 0;
            this.CentiShow3DFlag = 0;
            this.VecIntimateInfo = new TarsStream.BinBuffer;
            this.ShowNameplate = 0;
            this.NewLoverDiamondFlag = 0;
            this.VecExtSnsFrdData = new TarsStream.BinBuffer;
            this.VecMutualMarkData = new TarsStream.BinBuffer;
            this._proto_struct_name_ = "";
            this._classname = "FriendTars.FriendInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new FriendInfo;
            tmp.Uin = is.readInt64(0, true, 0);
            tmp.GroupId = is.readInt8(1, true, 0);
            tmp.FaceId = is.readInt16(2, true, 0);
            tmp.Remark = is.readString(3, true, "");
            tmp.Sqqtype = is.readInt8(4, true, 0);
            tmp.Status = is.readInt8(5, true, 0);
            tmp.MemberLevel = is.readInt8(6, false, 0);
            tmp.IsMqqOnLine = is.readInt8(7, false, 0);
            tmp.SqqOnLineState = is.readInt8(8, false, 0);
            tmp.IsIphoneOnline = is.readInt8(9, false, 0);
            tmp.DetalStatusFlag = is.readInt8(10, false, 0);
            tmp.SqqOnLineStateV2 = is.readInt8(11, false, 0);
            tmp.SShowName = is.readString(12, false, "");
            tmp.IsRemark = is.readInt8(13, false, 0);
            tmp.Nick = is.readString(14, false, "");
            tmp.SpecialFlag = is.readInt8(15, false, 0);
            tmp.VecIMGroupID = is.readBytes(16, false, TarsStream.BinBuffer);
            tmp.VecMSFGroupID = is.readBytes(17, false, TarsStream.BinBuffer);
            tmp.ITermType = is.readInt32(18, false, 0);
            tmp.OVipInfo = is.readStruct(19, false, FriendTars.VipBaseInfo);
            tmp.Network = is.readInt8(20, false, 0);
            tmp.VecRing = is.readBytes(21, false, TarsStream.BinBuffer);
            tmp.UAbiFlag = is.readInt64(22, false, 0);
            tmp.UlFaceAddonId = is.readInt64(23, false, 0);
            tmp.NetworkType = is.readInt32(24, false, 0);
            tmp.VipFont = is.readInt64(25, false, 0);
            tmp.IconType = is.readInt32(26, false, 0);
            tmp.TermDesc = is.readString(27, false, "");
            tmp.ColorRing = is.readInt64(28, false, 0);
            tmp.ApolloFlag = is.readInt8(29, false, 0);
            tmp.UApolloTimestamp = is.readInt64(30, false, 0);
            tmp.Sex = is.readInt8(31, false, 0);
            tmp.FounderFont = is.readInt64(32, false, 0);
            tmp.EimId = is.readString(33, false, "");
            tmp.EimMobile = is.readString(34, false, "");
            tmp.OlympicTorch = is.readInt8(35, false, 0);
            tmp.UApolloSignTime = is.readInt64(36, false, 0);
            tmp.ULaviUin = is.readInt64(37, false, 0);
            tmp.UTagUpdateTime = is.readInt64(38, false, 0);
            tmp.UGameLastLoginTime = is.readInt64(39, false, 0);
            tmp.UGameAppid = is.readInt64(40, false, 0);
            tmp.VecCardID = is.readBytes(41, false, TarsStream.BinBuffer);
            tmp.UlBitSet = is.readInt64(42, false, 0);
            tmp.KingOfGloryFlag = is.readInt8(43, false, 0);
            tmp.UlKingOfGloryRank = is.readInt8(44, false, 0);
            tmp.MasterUin = is.readString(45, false, "");
            tmp.ULastMedalUpdateTime = is.readInt64(46, false, 0);
            tmp.UFaceStoreId = is.readInt64(47, false, 0);
            tmp.UFontEffect = is.readInt64(48, false, 0);
            tmp.SDOVId = is.readString(49, false, "");
            tmp.UBothFlag = is.readInt64(50, false, 0);
            tmp.CentiShow3DFlag = is.readInt8(51, false, 0);
            tmp.VecIntimateInfo = is.readBytes(52, false, TarsStream.BinBuffer);
            tmp.ShowNameplate = is.readInt8(53, false, 0);
            tmp.NewLoverDiamondFlag = is.readInt8(54, false, 0);
            tmp.VecExtSnsFrdData = is.readBytes(55, false, TarsStream.BinBuffer);
            tmp.VecMutualMarkData = is.readBytes(56, false, TarsStream.BinBuffer);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Uin);
            os.writeInt8(1, this.GroupId);
            os.writeInt16(2, this.FaceId);
            os.writeString(3, this.Remark);
            os.writeInt8(4, this.Sqqtype);
            os.writeInt8(5, this.Status);
            os.writeInt8(6, this.MemberLevel);
            os.writeInt8(7, this.IsMqqOnLine);
            os.writeInt8(8, this.SqqOnLineState);
            os.writeInt8(9, this.IsIphoneOnline);
            os.writeInt8(10, this.DetalStatusFlag);
            os.writeInt8(11, this.SqqOnLineStateV2);
            os.writeString(12, this.SShowName);
            os.writeInt8(13, this.IsRemark);
            os.writeString(14, this.Nick);
            os.writeInt8(15, this.SpecialFlag);
            os.writeBytes(16, this.VecIMGroupID);
            os.writeBytes(17, this.VecMSFGroupID);
            os.writeInt32(18, this.ITermType);
            os.writeStruct(19, this.OVipInfo);
            os.writeInt8(20, this.Network);
            os.writeBytes(21, this.VecRing);
            os.writeInt64(22, this.UAbiFlag);
            os.writeInt64(23, this.UlFaceAddonId);
            os.writeInt32(24, this.NetworkType);
            os.writeInt64(25, this.VipFont);
            os.writeInt32(26, this.IconType);
            os.writeString(27, this.TermDesc);
            os.writeInt64(28, this.ColorRing);
            os.writeInt8(29, this.ApolloFlag);
            os.writeInt64(30, this.UApolloTimestamp);
            os.writeInt8(31, this.Sex);
            os.writeInt64(32, this.FounderFont);
            os.writeString(33, this.EimId);
            os.writeString(34, this.EimMobile);
            os.writeInt8(35, this.OlympicTorch);
            os.writeInt64(36, this.UApolloSignTime);
            os.writeInt64(37, this.ULaviUin);
            os.writeInt64(38, this.UTagUpdateTime);
            os.writeInt64(39, this.UGameLastLoginTime);
            os.writeInt64(40, this.UGameAppid);
            os.writeBytes(41, this.VecCardID);
            os.writeInt64(42, this.UlBitSet);
            os.writeInt8(43, this.KingOfGloryFlag);
            os.writeInt8(44, this.UlKingOfGloryRank);
            os.writeString(45, this.MasterUin);
            os.writeInt64(46, this.ULastMedalUpdateTime);
            os.writeInt64(47, this.UFaceStoreId);
            os.writeInt64(48, this.UFontEffect);
            os.writeString(49, this.SDOVId);
            os.writeInt64(50, this.UBothFlag);
            os.writeInt8(51, this.CentiShow3DFlag);
            os.writeBytes(52, this.VecIntimateInfo);
            os.writeInt8(53, this.ShowNameplate);
            os.writeInt8(54, this.NewLoverDiamondFlag);
            os.writeBytes(55, this.VecExtSnsFrdData);
            os.writeBytes(56, this.VecMutualMarkData);
        }
        _equal() {
            assert.fail("this structure not define key operation");
        }
        _genKey() {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        }
        toObject() {
            return {
                Uin: this.Uin,
                GroupId: this.GroupId,
                FaceId: this.FaceId,
                Remark: this.Remark,
                Sqqtype: this.Sqqtype,
                Status: this.Status,
                MemberLevel: this.MemberLevel,
                IsMqqOnLine: this.IsMqqOnLine,
                SqqOnLineState: this.SqqOnLineState,
                IsIphoneOnline: this.IsIphoneOnline,
                DetalStatusFlag: this.DetalStatusFlag,
                SqqOnLineStateV2: this.SqqOnLineStateV2,
                SShowName: this.SShowName,
                IsRemark: this.IsRemark,
                Nick: this.Nick,
                SpecialFlag: this.SpecialFlag,
                VecIMGroupID: this.VecIMGroupID.toObject(),
                VecMSFGroupID: this.VecMSFGroupID.toObject(),
                ITermType: this.ITermType,
                OVipInfo: this.OVipInfo.toObject(),
                Network: this.Network,
                VecRing: this.VecRing.toObject(),
                UAbiFlag: this.UAbiFlag,
                UlFaceAddonId: this.UlFaceAddonId,
                NetworkType: this.NetworkType,
                VipFont: this.VipFont,
                IconType: this.IconType,
                TermDesc: this.TermDesc,
                ColorRing: this.ColorRing,
                ApolloFlag: this.ApolloFlag,
                UApolloTimestamp: this.UApolloTimestamp,
                Sex: this.Sex,
                FounderFont: this.FounderFont,
                EimId: this.EimId,
                EimMobile: this.EimMobile,
                OlympicTorch: this.OlympicTorch,
                UApolloSignTime: this.UApolloSignTime,
                ULaviUin: this.ULaviUin,
                UTagUpdateTime: this.UTagUpdateTime,
                UGameLastLoginTime: this.UGameLastLoginTime,
                UGameAppid: this.UGameAppid,
                VecCardID: this.VecCardID.toObject(),
                UlBitSet: this.UlBitSet,
                KingOfGloryFlag: this.KingOfGloryFlag,
                UlKingOfGloryRank: this.UlKingOfGloryRank,
                MasterUin: this.MasterUin,
                ULastMedalUpdateTime: this.ULastMedalUpdateTime,
                UFaceStoreId: this.UFaceStoreId,
                UFontEffect: this.UFontEffect,
                SDOVId: this.SDOVId,
                UBothFlag: this.UBothFlag,
                CentiShow3DFlag: this.CentiShow3DFlag,
                VecIntimateInfo: this.VecIntimateInfo.toObject(),
                ShowNameplate: this.ShowNameplate,
                NewLoverDiamondFlag: this.NewLoverDiamondFlag,
                VecExtSnsFrdData: this.VecExtSnsFrdData.toObject(),
                VecMutualMarkData: this.VecMutualMarkData.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Uin") && (this.Uin = json.Uin);
            _hasOwnProperty.call(json, "GroupId") && (this.GroupId = json.GroupId);
            _hasOwnProperty.call(json, "FaceId") && (this.FaceId = json.FaceId);
            _hasOwnProperty.call(json, "Remark") && (this.Remark = json.Remark);
            _hasOwnProperty.call(json, "Sqqtype") && (this.Sqqtype = json.Sqqtype);
            _hasOwnProperty.call(json, "Status") && (this.Status = json.Status);
            _hasOwnProperty.call(json, "MemberLevel") && (this.MemberLevel = json.MemberLevel);
            _hasOwnProperty.call(json, "IsMqqOnLine") && (this.IsMqqOnLine = json.IsMqqOnLine);
            _hasOwnProperty.call(json, "SqqOnLineState") && (this.SqqOnLineState = json.SqqOnLineState);
            _hasOwnProperty.call(json, "IsIphoneOnline") && (this.IsIphoneOnline = json.IsIphoneOnline);
            _hasOwnProperty.call(json, "DetalStatusFlag") && (this.DetalStatusFlag = json.DetalStatusFlag);
            _hasOwnProperty.call(json, "SqqOnLineStateV2") && (this.SqqOnLineStateV2 = json.SqqOnLineStateV2);
            _hasOwnProperty.call(json, "SShowName") && (this.SShowName = json.SShowName);
            _hasOwnProperty.call(json, "IsRemark") && (this.IsRemark = json.IsRemark);
            _hasOwnProperty.call(json, "Nick") && (this.Nick = json.Nick);
            _hasOwnProperty.call(json, "SpecialFlag") && (this.SpecialFlag = json.SpecialFlag);
            _hasOwnProperty.call(json, "VecIMGroupID") && (this.VecIMGroupID.readFromObject(json.VecIMGroupID));
            _hasOwnProperty.call(json, "VecMSFGroupID") && (this.VecMSFGroupID.readFromObject(json.VecMSFGroupID));
            _hasOwnProperty.call(json, "ITermType") && (this.ITermType = json.ITermType);
            _hasOwnProperty.call(json, "OVipInfo") && (this.OVipInfo.readFromObject(json.OVipInfo));
            _hasOwnProperty.call(json, "Network") && (this.Network = json.Network);
            _hasOwnProperty.call(json, "VecRing") && (this.VecRing.readFromObject(json.VecRing));
            _hasOwnProperty.call(json, "UAbiFlag") && (this.UAbiFlag = json.UAbiFlag);
            _hasOwnProperty.call(json, "UlFaceAddonId") && (this.UlFaceAddonId = json.UlFaceAddonId);
            _hasOwnProperty.call(json, "NetworkType") && (this.NetworkType = json.NetworkType);
            _hasOwnProperty.call(json, "VipFont") && (this.VipFont = json.VipFont);
            _hasOwnProperty.call(json, "IconType") && (this.IconType = json.IconType);
            _hasOwnProperty.call(json, "TermDesc") && (this.TermDesc = json.TermDesc);
            _hasOwnProperty.call(json, "ColorRing") && (this.ColorRing = json.ColorRing);
            _hasOwnProperty.call(json, "ApolloFlag") && (this.ApolloFlag = json.ApolloFlag);
            _hasOwnProperty.call(json, "UApolloTimestamp") && (this.UApolloTimestamp = json.UApolloTimestamp);
            _hasOwnProperty.call(json, "Sex") && (this.Sex = json.Sex);
            _hasOwnProperty.call(json, "FounderFont") && (this.FounderFont = json.FounderFont);
            _hasOwnProperty.call(json, "EimId") && (this.EimId = json.EimId);
            _hasOwnProperty.call(json, "EimMobile") && (this.EimMobile = json.EimMobile);
            _hasOwnProperty.call(json, "OlympicTorch") && (this.OlympicTorch = json.OlympicTorch);
            _hasOwnProperty.call(json, "UApolloSignTime") && (this.UApolloSignTime = json.UApolloSignTime);
            _hasOwnProperty.call(json, "ULaviUin") && (this.ULaviUin = json.ULaviUin);
            _hasOwnProperty.call(json, "UTagUpdateTime") && (this.UTagUpdateTime = json.UTagUpdateTime);
            _hasOwnProperty.call(json, "UGameLastLoginTime") && (this.UGameLastLoginTime = json.UGameLastLoginTime);
            _hasOwnProperty.call(json, "UGameAppid") && (this.UGameAppid = json.UGameAppid);
            _hasOwnProperty.call(json, "VecCardID") && (this.VecCardID.readFromObject(json.VecCardID));
            _hasOwnProperty.call(json, "UlBitSet") && (this.UlBitSet = json.UlBitSet);
            _hasOwnProperty.call(json, "KingOfGloryFlag") && (this.KingOfGloryFlag = json.KingOfGloryFlag);
            _hasOwnProperty.call(json, "UlKingOfGloryRank") && (this.UlKingOfGloryRank = json.UlKingOfGloryRank);
            _hasOwnProperty.call(json, "MasterUin") && (this.MasterUin = json.MasterUin);
            _hasOwnProperty.call(json, "ULastMedalUpdateTime") && (this.ULastMedalUpdateTime = json.ULastMedalUpdateTime);
            _hasOwnProperty.call(json, "UFaceStoreId") && (this.UFaceStoreId = json.UFaceStoreId);
            _hasOwnProperty.call(json, "UFontEffect") && (this.UFontEffect = json.UFontEffect);
            _hasOwnProperty.call(json, "SDOVId") && (this.SDOVId = json.SDOVId);
            _hasOwnProperty.call(json, "UBothFlag") && (this.UBothFlag = json.UBothFlag);
            _hasOwnProperty.call(json, "CentiShow3DFlag") && (this.CentiShow3DFlag = json.CentiShow3DFlag);
            _hasOwnProperty.call(json, "VecIntimateInfo") && (this.VecIntimateInfo.readFromObject(json.VecIntimateInfo));
            _hasOwnProperty.call(json, "ShowNameplate") && (this.ShowNameplate = json.ShowNameplate);
            _hasOwnProperty.call(json, "NewLoverDiamondFlag") && (this.NewLoverDiamondFlag = json.NewLoverDiamondFlag);
            _hasOwnProperty.call(json, "VecExtSnsFrdData") && (this.VecExtSnsFrdData.readFromObject(json.VecExtSnsFrdData));
            _hasOwnProperty.call(json, "VecMutualMarkData") && (this.VecMutualMarkData.readFromObject(json.VecMutualMarkData));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new FriendInfo();
        }
        static create(is) {
            return FriendTars.FriendInfo._readFrom(is);
        }
    }
    FriendInfo._classname = "FriendTars.FriendInfo";
    FriendTars.FriendInfo = FriendInfo;
    class GroupInfo {
        constructor() {
            this.GroupId = 0;
            this.Groupname = "";
            this.FriendCount = 0;
            this.OnlineFriendCount = 0;
            this.Seqid = 0;
            this.SqqOnLineCount = 0;
            this._proto_struct_name_ = "";
            this._classname = "FriendTars.GroupInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new GroupInfo;
            tmp.GroupId = is.readInt8(0, true, 0);
            tmp.Groupname = is.readString(1, true, "");
            tmp.FriendCount = is.readInt32(2, true, 0);
            tmp.OnlineFriendCount = is.readInt32(3, true, 0);
            tmp.Seqid = is.readInt8(4, false, 0);
            tmp.SqqOnLineCount = is.readInt32(5, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt8(0, this.GroupId);
            os.writeString(1, this.Groupname);
            os.writeInt32(2, this.FriendCount);
            os.writeInt32(3, this.OnlineFriendCount);
            os.writeInt8(4, this.Seqid);
            os.writeInt32(5, this.SqqOnLineCount);
        }
        _equal() {
            assert.fail("this structure not define key operation");
        }
        _genKey() {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        }
        toObject() {
            return {
                GroupId: this.GroupId,
                Groupname: this.Groupname,
                FriendCount: this.FriendCount,
                OnlineFriendCount: this.OnlineFriendCount,
                Seqid: this.Seqid,
                SqqOnLineCount: this.SqqOnLineCount
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "GroupId") && (this.GroupId = json.GroupId);
            _hasOwnProperty.call(json, "Groupname") && (this.Groupname = json.Groupname);
            _hasOwnProperty.call(json, "FriendCount") && (this.FriendCount = json.FriendCount);
            _hasOwnProperty.call(json, "OnlineFriendCount") && (this.OnlineFriendCount = json.OnlineFriendCount);
            _hasOwnProperty.call(json, "Seqid") && (this.Seqid = json.Seqid);
            _hasOwnProperty.call(json, "SqqOnLineCount") && (this.SqqOnLineCount = json.SqqOnLineCount);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new GroupInfo();
        }
        static create(is) {
            return FriendTars.GroupInfo._readFrom(is);
        }
    }
    GroupInfo._classname = "FriendTars.GroupInfo";
    FriendTars.GroupInfo = GroupInfo;
    class FriendListSubSrvRspCode {
        constructor() {
            this.WGetMutualMarkRspCode = 0;
            this.WGetIntimateInfoRspCode = 0;
            this._proto_struct_name_ = "";
            this._classname = "FriendTars.FriendListSubSrvRspCode";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new FriendListSubSrvRspCode;
            tmp.WGetMutualMarkRspCode = is.readInt16(0, false, 0);
            tmp.WGetIntimateInfoRspCode = is.readInt16(2, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt16(0, this.WGetMutualMarkRspCode);
            os.writeInt16(2, this.WGetIntimateInfoRspCode);
        }
        _equal() {
            assert.fail("this structure not define key operation");
        }
        _genKey() {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        }
        toObject() {
            return {
                WGetMutualMarkRspCode: this.WGetMutualMarkRspCode,
                WGetIntimateInfoRspCode: this.WGetIntimateInfoRspCode
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "WGetMutualMarkRspCode") && (this.WGetMutualMarkRspCode = json.WGetMutualMarkRspCode);
            _hasOwnProperty.call(json, "WGetIntimateInfoRspCode") && (this.WGetIntimateInfoRspCode = json.WGetIntimateInfoRspCode);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new FriendListSubSrvRspCode();
        }
        static create(is) {
            return FriendTars.FriendListSubSrvRspCode._readFrom(is);
        }
    }
    FriendListSubSrvRspCode._classname = "FriendTars.FriendListSubSrvRspCode";
    FriendTars.FriendListSubSrvRspCode = FriendListSubSrvRspCode;
    class GetFriendListResp {
        constructor() {
            this.ReqType = 0;
            this.IfReflush = 0;
            this.Uin = 0;
            this.StartIndex = 0;
            this.GetfriendCount = 0;
            this.TotoalFriendCount = 0;
            this.FriendCount = 0;
            this.VecFriendInfo = new TarsStream.List(FriendTars.FriendInfo);
            this.Groupid = 0;
            this.IfGetGroupInfo = 0;
            this.GroupstartIndex = 0;
            this.GetgroupCount = 0;
            this.TotoalGroupCount = 0;
            this.GroupCount = 0;
            this.VecGroupInfo = new TarsStream.List(FriendTars.GroupInfo);
            this.Result = 0;
            this.ErrorCode = 0;
            this.OnlineFriendCount = 0;
            this.ServerTime = 0;
            this.SqqOnLineCount = 0;
            this.VecMSFGroupInfo = new TarsStream.List(FriendTars.GroupInfo);
            this.RespType = 0;
            this.HasOtherRespFlag = 0;
            this.StSelfInfo = new FriendTars.FriendInfo;
            this.ShowPcIcon = 0;
            this.WGetExtSnsRspCode = 0;
            this.StSubSrvRspCode = new FriendTars.FriendListSubSrvRspCode;
            this._proto_struct_name_ = "";
            this._classname = "FriendTars.GetFriendListResp";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new GetFriendListResp;
            tmp.ReqType = is.readInt32(0, true, 0);
            tmp.IfReflush = is.readInt8(1, true, 0);
            tmp.Uin = is.readInt64(2, true, 0);
            tmp.StartIndex = is.readInt16(3, true, 0);
            tmp.GetfriendCount = is.readInt16(4, true, 0);
            tmp.TotoalFriendCount = is.readInt16(5, true, 0);
            tmp.FriendCount = is.readInt16(6, true, 0);
            tmp.VecFriendInfo = is.readList(7, true, TarsStream.List(FriendTars.FriendInfo));
            tmp.Groupid = is.readInt8(8, false, 0);
            tmp.IfGetGroupInfo = is.readInt8(9, true, 0);
            tmp.GroupstartIndex = is.readInt8(10, false, 0);
            tmp.GetgroupCount = is.readInt8(11, false, 0);
            tmp.TotoalGroupCount = is.readInt16(12, false, 0);
            tmp.GroupCount = is.readInt8(13, false, 0);
            tmp.VecGroupInfo = is.readList(14, false, TarsStream.List(FriendTars.GroupInfo));
            tmp.Result = is.readInt32(15, true, 0);
            tmp.ErrorCode = is.readInt16(16, false, 0);
            tmp.OnlineFriendCount = is.readInt16(17, false, 0);
            tmp.ServerTime = is.readInt64(18, false, 0);
            tmp.SqqOnLineCount = is.readInt16(19, false, 0);
            tmp.VecMSFGroupInfo = is.readList(20, false, TarsStream.List(FriendTars.GroupInfo));
            tmp.RespType = is.readInt8(21, false, 0);
            tmp.HasOtherRespFlag = is.readInt8(22, false, 0);
            tmp.StSelfInfo = is.readStruct(23, false, FriendTars.FriendInfo);
            tmp.ShowPcIcon = is.readInt8(24, false, 0);
            tmp.WGetExtSnsRspCode = is.readInt16(25, false, 0);
            tmp.StSubSrvRspCode = is.readStruct(26, false, FriendTars.FriendListSubSrvRspCode);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt32(0, this.ReqType);
            os.writeInt8(1, this.IfReflush);
            os.writeInt64(2, this.Uin);
            os.writeInt16(3, this.StartIndex);
            os.writeInt16(4, this.GetfriendCount);
            os.writeInt16(5, this.TotoalFriendCount);
            os.writeInt16(6, this.FriendCount);
            os.writeList(7, this.VecFriendInfo);
            os.writeInt8(8, this.Groupid);
            os.writeInt8(9, this.IfGetGroupInfo);
            os.writeInt8(10, this.GroupstartIndex);
            os.writeInt8(11, this.GetgroupCount);
            os.writeInt16(12, this.TotoalGroupCount);
            os.writeInt8(13, this.GroupCount);
            os.writeList(14, this.VecGroupInfo);
            os.writeInt32(15, this.Result);
            os.writeInt16(16, this.ErrorCode);
            os.writeInt16(17, this.OnlineFriendCount);
            os.writeInt64(18, this.ServerTime);
            os.writeInt16(19, this.SqqOnLineCount);
            os.writeList(20, this.VecMSFGroupInfo);
            os.writeInt8(21, this.RespType);
            os.writeInt8(22, this.HasOtherRespFlag);
            os.writeStruct(23, this.StSelfInfo);
            os.writeInt8(24, this.ShowPcIcon);
            os.writeInt16(25, this.WGetExtSnsRspCode);
            os.writeStruct(26, this.StSubSrvRspCode);
        }
        _equal() {
            assert.fail("this structure not define key operation");
        }
        _genKey() {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        }
        toObject() {
            return {
                ReqType: this.ReqType,
                IfReflush: this.IfReflush,
                Uin: this.Uin,
                StartIndex: this.StartIndex,
                GetfriendCount: this.GetfriendCount,
                TotoalFriendCount: this.TotoalFriendCount,
                FriendCount: this.FriendCount,
                VecFriendInfo: this.VecFriendInfo.toObject(),
                Groupid: this.Groupid,
                IfGetGroupInfo: this.IfGetGroupInfo,
                GroupstartIndex: this.GroupstartIndex,
                GetgroupCount: this.GetgroupCount,
                TotoalGroupCount: this.TotoalGroupCount,
                GroupCount: this.GroupCount,
                VecGroupInfo: this.VecGroupInfo.toObject(),
                Result: this.Result,
                ErrorCode: this.ErrorCode,
                OnlineFriendCount: this.OnlineFriendCount,
                ServerTime: this.ServerTime,
                SqqOnLineCount: this.SqqOnLineCount,
                VecMSFGroupInfo: this.VecMSFGroupInfo.toObject(),
                RespType: this.RespType,
                HasOtherRespFlag: this.HasOtherRespFlag,
                StSelfInfo: this.StSelfInfo.toObject(),
                ShowPcIcon: this.ShowPcIcon,
                WGetExtSnsRspCode: this.WGetExtSnsRspCode,
                StSubSrvRspCode: this.StSubSrvRspCode.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "ReqType") && (this.ReqType = json.ReqType);
            _hasOwnProperty.call(json, "IfReflush") && (this.IfReflush = json.IfReflush);
            _hasOwnProperty.call(json, "Uin") && (this.Uin = json.Uin);
            _hasOwnProperty.call(json, "StartIndex") && (this.StartIndex = json.StartIndex);
            _hasOwnProperty.call(json, "GetfriendCount") && (this.GetfriendCount = json.GetfriendCount);
            _hasOwnProperty.call(json, "TotoalFriendCount") && (this.TotoalFriendCount = json.TotoalFriendCount);
            _hasOwnProperty.call(json, "FriendCount") && (this.FriendCount = json.FriendCount);
            _hasOwnProperty.call(json, "VecFriendInfo") && (this.VecFriendInfo.readFromObject(json.VecFriendInfo));
            _hasOwnProperty.call(json, "Groupid") && (this.Groupid = json.Groupid);
            _hasOwnProperty.call(json, "IfGetGroupInfo") && (this.IfGetGroupInfo = json.IfGetGroupInfo);
            _hasOwnProperty.call(json, "GroupstartIndex") && (this.GroupstartIndex = json.GroupstartIndex);
            _hasOwnProperty.call(json, "GetgroupCount") && (this.GetgroupCount = json.GetgroupCount);
            _hasOwnProperty.call(json, "TotoalGroupCount") && (this.TotoalGroupCount = json.TotoalGroupCount);
            _hasOwnProperty.call(json, "GroupCount") && (this.GroupCount = json.GroupCount);
            _hasOwnProperty.call(json, "VecGroupInfo") && (this.VecGroupInfo.readFromObject(json.VecGroupInfo));
            _hasOwnProperty.call(json, "Result") && (this.Result = json.Result);
            _hasOwnProperty.call(json, "ErrorCode") && (this.ErrorCode = json.ErrorCode);
            _hasOwnProperty.call(json, "OnlineFriendCount") && (this.OnlineFriendCount = json.OnlineFriendCount);
            _hasOwnProperty.call(json, "ServerTime") && (this.ServerTime = json.ServerTime);
            _hasOwnProperty.call(json, "SqqOnLineCount") && (this.SqqOnLineCount = json.SqqOnLineCount);
            _hasOwnProperty.call(json, "VecMSFGroupInfo") && (this.VecMSFGroupInfo.readFromObject(json.VecMSFGroupInfo));
            _hasOwnProperty.call(json, "RespType") && (this.RespType = json.RespType);
            _hasOwnProperty.call(json, "HasOtherRespFlag") && (this.HasOtherRespFlag = json.HasOtherRespFlag);
            _hasOwnProperty.call(json, "StSelfInfo") && (this.StSelfInfo.readFromObject(json.StSelfInfo));
            _hasOwnProperty.call(json, "ShowPcIcon") && (this.ShowPcIcon = json.ShowPcIcon);
            _hasOwnProperty.call(json, "WGetExtSnsRspCode") && (this.WGetExtSnsRspCode = json.WGetExtSnsRspCode);
            _hasOwnProperty.call(json, "StSubSrvRspCode") && (this.StSubSrvRspCode.readFromObject(json.StSubSrvRspCode));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new GetFriendListResp();
        }
        static create(is) {
            return FriendTars.GetFriendListResp._readFrom(is);
        }
    }
    GetFriendListResp._classname = "FriendTars.GetFriendListResp";
    FriendTars.GetFriendListResp = GetFriendListResp;
})(FriendTars = exports.FriendTars || (exports.FriendTars = {}));
