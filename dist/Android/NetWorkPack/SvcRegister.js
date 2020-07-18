"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const SvcRegisterTars_1 = require("../Tars/Build/SvcRegisterTars");
const Utlis_1 = require("../../Utlis");
const stream_1 = __importDefault(require("@tars/stream"));
const TarsRequesPack_1 = __importDefault(require("../Tars/TarsRequesPack"));
class SvcRegister {
    static SetStatus(Type, QQ, Guid, AndroidVersion, Model) {
        let GuidBuff = Buffer.from(Utlis_1.Utlis.MD5HexArray(Utlis_1.Utlis.MD5HexArray(Guid)));
        let SvcRegister = SvcRegisterTars_1.Register.Pack.new();
        SvcRegister.Uin = QQ;
        SvcRegister.Guid = new stream_1.default.BinBuffer(GuidBuff);
        if (Type) {
            SvcRegister.Bit = 7;
            SvcRegister.Status = 11;
        }
        else {
            SvcRegister.Bit = 0;
            SvcRegister.Status = 21;
        }
        SvcRegister.AndroidVersion = AndroidVersion;
        SvcRegister.DevName = Model;
        SvcRegister.DevType = Model;
        SvcRegister.OsVersion = 22;
        let RequestPack = new TarsRequesPack_1.default();
        RequestPack.SetMapKey("SvcReqRegister");
        RequestPack.SetStruct(SvcRegister);
        RequestPack.SetPackFunc("SvcReqRegister");
        RequestPack.SetPackServantName("PushService");
        return RequestPack.Generate();
    }
}
module.exports = SvcRegister;
