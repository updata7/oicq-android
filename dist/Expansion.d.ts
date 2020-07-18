declare global {
    interface String {
        NumberStringToHexString(): string;
        HexStringToNumber(): Array<number>;
        HexNumberToString(): Array<string>;
        ToHexArray(): Array<number>;
    }
    interface Array<T> {
        HexStringToNumber(): Array<number>;
        StringArrayToString(): string;
        HexNumberToString(): Array<string>;
        HexNumberToNumber(): number;
    }
}
export {};
