import {OidbSvcPb} from "../Proto/Build/OidbSvc"
import Buff from "../Buff";

class OidbSvc {
    /***
     * 群成员禁言
     * @constructor
     * @param Time- 秒
     */
    public static Svc570_8(GroupCode: number, MemberUin: number, Time: number) {
        let Buf = new Buff(100)
        Buf.WriteInt(GroupCode)
        Buf.WriteByte(32)
        Buf.WriteShort(1)
        Buf.WriteInt(MemberUin)
        Buf.WriteInt(Time)

        let Struct = {
            Command: 1392,
            ServiceType: 8,
            Result: 0,
            BodyBuffer: "",
            ErrorMsg: '',
            ClientVersion: ''
        }

        let PbStruct = OidbSvcPb.OidbSvcPack.fromObject(Struct)

        PbStruct.BodyBuffer = Buf.GetWriteBuffer()

        let Pack = OidbSvcPb.OidbSvcPack.encode(PbStruct).finish()
        return Array.from(Pack)
    }

    /***
     * 全群禁言
     * @constructor
     * pb 太麻烦
     */
    public static Svc7E5_4(Type: boolean) {
        if (Type) {

        }
        let Pack = OidbSvcPb.OidbSvcPack.encode({
            Command: 22,
            BodyBuffer: null
        })
    }

}

export = OidbSvc