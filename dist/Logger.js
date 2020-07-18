"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const log4js_1 = __importDefault(require("log4js"));
require("./Android/EventManage");
class CustomLogger {
    constructor(LoggerName, LogConfigure) {
        log4js_1.default.configure(LogConfigure);
        this.Logger = log4js_1.default.getLogger(LoggerName);
        this.Logger.level = "all";
    }
    Warn(...args) {
        this.Logger.warn("", ...args);
    }
    Trace(...args) {
        this.Logger.trace("", ...args);
    }
    Info(...args) {
        this.Logger.info("", ...args);
    }
    Error(...args) {
        const Temp = Object.create(null);
        Error.captureStackTrace(Temp);
        this.Logger.error("", ...args, Temp.stack);
    }
}
module.exports = CustomLogger;
