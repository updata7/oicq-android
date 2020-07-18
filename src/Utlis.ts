const Crypto = require("crypto");
import "./Expansion"

class TlvPackage {
    private Length: Array<number> = []
    private Value: Array<number> = []
    private Tag: Array<number> = []

    public SetValue(Value: Array<number> | string): void {
        if (typeof (Value) === "string") {
            this.Value = Value.HexStringToNumber()

        } else {
            this.Value = Value
        }
        this.Length = Utlis.NumberToHex(Value.length)
    }

    public SetTag(Tag: Array<number> | string): void {
        if (typeof (Tag) === "string") {
            this.Tag = Tag.HexStringToNumber()
        } else {
            this.Tag = Tag
        }
    }


    public Generate(): Array<number> {
        return (this.Tag.concat(this.Length)).concat(this.Value)
    }

}

class Utlis {

    public static NumberToHex(Number: number): Array<number> {
        if (Number > 255) {
            let Hex = Number.toString(16)
            return ["0" + Hex[0], Hex[1] + Hex[2]].HexStringToNumber()
        } else {
            return [0, Number]
        }
    }

    public static MD5HexArray(HexList: Array<number>): Array<number> {
        let Md5: string
        Md5 = Crypto.createHash('md5').update(Buffer.from(HexList)).digest('hex');
        let Str: string = ""
        for (let i = 0, len = Md5.length / 2; i < len; i++) {
            let subStr = Md5.substr(0, 2);
            Str += subStr + " "
            Md5 = Md5.replace(subStr, "");
        }
        return Str.trim().HexStringToNumber()
    }

    public static RnadomNumber(Min: number, Max: number) {
        return Math.floor(Math.random() * (Max - Min + 1) + Min);
    }

    public static GenerateHexString(Max: number): string {
        let Str: string = ""
        for (let index = 0; index < Max; index++) {
            Str += Crypto.randomBytes(1).toString('hex') + " "
        }
        return Str.trim()
    }

}

class Package {
    private Body: Array<number> = [];

    public SetString(Str: string) {
        this.Body = this.Body.concat(Str.trim().HexStringToNumber())
    }

    public Get(): Array<number> {
        return this.Body
    }

    public SetHex(NumberArray: Array<number>) {
        this.Body = this.Body.concat(NumberArray)
    }
}


export {Utlis, Package, TlvPackage}