"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const OidbSvc_1 = require("../Proto/Build/OidbSvc");
const Buff_1 = __importDefault(require("../Buff"));
class OidbSvc {
    static Svc570_8(GroupCode, MemberUin, Time) {
        let Buf = new Buff_1.default(100);
        Buf.WriteInt(GroupCode);
        Buf.WriteByte(32);
        Buf.WriteShort(1);
        Buf.WriteInt(MemberUin);
        Buf.WriteInt(Time);
        let Struct = {
            Command: 1392,
            ServiceType: 8,
            Result: 0,
            BodyBuffer: "",
            ErrorMsg: '',
            ClientVersion: ''
        };
        let PbStruct = OidbSvc_1.OidbSvcPb.OidbSvcPack.fromObject(Struct);
        PbStruct.BodyBuffer = Buf.GetWriteBuffer();
        let Pack = OidbSvc_1.OidbSvcPb.OidbSvcPack.encode(PbStruct).finish();
        return Array.from(Pack);
    }
    static Svc7E5_4(Type) {
        if (Type) {
        }
        let Pack = OidbSvc_1.OidbSvcPb.OidbSvcPack.encode({
            Command: 22,
            BodyBuffer: null
        });
    }
}
module.exports = OidbSvc;
