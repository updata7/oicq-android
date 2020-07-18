declare class TarsRequesPack {
    private Struct;
    private Map;
    private MapKey;
    private ReqPack;
    SetMapKey(Key: string): void;
    SetPackFunc(Name: string): void;
    SetPackType(Type: number): void;
    SetPackServantName(Name: string): void;
    SetPackVersion(Version: number): void;
    SetPackReqId(Id: number): void;
    SetStruct(Struct: any): void;
    Generate(): Array<number>;
    constructor();
}
export = TarsRequesPack;
