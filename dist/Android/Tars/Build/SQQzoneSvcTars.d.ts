import * as TarsStream from "@tars/stream";
export declare namespace SQQZoneSvcTars {
    class QMF_PROTOCALmobile_get_config_req {
        IParam: number;
        BParam: number;
        Config: string;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): QMF_PROTOCALmobile_get_config_req;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): QMF_PROTOCALmobile_get_config_req.Object;
        readFromObject(json: QMF_PROTOCALmobile_get_config_req.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): QMF_PROTOCALmobile_get_config_req;
        static create(is: TarsStream.TarsInputStream): QMF_PROTOCALmobile_get_config_req;
    }
    namespace QMF_PROTOCALmobile_get_config_req {
        interface Object {
            IParam?: number;
            BParam?: number;
            Config?: string;
        }
    }
    class QMF_PROTOCALQmfBusiControl {
        Zero: number;
        IParam: number;
        Flag: boolean;
        protected _proto_struct_name_: string;
        protected _classname: string;
        protected static _classname: string;
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any): void;
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any): unknown;
        protected static _readFrom(is: TarsStream.TarsInputStream): QMF_PROTOCALQmfBusiControl;
        protected _writeTo(os: TarsStream.TarsOutputStream): void;
        protected _equal(): void;
        protected _genKey(): string;
        toObject(): QMF_PROTOCALQmfBusiControl.Object;
        readFromObject(json: QMF_PROTOCALQmfBusiControl.Object): this;
        toBinBuffer(): TarsStream.BinBuffer;
        static new(): QMF_PROTOCALQmfBusiControl;
        static create(is: TarsStream.TarsInputStream): QMF_PROTOCALQmfBusiControl;
    }
    namespace QMF_PROTOCALQmfBusiControl {
        interface Object {
            Zero?: number;
            IParam?: number;
            Flag?: boolean;
        }
    }
}
