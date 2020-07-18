import TarsRequestPack from "../Tars/TarsRequesPack"
import {ConfigPushSvcTars} from "../Tars/Build/ConfigPushSvcTars"

class ConfigPushSvc {
    public static PushResp(ConfigPush: ConfigPushSvcTars.PushReq) {

        let Req = new TarsRequestPack()
        Req.SetPackReqId(0)
        Req.SetPackVersion(3)
        Req.SetPackServantName("QQService.ConfigPushSvc.MainServant")
        Req.SetMapKey("PushResp")
        Req.SetPackFunc("PushResp")
        Req.SetStruct(
            ConfigPush
        )
        return Req.Generate()
    }
}