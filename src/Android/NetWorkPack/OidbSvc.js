"use strict";
var OidbSvc_1 = require("../Proto/Build/OidbSvc");
var Buff_1 = require("../Buff");
var OidbSvc = /** @class */ (function () {
    function OidbSvc() {
    }
    /***
     * 群成员禁言
     * @constructor
     * @param Time- 秒
     */
    OidbSvc.Svc570_8 = function (GroupCode, MemberUin, Time) {
        var Buf = new Buff_1["default"](100);
        Buf.WriteInt(GroupCode);
        Buf.WriteByte(32);
        Buf.WriteShort(1);
        Buf.WriteInt(MemberUin);
        Buf.WriteInt(Time);
        var Struct = {
            Command: 1392,
            ServiceType: 8,
            Result: 0,
            BodyBuffer: "",
            ErrorMsg: '',
            ClientVersion: ''
        };
        var PbStruct = OidbSvc_1.OidbSvcPb.OidbSvcPack.fromObject(Struct);
        PbStruct.BodyBuffer = Buf.GetWriteBuffer();
        var Pack = OidbSvc_1.OidbSvcPb.OidbSvcPack.encode(PbStruct).finish();
        return Array.from(Pack);
    };
    /***
     * 全群禁言
     * @constructor
     * pb 太麻烦
     */
    OidbSvc.Svc7E5_4 = function (Type) {
        if (Type) {
        }
        var Pack = OidbSvc_1.OidbSvcPb.OidbSvcPack.encode({
            Command: 22,
            BodyBuffer: null
        });
    };
    return OidbSvc;
}());
module.exports = OidbSvc;
