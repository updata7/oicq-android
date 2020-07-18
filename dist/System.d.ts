interface ProcessMenoryStruct {
    Rss: number;
    V8TotalMemory: number;
    V8UserMemory: number;
    ArrayBuffers: number;
}
declare class System {
    private SystemType;
    private Platform;
    private CpuArch;
    private SystemTotalMemory;
    private HostName;
    private NodeVersion;
    constructor();
    GetSystemInfo(): {
        HostName: string;
        CpuArch: string;
        Platform: string;
        SystemType: string;
        SystemTotalMemory: number;
        NodeVersion: string;
    };
    GetCurrentMenory(): ProcessMenoryStruct;
    GetHeapDump(): any;
}
export = System;
