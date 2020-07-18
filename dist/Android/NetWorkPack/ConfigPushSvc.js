"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TarsRequesPack_1 = __importDefault(require("../Tars/TarsRequesPack"));
class ConfigPushSvc {
    static PushResp(ConfigPush) {
        let Req = new TarsRequesPack_1.default();
        Req.SetPackReqId(0);
        Req.SetPackVersion(3);
        Req.SetPackServantName("QQService.ConfigPushSvc.MainServant");
        Req.SetMapKey("PushResp");
        Req.SetPackFunc("PushResp");
        Req.SetStruct(ConfigPush);
        return Req.Generate();
    }
}
