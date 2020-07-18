"use strict";
require("../Interface/ECDH");
require("../Expansion");
require("../Utlis");
var Utlis_1 = require("../Utlis");
var execSync = require('child_process').execSync;
var os = require('os');
/***
 * 执行文件源码在c++文件夹
 */
var Ecdh = /** @class */ (function () {
    function Ecdh() {
    }
    Ecdh.ExchangeKey = function (PublicKey, ClientPrivateKey, ServerPublicKey) {
        var SystemType = os.type();
        var Result;
        var KeyList;
        var PublicKeyStr = PublicKey.HexNumberToString().StringArrayToString().replace(/ /g, "");
        var ClientPrivateKeyStr = ClientPrivateKey.HexNumberToString().StringArrayToString().replace(/ /g, "");
        var ServerPublicKeyStr = ServerPublicKey.HexNumberToString().StringArrayToString().replace(/ /g, "");
        switch (SystemType) {
            case "Windows_NT":
                Result = execSync("index.exe e " + PublicKeyStr + " " + ClientPrivateKeyStr + " " + ServerPublicKeyStr, { cwd: __dirname });
                break;
            case "Linux":
                Result = execSync("./index.out e " + PublicKeyStr + " " + ClientPrivateKeyStr + " " + ServerPublicKeyStr, { cwd: __dirname });
                break;
            default:
                return null;
        }
        KeyList = Result.toString().split("\n");
        var NewKey = KeyList[0].trim().replace("\r", "").HexStringToNumber();
        return Utlis_1.Utlis.MD5HexArray(NewKey);
    };
    //version 8.3.0.4480
    //嫌麻烦就这样生成了
    Ecdh.Generate = function (Tk) {
        if (Tk === void 0) { Tk = "04928D8850673088B343264E0C6BACB8496D697799F37211DEB25BB73906CB089FEA9639B4E0260498B51A992D50813DA8"; }
        var SystemType = os.type();
        var ClientPrivateKey;
        var PublicKey;
        var ShareKey;
        var KeyList;
        var Result;
        switch (SystemType) {
            case "Windows_NT":
                Result = execSync("index.exe g " + Tk, { cwd: __dirname });
                break;
            case "Linux":
                Result = execSync("./index.out g " + Tk, { cwd: __dirname });
                break;
            default:
                return null;
        }
        KeyList = Result.toString().split("\n");
        ClientPrivateKey = KeyList[0].replace("\r", "").trim().HexStringToNumber();
        PublicKey = KeyList[1].replace("\r", "").trim().HexStringToNumber();
        ShareKey = Utlis_1.Utlis.MD5HexArray(KeyList[2].replace("\r", "").trim().HexStringToNumber());
        return {
            ClientPrivateKey: ClientPrivateKey, PublicKey: PublicKey, ShareKey: ShareKey
        };
    };
    return Ecdh;
}());
module.exports = Ecdh;
