"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/***
 *事件管理器
 */
var Logger_1 = require("../Logger");
var System_1 = require("../System");
var Event = require('events');
var defaultLoggerConfig = {
    appenders: {
        out: {
            type: 'stdout', layout: {
                type: 'pattern',
                pattern: "%[ [%d{yyyy/MM/dd: hh:mm:ss}] [%p] [%c] %m %s %]"
            }
        }
    },
    categories: { "default": { appenders: ['out'], level: 'all', enableCallStack: false } }
};
var EventManage = /** @class */ (function () {
    function EventManage() {
        this.System = new System_1["default"]();
        this.Event = new Event.EventEmitter();
        this.Event.setMaxListeners(2);
        this.MessageHandleLogger = new Logger_1["default"]("MessageHandle", defaultLoggerConfig);
        this.SystemInfoLogger = new Logger_1["default"]("System", defaultLoggerConfig);
        this.QQBotEventLogger = new Logger_1["default"]("QQEvent", defaultLoggerConfig);
        this.NetLogger = new Logger_1["default"]("NetWork", defaultLoggerConfig);
    }
    EventManage.prototype.Trigger = function (EventName, Params) {
        this.Event.emit(EventName, Params);
    };
    EventManage.prototype.OnEvent = function (EventName, CallBack) {
        this.Event.removeAllListeners(EventName);
        this.Event.on(EventName, CallBack);
    };
    EventManage.prototype.RegisterOnceEvent = function (EventName, CallBack) {
        this.Event.once(EventName, CallBack);
    };
    EventManage.prototype.SetGlobalMemoryObserve = function (Sataus) {
        var _this = this;
        if (Sataus) {
            this.MemoryObserver = setInterval(function () {
                var MenoryInfo = _this.System.GetCurrentMenory();
                _this.SystemInfoLogger.Info("V8 user memory:", MenoryInfo.V8UserMemory, "V8 total memory", MenoryInfo.V8TotalMemory, "ArrayBuff use memory", MenoryInfo.ArrayBuffers);
            }, 60000);
        }
        else {
            clearInterval(this.MemoryObserver);
        }
    };
    __decorate([
        EventFormatLogOut
    ], EventManage.prototype, "Trigger");
    return EventManage;
}());
function EventFormatLogOut(Target, PropertyKey, Descriptor) {
    var OriginalMethod = Descriptor.value;
    Descriptor.value = function (EventName, Params) {
        //强转类实例
        var Quote = this;
        //根据事件名输出log
        switch (EventName) {
            case "SubmitCmd":
                Quote.MessageHandleLogger.Info('Send cmd:', Params.Cmd);
                break;
            case "Initialize":
                var CurrentMemory = Quote.System.GetCurrentMenory();
                var SystemInfo = Quote.System.GetSystemInfo();
                Quote.SystemInfoLogger.Info("NodeVersion:" + SystemInfo.NodeVersion, "Platform:" + SystemInfo.Platform, "SystemType:" + SystemInfo.SystemType, "CpuArch:" + SystemInfo.CpuArch, "SystemTotalMemory:" + SystemInfo.SystemTotalMemory + "MB");
                Quote.SystemInfoLogger.Info("V8 total memory " + CurrentMemory.V8TotalMemory, "V8 user memory:" + CurrentMemory.V8UserMemory, "ArrayBuff use memory:" + CurrentMemory.ArrayBuffers);
                break;
            case "CmdParser":
                Quote.MessageHandleLogger.Info("Recv cmd:", Params.Cmd);
                break;
            case "ConnectSuccess":
                Quote.NetLogger.Info(Params.Message);
                break;
            case "RequestSuccess":
                Quote.MessageHandleLogger.Info("Request finish cmd:", Params.Cmd);
                break;
            case "ServerPush":
                Quote.MessageHandleLogger.Info("Server push cmd:", Params.Cmd);
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
