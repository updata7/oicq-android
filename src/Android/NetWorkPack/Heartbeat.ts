import {Package, Utlis} from '../../Utlis'
import '../../Expansion'
import Buff from "../Buff";

interface RequireParams {
    Ksid: Array<number>,
    Seq: Array<number>,
    Imei: Array<number>,
    ProtocolId: Array<number>
}


class Heartbeat {
    private Cmd: string = "Heartbeat.Alive"
    private CmdLen: number = this.Cmd.length + 4
    private PackData: Array<number> = []

    public Generate(): Array<number> {
        return [
            0, 0, 0, this.PackData.length, ...this.PackData
        ]
    }

    /***
     *
     * @param Params
     */
    constructor(Params: RequireParams) {
        let Pack = new Package()
        Pack.SetHex(Params.Seq)
        Pack.SetHex(Params.ProtocolId)
        Pack.SetHex(Params.ProtocolId)
        Pack.SetHex([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0])
        Pack.SetHex([0, 0, 0, 4])
        Pack.SetHex([0, 0, 0, this.CmdLen])
        Pack.SetHex(this.Cmd.ToHexArray())
        Pack.SetHex([0, 0, 0, 8])
        //SessionId ?
        Pack.SetString(Utlis.GenerateHexString(4))
        Pack.SetHex([0, 0, 0, Params.Imei.length + 4])
        Pack.SetHex(Params.Imei)
        Pack.SetHex([0, 0, 0, 4])
        Pack.SetHex([0, Params.Ksid.length + 2])
        Pack.SetHex(Params.Ksid)
        Pack.SetHex([0, 0, 0, 4])
        Pack.SetHex([0, 0, 0, 4])
        this.PackData = Pack.Get()
    }
}

export = Heartbeat