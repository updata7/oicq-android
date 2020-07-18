"use strict";
var Buff = /** @class */ (function () {
    function Buff(Size) {
        this.Offset = 0;
        this.Buffer = null;
        this.WriteByteNum = 0;
        if (Size) {
            this.Buffer = Buffer.alloc(Size);
        }
    }
    Buff.prototype.SetBuffer = function (Buff) {
        this.Buffer = Buff;
    };
    Buff.prototype.ResetOffset = function () {
        this.Offset = 0;
    };
    Buff.prototype.OffsetAdd = function (Value) {
        this.Offset += Value;
    };
    Buff.prototype.OffsetSub = function (Value) {
        this.Offset -= Value;
    };
    /***
     * 取从游标往后的buff
     * @constructor
     */
    Buff.prototype.GetBufferOffset = function (End) {
        if (this.Buffer) {
            if (End) {
                return this.Buffer.slice(this.Offset, End);
            }
            else {
                return this.Buffer.slice(this.Offset);
            }
        }
        throw "Buffer null";
    };
    Buff.prototype.GetWriteBuffer = function () {
        if (this.Buffer) {
            return this.Buffer.slice(0, this.WriteByteNum);
        }
        throw "Buffer null";
    };
    Buff.prototype.GetBuffer = function () {
        if (this.Buffer) {
            return this.Buffer;
        }
        throw "Buffer null";
    };
    Buff.prototype.WriteInt = function (Value) {
        if (this.Buffer) {
            this.Buffer.writeInt32BE(Value, this.Offset);
            this.Offset += 4 /* Int */;
            this.WriteByteNum += 4;
            return;
        }
        throw "Buffer null";
    };
    Buff.prototype.WriteShort = function (Value) {
        if (this.Buffer) {
            this.Buffer.writeInt16BE(Value, this.Offset);
            this.Offset += 2 /* Short */;
            this.WriteByteNum += 2;
            return;
        }
        throw "Buffer null";
    };
    Buff.prototype.WriteBytes = function (Bytes) {
        if (this.Buffer) {
            this.Buffer.fill(Bytes, this.Offset, Bytes.length);
            this.Offset += Bytes.length;
            this.WriteByteNum += Bytes.length;
            return;
        }
        throw "Buffer null";
    };
    Buff.prototype.WriteLong = function (Value) {
        if (this.Buffer) {
            this.Buffer.writeBigInt64BE(Value, this.Offset);
            this.Offset += 8 /* Long */;
            this.WriteByteNum += 8;
            return;
        }
        throw "Buffer null";
    };
    Buff.prototype.WriteByte = function (Value) {
        if (this.Buffer) {
            this.Buffer.writeInt8(Value, this.Offset);
            this.Offset += 1 /* Byte */;
            this.WriteByteNum += 1;
            return;
        }
        throw "Buffer null";
    };
    Buff.prototype.ReadLong = function () {
        if (this.Buffer) {
            var Value = this.Buffer.readBigInt64BE(this.Offset);
            this.Offset += 8 /* Long */;
            return Value;
        }
        throw "Buffer null";
    };
    Buff.prototype.ReadShort = function () {
        if (this.Buffer) {
            var Value = this.Buffer.readInt16BE(this.Offset);
            this.Offset += 2 /* Short */;
            return Value;
        }
        throw "Buffer null";
    };
    Buff.prototype.ReadByte = function () {
        if (this.Buffer) {
            var Value = this.Buffer.readInt8(this.Offset);
            this.Offset += 1 /* Byte */;
            return Value;
        }
        throw "Buffer null";
    };
    Buff.prototype.ReadBytes = function (Length) {
        if (this.Buffer) {
            var Buff_1 = this.Buffer.slice(this.Offset, this.Offset + Length);
            this.Offset += Length;
            return Buff_1;
        }
        throw "Buffer null";
    };
    Buff.prototype.ReadInt = function () {
        if (this.Buffer) {
            var Value = this.Buffer.readInt32BE(this.Offset);
            this.Offset += 4 /* Int */;
            return Value;
        }
        throw "Buffer null";
    };
    return Buff;
}());
module.exports = Buff;
