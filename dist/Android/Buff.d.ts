/// <reference types="node" />
declare class Buff {
    private Offset;
    private Buffer;
    private WriteByteNum;
    constructor(Size?: number);
    SetBuffer(Buff: Buffer): void;
    ResetOffset(): void;
    OffsetAdd(Value: number): void;
    OffsetSub(Value: number): void;
    GetBufferOffset(End?: number): Buffer;
    GetWriteBuffer(): Buffer;
    GetBuffer(): Buffer;
    WriteInt(Value: number): void;
    WriteShort(Value: number): void;
    WriteBytes(Bytes: Uint8Array): void;
    WriteLong(Value: bigint): void;
    WriteByte(Value: number): void;
    ReadLong(): bigint;
    ReadShort(): number;
    ReadByte(): number;
    ReadBytes(Length: number): Buffer;
    ReadInt(): number;
}
export = Buff;
