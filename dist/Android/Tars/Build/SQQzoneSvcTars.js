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
exports.SQQZoneSvcTars = void 0;
const assert = require("assert");
const TarsStream = __importStar(require("@tars/stream"));
const _hasOwnProperty = Object.prototype.hasOwnProperty;
var SQQZoneSvcTars;
(function (SQQZoneSvcTars) {
    class QMF_PROTOCALmobile_get_config_req {
        constructor() {
            this.IParam = 0;
            this.BParam = 0;
            this.Config = "";
            this._proto_struct_name_ = "";
            this._classname = "SQQZoneSvcTars.QMF_PROTOCALmobile_get_config_req";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new QMF_PROTOCALmobile_get_config_req;
            tmp.IParam = is.readInt32(0, false, 0);
            tmp.BParam = is.readInt8(1, false, 0);
            tmp.Config = is.readString(2, false, "");
            return tmp;
        }
        _writeTo(os) {
            os.writeInt32(0, this.IParam);
            os.writeInt8(1, this.BParam);
            os.writeString(2, this.Config);
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
                IParam: this.IParam,
                BParam: this.BParam,
                Config: this.Config
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "IParam") && (this.IParam = json.IParam);
            _hasOwnProperty.call(json, "BParam") && (this.BParam = json.BParam);
            _hasOwnProperty.call(json, "Config") && (this.Config = json.Config);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new QMF_PROTOCALmobile_get_config_req();
        }
        static create(is) {
            return SQQZoneSvcTars.QMF_PROTOCALmobile_get_config_req._readFrom(is);
        }
    }
    QMF_PROTOCALmobile_get_config_req._classname = "SQQZoneSvcTars.QMF_PROTOCALmobile_get_config_req";
    SQQZoneSvcTars.QMF_PROTOCALmobile_get_config_req = QMF_PROTOCALmobile_get_config_req;
    class QMF_PROTOCALQmfBusiControl {
        constructor() {
            this.Zero = 0;
            this.IParam = 0;
            this.Flag = true;
            this._proto_struct_name_ = "";
            this._classname = "SQQZoneSvcTars.QMF_PROTOCALQmfBusiControl";
        }
        static _write(os, tag, val) { os.writeStruct(tag, val); }
        static _read(is, tag, def) { return is.readStruct(tag, true, def); }
        static _readFrom(is) {
            const tmp = new QMF_PROTOCALQmfBusiControl;
            tmp.Zero = is.readInt32(0, false, 0);
            tmp.IParam = is.readInt32(1, false, 0);
            tmp.Flag = is.readBoolean(2, false, true);
            return tmp;
        }
        _writeTo(os) {
            os.writeInt32(0, this.Zero);
            os.writeInt32(1, this.IParam);
            os.writeBoolean(2, this.Flag);
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
                Zero: this.Zero,
                IParam: this.IParam,
                Flag: this.Flag
            };
        }
        readFromObject(json) {
            _hasOwnProperty.call(json, "Zero") && (this.Zero = json.Zero);
            _hasOwnProperty.call(json, "IParam") && (this.IParam = json.IParam);
            _hasOwnProperty.call(json, "Flag") && (this.Flag = json.Flag);
            return this;
        }
        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }
        static new() {
            return new QMF_PROTOCALQmfBusiControl();
        }
        static create(is) {
            return SQQZoneSvcTars.QMF_PROTOCALQmfBusiControl._readFrom(is);
        }
    }
    QMF_PROTOCALQmfBusiControl._classname = "SQQZoneSvcTars.QMF_PROTOCALQmfBusiControl";
    SQQZoneSvcTars.QMF_PROTOCALQmfBusiControl = QMF_PROTOCALQmfBusiControl;
})(SQQZoneSvcTars = exports.SQQZoneSvcTars || (exports.SQQZoneSvcTars = {}));
