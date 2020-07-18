import "../Struct";
declare class Login {
    static PasswordLogin(ProtocolId: Array<number>, DeviceInfo: DeviceConfig, QQHex: Array<number>, QQBuff: Array<number>, PassWord: string, TgKey: Array<number>, Seq: Array<number>, ShareKey: Array<number>, PublicKey: Array<number>): number[];
    static KeyLogin(): void;
}
export = Login;
