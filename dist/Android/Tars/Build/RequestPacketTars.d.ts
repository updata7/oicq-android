/// <reference types="node" />
import * as TarsStream from "@tars/stream";
export declare namespace RequesPack {
    class Pack {
        Version: number;
        PacketType: number;
        MessageType: number;
        RequestId: number;
        ServantName: string;
        FuncName: string;
        Buffer: TarsStream.BinBuffer;
        Timeout: number;
        Context: TarsStream.Map<string, string>;
        Status: TarsStream.Map<string, string>;
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
            Version: number;
            PacketType?: number;
            MessageType?: number;
            RequestId: number;
            ServantName: string;
            FuncName: string;
            Buffer: Buffer;
            Timeout?: number;
            Context?: Record<string, string>;
            Status?: Record<string, string>;
        }
    }
}
