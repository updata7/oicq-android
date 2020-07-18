"use strict";
var SvcRegisterTars_1 = require("../Tars/Build/SvcRegisterTars");
var Utlis_1 = require("../../Utlis");
var stream_1 = require("@tars/stream");
var TarsRequesPack_1 = require("../Tars/TarsRequesPack");
var SvcRegister = /** @class */ (function () {
    function SvcRegister() {
    }
    SvcRegister.SetStatus = function (Type, QQ, Guid, AndroidVersion, Model) {
        var GuidBuff = Buffer.from(Utlis_1.Utlis.MD5HexArray(Utlis_1.Utlis.MD5HexArray(Guid)));
        var SvcRegister = SvcRegisterTars_1.Register.Pack["new"]();
        SvcRegister.Uin = QQ;
        SvcRegister.Guid = new stream_1["default"].BinBuffer(GuidBuff);
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
        var RequestPack = new TarsRequesPack_1["default"]();
        RequestPack.SetMapKey("SvcReqRegister");
        RequestPack.SetStruct(SvcRegister);
        RequestPack.SetPackFunc("SvcReqRegister");
        RequestPack.SetPackServantName("PushService");
        return RequestPack.Generate();
    };
    return SvcRegister;
}());
module.exports = SvcRegister;
