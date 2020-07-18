import {Register} from "../Tars/Build/SvcRegisterTars";
import {Utlis} from "../../Utlis";
import Tars from "@tars/stream";
import TarsRequesPack from "../Tars/TarsRequesPack";

class SvcRegister {
    public static SetStatus(Type: boolean, QQ: number, Guid: Array<number>, AndroidVersion: string, Model: string): Array<number> {
        let GuidBuff = Buffer.from(Utlis.MD5HexArray(Utlis.MD5HexArray(Guid)))
        let SvcRegister = Register.Pack.new()
        SvcRegister.Uin = QQ
        SvcRegister.Guid = new Tars.BinBuffer(GuidBuff)
        if (Type) {
            SvcRegister.Bit = 7
            SvcRegister.Status = 11
        } else {
            SvcRegister.Bit = 0
            SvcRegister.Status = 21
        }
        SvcRegister.AndroidVersion = AndroidVersion
        SvcRegister.DevName = Model
        SvcRegister.DevType = Model
        SvcRegister.OsVersion = 22

        let RequestPack = new TarsRequesPack()
        RequestPack.SetMapKey("SvcReqRegister")
        RequestPack.SetStruct(SvcRegister)
        RequestPack.SetPackFunc("SvcReqRegister")
        RequestPack.SetPackServantName("PushService")
        return RequestPack.Generate()

    }
}

export = SvcRegister