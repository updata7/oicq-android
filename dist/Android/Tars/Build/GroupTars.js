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
exports.GroupTars = void 0;
const assert = require("assert");
const TarsStream = __importStar(require("@tars/stream"));
const _hasOwnProperty = Object.prototype.hasOwnProperty;
var GroupTars;
(function (GroupTars) {
    class StTroopNumSimplify {
        constructor() {
            this.GroupCode = 0;
            this.DwGroupInfoSeq = 0;
            this.DwGroupFlagExt = 0;
            this.DwGroupRankSeq = 0;
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.StTroopNumSimplify";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new StTroopNumSimplify;
            tmp.GroupCode = is.readInt64(0, true, 0);
            tmp.DwGroupInfoSeq = is.readInt64(1, true, 0);
            tmp.DwGroupFlagExt = is.readInt64(2, true, 0);
            tmp.DwGroupRankSeq = is.readInt64(3, true, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.GroupCode);
            os.writeInt64(1, this.DwGroupInfoSeq);
            os.writeInt64(2, this.DwGroupFlagExt);
            os.writeInt64(3, this.DwGroupRankSeq);
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
                GroupCode: this.GroupCode,
                DwGroupInfoSeq: this.DwGroupInfoSeq,
                DwGroupFlagExt: this.DwGroupFlagExt,
                DwGroupRankSeq: this.DwGroupRankSeq
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "GroupCode") && (this.GroupCode = json.GroupCode);
            _hasOwnProperty.call(json, "DwGroupInfoSeq") && (this.DwGroupInfoSeq = json.DwGroupInfoSeq);
            _hasOwnProperty.call(json, "DwGroupFlagExt") && (this.DwGroupFlagExt = json.DwGroupFlagExt);
            _hasOwnProperty.call(json, "DwGroupRankSeq") && (this.DwGroupRankSeq = json.DwGroupRankSeq);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new StTroopNumSimplify();
        }
        static create(is) {
            return GroupTars.StTroopNumSimplify._readFrom(is);
        }
    }
    StTroopNumSimplify._classname = "GroupTars.StTroopNumSimplify";
    GroupTars.StTroopNumSimplify = StTroopNumSimplify;
    class StLevelRankPair {
        constructor() {
            this.DwLevel = 0;
            this.Rank = "";
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.StLevelRankPair";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new StLevelRankPair;
            tmp.DwLevel = is.readInt64(0, false, 0);
            tmp.Rank = is.readString(1, false, "");
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.DwLevel);
            os.writeString(1, this.Rank);
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
                DwLevel: this.DwLevel,
                Rank: this.Rank
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "DwLevel") && (this.DwLevel = json.DwLevel);
            _hasOwnProperty.call(json, "Rank") && (this.Rank = json.Rank);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new StLevelRankPair();
        }
        static create(is) {
            return GroupTars.StLevelRankPair._readFrom(is);
        }
    }
    StLevelRankPair._classname = "GroupTars.StLevelRankPair";
    GroupTars.StLevelRankPair = StLevelRankPair;
    class StGroupRankInfo {
        constructor() {
            this.DwGroupCode = 0;
            this.GroupRankSysFlag = 0;
            this.GroupRankUserFlag = 0;
            this.VecRankMap = new TarsStream.List(GroupTars.StLevelRankPair);
            this.DwGroupRankSeq = 0;
            this.OwnerName = "";
            this.AdminName = "";
            this.DwOfficeMode = 0;
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.StGroupRankInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new StGroupRankInfo;
            tmp.DwGroupCode = is.readInt64(0, true, 0);
            tmp.GroupRankSysFlag = is.readInt8(1, false, 0);
            tmp.GroupRankUserFlag = is.readInt8(2, false, 0);
            tmp.VecRankMap = is.readList(3, false, TarsStream.List(GroupTars.StLevelRankPair));
            tmp.DwGroupRankSeq = is.readInt64(4, false, 0);
            tmp.OwnerName = is.readString(5, false, "");
            tmp.AdminName = is.readString(6, false, "");
            tmp.DwOfficeMode = is.readInt64(7, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.DwGroupCode);
            os.writeInt8(1, this.GroupRankSysFlag);
            os.writeInt8(2, this.GroupRankUserFlag);
            os.writeList(3, this.VecRankMap);
            os.writeInt64(4, this.DwGroupRankSeq);
            os.writeString(5, this.OwnerName);
            os.writeString(6, this.AdminName);
            os.writeInt64(7, this.DwOfficeMode);
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
                DwGroupCode: this.DwGroupCode,
                GroupRankSysFlag: this.GroupRankSysFlag,
                GroupRankUserFlag: this.GroupRankUserFlag,
                VecRankMap: this.VecRankMap.toObject(),
                DwGroupRankSeq: this.DwGroupRankSeq,
                OwnerName: this.OwnerName,
                AdminName: this.AdminName,
                DwOfficeMode: this.DwOfficeMode
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "DwGroupCode") && (this.DwGroupCode = json.DwGroupCode);
            _hasOwnProperty.call(json, "GroupRankSysFlag") && (this.GroupRankSysFlag = json.GroupRankSysFlag);
            _hasOwnProperty.call(json, "GroupRankUserFlag") && (this.GroupRankUserFlag = json.GroupRankUserFlag);
            _hasOwnProperty.call(json, "VecRankMap") && (this.VecRankMap.readFromObject(json.VecRankMap));
            _hasOwnProperty.call(json, "DwGroupRankSeq") && (this.DwGroupRankSeq = json.DwGroupRankSeq);
            _hasOwnProperty.call(json, "OwnerName") && (this.OwnerName = json.OwnerName);
            _hasOwnProperty.call(json, "AdminName") && (this.AdminName = json.AdminName);
            _hasOwnProperty.call(json, "DwOfficeMode") && (this.DwOfficeMode = json.DwOfficeMode);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new StGroupRankInfo();
        }
        static create(is) {
            return GroupTars.StGroupRankInfo._readFrom(is);
        }
    }
    StGroupRankInfo._classname = "GroupTars.StGroupRankInfo";
    GroupTars.StGroupRankInfo = StGroupRankInfo;
    class StTroopNum {
        constructor() {
            this.GroupUin = 0;
            this.GroupCode = 0;
            this.Flag = 0;
            this.DwGroupInfoSeq = 0;
            this.GroupName = "";
            this.GroupMemo = "";
            this.DwGroupFlagExt = 0;
            this.DwGroupRankSeq = 0;
            this.DwCertificationType = 0;
            this.DwShutUpTimestamp = 0;
            this.DwMyShutUpTimestamp = 0;
            this.DwCmdUinUinFlag = 0;
            this.DwAdditionalFlag = 0;
            this.DwGroupTypeFlag = 0;
            this.DwGroupSecType = 0;
            this.DwGroupSecTypeInfo = 0;
            this.DwGroupClassExt = 0;
            this.DwAppPrivilegeFlag = 0;
            this.DwSubscriptionUin = 0;
            this.DwMemberNum = 0;
            this.DwMemberNumSeq = 0;
            this.DwMemberCardSeq = 0;
            this.DwGroupFlagExt3 = 0;
            this.DwGroupOwnerUin = 0;
            this.IsConfGroup = 0;
            this.IsModifyConfGroupFace = 0;
            this.IsModifyConfGroupName = 0;
            this.DwCmduinJoinTime = 0;
            this.UlCompanyId = 0;
            this.DwMaxGroupMemberNum = 0;
            this.DwCmdUinGroupMask = 0;
            this.UdwHLGuildAppid = 0;
            this.UdwHLGuildSubType = 0;
            this.UdwCmdUinRingtoneID = 0;
            this.UdwCmdUinFlagEx2 = 0;
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.StTroopNum";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new StTroopNum;
            tmp.GroupUin = is.readInt64(0, true, 0);
            tmp.GroupCode = is.readInt64(1, true, 0);
            tmp.Flag = is.readInt8(2, false, 0);
            tmp.DwGroupInfoSeq = is.readInt64(3, false, 0);
            tmp.GroupName = is.readString(4, false, "");
            tmp.GroupMemo = is.readString(5, false, "");
            tmp.DwGroupFlagExt = is.readInt64(6, false, 0);
            tmp.DwGroupRankSeq = is.readInt64(7, false, 0);
            tmp.DwCertificationType = is.readInt64(8, false, 0);
            tmp.DwShutUpTimestamp = is.readInt64(9, false, 0);
            tmp.DwMyShutUpTimestamp = is.readInt64(10, false, 0);
            tmp.DwCmdUinUinFlag = is.readInt64(11, false, 0);
            tmp.DwAdditionalFlag = is.readInt64(12, false, 0);
            tmp.DwGroupTypeFlag = is.readInt64(13, false, 0);
            tmp.DwGroupSecType = is.readInt64(14, false, 0);
            tmp.DwGroupSecTypeInfo = is.readInt64(15, false, 0);
            tmp.DwGroupClassExt = is.readInt64(16, false, 0);
            tmp.DwAppPrivilegeFlag = is.readInt64(17, false, 0);
            tmp.DwSubscriptionUin = is.readInt64(18, false, 0);
            tmp.DwMemberNum = is.readInt64(19, false, 0);
            tmp.DwMemberNumSeq = is.readInt64(20, false, 0);
            tmp.DwMemberCardSeq = is.readInt64(21, false, 0);
            tmp.DwGroupFlagExt3 = is.readInt64(22, false, 0);
            tmp.DwGroupOwnerUin = is.readInt64(23, true, 0);
            tmp.IsConfGroup = is.readInt64(24, false, 0);
            tmp.IsModifyConfGroupFace = is.readInt64(25, false, 0);
            tmp.IsModifyConfGroupName = is.readInt64(26, false, 0);
            tmp.DwCmduinJoinTime = is.readInt64(27, false, 0);
            tmp.UlCompanyId = is.readInt64(28, false, 0);
            tmp.DwMaxGroupMemberNum = is.readInt64(29, false, 0);
            tmp.DwCmdUinGroupMask = is.readInt64(30, false, 0);
            tmp.UdwHLGuildAppid = is.readInt64(31, false, 0);
            tmp.UdwHLGuildSubType = is.readInt64(32, false, 0);
            tmp.UdwCmdUinRingtoneID = is.readInt64(33, false, 0);
            tmp.UdwCmdUinFlagEx2 = is.readInt64(34, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.GroupUin);
            os.writeInt64(1, this.GroupCode);
            os.writeInt8(2, this.Flag);
            os.writeInt64(3, this.DwGroupInfoSeq);
            os.writeString(4, this.GroupName);
            os.writeString(5, this.GroupMemo);
            os.writeInt64(6, this.DwGroupFlagExt);
            os.writeInt64(7, this.DwGroupRankSeq);
            os.writeInt64(8, this.DwCertificationType);
            os.writeInt64(9, this.DwShutUpTimestamp);
            os.writeInt64(10, this.DwMyShutUpTimestamp);
            os.writeInt64(11, this.DwCmdUinUinFlag);
            os.writeInt64(12, this.DwAdditionalFlag);
            os.writeInt64(13, this.DwGroupTypeFlag);
            os.writeInt64(14, this.DwGroupSecType);
            os.writeInt64(15, this.DwGroupSecTypeInfo);
            os.writeInt64(16, this.DwGroupClassExt);
            os.writeInt64(17, this.DwAppPrivilegeFlag);
            os.writeInt64(18, this.DwSubscriptionUin);
            os.writeInt64(19, this.DwMemberNum);
            os.writeInt64(20, this.DwMemberNumSeq);
            os.writeInt64(21, this.DwMemberCardSeq);
            os.writeInt64(22, this.DwGroupFlagExt3);
            os.writeInt64(23, this.DwGroupOwnerUin);
            os.writeInt64(24, this.IsConfGroup);
            os.writeInt64(25, this.IsModifyConfGroupFace);
            os.writeInt64(26, this.IsModifyConfGroupName);
            os.writeInt64(27, this.DwCmduinJoinTime);
            os.writeInt64(28, this.UlCompanyId);
            os.writeInt64(29, this.DwMaxGroupMemberNum);
            os.writeInt64(30, this.DwCmdUinGroupMask);
            os.writeInt64(31, this.UdwHLGuildAppid);
            os.writeInt64(32, this.UdwHLGuildSubType);
            os.writeInt64(33, this.UdwCmdUinRingtoneID);
            os.writeInt64(34, this.UdwCmdUinFlagEx2);
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
                GroupUin: this.GroupUin,
                GroupCode: this.GroupCode,
                Flag: this.Flag,
                DwGroupInfoSeq: this.DwGroupInfoSeq,
                GroupName: this.GroupName,
                GroupMemo: this.GroupMemo,
                DwGroupFlagExt: this.DwGroupFlagExt,
                DwGroupRankSeq: this.DwGroupRankSeq,
                DwCertificationType: this.DwCertificationType,
                DwShutUpTimestamp: this.DwShutUpTimestamp,
                DwMyShutUpTimestamp: this.DwMyShutUpTimestamp,
                DwCmdUinUinFlag: this.DwCmdUinUinFlag,
                DwAdditionalFlag: this.DwAdditionalFlag,
                DwGroupTypeFlag: this.DwGroupTypeFlag,
                DwGroupSecType: this.DwGroupSecType,
                DwGroupSecTypeInfo: this.DwGroupSecTypeInfo,
                DwGroupClassExt: this.DwGroupClassExt,
                DwAppPrivilegeFlag: this.DwAppPrivilegeFlag,
                DwSubscriptionUin: this.DwSubscriptionUin,
                DwMemberNum: this.DwMemberNum,
                DwMemberNumSeq: this.DwMemberNumSeq,
                DwMemberCardSeq: this.DwMemberCardSeq,
                DwGroupFlagExt3: this.DwGroupFlagExt3,
                DwGroupOwnerUin: this.DwGroupOwnerUin,
                IsConfGroup: this.IsConfGroup,
                IsModifyConfGroupFace: this.IsModifyConfGroupFace,
                IsModifyConfGroupName: this.IsModifyConfGroupName,
                DwCmduinJoinTime: this.DwCmduinJoinTime,
                UlCompanyId: this.UlCompanyId,
                DwMaxGroupMemberNum: this.DwMaxGroupMemberNum,
                DwCmdUinGroupMask: this.DwCmdUinGroupMask,
                UdwHLGuildAppid: this.UdwHLGuildAppid,
                UdwHLGuildSubType: this.UdwHLGuildSubType,
                UdwCmdUinRingtoneID: this.UdwCmdUinRingtoneID,
                UdwCmdUinFlagEx2: this.UdwCmdUinFlagEx2
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "GroupUin") && (this.GroupUin = json.GroupUin);
            _hasOwnProperty.call(json, "GroupCode") && (this.GroupCode = json.GroupCode);
            _hasOwnProperty.call(json, "Flag") && (this.Flag = json.Flag);
            _hasOwnProperty.call(json, "DwGroupInfoSeq") && (this.DwGroupInfoSeq = json.DwGroupInfoSeq);
            _hasOwnProperty.call(json, "GroupName") && (this.GroupName = json.GroupName);
            _hasOwnProperty.call(json, "GroupMemo") && (this.GroupMemo = json.GroupMemo);
            _hasOwnProperty.call(json, "DwGroupFlagExt") && (this.DwGroupFlagExt = json.DwGroupFlagExt);
            _hasOwnProperty.call(json, "DwGroupRankSeq") && (this.DwGroupRankSeq = json.DwGroupRankSeq);
            _hasOwnProperty.call(json, "DwCertificationType") && (this.DwCertificationType = json.DwCertificationType);
            _hasOwnProperty.call(json, "DwShutUpTimestamp") && (this.DwShutUpTimestamp = json.DwShutUpTimestamp);
            _hasOwnProperty.call(json, "DwMyShutUpTimestamp") && (this.DwMyShutUpTimestamp = json.DwMyShutUpTimestamp);
            _hasOwnProperty.call(json, "DwCmdUinUinFlag") && (this.DwCmdUinUinFlag = json.DwCmdUinUinFlag);
            _hasOwnProperty.call(json, "DwAdditionalFlag") && (this.DwAdditionalFlag = json.DwAdditionalFlag);
            _hasOwnProperty.call(json, "DwGroupTypeFlag") && (this.DwGroupTypeFlag = json.DwGroupTypeFlag);
            _hasOwnProperty.call(json, "DwGroupSecType") && (this.DwGroupSecType = json.DwGroupSecType);
            _hasOwnProperty.call(json, "DwGroupSecTypeInfo") && (this.DwGroupSecTypeInfo = json.DwGroupSecTypeInfo);
            _hasOwnProperty.call(json, "DwGroupClassExt") && (this.DwGroupClassExt = json.DwGroupClassExt);
            _hasOwnProperty.call(json, "DwAppPrivilegeFlag") && (this.DwAppPrivilegeFlag = json.DwAppPrivilegeFlag);
            _hasOwnProperty.call(json, "DwSubscriptionUin") && (this.DwSubscriptionUin = json.DwSubscriptionUin);
            _hasOwnProperty.call(json, "DwMemberNum") && (this.DwMemberNum = json.DwMemberNum);
            _hasOwnProperty.call(json, "DwMemberNumSeq") && (this.DwMemberNumSeq = json.DwMemberNumSeq);
            _hasOwnProperty.call(json, "DwMemberCardSeq") && (this.DwMemberCardSeq = json.DwMemberCardSeq);
            _hasOwnProperty.call(json, "DwGroupFlagExt3") && (this.DwGroupFlagExt3 = json.DwGroupFlagExt3);
            _hasOwnProperty.call(json, "DwGroupOwnerUin") && (this.DwGroupOwnerUin = json.DwGroupOwnerUin);
            _hasOwnProperty.call(json, "IsConfGroup") && (this.IsConfGroup = json.IsConfGroup);
            _hasOwnProperty.call(json, "IsModifyConfGroupFace") && (this.IsModifyConfGroupFace = json.IsModifyConfGroupFace);
            _hasOwnProperty.call(json, "IsModifyConfGroupName") && (this.IsModifyConfGroupName = json.IsModifyConfGroupName);
            _hasOwnProperty.call(json, "DwCmduinJoinTime") && (this.DwCmduinJoinTime = json.DwCmduinJoinTime);
            _hasOwnProperty.call(json, "UlCompanyId") && (this.UlCompanyId = json.UlCompanyId);
            _hasOwnProperty.call(json, "DwMaxGroupMemberNum") && (this.DwMaxGroupMemberNum = json.DwMaxGroupMemberNum);
            _hasOwnProperty.call(json, "DwCmdUinGroupMask") && (this.DwCmdUinGroupMask = json.DwCmdUinGroupMask);
            _hasOwnProperty.call(json, "UdwHLGuildAppid") && (this.UdwHLGuildAppid = json.UdwHLGuildAppid);
            _hasOwnProperty.call(json, "UdwHLGuildSubType") && (this.UdwHLGuildSubType = json.UdwHLGuildSubType);
            _hasOwnProperty.call(json, "UdwCmdUinRingtoneID") && (this.UdwCmdUinRingtoneID = json.UdwCmdUinRingtoneID);
            _hasOwnProperty.call(json, "UdwCmdUinFlagEx2") && (this.UdwCmdUinFlagEx2 = json.UdwCmdUinFlagEx2);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new StTroopNum();
        }
        static create(is) {
            return GroupTars.StTroopNum._readFrom(is);
        }
    }
    StTroopNum._classname = "GroupTars.StTroopNum";
    GroupTars.StTroopNum = StTroopNum;
    class StFavoriteGroup {
        constructor() {
            this.DwGroupCode = 0;
            this.DwTimestamp = 0;
            this.DwSnsFlag = 0;
            this.DwOpenTimestamp = 0;
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.StFavoriteGroup";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new StFavoriteGroup;
            tmp.DwGroupCode = is.readInt64(0, true, 0);
            tmp.DwTimestamp = is.readInt64(1, false, 0);
            tmp.DwSnsFlag = is.readInt64(2, false, 0);
            tmp.DwOpenTimestamp = is.readInt64(3, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.DwGroupCode);
            os.writeInt64(1, this.DwTimestamp);
            os.writeInt64(2, this.DwSnsFlag);
            os.writeInt64(3, this.DwOpenTimestamp);
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
                DwGroupCode: this.DwGroupCode,
                DwTimestamp: this.DwTimestamp,
                DwSnsFlag: this.DwSnsFlag,
                DwOpenTimestamp: this.DwOpenTimestamp
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "DwGroupCode") && (this.DwGroupCode = json.DwGroupCode);
            _hasOwnProperty.call(json, "DwTimestamp") && (this.DwTimestamp = json.DwTimestamp);
            _hasOwnProperty.call(json, "DwSnsFlag") && (this.DwSnsFlag = json.DwSnsFlag);
            _hasOwnProperty.call(json, "DwOpenTimestamp") && (this.DwOpenTimestamp = json.DwOpenTimestamp);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new StFavoriteGroup();
        }
        static create(is) {
            return GroupTars.StFavoriteGroup._readFrom(is);
        }
    }
    StFavoriteGroup._classname = "GroupTars.StFavoriteGroup";
    GroupTars.StFavoriteGroup = StFavoriteGroup;
    class GetTroopListRespV2 {
        constructor() {
            this.Uin = 0;
            this.TroopCount = 0;
            this.Reuslt = 0;
            this.ErrorCode = 0;
            this.VecCookies = new TarsStream.BinBuffer;
            this.VecTroopList = new TarsStream.List(GroupTars.StTroopNum);
            this.VecTroopListDel = new TarsStream.List(GroupTars.StTroopNum);
            this.VecTroopRank = new TarsStream.List(GroupTars.StGroupRankInfo);
            this.VecFavGroup = new TarsStream.List(GroupTars.StFavoriteGroup);
            this.VecTroopListExt = new TarsStream.List(GroupTars.StTroopNum);
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.GetTroopListRespV2";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new GetTroopListRespV2;
            tmp.Uin = is.readInt64(0, true, 0);
            tmp.TroopCount = is.readInt16(1, true, 0);
            tmp.Reuslt = is.readInt32(2, true, 0);
            tmp.ErrorCode = is.readInt16(3, false, 0);
            tmp.VecCookies = is.readBytes(4, false, TarsStream.BinBuffer);
            tmp.VecTroopList = is.readList(5, false, TarsStream.List(GroupTars.StTroopNum));
            tmp.VecTroopListDel = is.readList(6, false, TarsStream.List(GroupTars.StTroopNum));
            tmp.VecTroopRank = is.readList(7, false, TarsStream.List(GroupTars.StGroupRankInfo));
            tmp.VecFavGroup = is.readList(8, false, TarsStream.List(GroupTars.StFavoriteGroup));
            tmp.VecTroopListExt = is.readList(9, false, TarsStream.List(GroupTars.StTroopNum));
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Uin);
            os.writeInt16(1, this.TroopCount);
            os.writeInt32(2, this.Reuslt);
            os.writeInt16(3, this.ErrorCode);
            os.writeBytes(4, this.VecCookies);
            os.writeList(5, this.VecTroopList);
            os.writeList(6, this.VecTroopListDel);
            os.writeList(7, this.VecTroopRank);
            os.writeList(8, this.VecFavGroup);
            os.writeList(9, this.VecTroopListExt);
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
                TroopCount: this.TroopCount,
                Reuslt: this.Reuslt,
                ErrorCode: this.ErrorCode,
                VecCookies: this.VecCookies.toObject(),
                VecTroopList: this.VecTroopList.toObject(),
                VecTroopListDel: this.VecTroopListDel.toObject(),
                VecTroopRank: this.VecTroopRank.toObject(),
                VecFavGroup: this.VecFavGroup.toObject(),
                VecTroopListExt: this.VecTroopListExt.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Uin") && (this.Uin = json.Uin);
            _hasOwnProperty.call(json, "TroopCount") && (this.TroopCount = json.TroopCount);
            _hasOwnProperty.call(json, "Reuslt") && (this.Reuslt = json.Reuslt);
            _hasOwnProperty.call(json, "ErrorCode") && (this.ErrorCode = json.ErrorCode);
            _hasOwnProperty.call(json, "VecCookies") && (this.VecCookies.readFromObject(json.VecCookies));
            _hasOwnProperty.call(json, "VecTroopList") && (this.VecTroopList.readFromObject(json.VecTroopList));
            _hasOwnProperty.call(json, "VecTroopListDel") && (this.VecTroopListDel.readFromObject(json.VecTroopListDel));
            _hasOwnProperty.call(json, "VecTroopRank") && (this.VecTroopRank.readFromObject(json.VecTroopRank));
            _hasOwnProperty.call(json, "VecFavGroup") && (this.VecFavGroup.readFromObject(json.VecFavGroup));
            _hasOwnProperty.call(json, "VecTroopListExt") && (this.VecTroopListExt.readFromObject(json.VecTroopListExt));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new GetTroopListRespV2();
        }
        static create(is) {
            return GroupTars.GetTroopListRespV2._readFrom(is);
        }
    }
    GetTroopListRespV2._classname = "GroupTars.GetTroopListRespV2";
    GroupTars.GetTroopListRespV2 = GetTroopListRespV2;
    class GetTroopListReqV2SimplifyReq {
        constructor() {
            this.Uin = 0;
            this.GetMSFMsgFlag = 0;
            this.VecGroupInfo = new TarsStream.List(GroupTars.StTroopNumSimplify);
            this.GroupFlagExt = 0;
            this.ShVersion = 0;
            this.DwCompanyId = 0;
            this.VersionNum = 0;
            this.GetLongGroupName = 0;
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.GetTroopListReqV2SimplifyReq";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new GetTroopListReqV2SimplifyReq;
            tmp.Uin = is.readInt64(0, true, 0);
            tmp.GetMSFMsgFlag = is.readInt8(1, false, 0);
            tmp.VecGroupInfo = is.readList(3, false, TarsStream.List(GroupTars.StTroopNumSimplify));
            tmp.GroupFlagExt = is.readInt8(4, false, 0);
            tmp.ShVersion = is.readInt32(5, false, 0);
            tmp.DwCompanyId = is.readInt64(6, false, 0);
            tmp.VersionNum = is.readInt64(7, false, 0);
            tmp.GetLongGroupName = is.readInt8(8, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Uin);
            os.writeInt8(1, this.GetMSFMsgFlag);
            os.writeList(3, this.VecGroupInfo);
            os.writeInt8(4, this.GroupFlagExt);
            os.writeInt32(5, this.ShVersion);
            os.writeInt64(6, this.DwCompanyId);
            os.writeInt64(7, this.VersionNum);
            os.writeInt8(8, this.GetLongGroupName);
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
                GetMSFMsgFlag: this.GetMSFMsgFlag,
                VecGroupInfo: this.VecGroupInfo.toObject(),
                GroupFlagExt: this.GroupFlagExt,
                ShVersion: this.ShVersion,
                DwCompanyId: this.DwCompanyId,
                VersionNum: this.VersionNum,
                GetLongGroupName: this.GetLongGroupName
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Uin") && (this.Uin = json.Uin);
            _hasOwnProperty.call(json, "GetMSFMsgFlag") && (this.GetMSFMsgFlag = json.GetMSFMsgFlag);
            _hasOwnProperty.call(json, "VecGroupInfo") && (this.VecGroupInfo.readFromObject(json.VecGroupInfo));
            _hasOwnProperty.call(json, "GroupFlagExt") && (this.GroupFlagExt = json.GroupFlagExt);
            _hasOwnProperty.call(json, "ShVersion") && (this.ShVersion = json.ShVersion);
            _hasOwnProperty.call(json, "DwCompanyId") && (this.DwCompanyId = json.DwCompanyId);
            _hasOwnProperty.call(json, "VersionNum") && (this.VersionNum = json.VersionNum);
            _hasOwnProperty.call(json, "GetLongGroupName") && (this.GetLongGroupName = json.GetLongGroupName);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new GetTroopListReqV2SimplifyReq();
        }
        static create(is) {
            return GroupTars.GetTroopListReqV2SimplifyReq._readFrom(is);
        }
    }
    GetTroopListReqV2SimplifyReq._classname = "GroupTars.GetTroopListReqV2SimplifyReq";
    GroupTars.GetTroopListReqV2SimplifyReq = GetTroopListReqV2SimplifyReq;
    class GetTroopMemberListReq {
        constructor() {
            this.Uin = 0;
            this.GroupCode = 0;
            this.NextUin = 0;
            this.GroupUin = 0;
            this.Version = 0;
            this.ReqType = 0;
            this.GetListAppointTime = 0;
            this.RichCardNameVer = 0;
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.GetTroopMemberListReq";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new GetTroopMemberListReq;
            tmp.Uin = is.readInt64(0, true, 0);
            tmp.GroupCode = is.readInt64(1, true, 0);
            tmp.NextUin = is.readInt64(2, true, 0);
            tmp.GroupUin = is.readInt64(3, true, 0);
            tmp.Version = is.readInt64(4, true, 0);
            tmp.ReqType = is.readInt64(5, true, 0);
            tmp.GetListAppointTime = is.readInt64(6, true, 0);
            tmp.RichCardNameVer = is.readInt8(7, true, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Uin);
            os.writeInt64(1, this.GroupCode);
            os.writeInt64(2, this.NextUin);
            os.writeInt64(3, this.GroupUin);
            os.writeInt64(4, this.Version);
            os.writeInt64(5, this.ReqType);
            os.writeInt64(6, this.GetListAppointTime);
            os.writeInt8(7, this.RichCardNameVer);
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
                GroupCode: this.GroupCode,
                NextUin: this.NextUin,
                GroupUin: this.GroupUin,
                Version: this.Version,
                ReqType: this.ReqType,
                GetListAppointTime: this.GetListAppointTime,
                RichCardNameVer: this.RichCardNameVer
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Uin") && (this.Uin = json.Uin);
            _hasOwnProperty.call(json, "GroupCode") && (this.GroupCode = json.GroupCode);
            _hasOwnProperty.call(json, "NextUin") && (this.NextUin = json.NextUin);
            _hasOwnProperty.call(json, "GroupUin") && (this.GroupUin = json.GroupUin);
            _hasOwnProperty.call(json, "Version") && (this.Version = json.Version);
            _hasOwnProperty.call(json, "ReqType") && (this.ReqType = json.ReqType);
            _hasOwnProperty.call(json, "GetListAppointTime") && (this.GetListAppointTime = json.GetListAppointTime);
            _hasOwnProperty.call(json, "RichCardNameVer") && (this.RichCardNameVer = json.RichCardNameVer);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new GetTroopMemberListReq();
        }
        static create(is) {
            return GroupTars.GetTroopMemberListReq._readFrom(is);
        }
    }
    GetTroopMemberListReq._classname = "GroupTars.GetTroopMemberListReq";
    GroupTars.GetTroopMemberListReq = GetTroopMemberListReq;
    class QzoneUserInfo {
        constructor() {
            this.StarState = 0;
            this.ExtendInfo = new TarsStream.Map(TarsStream.String, TarsStream.String);
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.QzoneUserInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new QzoneUserInfo;
            tmp.StarState = is.readInt32(0, false, 0);
            tmp.ExtendInfo = is.readMap(1, false, TarsStream.Map(TarsStream.String, TarsStream.String));
            return tmp;
        }
        _writeTo(os) {
            os.writeInt32(0, this.StarState);
            os.writeMap(1, this.ExtendInfo);
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
                StarState: this.StarState,
                ExtendInfo: this.ExtendInfo.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "StarState") && (this.StarState = json.StarState);
            _hasOwnProperty.call(json, "ExtendInfo") && (this.ExtendInfo.readFromObject(json.ExtendInfo));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new QzoneUserInfo();
        }
        static create(is) {
            return GroupTars.QzoneUserInfo._readFrom(is);
        }
    }
    QzoneUserInfo._classname = "GroupTars.QzoneUserInfo";
    GroupTars.QzoneUserInfo = QzoneUserInfo;
    class StTroopMemberInfo {
        constructor() {
            this.MemberUin = 0;
            this.FaceId = 0;
            this.Age = 0;
            this.Gender = 0;
            this.Nick = "";
            this.Status = 0;
            this.ShowName = "";
            this.Name = "";
            this.BGender = 0;
            this.Phone = "";
            this.Email = "";
            this.Memo = "";
            this.AutoRemark = "";
            this.DwMemberLevel = 0;
            this.DwJoinTime = 0;
            this.DwLastSpeakTime = 0;
            this.DwCreditLevel = 0;
            this.DwFlag = 0;
            this.DwFlagExt = 0;
            this.DwPoint = 0;
            this.Concerned = 0;
            this.Shielded = 0;
            this.SpecialTitle = "";
            this.DwSpecialTitleExpireTime = 0;
            this.Job = "";
            this.ApolloFlag = 0;
            this.DwApolloTimestamp = 0;
            this.DwGlobalGroupLevel = 0;
            this.DwTitleId = 0;
            this.DwShutupTimestap = 0;
            this.DwGlobalGroupPoint = 0;
            this.QzoneUserInfo = new GroupTars.QzoneUserInfo;
            this.RichCardNameVer = 0;
            this.DwVipType = 0;
            this.DwVipLevel = 0;
            this.DwBigClubLevel = 0;
            this.DwBigClubFlag = 0;
            this.DwNameplate = 0;
            this.VecGroupHonor = new TarsStream.BinBuffer;
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.StTroopMemberInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new StTroopMemberInfo;
            tmp.MemberUin = is.readInt64(0, false, 0);
            tmp.FaceId = is.readInt16(1, false, 0);
            tmp.Age = is.readInt8(2, false, 0);
            tmp.Gender = is.readInt8(3, false, 0);
            tmp.Nick = is.readString(4, true, "");
            tmp.Status = is.readInt8(5, false, 0);
            tmp.ShowName = is.readString(6, false, "");
            tmp.Name = is.readString(8, false, "");
            tmp.BGender = is.readInt8(9, false, 0);
            tmp.Phone = is.readString(10, false, "");
            tmp.Email = is.readString(11, false, "");
            tmp.Memo = is.readString(12, false, "");
            tmp.AutoRemark = is.readString(13, false, "");
            tmp.DwMemberLevel = is.readInt64(14, false, 0);
            tmp.DwJoinTime = is.readInt64(15, false, 0);
            tmp.DwLastSpeakTime = is.readInt64(16, false, 0);
            tmp.DwCreditLevel = is.readInt64(17, false, 0);
            tmp.DwFlag = is.readInt64(18, false, 0);
            tmp.DwFlagExt = is.readInt64(19, false, 0);
            tmp.DwPoint = is.readInt64(20, false, 0);
            tmp.Concerned = is.readInt8(21, false, 0);
            tmp.Shielded = is.readInt8(22, false, 0);
            tmp.SpecialTitle = is.readString(23, false, "");
            tmp.DwSpecialTitleExpireTime = is.readInt64(24, false, 0);
            tmp.Job = is.readString(25, false, "");
            tmp.ApolloFlag = is.readInt8(26, false, 0);
            tmp.DwApolloTimestamp = is.readInt64(27, false, 0);
            tmp.DwGlobalGroupLevel = is.readInt64(28, false, 0);
            tmp.DwTitleId = is.readInt64(29, false, 0);
            tmp.DwShutupTimestap = is.readInt64(30, false, 0);
            tmp.DwGlobalGroupPoint = is.readInt64(31, false, 0);
            tmp.QzoneUserInfo = is.readStruct(32, false, GroupTars.QzoneUserInfo);
            tmp.RichCardNameVer = is.readInt8(33, false, 0);
            tmp.DwVipType = is.readInt64(34, false, 0);
            tmp.DwVipLevel = is.readInt64(35, false, 0);
            tmp.DwBigClubLevel = is.readInt64(36, false, 0);
            tmp.DwBigClubFlag = is.readInt64(37, false, 0);
            tmp.DwNameplate = is.readInt64(38, false, 0);
            tmp.VecGroupHonor = is.readBytes(39, false, TarsStream.BinBuffer);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.MemberUin);
            os.writeInt16(1, this.FaceId);
            os.writeInt8(2, this.Age);
            os.writeInt8(3, this.Gender);
            os.writeString(4, this.Nick);
            os.writeInt8(5, this.Status);
            os.writeString(6, this.ShowName);
            os.writeString(8, this.Name);
            os.writeInt8(9, this.BGender);
            os.writeString(10, this.Phone);
            os.writeString(11, this.Email);
            os.writeString(12, this.Memo);
            os.writeString(13, this.AutoRemark);
            os.writeInt64(14, this.DwMemberLevel);
            os.writeInt64(15, this.DwJoinTime);
            os.writeInt64(16, this.DwLastSpeakTime);
            os.writeInt64(17, this.DwCreditLevel);
            os.writeInt64(18, this.DwFlag);
            os.writeInt64(19, this.DwFlagExt);
            os.writeInt64(20, this.DwPoint);
            os.writeInt8(21, this.Concerned);
            os.writeInt8(22, this.Shielded);
            os.writeString(23, this.SpecialTitle);
            os.writeInt64(24, this.DwSpecialTitleExpireTime);
            os.writeString(25, this.Job);
            os.writeInt8(26, this.ApolloFlag);
            os.writeInt64(27, this.DwApolloTimestamp);
            os.writeInt64(28, this.DwGlobalGroupLevel);
            os.writeInt64(29, this.DwTitleId);
            os.writeInt64(30, this.DwShutupTimestap);
            os.writeInt64(31, this.DwGlobalGroupPoint);
            os.writeStruct(32, this.QzoneUserInfo);
            os.writeInt8(33, this.RichCardNameVer);
            os.writeInt64(34, this.DwVipType);
            os.writeInt64(35, this.DwVipLevel);
            os.writeInt64(36, this.DwBigClubLevel);
            os.writeInt64(37, this.DwBigClubFlag);
            os.writeInt64(38, this.DwNameplate);
            os.writeBytes(39, this.VecGroupHonor);
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
                MemberUin: this.MemberUin,
                FaceId: this.FaceId,
                Age: this.Age,
                Gender: this.Gender,
                Nick: this.Nick,
                Status: this.Status,
                ShowName: this.ShowName,
                Name: this.Name,
                BGender: this.BGender,
                Phone: this.Phone,
                Email: this.Email,
                Memo: this.Memo,
                AutoRemark: this.AutoRemark,
                DwMemberLevel: this.DwMemberLevel,
                DwJoinTime: this.DwJoinTime,
                DwLastSpeakTime: this.DwLastSpeakTime,
                DwCreditLevel: this.DwCreditLevel,
                DwFlag: this.DwFlag,
                DwFlagExt: this.DwFlagExt,
                DwPoint: this.DwPoint,
                Concerned: this.Concerned,
                Shielded: this.Shielded,
                SpecialTitle: this.SpecialTitle,
                DwSpecialTitleExpireTime: this.DwSpecialTitleExpireTime,
                Job: this.Job,
                ApolloFlag: this.ApolloFlag,
                DwApolloTimestamp: this.DwApolloTimestamp,
                DwGlobalGroupLevel: this.DwGlobalGroupLevel,
                DwTitleId: this.DwTitleId,
                DwShutupTimestap: this.DwShutupTimestap,
                DwGlobalGroupPoint: this.DwGlobalGroupPoint,
                QzoneUserInfo: this.QzoneUserInfo.toObject(),
                RichCardNameVer: this.RichCardNameVer,
                DwVipType: this.DwVipType,
                DwVipLevel: this.DwVipLevel,
                DwBigClubLevel: this.DwBigClubLevel,
                DwBigClubFlag: this.DwBigClubFlag,
                DwNameplate: this.DwNameplate,
                VecGroupHonor: this.VecGroupHonor.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "MemberUin") && (this.MemberUin = json.MemberUin);
            _hasOwnProperty.call(json, "FaceId") && (this.FaceId = json.FaceId);
            _hasOwnProperty.call(json, "Age") && (this.Age = json.Age);
            _hasOwnProperty.call(json, "Gender") && (this.Gender = json.Gender);
            _hasOwnProperty.call(json, "Nick") && (this.Nick = json.Nick);
            _hasOwnProperty.call(json, "Status") && (this.Status = json.Status);
            _hasOwnProperty.call(json, "ShowName") && (this.ShowName = json.ShowName);
            _hasOwnProperty.call(json, "Name") && (this.Name = json.Name);
            _hasOwnProperty.call(json, "BGender") && (this.BGender = json.BGender);
            _hasOwnProperty.call(json, "Phone") && (this.Phone = json.Phone);
            _hasOwnProperty.call(json, "Email") && (this.Email = json.Email);
            _hasOwnProperty.call(json, "Memo") && (this.Memo = json.Memo);
            _hasOwnProperty.call(json, "AutoRemark") && (this.AutoRemark = json.AutoRemark);
            _hasOwnProperty.call(json, "DwMemberLevel") && (this.DwMemberLevel = json.DwMemberLevel);
            _hasOwnProperty.call(json, "DwJoinTime") && (this.DwJoinTime = json.DwJoinTime);
            _hasOwnProperty.call(json, "DwLastSpeakTime") && (this.DwLastSpeakTime = json.DwLastSpeakTime);
            _hasOwnProperty.call(json, "DwCreditLevel") && (this.DwCreditLevel = json.DwCreditLevel);
            _hasOwnProperty.call(json, "DwFlag") && (this.DwFlag = json.DwFlag);
            _hasOwnProperty.call(json, "DwFlagExt") && (this.DwFlagExt = json.DwFlagExt);
            _hasOwnProperty.call(json, "DwPoint") && (this.DwPoint = json.DwPoint);
            _hasOwnProperty.call(json, "Concerned") && (this.Concerned = json.Concerned);
            _hasOwnProperty.call(json, "Shielded") && (this.Shielded = json.Shielded);
            _hasOwnProperty.call(json, "SpecialTitle") && (this.SpecialTitle = json.SpecialTitle);
            _hasOwnProperty.call(json, "DwSpecialTitleExpireTime") && (this.DwSpecialTitleExpireTime = json.DwSpecialTitleExpireTime);
            _hasOwnProperty.call(json, "Job") && (this.Job = json.Job);
            _hasOwnProperty.call(json, "ApolloFlag") && (this.ApolloFlag = json.ApolloFlag);
            _hasOwnProperty.call(json, "DwApolloTimestamp") && (this.DwApolloTimestamp = json.DwApolloTimestamp);
            _hasOwnProperty.call(json, "DwGlobalGroupLevel") && (this.DwGlobalGroupLevel = json.DwGlobalGroupLevel);
            _hasOwnProperty.call(json, "DwTitleId") && (this.DwTitleId = json.DwTitleId);
            _hasOwnProperty.call(json, "DwShutupTimestap") && (this.DwShutupTimestap = json.DwShutupTimestap);
            _hasOwnProperty.call(json, "DwGlobalGroupPoint") && (this.DwGlobalGroupPoint = json.DwGlobalGroupPoint);
            _hasOwnProperty.call(json, "QzoneUserInfo") && (this.QzoneUserInfo.readFromObject(json.QzoneUserInfo));
            _hasOwnProperty.call(json, "RichCardNameVer") && (this.RichCardNameVer = json.RichCardNameVer);
            _hasOwnProperty.call(json, "DwVipType") && (this.DwVipType = json.DwVipType);
            _hasOwnProperty.call(json, "DwVipLevel") && (this.DwVipLevel = json.DwVipLevel);
            _hasOwnProperty.call(json, "DwBigClubLevel") && (this.DwBigClubLevel = json.DwBigClubLevel);
            _hasOwnProperty.call(json, "DwBigClubFlag") && (this.DwBigClubFlag = json.DwBigClubFlag);
            _hasOwnProperty.call(json, "DwNameplate") && (this.DwNameplate = json.DwNameplate);
            _hasOwnProperty.call(json, "VecGroupHonor") && (this.VecGroupHonor.readFromObject(json.VecGroupHonor));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new StTroopMemberInfo();
        }
        static create(is) {
            return GroupTars.StTroopMemberInfo._readFrom(is);
        }
    }
    StTroopMemberInfo._classname = "GroupTars.StTroopMemberInfo";
    GroupTars.StTroopMemberInfo = StTroopMemberInfo;
    class GetTroopMemberListResp {
        constructor() {
            this.Uin = 0;
            this.GroupCode = 0;
            this.GroupUin = 0;
            this.VecTroopMember = new TarsStream.List(GroupTars.StTroopMemberInfo);
            this.NextUin = 0;
            this.Result = 0;
            this.ErrorCode = 0;
            this.OfficeMode = 0;
            this.NextGetTime = 0;
            this._proto_struct_name_ = "";
            this._classname = "GroupTars.GetTroopMemberListResp";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new GetTroopMemberListResp;
            tmp.Uin = is.readInt64(0, true, 0);
            tmp.GroupCode = is.readInt64(1, true, 0);
            tmp.GroupUin = is.readInt64(2, true, 0);
            tmp.VecTroopMember = is.readList(3, true, TarsStream.List(GroupTars.StTroopMemberInfo));
            tmp.NextUin = is.readInt64(4, true, 0);
            tmp.Result = is.readInt32(5, true, 0);
            tmp.ErrorCode = is.readInt16(6, false, 0);
            tmp.OfficeMode = is.readInt64(7, false, 0);
            tmp.NextGetTime = is.readInt64(8, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Uin);
            os.writeInt64(1, this.GroupCode);
            os.writeInt64(2, this.GroupUin);
            os.writeList(3, this.VecTroopMember);
            os.writeInt64(4, this.NextUin);
            os.writeInt32(5, this.Result);
            os.writeInt16(6, this.ErrorCode);
            os.writeInt64(7, this.OfficeMode);
            os.writeInt64(8, this.NextGetTime);
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
                GroupCode: this.GroupCode,
                GroupUin: this.GroupUin,
                VecTroopMember: this.VecTroopMember.toObject(),
                NextUin: this.NextUin,
                Result: this.Result,
                ErrorCode: this.ErrorCode,
                OfficeMode: this.OfficeMode,
                NextGetTime: this.NextGetTime
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Uin") && (this.Uin = json.Uin);
            _hasOwnProperty.call(json, "GroupCode") && (this.GroupCode = json.GroupCode);
            _hasOwnProperty.call(json, "GroupUin") && (this.GroupUin = json.GroupUin);
            _hasOwnProperty.call(json, "VecTroopMember") && (this.VecTroopMember.readFromObject(json.VecTroopMember));
            _hasOwnProperty.call(json, "NextUin") && (this.NextUin = json.NextUin);
            _hasOwnProperty.call(json, "Result") && (this.Result = json.Result);
            _hasOwnProperty.call(json, "ErrorCode") && (this.ErrorCode = json.ErrorCode);
            _hasOwnProperty.call(json, "OfficeMode") && (this.OfficeMode = json.OfficeMode);
            _hasOwnProperty.call(json, "NextGetTime") && (this.NextGetTime = json.NextGetTime);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new GetTroopMemberListResp();
        }
        static create(is) {
            return GroupTars.GetTroopMemberListResp._readFrom(is);
        }
    }
    GetTroopMemberListResp._classname = "GroupTars.GetTroopMemberListResp";
    GroupTars.GetTroopMemberListResp = GetTroopMemberListResp;
})(GroupTars = exports.GroupTars || (exports.GroupTars = {}));
