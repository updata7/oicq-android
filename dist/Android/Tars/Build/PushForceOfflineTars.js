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
exports.PushForceOffline = void 0;
const assert = require("assert");
const TarsStream = __importStar(require("@tars/stream"));
const _hasOwnProperty = Object.prototype.hasOwnProperty;
var PushForceOffline;
(function (PushForceOffline) {
    class Pack {
        constructor() {
            this.Uin = 0;
            this.Title = "";
            this.Ttips = "";
            this.SameDevice = "";
            this._proto_struct_name_ = "";
            this._classname = "PushForceOffline.Pack";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new Pack;
            tmp.Uin = is.readInt64(0, true, 0);
            tmp.Title = is.readString(1, true, "");
            tmp.Ttips = is.readString(2, true, "");
            tmp.SameDevice = is.readString(3, true, "");
            return tmp;
        }
        _writeTo(os) {
            os.writeInt64(0, this.Uin);
            os.writeString(1, this.Title);
            os.writeString(2, this.Ttips);
            os.writeString(3, this.SameDevice);
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
                Title: this.Title,
                Ttips: this.Ttips,
                SameDevice: this.SameDevice
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Uin") && (this.Uin = json.Uin);
            _hasOwnProperty.call(json, "Title") && (this.Title = json.Title);
            _hasOwnProperty.call(json, "Ttips") && (this.Ttips = json.Ttips);
            _hasOwnProperty.call(json, "SameDevice") && (this.SameDevice = json.SameDevice);
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
            return PushForceOffline.Pack._readFrom(is);
        }
    }
    Pack._classname = "PushForceOffline.Pack";
    PushForceOffline.Pack = Pack;
})(PushForceOffline = exports.PushForceOffline || (exports.PushForceOffline = {}));
