"use strict";
// **********************************************************************
// Parsed By TarsParser(1.2.0), Generated By tars2node(20200315)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "RequestPacket.tars" by Structure Mode
// **********************************************************************
exports.__esModule = true;
exports.RequesPack = void 0;
/* tslint:disable */
/* eslint-disable */
/// <reference types="node" />
var assert = require("assert");
var TarsStream = require("@tars/stream");
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var RequesPack;
(function (RequesPack) {
    var Pack = /** @class */ (function () {
        function Pack() {
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
        Pack._write = function (os, tag, val) { os.writeStruct(tag, val); };
        Pack._read = function (is, tag, def) { return is.readStruct(tag, true, def); };
        Pack._readFrom = function (is) {
            var tmp = new Pack;
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
        };
        Pack.prototype._writeTo = function (os) {
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
        };
        Pack.prototype._equal = function () {
            assert.fail("this structure not define key operation");
        };
        Pack.prototype._genKey = function () {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        };
        Pack.prototype.toObject = function () {
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
        };
        Pack.prototype.readFromObject = function (json) {
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
        };
        Pack.prototype.toBinBuffer = function () {
            var os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        };
        Pack["new"] = function () {
            return new Pack();
        };
        Pack.create = function (is) {
            return RequesPack.Pack._readFrom(is);
        };
        Pack._classname = "RequesPack.Pack";
        return Pack;
    }());
    RequesPack.Pack = Pack;
})(RequesPack = exports.RequesPack || (exports.RequesPack = {}));
