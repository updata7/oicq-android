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
exports.Register = void 0;
const assert = require("assert");
const TarsStream = __importStar(require("@tars/stream"));
const _hasOwnProperty = Object.prototype.hasOwnProperty;
var Register;
(function (Register) {
    class Pack {
        constructor() {
            this.Uin = 0;
            this.Bit = 0;
            this.ConnType = 0;
            this.Other = "";
            this.Status = 0;
            this.OnlinePush = 0;
            this.IsOnline = 0;
            this.IsShowOnline = 0;
            this.KikPc = 0;
            this.KikWeak = 0;
            this.TimeStamp = 0;
            this.OsVersion = 0;
            this.NetType = 1;
            this.BuildVer = "";
            this.ReqType = 0;
            this.Guid = new TarsStream.BinBuffer;
            this.LocalId = 2052;
            this.SlienPush = 0;
            this.DevName = "";
            this.DevType = "";
            this.AndroidVersion = "";
            this.OpePush = 1;
            this.LargeSeq = 1;
            this.LastWatchStartTime = 0;
            this.OldSSOIp = 0;
            this.NewSSOIp = 0;
            this.CpId = 0;
            this._proto_struct_name_ = "";
            this._classname = "Register.Pack";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new Pack;
            tmp.Uin = is.readInt64(0, true, 0);
            tmp.Bit = is.readInt8(1, true, 0);
            tmp.ConnType = is.readInt8(2, true, 0);
            tmp.Other = is.readString(3, true, "");
            tmp.Status = is.readInt8(4, true, 0);
            tmp.OnlinePush = is.readInt8(5, true, 0);
            tmp.IsOnline = is.readInt8(6, true, 0);
            tmp.IsShowOnline = is.readInt8(7, true, 0);
            tmp.KikPc = is.readInt8(8, true, 0);
            tmp.KikWeak = is.readInt8(9, true, 0);
            tmp.TimeStamp = is.readInt64(10, true, 0);
            tmp.OsVersion = is.readInt8(11, true, 0);
            tmp.NetType = is.readInt8(12, true, 1);
            tmp.BuildVer = is.readString(13, true, "");
            tmp.ReqType = is.readInt8(14, true, 0);
            tmp.Guid = is.readBytes(16, true, TarsStream.BinBuffer);
            tmp.LocalId = is.readInt16(17, true, 2052);
            tmp.SlienPush = is.readInt8(18, true, 0);
            tmp.DevName = is.readString(19, true, "");
            tmp.DevType = is.readString(20, true, "");
            tmp.AndroidVersion = is.readString(21, true, "");
            tmp.OpePush = is.readInt8(22, true, 1);
            tmp.LargeSeq = is.readInt8(23, true, 1);
            tmp.LastWatchStartTime = is.readInt64(24, true, 0);
            tmp.OldSSOIp = is.readInt64(26, true, 0);
            tmp.NewSSOIp = is.readInt64(27, true, 0);
            tmp.CpId = is.readInt8(29, true, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Uin);
            os.writeInt8(1, this.Bit);
            os.writeInt8(2, this.ConnType);
            os.writeString(3, this.Other);
            os.writeInt8(4, this.Status);
            os.writeInt8(5, this.OnlinePush);
            os.writeInt8(6, this.IsOnline);
            os.writeInt8(7, this.IsShowOnline);
            os.writeInt8(8, this.KikPc);
            os.writeInt8(9, this.KikWeak);
            os.writeInt64(10, this.TimeStamp);
            os.writeInt8(11, this.OsVersion);
            os.writeInt8(12, this.NetType);
            os.writeString(13, this.BuildVer);
            os.writeInt8(14, this.ReqType);
            os.writeBytes(16, this.Guid);
            os.writeInt16(17, this.LocalId);
            os.writeInt8(18, this.SlienPush);
            os.writeString(19, this.DevName);
            os.writeString(20, this.DevType);
            os.writeString(21, this.AndroidVersion);
            os.writeInt8(22, this.OpePush);
            os.writeInt8(23, this.LargeSeq);
            os.writeInt64(24, this.LastWatchStartTime);
            os.writeInt64(26, this.OldSSOIp);
            os.writeInt64(27, this.NewSSOIp);
            os.writeInt8(29, this.CpId);
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
                Bit: this.Bit,
                ConnType: this.ConnType,
                Other: this.Other,
                Status: this.Status,
                OnlinePush: this.OnlinePush,
                IsOnline: this.IsOnline,
                IsShowOnline: this.IsShowOnline,
                KikPc: this.KikPc,
                KikWeak: this.KikWeak,
                TimeStamp: this.TimeStamp,
                OsVersion: this.OsVersion,
                NetType: this.NetType,
                BuildVer: this.BuildVer,
                ReqType: this.ReqType,
                Guid: this.Guid.toObject(),
                LocalId: this.LocalId,
                SlienPush: this.SlienPush,
                DevName: this.DevName,
                DevType: this.DevType,
                AndroidVersion: this.AndroidVersion,
                OpePush: this.OpePush,
                LargeSeq: this.LargeSeq,
                LastWatchStartTime: this.LastWatchStartTime,
                OldSSOIp: this.OldSSOIp,
                NewSSOIp: this.NewSSOIp,
                CpId: this.CpId
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Uin") && (this.Uin = json.Uin);
            _hasOwnProperty.call(json, "Bit") && (this.Bit = json.Bit);
            _hasOwnProperty.call(json, "ConnType") && (this.ConnType = json.ConnType);
            _hasOwnProperty.call(json, "Other") && (this.Other = json.Other);
            _hasOwnProperty.call(json, "Status") && (this.Status = json.Status);
            _hasOwnProperty.call(json, "OnlinePush") && (this.OnlinePush = json.OnlinePush);
            _hasOwnProperty.call(json, "IsOnline") && (this.IsOnline = json.IsOnline);
            _hasOwnProperty.call(json, "IsShowOnline") && (this.IsShowOnline = json.IsShowOnline);
            _hasOwnProperty.call(json, "KikPc") && (this.KikPc = json.KikPc);
            _hasOwnProperty.call(json, "KikWeak") && (this.KikWeak = json.KikWeak);
            _hasOwnProperty.call(json, "TimeStamp") && (this.TimeStamp = json.TimeStamp);
            _hasOwnProperty.call(json, "OsVersion") && (this.OsVersion = json.OsVersion);
            _hasOwnProperty.call(json, "NetType") && (this.NetType = json.NetType);
            _hasOwnProperty.call(json, "BuildVer") && (this.BuildVer = json.BuildVer);
            _hasOwnProperty.call(json, "ReqType") && (this.ReqType = json.ReqType);
            _hasOwnProperty.call(json, "Guid") && (this.Guid.readFromObject(json.Guid));
            _hasOwnProperty.call(json, "LocalId") && (this.LocalId = json.LocalId);
            _hasOwnProperty.call(json, "SlienPush") && (this.SlienPush = json.SlienPush);
            _hasOwnProperty.call(json, "DevName") && (this.DevName = json.DevName);
            _hasOwnProperty.call(json, "DevType") && (this.DevType = json.DevType);
            _hasOwnProperty.call(json, "AndroidVersion") && (this.AndroidVersion = json.AndroidVersion);
            _hasOwnProperty.call(json, "OpePush") && (this.OpePush = json.OpePush);
            _hasOwnProperty.call(json, "LargeSeq") && (this.LargeSeq = json.LargeSeq);
            _hasOwnProperty.call(json, "LastWatchStartTime") && (this.LastWatchStartTime = json.LastWatchStartTime);
            _hasOwnProperty.call(json, "OldSSOIp") && (this.OldSSOIp = json.OldSSOIp);
            _hasOwnProperty.call(json, "NewSSOIp") && (this.NewSSOIp = json.NewSSOIp);
            _hasOwnProperty.call(json, "CpId") && (this.CpId = json.CpId);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new Pack();
        }
        static create(is) {
            return Register.Pack._readFrom(is);
        }
    }
    Pack._classname = "Register.Pack";
    Register.Pack = Pack;
})(Register = exports.Register || (exports.Register = {}));
