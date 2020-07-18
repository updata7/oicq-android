import Log4 from 'log4js';
import './Android/EventManage';
declare class CustomLogger {
    private Logger;
    constructor(LoggerName: string, LogConfigure: Log4.Configuration);
    Warn(...args: any[]): void;
    Trace(...args: any[]): void;
    Info(...args: any[]): void;
    Error(...args: any[]): void;
}
export = CustomLogger;
