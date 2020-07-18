const enum Type {
    Shor = 2,
    Int = 4
}

class Byte {
    public static FillToHexList(Data: number, FillNum: Type): Array<number> {
        let HexList = this.DecToHexList(Data)
        if (HexList.length < FillNum) {
            let Fill: Array<number> = []
            for (let i = 0; i < FillNum - HexList.length; i++) {
                Fill.push(0)
            }
            return [...Fill, ...HexList]
        }
        return HexList
    }

    /***
     * 十进制数字转十六进制
     * @constructor
     */
    public static DecToHexList(Data: number): Array<number> {
        if (Data < 256) {
            return [Data]
        }
        //ffff=65535
        if (Data < 65536) {
            let HightHex = parseInt(String(Data / 256))
            let LowHex = Data % 256
            return [HightHex, LowHex]
        }

        if (Data < 16777215) {
            let HexStr = Data.toString(16)
            return [
                parseInt(HexStr.substr(0, 2), 16),
                parseInt(HexStr.substr(2, 2), 16),
                parseInt(HexStr.substr(4, 2), 16),
            ]
        }
        if (Data < 4294967295) {
            let HexStr = Data.toString(16)
            return [
                parseInt(HexStr.substr(0, 2), 16),
                parseInt(HexStr.substr(2, 2), 16),
                parseInt(HexStr.substr(4, 2), 16),
                parseInt(HexStr.substr(6, 2), 16)
            ]
        }
        throw new Error("too larger")
    }

}


export = Byte
