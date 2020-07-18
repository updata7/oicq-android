"use strict";
exports.__esModule = true;
exports.TlvPackage = exports.Package = exports.Utlis = void 0;
var Crypto = require("crypto");
require("./Expansion");
var TlvPackage = /** @class */ (function () {
    function TlvPackage() {
        this.Length = [];
        this.Value = [];
        this.Tag = [];
    }
    TlvPackage.prototype.SetValue = function (Value) {
        if (typeof (Value) === "string") {
            this.Value = Value.HexStringToNumber();
        }
        else {
            this.Value = Value;
        }
        this.Length = Utlis.NumberToHex(Value.length);
    };
    TlvPackage.prototype.SetTag = function (Tag) {
        if (typeof (Tag) === "string") {
            this.Tag = Tag.HexStringToNumber();
        }
        else {
            this.Tag = Tag;
        }
    };
    TlvPackage.prototype.Generate = function () {
        return (this.Tag.concat(this.Length)).concat(this.Value);
    };
    return TlvPackage;
}());
exports.TlvPackage = TlvPackage;
var Utlis = /** @class */ (function () {
    function Utlis() {
    }
    Utlis.NumberToHex = function (Number) {
        if (Number > 255) {
            var Hex = Number.toString(16);
            return ["0" + Hex[0], Hex[1] + Hex[2]].HexStringToNumber();
        }
        else {
            return [0, Number];
        }
    };
    Utlis.MD5HexArray = function (HexList) {
        var Md5;
        Md5 = Crypto.createHash('md5').update(Buffer.from(HexList)).digest('hex');
        var Str = "";
        for (var i = 0, len = Md5.length / 2; i < len; i++) {
            var subStr = Md5.substr(0, 2);
            Str += subStr + " ";
            Md5 = Md5.replace(subStr, "");
        }
        return Str.trim().HexStringToNumber();
    };
    Utlis.RnadomNumber = function (Min, Max) {
        return Math.floor(Math.random() * (Max - Min + 1) + Min);
    };
    Utlis.GenerateHexString = function (Max) {
        var Str = "";
        for (var index = 0; index < Max; index++) {
            Str += Crypto.randomBytes(1).toString('hex') + " ";
        }
        return Str.trim();
    };
    return Utlis;
}());
exports.Utlis = Utlis;
var Package = /** @class */ (function () {
    function Package() {
        this.Body = [];
    }
    Package.prototype.SetString = function (Str) {
        this.Body = this.Body.concat(Str.trim().HexStringToNumber());
    };
    Package.prototype.Get = function () {
        return this.Body;
    };
    Package.prototype.SetHex = function (NumberArray) {
        this.Body = this.Body.concat(NumberArray);
    };
    return Package;
}());
exports.Package = Package;
