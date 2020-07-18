const Os = require('os')
const V8 = require('v8')

interface ProcessMenoryStruct {
    Rss: number,
    V8TotalMemory: number,
    V8UserMemory: number,
    ArrayBuffers: number
}


const BytesToMb = (Bytes: number) => {
    return Math.floor(Bytes / 1024 / 1024)
}


class System {
    private SystemType: string
    private Platform: string
    private CpuArch: string
    private SystemTotalMemory: number //MB
    private HostName: string
    private NodeVersion: string

    constructor() {
        this.HostName = Os.hostname()
        this.CpuArch = Os.arch()
        this.Platform = Os.platform()
        this.SystemType = Os.type()
        this.SystemTotalMemory = BytesToMb(Os.totalmem())
        this.NodeVersion = process.version
    }

    public GetSystemInfo() {
        let {HostName, CpuArch, Platform, SystemType, SystemTotalMemory, NodeVersion} = this
        return {
            HostName, CpuArch, Platform, SystemType, SystemTotalMemory, NodeVersion
        }
    }

    public GetCurrentMenory(): ProcessMenoryStruct {
        let CurrentMenory: NodeJS.MemoryUsage = process.memoryUsage()
        return {
            Rss: BytesToMb(CurrentMenory.rss),
            V8TotalMemory: BytesToMb(CurrentMenory.heapTotal),
            V8UserMemory: BytesToMb(CurrentMenory.heapUsed),
            ArrayBuffers: BytesToMb(CurrentMenory.arrayBuffers)
        }
    }

    public GetHeapDump() {
        return V8.getHeapStatistics()
    }
}


export = System