/// <reference types="node" />
import * as TarsStream from "@tars/stream";
export declare namespace ConfigPushSvcTars {
    class PushReq {
        Type: number;
        Buff: TarsStream.BinBuffer;
        Seq: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): PushReq;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): PushReq.Object;
        readFromObject(json: PushReq.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): PushReq;
        static create(is: TarsStream.TarsInputStream): PushReq;
    }
    namespace PushReq {
        interface Object {
            Type: number;
            Buff: Buffer;
            Seq: number;
        }
    }
    class FileStorageServerListInfo {
        Ip: string;
        Port: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): FileStorageServerListInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): FileStorageServerListInfo.Object;
        readFromObject(json: FileStorageServerListInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): FileStorageServerListInfo;
        static create(is: TarsStream.TarsInputStream): FileStorageServerListInfo;
    }
    namespace FileStorageServerListInfo {
        interface Object {
            Ip?: string;
            Port: number;
        }
    }
    class BigDataIpInfo {
        Type: number;
        Ip: string;
        Port: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): BigDataIpInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): BigDataIpInfo.Object;
        readFromObject(json: BigDataIpInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): BigDataIpInfo;
        static create(is: TarsStream.TarsInputStream): BigDataIpInfo;
    }
    namespace BigDataIpInfo {
        interface Object {
            Type?: number;
            Ip: string;
            Port: number;
        }
    }
    class NetSegConf {
        Uint32NetType: number;
        Uint32Segsize: number;
        Uint32Segnum: number;
        Uint32Curconnnum: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): NetSegConf;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): NetSegConf.Object;
        readFromObject(json: NetSegConf.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): NetSegConf;
        static create(is: TarsStream.TarsInputStream): NetSegConf;
    }
    namespace NetSegConf {
        interface Object {
            Uint32NetType?: number;
            Uint32Segsize?: number;
            Uint32Segnum?: number;
            Uint32Curconnnum?: number;
        }
    }
    class BigDataIpList {
        ServiceType: number;
        Iplist: TarsStream.List<ConfigPushSvcTars.BigDataIpInfo>;
        NetSegConfs: TarsStream.List<ConfigPushSvcTars.NetSegConf>;
        fragmentSize: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): BigDataIpList;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): BigDataIpList.Object;
        readFromObject(json: BigDataIpList.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): BigDataIpList;
        static create(is: TarsStream.TarsInputStream): BigDataIpList;
    }
    namespace BigDataIpList {
        interface Object {
            ServiceType?: number;
            Iplist?: Array<ConfigPushSvcTars.BigDataIpInfo.Object>;
            NetSegConfs?: Array<ConfigPushSvcTars.NetSegConf.Object>;
            fragmentSize?: number;
        }
    }
    class BigDataChannel {
        BigdataIplists: TarsStream.List<ConfigPushSvcTars.BigDataIpList>;
        BigdataSigSession: TarsStream.BinBuffer;
        BigdataKeySession: TarsStream.BinBuffer;
        SigUin: number;
        ConnectFlag: number;
        BigdataPbBuf: TarsStream.BinBuffer;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): BigDataChannel;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): BigDataChannel.Object;
        readFromObject(json: BigDataChannel.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): BigDataChannel;
        static create(is: TarsStream.TarsInputStream): BigDataChannel;
    }
    namespace BigDataChannel {
        interface Object {
            BigdataIplists?: Array<ConfigPushSvcTars.BigDataIpList.Object>;
            BigdataSigSession?: Buffer;
            BigdataKeySession?: Buffer;
            SigUin?: number;
            ConnectFlag?: number;
            BigdataPbBuf?: Buffer;
        }
    }
    class FmtIPInfo {
        GateIp: string;
        GateIpOper: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): FmtIPInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): FmtIPInfo.Object;
        readFromObject(json: FmtIPInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): FmtIPInfo;
        static create(is: TarsStream.TarsInputStream): FmtIPInfo;
    }
    namespace FmtIPInfo {
        interface Object {
            GateIp?: string;
            GateIpOper?: number;
        }
    }
    class DomainIpInfo {
        Ip: number;
        Port: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): DomainIpInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): DomainIpInfo.Object;
        readFromObject(json: DomainIpInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): DomainIpInfo;
        static create(is: TarsStream.TarsInputStream): DomainIpInfo;
    }
    namespace DomainIpInfo {
        interface Object {
            Ip?: number;
            Port: number;
        }
    }
    class DomainIpList {
        DomainType: number;
        IpList: TarsStream.List<ConfigPushSvcTars.DomainIpInfo>;
        Param: TarsStream.BinBuffer;
        Param2: number;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): DomainIpList;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): DomainIpList.Object;
        readFromObject(json: DomainIpList.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): DomainIpList;
        static create(is: TarsStream.TarsInputStream): DomainIpList;
    }
    namespace DomainIpList {
        interface Object {
            DomainType?: number;
            IpList?: Array<ConfigPushSvcTars.DomainIpInfo.Object>;
            Param?: Buffer;
            Param2?: number;
        }
    }
    class DomainIpChannel {
        DomainIplists: TarsStream.List<ConfigPushSvcTars.DomainIpList>;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): DomainIpChannel;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): DomainIpChannel.Object;
        readFromObject(json: DomainIpChannel.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): DomainIpChannel;
        static create(is: TarsStream.TarsInputStream): DomainIpChannel;
    }
    namespace DomainIpChannel {
        interface Object {
            DomainIplists?: Array<ConfigPushSvcTars.DomainIpList.Object>;
        }
    }
}
