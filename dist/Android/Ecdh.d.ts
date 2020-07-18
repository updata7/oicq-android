import "../Interface/ECDH";
import '../Expansion';
import '../Utlis';
declare class Ecdh {
    static ExchangeKey(PublicKey: Array<number>, ClientPrivateKey: Array<number>, ServerPublicKey: Array<number>): Array<number> | null;
    static Generate(Tk?: string): EcdhKey | null;
}
export = Ecdh;
