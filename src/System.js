"use strict";
var Os = require('os');
var V8 = require('v8');
var BytesToMb = function (Bytes) {
    return Math.floor(Bytes / 1024 / 1024);
};
var System = /** @class */ (function () {
    function System() {
        this.HostName = Os.hostname();
        this.CpuArch = Os.arch();
        this.Platform = Os.platform();
        this.SystemType = Os.type();
        this.SystemTotalMemory = BytesToMb(Os.totalmem());
        this.NodeVersion = process.version;
    }
    System.prototype.GetSystemInfo = function () {
        var _a = this, HostName = _a.HostName, CpuArch = _a.CpuArch, Platform = _a.Platform, SystemType = _a.SystemType, SystemTotalMemory = _a.SystemTotalMemory, NodeVersion = _a.NodeVersion;
        return {
            HostName: HostName, CpuArch: CpuArch, Platform: Platform, SystemType: SystemType, SystemTotalMemory: SystemTotalMemory, NodeVersion: NodeVersion
        };
    };
    System.prototype.GetCurrentMenory = function () {
        var CurrentMenory = process.memoryUsage();
        return {
            Rss: BytesToMb(CurrentMenory.rss),
            V8TotalMemory: BytesToMb(CurrentMenory.heapTotal),
            V8UserMemory: BytesToMb(CurrentMenory.heapUsed),
            ArrayBuffers: BytesToMb(CurrentMenory.arrayBuffers)
        };
    };
    System.prototype.GetHeapDump = function () {
        return V8.getHeapStatistics();
    };
    return System;
}());
module.exports = System;
