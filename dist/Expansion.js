"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.ToHexArray = function () {
    return Buffer.from(this).toJSON().data;
};
Array.prototype.HexStringToNumber = function () {
    let Ret = [];
    this.map((value) => {
        Ret.push(parseInt(value, 16));
    });
    return Ret;
};
Array.prototype.HexNumberToNumber = function () {
    return parseInt(this.HexNumberToString().StringArrayToString().replace(/ /g, ""), 16);
};
Array.prototype.HexNumberToString = function () {
    let Ret = [];
    this.map((value) => {
        let hex = value.toString(16);
        if (hex.length === 1) {
            hex = "0" + hex;
        }
        Ret.push(hex);
    });
    return Ret;
};
Array.prototype.StringArrayToString = function () {
    return this.toString().replace(/,/g, " ");
};
String.prototype.NumberStringToHexString = function () {
    let Str = "";
    this.split(" ").map((value) => {
        let i = parseInt(value, 16);
        let hex = i.toString(16);
        if (hex.length == 1) {
            hex = "0" + hex;
        }
        Str += hex + " ";
    });
    return Str.trim();
};
String.prototype.HexStringToNumber = function () {
    let NumbetList = [];
    this.split(" ").map((value) => {
        NumbetList.push(parseInt(value, 16));
    });
    return NumbetList;
};
String.prototype.NumberStringToHexString = function () {
    let Str = "";
    this.split(" ").map((value) => {
        let i = parseInt(value, 16);
        let hex = i.toString(16);
        if (hex.length == 1) {
            hex = "0" + hex;
        }
        Str += hex + " ";
    });
    return Str.trim();
};
String.prototype.HexStringToNumber = function () {
    let NumbetList = [];
    this.split(" ").map((value) => {
        NumbetList.push(parseInt(value, 16));
    });
    return NumbetList;
};
