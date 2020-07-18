"use strict";
class Buff {
    constructor(Size) {
        this.Offset = 0;
        this.Buffer = null;
        this.WriteByteNum = 0;
        if (Size) {
            this.Buffer = Buffer.alloc(Size);
        }
    }
    SetBuffer(Buff) {
        this.Buffer = Buff;
    }
    ResetOffset() {
        this.Offset = 0;
    }
    OffsetAdd(Value) {
        this.Offset += Value;
    }
    OffsetSub(Value) {
        this.Offset -= Value;
    }
    GetBufferOffset(End) {
        if (this.Buffer) {
            if (End) {
                return this.Buffer.slice(this.Offset, End);
            }
            else {
                return this.Buffer.slice(this.Offset);
            }
        }
        throw "Buffer null";
    }
    GetWriteBuffer() {
        if (this.Buffer) {
            return this.Buffer.slice(0, this.WriteByteNum);
        }
        throw "Buffer null";
    }
    GetBuffer() {
        if (this.Buffer) {
            return this.Buffer;
        }
        throw "Buffer null";
    }
    WriteInt(Value) {
        if (this.Buffer) {
            this.Buffer.writeInt32BE(Value, this.Offset);
            this.Offset += 4;
            this.WriteByteNum += 4;
            return;
        }
        throw "Buffer null";
    }
    WriteShort(Value) {
        if (this.Buffer) {
            this.Buffer.writeInt16BE(Value, this.Offset);
            this.Offset += 2;
            this.WriteByteNum += 2;
            return;
        }
        throw "Buffer null";
    }
    WriteBytes(Bytes) {
        if (this.Buffer) {
            this.Buffer.fill(Bytes, this.Offset, Bytes.length);
            this.Offset += Bytes.length;
            this.WriteByteNum += Bytes.length;
            return;
        }
        throw "Buffer null";
    }
    WriteLong(Value) {
        if (this.Buffer) {
            this.Buffer.writeBigInt64BE(Value, this.Offset);
            this.Offset += 8;
            this.WriteByteNum += 8;
            return;
        }
        throw "Buffer null";
    }
    WriteByte(Value) {
        if (this.Buffer) {
            this.Buffer.writeInt8(Value, this.Offset);
            this.Offset += 1;
            this.WriteByteNum += 1;
            return;
        }
        throw "Buffer null";
    }
    ReadLong() {
        if (this.Buffer) {
            let Value = this.Buffer.readBigInt64BE(this.Offset);
            this.Offset += 8;
            return Value;
        }
        throw "Buffer null";
    }
    ReadShort() {
        if (this.Buffer) {
            let Value = this.Buffer.readInt16BE(this.Offset);
            this.Offset += 2;
            return Value;
        }
        throw "Buffer null";
    }
    ReadByte() {
        if (this.Buffer) {
            let Value = this.Buffer.readInt8(this.Offset);
            this.Offset += 1;
            return Value;
        }
        throw "Buffer null";
    }
    ReadBytes(Length) {
        if (this.Buffer) {
            let Buff = this.Buffer.slice(this.Offset, this.Offset + Length);
            this.Offset += Length;
            return Buff;
        }
        throw "Buffer null";
    }
    ReadInt() {
        if (this.Buffer) {
            let Value = this.Buffer.readInt32BE(this.Offset);
            this.Offset += 4;
            return Value;
        }
        throw "Buffer null";
    }
}
module.exports = Buff;
