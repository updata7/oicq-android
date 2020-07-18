import Log4 from 'log4js'
import './Android/EventManage'


class CustomLogger {


    private Logger;

    constructor(LoggerName: string, LogConfigure: Log4.Configuration) {
        Log4.configure(LogConfigure)
        this.Logger = Log4.getLogger(LoggerName)
        this.Logger.level = "all"
    }


    public Warn(...args: any[]) {
        this.Logger.warn("", ...args)
    }

    public Trace(...args: any[]) {
        this.Logger.trace("", ...args)
    }


    public Info(...args: any[]) {
        this.Logger.info("", ...args)
    }

    public Error(...args: any[]) {
        const Temp = Object.create(null);
        Error.captureStackTrace(Temp);
        this.Logger.error("", ...args, Temp.stack)
    }
}


export = CustomLogger




