import "./Expansion";
declare class TlvPackage {
    private Length;
    private Value;
    private Tag;
    SetValue(Value: Array<number> | string): void;
    SetTag(Tag: Array<number> | string): void;
    Generate(): Array<number>;
}
declare class Utlis {
    static NumberToHex(Number: number): Array<number>;
    static MD5HexArray(HexList: Array<number>): Array<number>;
    static RnadomNumber(Min: number, Max: number): number;
    static GenerateHexString(Max: number): string;
}
declare class Package {
    private Body;
    SetString(Str: string): void;
    Get(): Array<number>;
    SetHex(NumberArray: Array<number>): void;
}
export { Utlis, Package, TlvPackage };
