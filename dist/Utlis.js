"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TlvPackage = exports.Package = exports.Utlis = void 0;
const Crypto = require("crypto");
require("./Expansion");
class TlvPackage {
    constructor() {
        this.Length = [];
        this.Value = [];
        this.Tag = [];
    }
    SetValue(Value) {
        if (typeof (Value) === "string") {
            this.Value = Value.HexStringToNumber();
        }
        else {
            this.Value = Value;
        }
        this.Length = Utlis.NumberToHex(Value.length);
    }
    SetTag(Tag) {
        if (typeof (Tag) === "string") {
            this.Tag = Tag.HexStringToNumber();
        }
        else {
            this.Tag = Tag;
        }
    }
    Generate() {
        return (this.Tag.concat(this.Length)).concat(this.Value);
    }
}
exports.TlvPackage = TlvPackage;
class Utlis {
    static NumberToHex(Number) {
        if (Number > 255) {
            let Hex = Number.toString(16);
            return ["0" + Hex[0], Hex[1] + Hex[2]].HexStringToNumber();
        }
        else {
            return [0, Number];
        }
    }
    static MD5HexArray(HexList) {
        let Md5;
        Md5 = Crypto.createHash('md5').update(Buffer.from(HexList)).digest('hex');
        let Str = "";
        for (let i = 0, len = Md5.length / 2; i < len; i++) {
            let subStr = Md5.substr(0, 2);
            Str += subStr + " ";
            Md5 = Md5.replace(subStr, "");
        }
        return Str.trim().HexStringToNumber();
    }
    static RnadomNumber(Min, Max) {
        return Math.floor(Math.random() * (Max - Min + 1) + Min);
    }
    static GenerateHexString(Max) {
        let Str = "";
        for (let index = 0; index < Max; index++) {
            Str += Crypto.randomBytes(1).toString('hex') + " ";
        }
        return Str.trim();
    }
}
exports.Utlis = Utlis;
class Package {
    constructor() {
        this.Body = [];
    }
    SetString(Str) {
        this.Body = this.Body.concat(Str.trim().HexStringToNumber());
    }
    Get() {
        return this.Body;
    }
    SetHex(NumberArray) {
        this.Body = this.Body.concat(NumberArray);
    }
}
exports.Package = Package;
