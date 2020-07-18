"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Byte = /** @class */ (function () {
    function Byte() {
    }
    Byte.FillToHexList = function (Data, FillNum) {
        var HexList = this.DecToHexList(Data);
        if (HexList.length < FillNum) {
            var Fill = [];
            for (var i = 0; i < FillNum - HexList.length; i++) {
                Fill.push(0);
            }
            return __spreadArrays(Fill, HexList);
        }
        return HexList;
    };
    /***
     * 十进制数字转十六进制
     * @constructor
     */
    Byte.DecToHexList = function (Data) {
        if (Data < 256) {
            return [Data];
        }
        //ffff=65535
        if (Data < 65536) {
            var HightHex = parseInt(String(Data / 256));
            var LowHex = Data % 256;
            return [HightHex, LowHex];
        }
        if (Data < 16777215) {
            var HexStr = Data.toString(16);
            return [
                parseInt(HexStr.substr(0, 2), 16),
                parseInt(HexStr.substr(2, 2), 16),
                parseInt(HexStr.substr(4, 2), 16),
            ];
        }
        if (Data < 4294967295) {
            var HexStr = Data.toString(16);
            return [
                parseInt(HexStr.substr(0, 2), 16),
                parseInt(HexStr.substr(2, 2), 16),
                parseInt(HexStr.substr(4, 2), 16),
                parseInt(HexStr.substr(6, 2), 16)
            ];
        }
        throw new Error("too larger");
    };
    return Byte;
}());
module.exports = Byte;
