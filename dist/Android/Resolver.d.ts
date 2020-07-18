/// <reference types="node" />
import '../Expansion';
import './Struct';
declare class Resolver {
    static HeartBeatParser(Pack: Buffer): number | boolean;
    static Parser(Pack: Buffer, Key?: Array<number>): RecvPack | null;
    static LoginSuccessParser(Pack: Array<number>, PublicKey: Array<number>, ShareKey: Array<number>, ClientPrivateKey: Array<number>, TGKey: Array<number>): LoginSuccessRet | null;
    static FriendMessageParser(): void;
    static GroupMessageParser(): void;
    static LoginPhoneVerifyParser(Pack: Array<number>, PublicKey: Array<number>, ShareKey: Array<number>, ClientPrivateKey: Array<number>): DeviceVerify | null;
    static LoginDeviceVerifyParser(Pack: Array<number>, PublicKey: Array<number>, ShareKey: Array<number>, ClientPrivateKey: Array<number>, TGKey: Array<number>): LoginScanVerify | null;
    static PushForceOfflineParser(Pack: Array<number>): void;
    static LoginVerifyCodeParser(Pack: Array<number>, PublicKey: Array<number>, ShareKey: Array<number>, ClientPrivateKey: Array<number>): LoginNotify | null;
    static LoginPackageParser(Pack: Buffer, PublicKey: Array<number>, ShareKey: Array<number>, ClientPrivateKey: Array<number>, TGKey: Array<number>): LoginNotify | null;
}
export = Resolver;
