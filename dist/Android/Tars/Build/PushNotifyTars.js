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
exports.PushNotify = void 0;
const assert = require("assert");
const TarsStream = __importStar(require("@tars/stream"));
const _hasOwnProperty = Object.prototype.hasOwnProperty;
var PushNotify;
(function (PushNotify) {
    class CPicInfo {
        constructor() {
            this.Path = new TarsStream.BinBuffer;
            this.Host = new TarsStream.BinBuffer;
            this._proto_struct_name_ = "";
            this._classname = "PushNotify.CPicInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new CPicInfo;
            tmp.Path = is.readBytes(0, true, TarsStream.BinBuffer);
            tmp.Host = is.readBytes(1, true, TarsStream.BinBuffer);
            return tmp;
        }
        _writeTo(os) {
            os.writeBytes(0, this.Path);
            os.writeBytes(1, this.Host);
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
                Path: this.Path.toObject(),
                Host: this.Host.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Path") && (this.Path.readFromObject(json.Path));
            _hasOwnProperty.call(json, "Host") && (this.Host.readFromObject(json.Host));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new CPicInfo();
        }
        static create(is) {
            return PushNotify.CPicInfo._readFrom(is);
        }
    }
    CPicInfo._classname = "PushNotify.CPicInfo";
    PushNotify.CPicInfo = CPicInfo;
    class ShareData {
        constructor() {
            this.PkgName = "";
            this.MsgTail = "";
            this.PicUrl = "";
            this.Url = "";
            this._proto_struct_name_ = "";
            this._classname = "PushNotify.ShareData";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new ShareData;
            tmp.PkgName = is.readString(0, true, "");
            tmp.MsgTail = is.readString(1, true, "");
            tmp.PicUrl = is.readString(2, true, "");
            tmp.Url = is.readString(3, true, "");
            return tmp;
        }
        _writeTo(os) {
            os.writeString(0, this.PkgName);
            os.writeString(1, this.MsgTail);
            os.writeString(2, this.PicUrl);
            os.writeString(3, this.Url);
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
                PkgName: this.PkgName,
                MsgTail: this.MsgTail,
                PicUrl: this.PicUrl,
                Url: this.Url
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "PkgName") && (this.PkgName = json.PkgName);
            _hasOwnProperty.call(json, "MsgTail") && (this.MsgTail = json.MsgTail);
            _hasOwnProperty.call(json, "PicUrl") && (this.PicUrl = json.PicUrl);
            _hasOwnProperty.call(json, "Url") && (this.Url = json.Url);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new ShareData();
        }
        static create(is) {
            return PushNotify.ShareData._readFrom(is);
        }
    }
    ShareData._classname = "PushNotify.ShareData";
    PushNotify.ShareData = ShareData;
    class MsgInfo {
        constructor() {
            this.FromUin = 0;
            this.MsgTime = 0;
            this.MsgType = 0;
            this.MsgSeq = 0;
            this.StrMsg = "";
            this.RealMsgTime = 0;
            this.Msg = new TarsStream.BinBuffer;
            this.AppShareID = 0;
            this.MsgCookies = new TarsStream.BinBuffer;
            this.AppShareCookie = new TarsStream.BinBuffer;
            this.MsgUid = 0;
            this.LastChangeTime = 0;
            this.CPicInfo = new TarsStream.List(PushNotify.CPicInfo);
            this.ShareData = new PushNotify.ShareData;
            this.FromInstId = 0;
            this.RemarkOfSender = new TarsStream.BinBuffer;
            this.FromMobile = "";
            this.FromName = "";
            this.NickName = new TarsStream.List(TarsStream.String);
            this._proto_struct_name_ = "";
            this._classname = "PushNotify.MsgInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new MsgInfo;
            tmp.FromUin = is.readInt64(0, true, 0);
            tmp.MsgTime = is.readInt64(1, true, 0);
            tmp.MsgType = is.readInt16(2, true, 0);
            tmp.MsgSeq = is.readInt16(3, true, 0);
            tmp.StrMsg = is.readString(4, true, "");
            tmp.RealMsgTime = is.readInt32(5, true, 0);
            tmp.Msg = is.readBytes(6, true, TarsStream.BinBuffer);
            tmp.AppShareID = is.readInt64(7, true, 0);
            tmp.MsgCookies = is.readBytes(8, true, TarsStream.BinBuffer);
            tmp.AppShareCookie = is.readBytes(9, true, TarsStream.BinBuffer);
            tmp.MsgUid = is.readInt64(10, true, 0);
            tmp.LastChangeTime = is.readInt64(11, true, 0);
            tmp.CPicInfo = is.readList(12, true, TarsStream.List(PushNotify.CPicInfo));
            tmp.ShareData = is.readStruct(13, true, PushNotify.ShareData);
            tmp.FromInstId = is.readInt64(14, true, 0);
            tmp.RemarkOfSender = is.readBytes(15, true, TarsStream.BinBuffer);
            tmp.FromMobile = is.readString(16, true, "");
            tmp.FromName = is.readString(17, true, "");
            tmp.NickName = is.readList(18, true, TarsStream.List(TarsStream.String));
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.FromUin);
            os.writeInt64(1, this.MsgTime);
            os.writeInt16(2, this.MsgType);
            os.writeInt16(3, this.MsgSeq);
            os.writeString(4, this.StrMsg);
            os.writeInt32(5, this.RealMsgTime);
            os.writeBytes(6, this.Msg);
            os.writeInt64(7, this.AppShareID);
            os.writeBytes(8, this.MsgCookies);
            os.writeBytes(9, this.AppShareCookie);
            os.writeInt64(10, this.MsgUid);
            os.writeInt64(11, this.LastChangeTime);
            os.writeList(12, this.CPicInfo);
            os.writeStruct(13, this.ShareData);
            os.writeInt64(14, this.FromInstId);
            os.writeBytes(15, this.RemarkOfSender);
            os.writeString(16, this.FromMobile);
            os.writeString(17, this.FromName);
            os.writeList(18, this.NickName);
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
                FromUin: this.FromUin,
                MsgTime: this.MsgTime,
                MsgType: this.MsgType,
                MsgSeq: this.MsgSeq,
                StrMsg: this.StrMsg,
                RealMsgTime: this.RealMsgTime,
                Msg: this.Msg.toObject(),
                AppShareID: this.AppShareID,
                MsgCookies: this.MsgCookies.toObject(),
                AppShareCookie: this.AppShareCookie.toObject(),
                MsgUid: this.MsgUid,
                LastChangeTime: this.LastChangeTime,
                CPicInfo: this.CPicInfo.toObject(),
                ShareData: this.ShareData.toObject(),
                FromInstId: this.FromInstId,
                RemarkOfSender: this.RemarkOfSender.toObject(),
                FromMobile: this.FromMobile,
                FromName: this.FromName,
                NickName: this.NickName.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "FromUin") && (this.FromUin = json.FromUin);
            _hasOwnProperty.call(json, "MsgTime") && (this.MsgTime = json.MsgTime);
            _hasOwnProperty.call(json, "MsgType") && (this.MsgType = json.MsgType);
            _hasOwnProperty.call(json, "MsgSeq") && (this.MsgSeq = json.MsgSeq);
            _hasOwnProperty.call(json, "StrMsg") && (this.StrMsg = json.StrMsg);
            _hasOwnProperty.call(json, "RealMsgTime") && (this.RealMsgTime = json.RealMsgTime);
            _hasOwnProperty.call(json, "Msg") && (this.Msg.readFromObject(json.Msg));
            _hasOwnProperty.call(json, "AppShareID") && (this.AppShareID = json.AppShareID);
            _hasOwnProperty.call(json, "MsgCookies") && (this.MsgCookies.readFromObject(json.MsgCookies));
            _hasOwnProperty.call(json, "AppShareCookie") && (this.AppShareCookie.readFromObject(json.AppShareCookie));
            _hasOwnProperty.call(json, "MsgUid") && (this.MsgUid = json.MsgUid);
            _hasOwnProperty.call(json, "LastChangeTime") && (this.LastChangeTime = json.LastChangeTime);
            _hasOwnProperty.call(json, "CPicInfo") && (this.CPicInfo.readFromObject(json.CPicInfo));
            _hasOwnProperty.call(json, "ShareData") && (this.ShareData.readFromObject(json.ShareData));
            _hasOwnProperty.call(json, "FromInstId") && (this.FromInstId = json.FromInstId);
            _hasOwnProperty.call(json, "RemarkOfSender") && (this.RemarkOfSender.readFromObject(json.RemarkOfSender));
            _hasOwnProperty.call(json, "FromMobile") && (this.FromMobile = json.FromMobile);
            _hasOwnProperty.call(json, "FromName") && (this.FromName = json.FromName);
            _hasOwnProperty.call(json, "NickName") && (this.NickName.readFromObject(json.NickName));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new MsgInfo();
        }
        static create(is) {
            return PushNotify.MsgInfo._readFrom(is);
        }
    }
    MsgInfo._classname = "PushNotify.MsgInfo";
    PushNotify.MsgInfo = MsgInfo;
    class Pack {
        constructor() {
            this.Uin = 0;
            this.CType = 0;
            this.Service = "";
            this.Cmd = "";
            this.NotifyCookie = new TarsStream.BinBuffer;
            this.MsgType = 0;
            this.UserActive = 0;
            this.GeneralFlag = 0;
            this.BindedUin = 0;
            this.MsgInfo = new PushNotify.MsgInfo;
            this.MsgCtrlBuf = "";
            this.ServerBuf = new TarsStream.BinBuffer;
            this.PingFlag = 0;
            this.Svrip = 0;
            this._proto_struct_name_ = "";
            this._classname = "PushNotify.Pack";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new Pack;
            tmp.Uin = is.readInt64(0, true, 0);
            tmp.CType = is.readInt8(1, true, 0);
            tmp.Service = is.readString(2, true, "");
            tmp.Cmd = is.readString(3, true, "");
            tmp.NotifyCookie = is.readBytes(4, true, TarsStream.BinBuffer);
            tmp.MsgType = is.readInt16(5, true, 0);
            tmp.UserActive = is.readInt8(6, true, 0);
            tmp.GeneralFlag = is.readInt8(7, true, 0);
            tmp.BindedUin = is.readInt64(8, true, 0);
            tmp.MsgInfo = is.readStruct(9, true, PushNotify.MsgInfo);
            tmp.MsgCtrlBuf = is.readString(10, true, "");
            tmp.ServerBuf = is.readBytes(11, true, TarsStream.BinBuffer);
            tmp.PingFlag = is.readInt64(12, true, 0);
            tmp.Svrip = is.readInt8(13, true, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Uin);
            os.writeInt8(1, this.CType);
            os.writeString(2, this.Service);
            os.writeString(3, this.Cmd);
            os.writeBytes(4, this.NotifyCookie);
            os.writeInt16(5, this.MsgType);
            os.writeInt8(6, this.UserActive);
            os.writeInt8(7, this.GeneralFlag);
            os.writeInt64(8, this.BindedUin);
            os.writeStruct(9, this.MsgInfo);
            os.writeString(10, this.MsgCtrlBuf);
            os.writeBytes(11, this.ServerBuf);
            os.writeInt64(12, this.PingFlag);
            os.writeInt8(13, this.Svrip);
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
                CType: this.CType,
                Service: this.Service,
                Cmd: this.Cmd,
                NotifyCookie: this.NotifyCookie.toObject(),
                MsgType: this.MsgType,
                UserActive: this.UserActive,
                GeneralFlag: this.GeneralFlag,
                BindedUin: this.BindedUin,
                MsgInfo: this.MsgInfo.toObject(),
                MsgCtrlBuf: this.MsgCtrlBuf,
                ServerBuf: this.ServerBuf.toObject(),
                PingFlag: this.PingFlag,
                Svrip: this.Svrip
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Uin") && (this.Uin = json.Uin);
            _hasOwnProperty.call(json, "CType") && (this.CType = json.CType);
            _hasOwnProperty.call(json, "Service") && (this.Service = json.Service);
            _hasOwnProperty.call(json, "Cmd") && (this.Cmd = json.Cmd);
            _hasOwnProperty.call(json, "NotifyCookie") && (this.NotifyCookie.readFromObject(json.NotifyCookie));
            _hasOwnProperty.call(json, "MsgType") && (this.MsgType = json.MsgType);
            _hasOwnProperty.call(json, "UserActive") && (this.UserActive = json.UserActive);
            _hasOwnProperty.call(json, "GeneralFlag") && (this.GeneralFlag = json.GeneralFlag);
            _hasOwnProperty.call(json, "BindedUin") && (this.BindedUin = json.BindedUin);
            _hasOwnProperty.call(json, "MsgInfo") && (this.MsgInfo.readFromObject(json.MsgInfo));
            _hasOwnProperty.call(json, "MsgCtrlBuf") && (this.MsgCtrlBuf = json.MsgCtrlBuf);
            _hasOwnProperty.call(json, "ServerBuf") && (this.ServerBuf.readFromObject(json.ServerBuf));
            _hasOwnProperty.call(json, "PingFlag") && (this.PingFlag = json.PingFlag);
            _hasOwnProperty.call(json, "Svrip") && (this.Svrip = json.Svrip);
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
            return PushNotify.Pack._readFrom(is);
        }
    }
    Pack._classname = "PushNotify.Pack";
    PushNotify.Pack = Pack;
    class Struct {
        constructor() {
            this.Pack = new PushNotify.Pack;
            this._proto_struct_name_ = "";
            this._classname = "PushNotify.Struct";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new Struct;
            tmp.Pack = is.readStruct(0, true, PushNotify.Pack);
            return tmp;
        }
        _writeTo(os) {
            os.writeStruct(0, this.Pack);
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
                Pack: this.Pack.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Pack") && (this.Pack.readFromObject(json.Pack));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new Struct();
        }
        static create(is) {
            return PushNotify.Struct._readFrom(is);
        }
    }
    Struct._classname = "PushNotify.Struct";
    PushNotify.Struct = Struct;
})(PushNotify = exports.PushNotify || (exports.PushNotify = {}));
