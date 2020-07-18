"use strict";
var stream_1 = require("@tars/stream");
var RequestPacketTars_1 = require("./Build/RequestPacketTars");
var TarsRequesPack = /** @class */ (function () {
    function TarsRequesPack() {
        this.MapKey = "";
        this.ReqPack = RequestPacketTars_1.RequesPack.Pack["new"]();
        this.Map = new stream_1["default"].Map(stream_1["default"].String, stream_1["default"].BinBuffer);
    }
    TarsRequesPack.prototype.SetMapKey = function (Key) {
        this.MapKey = Key;
    };
    TarsRequesPack.prototype.SetPackFunc = function (Name) {
        this.ReqPack.FuncName = Name;
    };
    TarsRequesPack.prototype.SetPackType = function (Type) {
        this.ReqPack.PacketType = Type;
    };
    TarsRequesPack.prototype.SetPackServantName = function (Name) {
        this.ReqPack.ServantName = Name;
    };
    TarsRequesPack.prototype.SetPackVersion = function (Version) {
        this.ReqPack.Version = Version;
    };
    TarsRequesPack.prototype.SetPackReqId = function (Id) {
        this.ReqPack.RequestId = Id;
    };
    TarsRequesPack.prototype.SetStruct = function (Struct) {
        this.Struct = Struct;
    };
    TarsRequesPack.prototype.Generate = function () {
        if (!this.MapKey) {
            throw "error";
        }
        var Out = new stream_1["default"].TarsOutputStream();
        Out.writeStruct(0, this.Struct);
        this.Map.put(this.MapKey, Out.getBinBuffer());
        var Out2 = new stream_1["default"].TarsOutputStream();
        Out2.writeMap(0, this.Map);
        this.ReqPack.Buffer.writeBinBuffer(Out2.getBinBuffer());
        return this.ReqPack.toBinBuffer().toNodeBuffer().toJSON().data;
    };
    return TarsRequesPack;
}());
module.exports = TarsRequesPack;
