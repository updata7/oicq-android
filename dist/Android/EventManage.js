"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Logger_1 = __importDefault(require("../Logger"));
const System_1 = __importDefault(require("../System"));
const Event = require('events');
let defaultLoggerConfig = {
    appenders: {
        out: {
            type: 'stdout', layout: {
                type: 'pattern',
                pattern: "%[ [%d{yyyy/MM/dd: hh:mm:ss}] [%p] [%c] %m %s %]",
            }
        }
    },
    categories: { default: { appenders: ['out'], level: 'all', enableCallStack: false } }
};
class EventManage {
    constructor() {
        this.System = new System_1.default();
        this.Event = new Event.EventEmitter();
        this.Event.setMaxListeners(2);
        this.MessageHandleLogger = new Logger_1.default("MessageHandle", defaultLoggerConfig);
        this.SystemInfoLogger = new Logger_1.default("System", defaultLoggerConfig);
        this.QQBotEventLogger = new Logger_1.default("QQEvent", defaultLoggerConfig);
        this.NetLogger = new Logger_1.default("NetWork", defaultLoggerConfig);
    }
    Trigger(EventName, Params) {
        this.Event.emit(EventName, Params);
    }
    OnEvent(EventName, CallBack) {
        this.Event.removeAllListeners(EventName);
        this.Event.on(EventName, CallBack);
    }
    RegisterOnceEvent(EventName, CallBack) {
        this.Event.once(EventName, CallBack);
    }
    SetGlobalMemoryObserve(Sataus) {
        if (Sataus) {
            this.MemoryObserver = setInterval(() => {
                let MenoryInfo = this.System.GetCurrentMenory();
                this.SystemInfoLogger.Info("V8 user memory:", MenoryInfo.V8UserMemory, "V8 total memory", MenoryInfo.V8TotalMemory, "ArrayBuff use memory", MenoryInfo.ArrayBuffers);
            }, 60000);
        }
        else {
            clearInterval(this.MemoryObserver);
        }
    }
}
__decorate([
    EventFormatLogOut,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EventManage.prototype, "Trigger", null);
function EventFormatLogOut(Target, PropertyKey, Descriptor) {
    const OriginalMethod = Descriptor.value;
    Descriptor.value = function (EventName, Params) {
        let Quote = this;
        switch (EventName) {
            case "SubmitCmd":
                Quote.MessageHandleLogger.Trace('Send cmd:', Params.Cmd);
                break;
            case "Initialize":
                let CurrentMemory = Quote.System.GetCurrentMenory();
                let SystemInfo = Quote.System.GetSystemInfo();
                Quote.SystemInfoLogger.Info(`NodeVersion:${SystemInfo.NodeVersion}`, `Platform:${SystemInfo.Platform}`, `SystemType:${SystemInfo.SystemType}`, `CpuArch:${SystemInfo.CpuArch}`, `SystemTotalMemory:${SystemInfo.SystemTotalMemory}MB`);
                Quote.SystemInfoLogger.Info(`V8 total memory ${CurrentMemory.V8TotalMemory}`, `V8 user memory:${CurrentMemory.V8UserMemory}`, `ArrayBuff use memory:${CurrentMemory.ArrayBuffers}`);
                break;
            case "CmdParser":
                Quote.MessageHandleLogger.Trace("Recv cmd:", Params.Cmd);
                break;
            case "ConnectSuccess":
                Quote.NetLogger.Trace(Params.Message);
                break;
            case "RequestSuccess":
                Quote.MessageHandleLogger.Info("Request finish cmd:", Params.Cmd);
                break;
            case "ServerPush":
                Quote.MessageHandleLogger.Trace("Server push cmd:", Params.Cmd);
                break;
            case "PbParserError":
                Quote.MessageHandleLogger.Error("Error cmd:", Params.Cmd, Params.Pack.toNodeBuffer().toJSON().data.HexNumberToString().StringArrayToString());
                break;
            case "TarsParserError":
                Quote.MessageHandleLogger.Error("Error cmd:", Params.Cmd, Params.Pack.toNodeBuffer().toJSON().data.HexNumberToString().StringArrayToString());
                break;
        }
        return OriginalMethod.call(this, EventName, Params);
    };
}
module.exports = EventManage;
