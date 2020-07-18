declare const enum Type {
    Shor = 2,
    Int = 4
}
declare class Byte {
    static FillToHexList(Data: number, FillNum: Type): Array<number>;
    static DecToHexList(Data: number): Array<number>;
}
export = Byte;
