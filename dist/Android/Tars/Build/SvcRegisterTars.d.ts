/// <reference types="node" />
import * as TarsStream from "@tars/stream";
export declare namespace Register {
    class Pack {
        Uin: number;
        Bit: number;
        ConnType: number;
        Other: string;
        Status: number;
        OnlinePush: number;
        IsOnline: number;
        IsShowOnline: number;
        KikPc: number;
        KikWeak: number;
        TimeStamp: number;
        OsVersion: number;
        NetType: number;
        BuildVer: string;
        ReqType: number;
        Guid: TarsStream.BinBuffer;
        LocalId: number;
        SlienPush: number;
        DevName: string;
        DevType: string;
        AndroidVersion: string;
        OpePush: number;
        LargeSeq: number;
        LastWatchStartTime: number;
        OldSSOIp: number;
        NewSSOIp: number;
        CpId: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): Pack;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): Pack.Object;
        readFromObject(json: Pack.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): Pack;
        static create(is: TarsStream.TarsInputStream): Pack;
    }
    namespace Pack {
        interface Object {
            Uin: number;
            Bit: number;
            ConnType: number;
            Other: string;
            Status: number;
            OnlinePush: number;
            IsOnline: number;
            IsShowOnline: number;
            KikPc: number;
            KikWeak: number;
            TimeStamp: number;
            OsVersion: number;
            NetType: number;
            BuildVer: string;
            ReqType: number;
            Guid: Buffer;
            LocalId: number;
            SlienPush: number;
            DevName: string;
            DevType: string;
            AndroidVersion: string;
            OpePush: number;
            LargeSeq: number;
            LastWatchStartTime: number;
            OldSSOIp: number;
            NewSSOIp: number;
            CpId: number;
        }
    }
}
