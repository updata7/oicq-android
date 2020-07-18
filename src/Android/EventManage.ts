/***
 *事件管理器
 */
import CustomLogger from "../Logger";
import System from "../System";

const Event = require('events')

let defaultLoggerConfig = {
    appenders: {
        out: {
            type: 'stdout', layout: {
                type: 'pattern',
                pattern: "%[ [%d{yyyy/MM/dd: hh:mm:ss}] [%p] [%c] %m %s %]",

            }
        }
    },
    categories: {default: {appenders: ['out'], level: 'all', enableCallStack: false}}
}

class EventManage {
    private Event;

    private MemoryObserver
    public System: System = new System()


    public MessageHandleLogger: CustomLogger;
    public SystemInfoLogger: CustomLogger;
    public QQBotEventLogger: CustomLogger;
    public NetLogger: CustomLogger;

    @EventFormatLogOut
    public Trigger(EventName: string, Params: EventParmas) {
        this.Event.emit(EventName, Params)
    }


    public OnEvent(EventName: string, CallBack: EventCallBack) {
        this.Event.removeAllListeners(EventName)
        this.Event.on(EventName, CallBack)
    }

    public RegisterOnceEvent(EventName: string, CallBack: EventCallBack) {
        this.Event.once(EventName, CallBack)
    }


    public SetGlobalMemoryObserve(Sataus: boolean) {
        if (Sataus) {
            this.MemoryObserver = setInterval(() => {
                let MenoryInfo = this.System.GetCurrentMenory()
                this.SystemInfoLogger.Info(
                    "V8 user memory:", MenoryInfo.V8UserMemory,
                    "V8 total memory", MenoryInfo.V8TotalMemory,
                    "ArrayBuff use memory", MenoryInfo.ArrayBuffers
                )
            }, 60000)
        } else {
            clearInterval(this.MemoryObserver)
        }
    }


    constructor() {
        this.Event = new Event.EventEmitter()
        this.Event.setMaxListeners(2)
        this.MessageHandleLogger = new CustomLogger("MessageHandle", defaultLoggerConfig)
        this.SystemInfoLogger = new CustomLogger("System", defaultLoggerConfig)
        this.QQBotEventLogger = new CustomLogger("QQEvent", defaultLoggerConfig)
        this.NetLogger = new CustomLogger("NetWork", defaultLoggerConfig)

    }

}

function EventFormatLogOut(Target: any, PropertyKey: string, Descriptor: PropertyDescriptor) {
    const OriginalMethod = Descriptor.value;
    Descriptor.value = function (EventName: string, Params: EventParmas) {
        //强转类实例
        let Quote = <EventManage>this
        //根据事件名输出log
        switch (EventName) {
            case "SubmitCmd":
                Quote.MessageHandleLogger.Trace('Send cmd:', Params.Cmd)
                break;
            case "Initialize":
                let CurrentMemory = Quote.System.GetCurrentMenory()
                let SystemInfo = Quote.System.GetSystemInfo()
                Quote.SystemInfoLogger.Info(`NodeVersion:${SystemInfo.NodeVersion}`, `Platform:${SystemInfo.Platform}`, `SystemType:${SystemInfo.SystemType}`, `CpuArch:${SystemInfo.CpuArch}`, `SystemTotalMemory:${SystemInfo.SystemTotalMemory}MB`)
                Quote.SystemInfoLogger.Info(`V8 total memory ${CurrentMemory.V8TotalMemory}`, `V8 user memory:${CurrentMemory.V8UserMemory}`, `ArrayBuff use memory:${CurrentMemory.ArrayBuffers}`)
                break
            case "CmdParser":
                Quote.MessageHandleLogger.Trace("Recv cmd:", Params.Cmd)
                break;
            case "ConnectSuccess":
                Quote.NetLogger.Trace(Params.Message)
                break;
            case "RequestSuccess":
                Quote.MessageHandleLogger.Info("Request finish cmd:", Params.Cmd)
                break;
            case "ServerPush":
                Quote.MessageHandleLogger.Trace("Server push cmd:", Params.Cmd)
                break;
            case "PbParserError":
                Quote.MessageHandleLogger.Error("Error cmd:", Params.Cmd, Params.Pack.toNodeBuffer().toJSON().data.HexNumberToString().StringArrayToString())
                break;
            case "TarsParserError":
                Quote.MessageHandleLogger.Error("Error cmd:", Params.Cmd, Params.Pack.toNodeBuffer().toJSON().data.HexNumberToString().StringArrayToString())
                break;
        }
        return OriginalMethod.call(this, EventName, Params)
    }
}


export = EventManage


