"use strict";
require("../Interface/ECDH");
require("../Expansion");
require("../Utlis");
const Utlis_1 = require("../Utlis");
const { execSync } = require('child_process');
const os = require('os');
class Ecdh {
    static ExchangeKey(PublicKey, ClientPrivateKey, ServerPublicKey) {
        let SystemType = os.type();
        var Result;
        var KeyList;
        let PublicKeyStr = PublicKey.HexNumberToString().StringArrayToString().replace(/ /g, "");
        let ClientPrivateKeyStr = ClientPrivateKey.HexNumberToString().StringArrayToString().replace(/ /g, "");
        let ServerPublicKeyStr = ServerPublicKey.HexNumberToString().StringArrayToString().replace(/ /g, "");
        switch (SystemType) {
            case "Windows_NT":
                Result = execSync(`index.exe e ${PublicKeyStr} ${ClientPrivateKeyStr} ${ServerPublicKeyStr}`, { cwd: __dirname });
                break;
            case "Linux":
                Result = execSync(`./index.out e ${PublicKeyStr} ${ClientPrivateKeyStr} ${ServerPublicKeyStr}`, { cwd: __dirname });
                break;
            default:
                return null;
        }
        KeyList = Result.toString().split("\n");
        let NewKey = KeyList[0].trim().replace("\r", "").HexStringToNumber();
        return Utlis_1.Utlis.MD5HexArray(NewKey);
    }
    static Generate(Tk = "04928D8850673088B343264E0C6BACB8496D697799F37211DEB25BB73906CB089FEA9639B4E0260498B51A992D50813DA8") {
        let SystemType = os.type();
        let ClientPrivateKey;
        let PublicKey;
        let ShareKey;
        let KeyList;
        let Result;
        switch (SystemType) {
            case "Windows_NT":
                Result = execSync(`index.exe g ${Tk}`, { cwd: __dirname });
                break;
            case "Linux":
                Result = execSync(`./index.out g ${Tk}`, { cwd: __dirname });
                break;
            default:
                return null;
        }
        KeyList = Result.toString().split("\n");
        ClientPrivateKey = KeyList[0].replace("\r", "").trim().HexStringToNumber();
        PublicKey = KeyList[1].replace("\r", "").trim().HexStringToNumber();
        ShareKey = Utlis_1.Utlis.MD5HexArray(KeyList[2].replace("\r", "").trim().HexStringToNumber());
        return {
            ClientPrivateKey, PublicKey, ShareKey
        };
    }
}
module.exports = Ecdh;
