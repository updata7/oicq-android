"use strict";
const Os = require('os');
const V8 = require('v8');
const BytesToMb = (Bytes) => {
    return Math.floor(Bytes / 1024 / 1024);
};
class System {
    constructor() {
        this.HostName = Os.hostname();
        this.CpuArch = Os.arch();
        this.Platform = Os.platform();
        this.SystemType = Os.type();
        this.SystemTotalMemory = BytesToMb(Os.totalmem());
        this.NodeVersion = process.version;
    }
    GetSystemInfo() {
        let { HostName, CpuArch, Platform, SystemType, SystemTotalMemory, NodeVersion } = this;
        return {
            HostName, CpuArch, Platform, SystemType, SystemTotalMemory, NodeVersion
        };
    }
    GetCurrentMenory() {
        let CurrentMenory = process.memoryUsage();
        return {
            Rss: BytesToMb(CurrentMenory.rss),
            V8TotalMemory: BytesToMb(CurrentMenory.heapTotal),
            V8UserMemory: BytesToMb(CurrentMenory.heapUsed),
            ArrayBuffers: BytesToMb(CurrentMenory.arrayBuffers)
        };
    }
    GetHeapDump() {
        return V8.getHeapStatistics();
    }
}
module.exports = System;
