import Tars from "@tars/stream"
import {RequesPack} from "./Build/RequestPacketTars";

class TarsRequesPack {
    private Struct: any
    private Map: Tars.Map<string, Tars.BinBuffer>
    private MapKey: string = ""
    private ReqPack: RequesPack.Pack = RequesPack.Pack.new()


    public SetMapKey(Key: string) {
        this.MapKey = Key
    }

    public SetPackFunc(Name: string) {
        this.ReqPack.FuncName = Name
    }

    public SetPackType(Type: number) {
        this.ReqPack.PacketType = Type
    }

    public SetPackServantName(Name: string) {
        this.ReqPack.ServantName = Name
    }

    public SetPackVersion(Version: number) {
        this.ReqPack.Version = Version
    }

    public SetPackReqId(Id: number) {
        this.ReqPack.RequestId = Id
    }


    public SetStruct(Struct: any) {
        this.Struct = Struct
    }

    public Generate(): Array<number> {
        if (!this.MapKey) {
            throw "error"
        }
        let Out = new Tars.TarsOutputStream()
        Out.writeStruct(0, this.Struct)
        this.Map.put(
            this.MapKey, Out.getBinBuffer()
        )
        let Out2 = new Tars.TarsOutputStream()
        Out2.writeMap(0, this.Map)
        this.ReqPack.Buffer.writeBinBuffer(Out2.getBinBuffer())
        return this.ReqPack.toBinBuffer().toNodeBuffer().toJSON().data
    }

    constructor() {
        this.Map = new Tars.Map(Tars.String, Tars.BinBuffer)
    }
}


export = TarsRequesPack