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
exports.RequesPack = void 0;
const assert = require("assert");
const TarsStream = __importStar(require("@tars/stream"));
const _hasOwnProperty = Object.prototype.hasOwnProperty;
var RequesPack;
(function (RequesPack) {
    class Pack {
        constructor() {
            this.Version = 3;
            this.PacketType = 0;
            this.MessageType = 0;
            this.RequestId = 0;
            this.ServantName = "";
            this.FuncName = "";
            this.Buffer = new TarsStream.BinBuffer;
            this.Timeout = 0;
            this.Context = new TarsStream.Map(TarsStream.String, TarsStream.String);
            this.Status = new TarsStream.Map(TarsStream.String, TarsStream.String);
            this._proto_struct_name_ = "";
            this._classname = "RequesPack.Pack";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new Pack;
            tmp.Version = is.readInt16(1, true, 3);
            tmp.PacketType = is.readInt8(2, false, 0);
            tmp.MessageType = is.readInt32(3, false, 0);
            tmp.RequestId = is.readInt32(4, true, 0);
            tmp.ServantName = is.readString(5, true, "");
            tmp.FuncName = is.readString(6, true, "");
            tmp.Buffer = is.readBytes(7, true, TarsStream.BinBuffer);
            tmp.Timeout = is.readInt32(8, false, 0);
            tmp.Context = is.readMap(9, false, TarsStream.Map(TarsStream.String, TarsStream.String));
            tmp.Status = is.readMap(10, false, TarsStream.Map(TarsStream.String, TarsStream.String));
            return tmp;
        }
        _writeTo(os) {
            os.writeInt16(1, this.Version);
            os.writeInt8(2, this.PacketType);
            os.writeInt32(3, this.MessageType);
            os.writeInt32(4, this.RequestId);
            os.writeString(5, this.ServantName);
            os.writeString(6, this.FuncName);
            os.writeBytes(7, this.Buffer);
            os.writeInt32(8, this.Timeout);
            os.writeMap(9, this.Context);
            os.writeMap(10, this.Status);
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
                Version: this.Version,
                PacketType: this.PacketType,
                MessageType: this.MessageType,
                RequestId: this.RequestId,
                ServantName: this.ServantName,
                FuncName: this.FuncName,
                Buffer: this.Buffer.toObject(),
                Timeout: this.Timeout,
                Context: this.Context.toObject(),
                Status: this.Status.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Version") && (this.Version = json.Version);
            _hasOwnProperty.call(json, "PacketType") && (this.PacketType = json.PacketType);
            _hasOwnProperty.call(json, "MessageType") && (this.MessageType = json.MessageType);
            _hasOwnProperty.call(json, "RequestId") && (this.RequestId = json.RequestId);
            _hasOwnProperty.call(json, "ServantName") && (this.ServantName = json.ServantName);
            _hasOwnProperty.call(json, "FuncName") && (this.FuncName = json.FuncName);
            _hasOwnProperty.call(json, "Buffer") && (this.Buffer.readFromObject(json.Buffer));
            _hasOwnProperty.call(json, "Timeout") && (this.Timeout = json.Timeout);
            _hasOwnProperty.call(json, "Context") && (this.Context.readFromObject(json.Context));
            _hasOwnProperty.call(json, "Status") && (this.Status.readFromObject(json.Status));
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
            return RequesPack.Pack._readFrom(is);
        }
    }
    Pack._classname = "RequesPack.Pack";
    RequesPack.Pack = Pack;
})(RequesPack = exports.RequesPack || (exports.RequesPack = {}));
