import "../Interface/ECDH";
import '../Expansion'
import '../Utlis'
import {Utlis} from "../Utlis";

const {execSync} = require('child_process');
const os = require('os');


/***
 * 执行文件源码在c++文件夹
 */
class Ecdh {
    public static ExchangeKey(PublicKey: Array<number>, ClientPrivateKey: Array<number>, ServerPublicKey: Array<number>): Array<number> | null {
        let SystemType = os.type()
        var Result: Buffer
        var KeyList: Array<string>
        let PublicKeyStr = PublicKey.HexNumberToString().StringArrayToString().replace(/ /g, "")
        let ClientPrivateKeyStr = ClientPrivateKey.HexNumberToString().StringArrayToString().replace(/ /g, "")
        let ServerPublicKeyStr = ServerPublicKey.HexNumberToString().StringArrayToString().replace(/ /g, "")
        switch (SystemType) {
            case "Windows_NT":
                Result = execSync(`index.exe e ${PublicKeyStr} ${ClientPrivateKeyStr} ${ServerPublicKeyStr}`, {cwd: __dirname})
                break;
            case "Linux":
                Result = execSync(`./index.out e ${PublicKeyStr} ${ClientPrivateKeyStr} ${ServerPublicKeyStr}`, {cwd: __dirname})
                break;
            default:
                return null
        }
        KeyList = Result.toString().split("\n")
        let NewKey = KeyList[0].trim().replace("\r", "").HexStringToNumber()
        return Utlis.MD5HexArray(NewKey)
    }

    //version 8.3.0.4480
    //嫌麻烦就这样生成了
    static Generate(Tk: string = "04928D8850673088B343264E0C6BACB8496D697799F37211DEB25BB73906CB089FEA9639B4E0260498B51A992D50813DA8"): EcdhKey | null {
        let SystemType = os.type()
        let ClientPrivateKey: Array<number>
        let PublicKey: Array<number>
        let ShareKey: Array<number>
        let KeyList: Array<string>;
        let Result: Buffer;
        switch (SystemType) {
            case "Windows_NT":
                Result = execSync(`index.exe g ${Tk}`, {cwd: __dirname})
                break;
            case "Linux":
                Result = execSync(`./index.out g ${Tk}`, {cwd: __dirname})
                break;
            default:
                return null
        }

        KeyList = Result.toString().split("\n")
        ClientPrivateKey = KeyList[0].replace("\r", "").trim().HexStringToNumber()
        PublicKey = KeyList[1].replace("\r", "").trim().HexStringToNumber()
        ShareKey = Utlis.MD5HexArray(KeyList[2].replace("\r", "").trim().HexStringToNumber())

        return {
            ClientPrivateKey, PublicKey, ShareKey
        }
    }

}

export = Ecdh

