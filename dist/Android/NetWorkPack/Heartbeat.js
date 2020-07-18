"use strict";
const Utlis_1 = require("../../Utlis");
require("../../Expansion");
class Heartbeat {
    constructor(Params) {
        this.Cmd = "Heartbeat.Alive";
        this.CmdLen = this.Cmd.length + 4;
        this.PackData = [];
        let Pack = new Utlis_1.Package();
        Pack.SetHex(Params.Seq);
        Pack.SetHex(Params.ProtocolId);
        Pack.SetHex(Params.ProtocolId);
        Pack.SetHex([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
        Pack.SetHex([0, 0, 0, 4]);
        Pack.SetHex([0, 0, 0, this.CmdLen]);
        Pack.SetHex(this.Cmd.ToHexArray());
        Pack.SetHex([0, 0, 0, 8]);
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
    Generate() {
        return [
            0, 0, 0, this.PackData.length, ...this.PackData
        ];
    }
}
module.exports = Heartbeat;
