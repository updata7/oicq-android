declare global {
    interface String {
        NumberStringToHexString(): string

        HexStringToNumber(): Array<number>

        HexNumberToString(): Array<string>

        ToHexArray(): Array<number>

    }

    interface Array<T> {
        HexStringToNumber(): Array<number>

        StringArrayToString(): string

        HexNumberToString(): Array<string>

        HexNumberToNumber(): number
    }

}


String.prototype.ToHexArray = function () {
    return Buffer.from(this).toJSON().data
}

Array.prototype.HexStringToNumber = function () {
    let Ret: Array<number> = []
    this.map((value) => {
        Ret.push(parseInt(value, 16))
    })
    return Ret
}

Array.prototype.HexNumberToNumber = function () {
    return parseInt(this.HexNumberToString().StringArrayToString().replace(/ /g, ""), 16)
}

Array.prototype.HexNumberToString = function () {
    let Ret: Array<string> = []
    this.map((value) => {
        let hex = value.toString(16)
        if (hex.length === 1) {
            hex = "0" + hex
        }
        Ret.push(hex)
    })
    return Ret
}

Array.prototype.StringArrayToString = function () {
    return this.toString().replace(/,/g, " ")
}


String.prototype.NumberStringToHexString = function () {
    let Str = ""

    this.split(" ").map((value) => {
        let i = parseInt(value, 16)
        let hex = i.toString(16)
        if (hex.length == 1) {
            hex = "0" + hex
        }
        Str += hex + " "
    })
    return Str.trim()
}

String.prototype.HexStringToNumber = function () {
    let NumbetList: Array<number> = [];
    this.split(" ").map((value) => {
        NumbetList.push(parseInt(value, 16))
    })
    return NumbetList
}

String.prototype.NumberStringToHexString = function (): string {
    let Str = ""
    this.split(" ").map((value) => {
        let i = parseInt(value, 16)
        let hex = i.toString(16)
        if (hex.length == 1) {
            hex = "0" + hex
        }
        Str += hex + " "
    })
    return Str.trim()
}

String.prototype.HexStringToNumber = function (): Array<number> {
    let NumbetList: Array<number> = [];
    this.split(" ").map((value) => {
        NumbetList.push(parseInt(value, 16))
    })
    return NumbetList
}


export {}