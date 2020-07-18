"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const stream_1 = __importDefault(require("@tars/stream"));
const RequestPacketTars_1 = require("./Build/RequestPacketTars");
class TarsRequesPack {
    constructor() {
        this.MapKey = "";
        this.ReqPack = RequestPacketTars_1.RequesPack.Pack.new();
        this.Map = new stream_1.default.Map(stream_1.default.String, stream_1.default.BinBuffer);
    }
    SetMapKey(Key) {
        this.MapKey = Key;
    }
    SetPackFunc(Name) {
        this.ReqPack.FuncName = Name;
    }
    SetPackType(Type) {
        this.ReqPack.PacketType = Type;
    }
    SetPackServantName(Name) {
        this.ReqPack.ServantName = Name;
    }
    SetPackVersion(Version) {
        this.ReqPack.Version = Version;
    }
    SetPackReqId(Id) {
        this.ReqPack.RequestId = Id;
    }
    SetStruct(Struct) {
        this.Struct = Struct;
    }
    Generate() {
        if (!this.MapKey) {
            throw "error";
        }
        let Out = new stream_1.default.TarsOutputStream();
        Out.writeStruct(0, this.Struct);
        this.Map.put(this.MapKey, Out.getBinBuffer());
        let Out2 = new stream_1.default.TarsOutputStream();
        Out2.writeMap(0, this.Map);
        this.ReqPack.Buffer.writeBinBuffer(Out2.getBinBuffer());
        return this.ReqPack.toBinBuffer().toNodeBuffer().toJSON().data;
    }
}
module.exports = TarsRequesPack;
