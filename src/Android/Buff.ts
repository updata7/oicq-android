/***
 * js原有的数组太耗内存 用个自己定义的BUff类来进行操作
 * 元素类型: uint8
 * 大端序 统一BE
 */
const enum Type {
    Int = 4,
    Short = 2,
    Long = 8,
    Byte = 1
}

class Buff {

    private Offset: number = 0;
    private Buffer: Buffer | null = null;

    private WriteByteNum: number = 0;


    constructor(Size?: number) {
        if (Size) {
            this.Buffer = Buffer.alloc(Size)
        }
    }

    public SetBuffer(Buff: Buffer) {
        this.Buffer = Buff
    }

    public ResetOffset() {
        this.Offset = 0
    }

    public OffsetAdd(Value: number) {
        this.Offset += Value
    }

    public OffsetSub(Value: number) {
        this.Offset -= Value
    }

    /***
     * 取从游标往后的buff
     * @constructor
     */
    public GetBufferOffset(End?: number) {
        if (this.Buffer) {
            if (End) {
                return this.Buffer.slice(this.Offset, End)

            } else {
                return this.Buffer.slice(this.Offset)
            }
        }
        throw "Buffer null"
    }

    public GetWriteBuffer() {
        if (this.Buffer) {
            return this.Buffer.slice(0, this.WriteByteNum)
        }
        throw "Buffer null"
    }

    public GetBuffer(): Buffer {
        if (this.Buffer) {
            return this.Buffer
        }

        throw "Buffer null"
    }

    public WriteInt(Value: number) {
        if (this.Buffer) {
            this.Buffer.writeInt32BE(Value, this.Offset)
            this.Offset += Type.Int
            this.WriteByteNum += 4
            return
        }
        throw "Buffer null"
    }

    public WriteShort(Value: number) {
        if (this.Buffer) {
            this.Buffer.writeInt16BE(Value, this.Offset)
            this.Offset += Type.Short
            this.WriteByteNum += 2
            return
        }
        throw "Buffer null"
    }

    public WriteBytes(Bytes: Uint8Array) {
        if (this.Buffer) {
            this.Buffer.fill(Bytes, this.Offset, Bytes.length)
            this.Offset += Bytes.length
            this.WriteByteNum += Bytes.length
            return
        }
        throw "Buffer null"
    }

    public WriteLong(Value: bigint) {
        if (this.Buffer) {
            this.Buffer.writeBigInt64BE(Value, this.Offset)
            this.Offset += Type.Long
            this.WriteByteNum += 8
            return
        }
        throw "Buffer null"
    }

    public WriteByte(Value: number) {
        if (this.Buffer) {
            this.Buffer.writeInt8(Value, this.Offset)
            this.Offset += Type.Byte
            this.WriteByteNum += 1
            return
        }
        throw "Buffer null"
    }

    public ReadLong() {
        if (this.Buffer) {
            let Value: bigint = this.Buffer.readBigInt64BE(this.Offset)
            this.Offset += Type.Long
            return Value
        }
        throw "Buffer null"

    }

    public ReadShort() {
        if (this.Buffer) {
            let Value: number = this.Buffer.readInt16BE(this.Offset)
            this.Offset += Type.Short
            return Value
        }
        throw "Buffer null"
    }

    public ReadByte() {
        if (this.Buffer) {
            let Value: number = this.Buffer.readInt8(this.Offset)
            this.Offset += Type.Byte
            return Value
        }
        throw "Buffer null"
    }

    public ReadBytes(Length: number) {
        if (this.Buffer) {
            let Buff = this.Buffer.slice(this.Offset, this.Offset + Length)
            this.Offset += Length
            return Buff
        }
        throw "Buffer null"
    }

    public ReadInt() {
        if (this.Buffer) {
            let Value: number = this.Buffer.readInt32BE(this.Offset)
            this.Offset += Type.Int
            return Value
        }
        throw "Buffer null"

    }
}

export = Buff