import CustomLogger from "../Logger";
import System from "../System";
declare class EventManage {
    private Event;
    private MemoryObserver;
    System: System;
    MessageHandleLogger: CustomLogger;
    SystemInfoLogger: CustomLogger;
    QQBotEventLogger: CustomLogger;
    NetLogger: CustomLogger;
    Trigger(EventName: string, Params: EventParmas): void;
    OnEvent(EventName: string, CallBack: EventCallBack): void;
    RegisterOnceEvent(EventName: string, CallBack: EventCallBack): void;
    SetGlobalMemoryObserve(Sataus: boolean): void;
    constructor();
}
export = EventManage;
