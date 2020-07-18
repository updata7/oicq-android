declare global{
    interface EcdhKey {
        ClientPrivateKey: Array<number>,
        PublicKey: Array<number>,
        ShareKey: Array<number>
    }
}


export {}