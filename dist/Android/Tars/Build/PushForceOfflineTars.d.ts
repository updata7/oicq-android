import * as TarsStream from "@tars/stream";
export declare namespace PushForceOffline {
    class Pack {
        Uin: number;
        Title: string;
        Ttips: string;
        SameDevice: string;
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
            Title: string;
            Ttips: string;
            SameDevice: string;
        }
    }
}
