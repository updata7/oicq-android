import '../../Expansion';
interface RequireParams {
    Ksid: Array<number>;
    Seq: Array<number>;
    Imei: Array<number>;
    ProtocolId: Array<number>;
}
declare class Heartbeat {
    private Cmd;
    private CmdLen;
    private PackData;
    Generate(): Array<number>;
    constructor(Params: RequireParams);
}
export = Heartbeat;
