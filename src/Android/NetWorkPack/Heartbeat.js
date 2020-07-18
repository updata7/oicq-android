"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Utlis_1 = require("../../Utlis");
require("../../Expansion");
var Heartbeat = /** @class */ (function () {
    /***
     *
     * @param Params
     */
    function Heartbeat(Params) {
        this.Cmd = "Heartbeat.Alive";
        this.CmdLen = this.Cmd.length + 4;
        this.PackData = [];
        var Pack = new Utlis_1.Package();
        Pack.SetHex(Params.Seq);
        Pack.SetHex(Params.ProtocolId);
        Pack.SetHex(Params.ProtocolId);
        Pack.SetHex([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
        Pack.SetHex([0, 0, 0, 4]);
        Pack.SetHex([0, 0, 0, this.CmdLen]);
        Pack.SetHex(this.Cmd.ToHexArray());
        Pack.SetHex([0, 0, 0, 8]);
        //SessionId ?
        Pack.SetString(Utlis_1.Utlis.GenerateHexString(4));
        Pack.SetHex([0, 0, 0, Params.Imei.length + 4]);
        Pack.SetHex(Params.Imei);
        Pack.SetHex([0, 0, 0, 4]);
        Pack.SetHex([0, Params.Ksid.length + 2]);
        Pack.SetHex(Params.Ksid);
        Pack.SetHex([0, 0, 0, 4]);
        Pack.SetHex([0, 0, 0, 4]);
        this.PackData = Pack.Get();
    }
    Heartbeat.prototype.Generate = function () {
        return __spreadArrays([
            0, 0, 0, this.PackData.length
        ], this.PackData);
    };
    return Heartbeat;
}());
module.exports = Heartbeat;
