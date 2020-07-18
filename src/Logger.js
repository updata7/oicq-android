"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var log4js_1 = require("log4js");
require("./Android/EventManage");
var CustomLogger = /** @class */ (function () {
    function CustomLogger(LoggerName, LogConfigure) {
        log4js_1["default"].configure(LogConfigure);
        this.Logger = log4js_1["default"].getLogger(LoggerName);
        this.Logger.level = "all";
    }
    CustomLogger.prototype.Warn = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.Logger).warn.apply(_a, __spreadArrays([""], args));
    };
    CustomLogger.prototype.Info = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.Logger).info.apply(_a, __spreadArrays([""], args));
    };
    CustomLogger.prototype.Error = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var Temp = Object.create(null);
        Error.captureStackTrace(Temp);
        (_a = this.Logger).error.apply(_a, __spreadArrays([""], args, [Temp.stack]));
    };
    return CustomLogger;
}());
module.exports = CustomLogger;
