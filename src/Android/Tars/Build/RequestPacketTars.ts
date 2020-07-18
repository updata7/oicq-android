// **********************************************************************
// Parsed By TarsParser(1.2.0), Generated By tars2node(20200315)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "RequestPacket.tars" by Structure Mode
// **********************************************************************

/* tslint:disable */
/* eslint-disable */

/// <reference types="node" />
import assert = require("assert");
import * as TarsStream from "@tars/stream";

const _hasOwnProperty = Object.prototype.hasOwnProperty;

export namespace RequesPack {
    export class Pack {
        Version: number = 3;
        PacketType: number = 0;
        MessageType: number = 0;
        RequestId: number = 0;
        ServantName: string = "";
        FuncName: string = "";
        Buffer: TarsStream.BinBuffer = new TarsStream.BinBuffer;
        Timeout: number = 0;
        Context: TarsStream.Map<string, string> = new TarsStream.Map(TarsStream.String, TarsStream.String);
        Status: TarsStream.Map<string, string> = new TarsStream.Map(TarsStream.String, TarsStream.String);

        protected _proto_struct_name_ = "";
        protected _classname = "RequesPack.Pack";
        protected static _classname = "RequesPack.Pack";
        protected static _write(os: TarsStream.TarsOutputStream, tag: number, val: any) { os.writeStruct(tag, val); }
        protected static _read(is: TarsStream.TarsInputStream, tag: number, def?: any) { return is.readStruct(tag, true, def); }
        protected static _readFrom(is: TarsStream.TarsInputStream) {
            const tmp = new Pack;
            tmp.Version = is.readInt16(1, true, 3);
            tmp.PacketType = is.readInt8(2, false, 0);
            tmp.MessageType = is.readInt32(3, false, 0);
            tmp.RequestId = is.readInt32(4, true, 0);
            tmp.ServantName = is.readString(5, true, "");
            tmp.FuncName = is.readString(6, true, "");
            tmp.Buffer = is.readBytes(7, true, TarsStream.BinBuffer);
            tmp.Timeout = is.readInt32(8, false, 0);
            tmp.Context = is.readMap(9, false, TarsStream.Map(TarsStream.String, TarsStream.String));
            tmp.Status = is.readMap(10, false, TarsStream.Map(TarsStream.String, TarsStream.String));
            return tmp;
        }

        protected _writeTo(os: TarsStream.TarsOutputStream) {
            os.writeInt16(1, this.Version);
            os.writeInt8(2, this.PacketType);
            os.writeInt32(3, this.MessageType);
            os.writeInt32(4, this.RequestId);
            os.writeString(5, this.ServantName);
            os.writeString(6, this.FuncName);
            os.writeBytes(7, this.Buffer);
            os.writeInt32(8, this.Timeout);
            os.writeMap(9, this.Context);
            os.writeMap(10, this.Status);
        }

        protected _equal() {
            assert.fail("this structure not define key operation");
        }

        protected _genKey() {
            if (!this._proto_struct_name_) {
                this._proto_struct_name_ = "STRUCT" + Math.random();
            }
            return this._proto_struct_name_;
        }

        toObject(): Pack.Object { 
            return {
                Version: this.Version,
                PacketType: this.PacketType,
                MessageType: this.MessageType,
                RequestId: this.RequestId,
                ServantName: this.ServantName,
                FuncName: this.FuncName,
                Buffer: this.Buffer.toObject(),
                Timeout: this.Timeout,
                Context: this.Context.toObject(),
                Status: this.Status.toObject()
            };
        }

        readFromObject(json: Pack.Object) { 
            _hasOwnProperty.call(json, "Version") && (this.Version = json.Version);
            _hasOwnProperty.call(json, "PacketType") && (this.PacketType = json.PacketType!);
            _hasOwnProperty.call(json, "MessageType") && (this.MessageType = json.MessageType!);
            _hasOwnProperty.call(json, "RequestId") && (this.RequestId = json.RequestId);
            _hasOwnProperty.call(json, "ServantName") && (this.ServantName = json.ServantName);
            _hasOwnProperty.call(json, "FuncName") && (this.FuncName = json.FuncName);
            _hasOwnProperty.call(json, "Buffer") && (this.Buffer.readFromObject(json.Buffer));
            _hasOwnProperty.call(json, "Timeout") && (this.Timeout = json.Timeout!);
            _hasOwnProperty.call(json, "Context") && (this.Context.readFromObject(json.Context!));
            _hasOwnProperty.call(json, "Status") && (this.Status.readFromObject(json.Status!));
            return this;
        }

        toBinBuffer() {
            const os = new TarsStream.TarsOutputStream();
            this._writeTo(os);
            return os.getBinBuffer();
        }

        static new() {
            return new Pack();
        }

        static create(is: TarsStream.TarsInputStream) {
            return RequesPack.Pack._readFrom(is);
        }
    }

    export namespace Pack {
        export interface Object {
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


