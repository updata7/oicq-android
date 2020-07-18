"use strict";
exports.__esModule = true;
String.prototype.ToHexArray = function () {
    return Buffer.from(this).toJSON().data;
};
Array.prototype.HexStringToNumber = function () {
    var Ret = [];
    this.map(function (value) {
        Ret.push(parseInt(value, 16));
    });
    return Ret;
};
Array.prototype.HexNumberToNumber = function () {
    return parseInt(this.HexNumberToString().StringArrayToString().replace(/ /g, ""), 16);
};
Array.prototype.HexNumberToString = function () {
    var Ret = [];
    this.map(function (value) {
        var hex = value.toString(16);
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
    var Str = "";
    this.split(" ").map(function (value) {
        var i = parseInt(value, 16);
        var hex = i.toString(16);
        if (hex.length == 1) {
            hex = "0" + hex;
        }
        Str += hex + " ";
    });
    return Str.trim();
};
String.prototype.HexStringToNumber = function () {
    var NumbetList = [];
    this.split(" ").map(function (value) {
        NumbetList.push(parseInt(value, 16));
    });
    return NumbetList;
};
String.prototype.NumberStringToHexString = function () {
    var Str = "";
    this.split(" ").map(function (value) {
        var i = parseInt(value, 16);
        var hex = i.toString(16);
        if (hex.length == 1) {
            hex = "0" + hex;
        }
        Str += hex + " ";
    });
    return Str.trim();
};
String.prototype.HexStringToNumber = function () {
    var NumbetList = [];
    this.split(" ").map(function (value) {
        NumbetList.push(parseInt(value, 16));
    });
    return NumbetList;
};
