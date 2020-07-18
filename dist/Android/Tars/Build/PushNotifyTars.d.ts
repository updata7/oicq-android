/// <reference types="node" />
import * as TarsStream from "@tars/stream";
export declare namespace PushNotify {
    class CPicInfo {
        Path: TarsStream.BinBuffer;
        Host: TarsStream.BinBuffer;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): CPicInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): CPicInfo.Object;
        readFromObject(json: CPicInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): CPicInfo;
        static create(is: TarsStream.TarsInputStream): CPicInfo;
    }
    namespace CPicInfo {
        interface Object {
            Path: Buffer;
            Host: Buffer;
        }
    }
    class ShareData {
        PkgName: string;
        MsgTail: string;
        PicUrl: string;
        Url: string;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): ShareData;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): ShareData.Object;
        readFromObject(json: ShareData.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): ShareData;
        static create(is: TarsStream.TarsInputStream): ShareData;
    }
    namespace ShareData {
        interface Object {
            PkgName: string;
            MsgTail: string;
            PicUrl: string;
            Url: string;
        }
    }
    class MsgInfo {
        FromUin: number;
        MsgTime: number;
        MsgType: number;
        MsgSeq: number;
        StrMsg: string;
        RealMsgTime: number;
        Msg: TarsStream.BinBuffer;
        AppShareID: number;
        MsgCookies: TarsStream.BinBuffer;
        AppShareCookie: TarsStream.BinBuffer;
        MsgUid: number;
        LastChangeTime: number;
        CPicInfo: TarsStream.List<PushNotify.CPicInfo>;
        ShareData: PushNotify.ShareData;
        FromInstId: number;
        RemarkOfSender: TarsStream.BinBuffer;
        FromMobile: string;
        FromName: string;
        NickName: TarsStream.List<string>;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): MsgInfo;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): MsgInfo.Object;
        readFromObject(json: MsgInfo.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): MsgInfo;
        static create(is: TarsStream.TarsInputStream): MsgInfo;
    }
    namespace MsgInfo {
        interface Object {
            FromUin: number;
            MsgTime: number;
            MsgType: number;
            MsgSeq: number;
            StrMsg: string;
            RealMsgTime: number;
            Msg: Buffer;
            AppShareID: number;
            MsgCookies: Buffer;
            AppShareCookie: Buffer;
            MsgUid: number;
            LastChangeTime: number;
            CPicInfo: Array<PushNotify.CPicInfo.Object>;
            ShareData: PushNotify.ShareData.Object;
            FromInstId: number;
            RemarkOfSender: Buffer;
            FromMobile: string;
            FromName: string;
            NickName: Array<string>;
        }
    }
    class Pack {
        Uin: number;
        CType: number;
        Service: string;
        Cmd: string;
        NotifyCookie: TarsStream.BinBuffer;
        MsgType: number;
        UserActive: number;
        GeneralFlag: number;
        BindedUin: number;
        MsgInfo: PushNotify.MsgInfo;
        MsgCtrlBuf: string;
        ServerBuf: TarsStream.BinBuffer;
        PingFlag: number;
        Svrip: number;
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
            CType: number;
            Service: string;
            Cmd: string;
            NotifyCookie: Buffer;
            MsgType: number;
            UserActive: number;
            GeneralFlag: number;
            BindedUin: number;
            MsgInfo: PushNotify.MsgInfo.Object;
            MsgCtrlBuf: string;
            ServerBuf: Buffer;
            PingFlag: number;
            Svrip: number;
        }
    }
    class Struct {
        Pack: PushNotify.Pack;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): Struct;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): Struct.Object;
        readFromObject(json: Struct.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): Struct;
        static create(is: TarsStream.TarsInputStream): Struct;
    }
    namespace Struct {
        interface Object {
            Pack: PushNotify.Pack.Object;
        }
    }
}
