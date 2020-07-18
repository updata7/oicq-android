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
exports.ConfigPushSvcTars = void 0;
const assert = require("assert");
const TarsStream = __importStar(require("@tars/stream"));
const _hasOwnProperty = Object.prototype.hasOwnProperty;
var ConfigPushSvcTars;
(function (ConfigPushSvcTars) {
    class PushReq {
        constructor() {
            this.Type = 0;
            this.Buff = new TarsStream.BinBuffer;
            this.Seq = 0;
            this._proto_struct_name_ = "";
            this._classname = "ConfigPushSvcTars.PushReq";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new PushReq;
            tmp.Type = is.readInt32(1, true, 0);
            tmp.Buff = is.readBytes(2, true, TarsStream.BinBuffer);
            tmp.Seq = is.readInt64(3, true, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt32(1, this.Type);
            os.writeBytes(2, this.Buff);
            os.writeInt64(3, this.Seq);
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
                Type: this.Type,
                Buff: this.Buff.toObject(),
                Seq: this.Seq
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Type") && (this.Type = json.Type);
            _hasOwnProperty.call(json, "Buff") && (this.Buff.readFromObject(json.Buff));
            _hasOwnProperty.call(json, "Seq") && (this.Seq = json.Seq);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new PushReq();
        }
        static create(is) {
            return ConfigPushSvcTars.PushReq._readFrom(is);
        }
    }
    PushReq._classname = "ConfigPushSvcTars.PushReq";
    ConfigPushSvcTars.PushReq = PushReq;
    class FileStorageServerListInfo {
        constructor() {
            this.Ip = "";
            this.Port = 0;
            this._proto_struct_name_ = "";
            this._classname = "ConfigPushSvcTars.FileStorageServerListInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new FileStorageServerListInfo;
            tmp.Ip = is.readString(1, false, "");
            tmp.Port = is.readInt32(2, true, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeString(1, this.Ip);
            os.writeInt32(2, this.Port);
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
                Ip: this.Ip,
                Port: this.Port
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Ip") && (this.Ip = json.Ip);
            _hasOwnProperty.call(json, "Port") && (this.Port = json.Port);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new FileStorageServerListInfo();
        }
        static create(is) {
            return ConfigPushSvcTars.FileStorageServerListInfo._readFrom(is);
        }
    }
    FileStorageServerListInfo._classname = "ConfigPushSvcTars.FileStorageServerListInfo";
    ConfigPushSvcTars.FileStorageServerListInfo = FileStorageServerListInfo;
    class BigDataIpInfo {
        constructor() {
            this.Type = 0;
            this.Ip = "";
            this.Port = 0;
            this._proto_struct_name_ = "";
            this._classname = "ConfigPushSvcTars.BigDataIpInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new BigDataIpInfo;
            tmp.Type = is.readInt64(0, false, 0);
            tmp.Ip = is.readString(1, true, "");
            tmp.Port = is.readInt64(2, true, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Type);
            os.writeString(1, this.Ip);
            os.writeInt64(2, this.Port);
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
                Type: this.Type,
                Ip: this.Ip,
                Port: this.Port
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Type") && (this.Type = json.Type);
            _hasOwnProperty.call(json, "Ip") && (this.Ip = json.Ip);
            _hasOwnProperty.call(json, "Port") && (this.Port = json.Port);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new BigDataIpInfo();
        }
        static create(is) {
            return ConfigPushSvcTars.BigDataIpInfo._readFrom(is);
        }
    }
    BigDataIpInfo._classname = "ConfigPushSvcTars.BigDataIpInfo";
    ConfigPushSvcTars.BigDataIpInfo = BigDataIpInfo;
    class NetSegConf {
        constructor() {
            this.Uint32NetType = 0;
            this.Uint32Segsize = 0;
            this.Uint32Segnum = 0;
            this.Uint32Curconnnum = 0;
            this._proto_struct_name_ = "";
            this._classname = "ConfigPushSvcTars.NetSegConf";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new NetSegConf;
            tmp.Uint32NetType = is.readInt64(0, false, 0);
            tmp.Uint32Segsize = is.readInt64(1, false, 0);
            tmp.Uint32Segnum = is.readInt8(2, false, 0);
            tmp.Uint32Curconnnum = is.readInt64(3, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Uint32NetType);
            os.writeInt64(1, this.Uint32Segsize);
            os.writeInt8(2, this.Uint32Segnum);
            os.writeInt64(3, this.Uint32Curconnnum);
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
                Uint32NetType: this.Uint32NetType,
                Uint32Segsize: this.Uint32Segsize,
                Uint32Segnum: this.Uint32Segnum,
                Uint32Curconnnum: this.Uint32Curconnnum
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Uint32NetType") && (this.Uint32NetType = json.Uint32NetType);
            _hasOwnProperty.call(json, "Uint32Segsize") && (this.Uint32Segsize = json.Uint32Segsize);
            _hasOwnProperty.call(json, "Uint32Segnum") && (this.Uint32Segnum = json.Uint32Segnum);
            _hasOwnProperty.call(json, "Uint32Curconnnum") && (this.Uint32Curconnnum = json.Uint32Curconnnum);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new NetSegConf();
        }
        static create(is) {
            return ConfigPushSvcTars.NetSegConf._readFrom(is);
        }
    }
    NetSegConf._classname = "ConfigPushSvcTars.NetSegConf";
    ConfigPushSvcTars.NetSegConf = NetSegConf;
    class BigDataIpList {
        constructor() {
            this.ServiceType = 0;
            this.Iplist = new TarsStream.List(ConfigPushSvcTars.BigDataIpInfo);
            this.NetSegConfs = new TarsStream.List(ConfigPushSvcTars.NetSegConf);
            this.fragmentSize = 0;
            this._proto_struct_name_ = "";
            this._classname = "ConfigPushSvcTars.BigDataIpList";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new BigDataIpList;
            tmp.ServiceType = is.readInt64(0, false, 0);
            tmp.Iplist = is.readList(1, false, TarsStream.List(ConfigPushSvcTars.BigDataIpInfo));
            tmp.NetSegConfs = is.readList(2, false, TarsStream.List(ConfigPushSvcTars.NetSegConf));
            tmp.fragmentSize = is.readInt64(3, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.ServiceType);
            os.writeList(1, this.Iplist);
            os.writeList(2, this.NetSegConfs);
            os.writeInt64(3, this.fragmentSize);
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
                ServiceType: this.ServiceType,
                Iplist: this.Iplist.toObject(),
                NetSegConfs: this.NetSegConfs.toObject(),
                fragmentSize: this.fragmentSize
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "ServiceType") && (this.ServiceType = json.ServiceType);
            _hasOwnProperty.call(json, "Iplist") && (this.Iplist.readFromObject(json.Iplist));
            _hasOwnProperty.call(json, "NetSegConfs") && (this.NetSegConfs.readFromObject(json.NetSegConfs));
            _hasOwnProperty.call(json, "fragmentSize") && (this.fragmentSize = json.fragmentSize);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new BigDataIpList();
        }
        static create(is) {
            return ConfigPushSvcTars.BigDataIpList._readFrom(is);
        }
    }
    BigDataIpList._classname = "ConfigPushSvcTars.BigDataIpList";
    ConfigPushSvcTars.BigDataIpList = BigDataIpList;
    class BigDataChannel {
        constructor() {
            this.BigdataIplists = new TarsStream.List(ConfigPushSvcTars.BigDataIpList);
            this.BigdataSigSession = new TarsStream.BinBuffer;
            this.BigdataKeySession = new TarsStream.BinBuffer;
            this.SigUin = 0;
            this.ConnectFlag = 0;
            this.BigdataPbBuf = new TarsStream.BinBuffer;
            this._proto_struct_name_ = "";
            this._classname = "ConfigPushSvcTars.BigDataChannel";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new BigDataChannel;
            tmp.BigdataIplists = is.readList(0, false, TarsStream.List(ConfigPushSvcTars.BigDataIpList));
            tmp.BigdataSigSession = is.readBytes(1, false, TarsStream.BinBuffer);
            tmp.BigdataKeySession = is.readBytes(2, false, TarsStream.BinBuffer);
            tmp.SigUin = is.readInt64(3, false, 0);
            tmp.ConnectFlag = is.readInt32(4, false, 0);
            tmp.BigdataPbBuf = is.readBytes(5, false, TarsStream.BinBuffer);
            return tmp;
        }
        _writeTo(os) {
            os.writeList(0, this.BigdataIplists);
            os.writeBytes(1, this.BigdataSigSession);
            os.writeBytes(2, this.BigdataKeySession);
            os.writeInt64(3, this.SigUin);
            os.writeInt32(4, this.ConnectFlag);
            os.writeBytes(5, this.BigdataPbBuf);
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
                BigdataIplists: this.BigdataIplists.toObject(),
                BigdataSigSession: this.BigdataSigSession.toObject(),
                BigdataKeySession: this.BigdataKeySession.toObject(),
                SigUin: this.SigUin,
                ConnectFlag: this.ConnectFlag,
                BigdataPbBuf: this.BigdataPbBuf.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "BigdataIplists") && (this.BigdataIplists.readFromObject(json.BigdataIplists));
            _hasOwnProperty.call(json, "BigdataSigSession") && (this.BigdataSigSession.readFromObject(json.BigdataSigSession));
            _hasOwnProperty.call(json, "BigdataKeySession") && (this.BigdataKeySession.readFromObject(json.BigdataKeySession));
            _hasOwnProperty.call(json, "SigUin") && (this.SigUin = json.SigUin);
            _hasOwnProperty.call(json, "ConnectFlag") && (this.ConnectFlag = json.ConnectFlag);
            _hasOwnProperty.call(json, "BigdataPbBuf") && (this.BigdataPbBuf.readFromObject(json.BigdataPbBuf));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new BigDataChannel();
        }
        static create(is) {
            return ConfigPushSvcTars.BigDataChannel._readFrom(is);
        }
    }
    BigDataChannel._classname = "ConfigPushSvcTars.BigDataChannel";
    ConfigPushSvcTars.BigDataChannel = BigDataChannel;
    class FmtIPInfo {
        constructor() {
            this.GateIp = "";
            this.GateIpOper = 0;
            this._proto_struct_name_ = "";
            this._classname = "ConfigPushSvcTars.FmtIPInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new FmtIPInfo;
            tmp.GateIp = is.readString(0, false, "");
            tmp.GateIpOper = is.readInt64(1, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeString(0, this.GateIp);
            os.writeInt64(1, this.GateIpOper);
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
                GateIp: this.GateIp,
                GateIpOper: this.GateIpOper
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "GateIp") && (this.GateIp = json.GateIp);
            _hasOwnProperty.call(json, "GateIpOper") && (this.GateIpOper = json.GateIpOper);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new FmtIPInfo();
        }
        static create(is) {
            return ConfigPushSvcTars.FmtIPInfo._readFrom(is);
        }
    }
    FmtIPInfo._classname = "ConfigPushSvcTars.FmtIPInfo";
    ConfigPushSvcTars.FmtIPInfo = FmtIPInfo;
    class DomainIpInfo {
        constructor() {
            this.Ip = 0;
            this.Port = 0;
            this._proto_struct_name_ = "";
            this._classname = "ConfigPushSvcTars.DomainIpInfo";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new DomainIpInfo;
            tmp.Ip = is.readInt32(1, false, 0);
            tmp.Port = is.readInt32(2, true, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt32(1, this.Ip);
            os.writeInt32(2, this.Port);
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
                Ip: this.Ip,
                Port: this.Port
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Ip") && (this.Ip = json.Ip);
            _hasOwnProperty.call(json, "Port") && (this.Port = json.Port);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new DomainIpInfo();
        }
        static create(is) {
            return ConfigPushSvcTars.DomainIpInfo._readFrom(is);
        }
    }
    DomainIpInfo._classname = "ConfigPushSvcTars.DomainIpInfo";
    ConfigPushSvcTars.DomainIpInfo = DomainIpInfo;
    class DomainIpList {
        constructor() {
            this.DomainType = 0;
            this.IpList = new TarsStream.List(ConfigPushSvcTars.DomainIpInfo);
            this.Param = new TarsStream.BinBuffer;
            this.Param2 = 0;
            this._proto_struct_name_ = "";
            this._classname = "ConfigPushSvcTars.DomainIpList";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new DomainIpList;
            tmp.DomainType = is.readInt32(0, false, 0);
            tmp.IpList = is.readList(1, false, TarsStream.List(ConfigPushSvcTars.DomainIpInfo));
            tmp.Param = is.readBytes(2, false, TarsStream.BinBuffer);
            tmp.Param2 = is.readInt32(4, false, 0);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt32(0, this.DomainType);
            os.writeList(1, this.IpList);
            os.writeBytes(2, this.Param);
            os.writeInt32(4, this.Param2);
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
                DomainType: this.DomainType,
                IpList: this.IpList.toObject(),
                Param: this.Param.toObject(),
                Param2: this.Param2
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "DomainType") && (this.DomainType = json.DomainType);
            _hasOwnProperty.call(json, "IpList") && (this.IpList.readFromObject(json.IpList));
            _hasOwnProperty.call(json, "Param") && (this.Param.readFromObject(json.Param));
            _hasOwnProperty.call(json, "Param2") && (this.Param2 = json.Param2);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new DomainIpList();
        }
        static create(is) {
            return ConfigPushSvcTars.DomainIpList._readFrom(is);
        }
    }
    DomainIpList._classname = "ConfigPushSvcTars.DomainIpList";
    ConfigPushSvcTars.DomainIpList = DomainIpList;
    class DomainIpChannel {
        constructor() {
            this.DomainIplists = new TarsStream.List(ConfigPushSvcTars.DomainIpList);
            this._proto_struct_name_ = "";
            this._classname = "ConfigPushSvcTars.DomainIpChannel";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new DomainIpChannel;
            tmp.DomainIplists = is.readList(0, false, TarsStream.List(ConfigPushSvcTars.DomainIpList));
            return tmp;
        }
        _writeTo(os) {
            os.writeList(0, this.DomainIplists);
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
                DomainIplists: this.DomainIplists.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "DomainIplists") && (this.DomainIplists.readFromObject(json.DomainIplists));
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new DomainIpChannel();
        }
        static create(is) {
            return ConfigPushSvcTars.DomainIpChannel._readFrom(is);
        }
    }
    DomainIpChannel._classname = "ConfigPushSvcTars.DomainIpChannel";
    ConfigPushSvcTars.DomainIpChannel = DomainIpChannel;
})(ConfigPushSvcTars = exports.ConfigPushSvcTars || (exports.ConfigPushSvcTars = {}));
