"use strict";
const GetHexBuff = (Hex) => {
    let HexString = Hex.toString(16);
    if (HexString.length === 1) {
        return parseInt("0x" + HexString);
    }
    else {
        return parseInt(HexString.substr(-2), 16);
    }
};
class Tea {
    constructor() {
        this.plain = [];
        this.prePlain = [];
        this.output = [];
        this.crypt = 0;
        this.preCrypt = 0;
        this.pos = 0;
        this.padding = 0;
        this.key = [];
        this.header = true;
        this.contextStart = 0;
    }
    Encrypt8Bytes() {
        for (this.pos = 0; this.pos < 8; this.pos++) {
            if (this.header)
                this.plain[this.pos] ^= this.prePlain[this.pos];
            else
                this.plain[this.pos] ^= this.output[this.preCrypt + this.pos];
        }
        let crypted = this.Encipher(this.plain);
        if (crypted) {
            crypted.map((value, index) => {
                this.output[index + this.crypt] = value;
            });
        }
        for (this.pos = 0; this.pos < 8; this.pos++)
            this.output[this.crypt + this.pos] ^= this.prePlain[this.pos];
        this.plain.map((value, index) => {
            this.prePlain[0 + index] = value;
        });
        this.preCrypt = this.crypt;
        this.crypt += 8;
        this.pos = 0;
        this.header = false;
    }
    GetUInt(input, offset, len) {
        let ret = 0;
        let end = (len > 4) ? (offset + 4) : (offset + len);
        for (let i = offset; i < end; i++) {
            ret = (ret << 8) >>> 0;
            ret |= input[i];
        }
        return ret;
    }
    Encipher(input) {
        let loop = 0x10;
        let y = this.GetUInt(input, 0, 4) >>> 0;
        let z = this.GetUInt(input, 4, 4) >>> 0;
        let a = this.GetUInt(this.key, 0, 4) >>> 0;
        let b = this.GetUInt(this.key, 4, 4) >>> 0;
        let c = this.GetUInt(this.key, 8, 4) >>> 0;
        let d = this.GetUInt(this.key, 12, 4) >>> 0;
        let sum = 0;
        let delta = 0x9E3779B9;
        while (loop-- > 0) {
            sum = (sum + delta) >>> 0;
            let y_1 = ((z << 4 >>> 0) + a) >>> 0;
            let y_2 = (z + sum) >>> 0;
            let y_3 = (z >>> 5 >>> 0) + b;
            let reuslta = ((y_1 ^ y_2) >>> 0 ^ y_3) >>> 0;
            y = (y + reuslta) >>> 0;
            let z_1 = ((y << 4 >>> 0) + c) >>> 0;
            let z_2 = (y + sum) >>> 0;
            let z_3 = (y >>> 5 >>> 0) + d;
            let resulta2 = (((z_1 ^ z_2) >>> 0) ^ z_3) >>> 0;
            z = (z + resulta2) >>> 0;
        }
        return this.ToBytes(y, z);
    }
    ToBytes(a, b) {
        let bytes = new Array(8);
        bytes[0] = GetHexBuff((a >> 24) >>> 0);
        bytes[1] = GetHexBuff((a >> 16) >>> 0);
        bytes[2] = GetHexBuff((a >> 8) >>> 0);
        bytes[3] = GetHexBuff(a >>> 0);
        bytes[4] = GetHexBuff((b >> 24) >>> 0);
        bytes[5] = GetHexBuff((b >> 16) >>> 0);
        bytes[6] = GetHexBuff((b >> 8) >>> 0);
        bytes[7] = GetHexBuff(b >>> 0);
        return bytes;
    }
    Decipher(input, offset = 0) {
        if (this.key == null) {
            return [];
        }
        let loop = 0x10;
        let y = this.GetUInt(input, offset, 4) >>> 0;
        let z = this.GetUInt(input, offset + 4, 4) >>> 0;
        let a = this.GetUInt(this.key, 0, 4) >>> 0;
        let b = this.GetUInt(this.key, 4, 4) >>> 0;
        let c = this.GetUInt(this.key, 8, 4) >>> 0;
        let d = this.GetUInt(this.key, 12, 4) >>> 0;
        let sum = 0xE3779B90;
        let delta = 0x9E3779B9;
        while (loop-- > 0) {
            let z_1 = ((y << 4 >>> 0) + c) >>> 0;
            let z_2 = (y + sum) >>> 0;
            let z_3 = (y >>> 5 >>> 0) + d;
            let resulta2 = (((z_1 ^ z_2) >>> 0) ^ z_3) >>> 0;
            z = (z - resulta2) >>> 0;
            let y_1 = ((z << 4 >>> 0) + a) >>> 0;
            let y_2 = (z + sum) >>> 0;
            let y_3 = (z >>> 5 >>> 0) + b;
            let reuslta = ((y_1 ^ y_2) >>> 0 ^ y_3) >>> 0;
            y = (y - reuslta) >>> 0;
            sum = (sum - delta) >>> 0;
        }
        return this.ToBytes(y, z);
    }
    Decrypt8Bytes(input, offset = 0, len) {
        for (this.pos = 0; this.pos < 8; this.pos++) {
            if (this.contextStart + this.pos >= len)
                return true;
            this.prePlain[this.pos] ^= input[offset + this.crypt + this.pos];
        }
        let flag = this.Decipher(this.prePlain);
        if (flag) {
            this.prePlain = flag;
        }
        if (this.prePlain == null) {
            return false;
        }
        this.contextStart += 8;
        this.crypt += 8;
        this.pos = 0;
        return true;
    }
    Decrypt(input, key) {
        this.header = true;
        let len = input.length;
        this.key = key;
        let count;
        let offset = 0;
        let m = new Array(offset + 8);
        if ((len % 8 != 0) || (len < 16)) {
            return null;
        }
        this.prePlain = this.Decipher(input, offset);
        this.pos = this.prePlain[0] & 0x7;
        count = len - this.pos - 10;
        if (count < 0) {
            return null;
        }
        for (let i = offset; i < m.length; i++) {
            m[i] = 0;
        }
        this.output = new Array(count);
        this.preCrypt = 0;
        this.crypt = 8;
        this.contextStart = 8;
        this.pos++;
        this.padding = 1;
        while (this.padding <= 2) {
            if (this.pos < 8) {
                this.pos++;
                this.padding++;
            }
            if (this.pos == 8) {
                m = input;
                if (!this.Decrypt8Bytes(input, offset, len))
                    return null;
            }
        }
        let i2 = 0;
        while (count != 0) {
            if (this.pos < 8) {
                this.output[i2] = (m[offset + this.preCrypt + this.pos] ^ this.prePlain[this.pos]);
                i2++;
                count--;
                this.pos++;
            }
            if (this.pos == 8) {
                m = input;
                this.preCrypt = this.crypt - 8;
                if (!this.Decrypt8Bytes(input, offset, len)) {
                    return null;
                }
            }
        }
        for (this.padding = 1; this.padding < 8; this.padding++) {
            if (this.pos < 8) {
                if ((m[offset + this.preCrypt + this.pos] ^ this.prePlain[this.pos]) != 0) {
                    return null;
                }
                this.pos++;
            }
            if (this.pos == 8) {
                m = input;
                this.preCrypt = this.crypt;
                if (!this.Decrypt8Bytes(input, offset, len)) {
                    return null;
                }
            }
        }
        return this.output;
    }
    Encrypt(input, key) {
        let len = input.length;
        this.plain = new Array(8);
        this.prePlain = new Array(8);
        this.pos = 1;
        this.padding = 0;
        this.crypt, this.preCrypt = 0;
        this.key = key;
        this.header = true;
        this.pos = (len + 0x0a) % 8;
        if (this.pos != 0) {
            this.pos = 8 - this.pos;
        }
        this.output = new Array(len + this.pos + 10);
        let t1 = 0x7648354F;
        this.plain[0] = ((t1 & 0xF8) | this.pos);
        for (let i = 1; i <= this.pos; i++) {
            this.plain[i] = (t1 & 0xFF);
        }
        this.pos++;
        for (let i = 0; i < 8; i++) {
            this.prePlain[i] = 0x0;
        }
        this.padding = 1;
        while (this.padding <= 2) {
            if (this.pos < 8) {
                this.plain[this.pos++] = (t1 & 0xFF);
                this.padding++;
            }
            if (this.pos == 8)
                this.Encrypt8Bytes();
        }
        let i2 = 0;
        while (len > 0) {
            if (this.pos < 8) {
                this.plain[this.pos++] = input[i2++];
                len--;
            }
            if (this.pos == 8)
                this.Encrypt8Bytes();
        }
        this.padding = 1;
        while (this.padding <= 7) {
            if (this.pos < 8) {
                this.plain[this.pos++] = (0x0);
                this.padding++;
            }
            if (this.pos == 8)
                this.Encrypt8Bytes();
        }
        return this.output;
    }
}
module.exports = Tea;
