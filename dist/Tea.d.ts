declare class Tea {
    private plain;
    private prePlain;
    private output;
    private crypt;
    private preCrypt;
    private pos;
    private padding;
    private key;
    private header;
    private contextStart;
    private Encrypt8Bytes;
    private GetUInt;
    private Encipher;
    private ToBytes;
    private Decipher;
    private Decrypt8Bytes;
    Decrypt(input: Array<number>, key: Array<number>): number[] | null;
    Encrypt(input: Array<number>, key: Array<number>): number[];
}
export = Tea;
