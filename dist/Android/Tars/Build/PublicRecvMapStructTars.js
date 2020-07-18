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
exports.PublicRecvMapStruct = void 0;
const assert = require("assert");
const TarsStream = __importStar(require("@tars/stream"));
const _hasOwnProperty = Object.prototype.hasOwnProperty;
var PublicRecvMapStruct;
(function (PublicRecvMapStruct) {
    class Pack {
        constructor() {
            this.Map = new TarsStream.Map(TarsStream.String, TarsStream.Map(TarsStream.String, TarsStream.BinBuffer));
            this._proto_struct_name_ = "";
            this._classname = "PublicRecvMapStruct.Pack";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new Pack;
            tmp.Map = is.readMap(0, true, TarsStream.Map(TarsStream.String, TarsStream.Map(TarsStream.String, TarsStream.BinBuffer)));
            return tmp;
        }
        _writeTo(os) {
            os.writeMap(0, this.Map);
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
                Map: this.Map.toObject()
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Map") && (this.Map.readFromObject(json.Map));
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
            return PublicRecvMapStruct.Pack._readFrom(is);
        }
    }
    Pack._classname = "PublicRecvMapStruct.Pack";
    PublicRecvMapStruct.Pack = Pack;
})(PublicRecvMapStruct = exports.PublicRecvMapStruct || (exports.PublicRecvMapStruct = {}));
