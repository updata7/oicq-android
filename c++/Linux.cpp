#include <openssl/ssl.h>
#include<string.h>
#include <ctype.h>
void disp(const void* pbuf, const int size)
{
    int i = 0;
    if (pbuf != NULL && size > 0) {
        for (i = 0; i < size; i++)
            printf("%02x ", *((unsigned char*)pbuf + i));
        putchar('\n');
    }
}


void HexStrToByte(const char* source, unsigned char* dest, int sourceLen)
{
    short i;
    unsigned char highByte, lowByte;

    for (i = 0; i < sourceLen; i += 2)
    {
        highByte = toupper(source[i]);
        lowByte = toupper(source[i + 1]);

        if (highByte > 0x39)
            highByte -= 0x37;
        else
            highByte -= 0x30;

        if (lowByte > 0x39)
            lowByte -= 0x37;
        else
            lowByte -= 0x30;

        dest[i / 2] = (highByte << 4) | lowByte;
    }
}



unsigned char* ExchangeKey(unsigned char* PublicKey, unsigned char* ClientPrivateKey, int ClientPrivateKeyLength, unsigned char* ServerPublicKey, int ServerPublicKeyLength) {

    EC_KEY* ECKey = EC_KEY_new();
    ECKey = EC_KEY_new_by_curve_name(711);

    BIGNUM* BigNum = BN_mpi2bn(ClientPrivateKey, ClientPrivateKeyLength, 0);
    EC_KEY_set_private_key(ECKey, BigNum);

    BN_free(BigNum);

    const EC_GROUP* Group = EC_KEY_get0_group(ECKey);
    EC_POINT* Point = EC_POINT_new(Group);
    unsigned char* P = PublicKey;
    EC_POINT_oct2point(Group, Point, ServerPublicKey, ServerPublicKeyLength, 0);

    ECDH_compute_key(P, 25, Point, ECKey, 0);

    EC_KEY_free(ECKey);
    return P;
}

struct ECDHKey
{
    unsigned char* PublicKey;
    unsigned char* ShareKey;
    unsigned char* ClientPrivateKey;
    int ClientPrivateKeyLength;
};

struct ECDHKey Generate(unsigned char* TK) {
    struct  ECDHKey T;
    const EC_GROUP* Group;
    const BIGNUM* BigNum;
    const EC_POINT* Point = NULL;
    EC_KEY* ECKey = EC_KEY_new();
    unsigned char TempKey[67];

    ECKey = EC_KEY_new_by_curve_name(711);

    EC_KEY_generate_key(ECKey);


    Group = EC_KEY_get0_group(ECKey);


    Point = EC_KEY_get0_public_key(ECKey);
    BigNum = EC_KEY_get0_private_key(ECKey);


    EC_POINT_point2oct(Group, Point, POINT_CONVERSION_COMPRESSED, TempKey, 67, 0);

    unsigned char TempKey2[255];
    int Len = BN_bn2mpi(BigNum, TempKey2);
    unsigned char* PublicKey = (unsigned char*)malloc(25);
    unsigned char* ShareKey = (unsigned char*)malloc(16);
    unsigned char* ClientPrivateKey = (unsigned char*)malloc(Len);


    EC_POINT_oct2point(Group, (EC_POINT*)Point, TK, 49, 0);

    unsigned char TempKey3[255];

    int Len2 = ECDH_compute_key(TempKey3, 512, Point, ECKey, 0);

    memcpy(ShareKey, TempKey3, Len2);
    memcpy(ClientPrivateKey, TempKey2, Len);
    memcpy(PublicKey, TempKey, 25);

    T.PublicKey = PublicKey;
    T.ShareKey = ShareKey;
    T.ClientPrivateKey = ClientPrivateKey;
    T.ClientPrivateKeyLength = Len;



    return T;
}



int main(int argc, char* argv[]) {
    if (argc > 1) {
        if ((argv[1][0] == 'g')) {
            unsigned char TK[49];
            HexStrToByte(argv[2], TK, 98);
            struct ECDHKey Key = Generate(TK);
            disp(Key.ClientPrivateKey, Key.ClientPrivateKeyLength);
            disp(Key.PublicKey, 25);
            disp(Key.ShareKey, 16);
            return 0;
        }
        if (argv[1][0] == 'e') {
            int ClientPrivateKeyLength = strlen(argv[3]) / 2;
            int ServerPublicKeyLength = strlen(argv[4]) / 2;

            unsigned char* ClientPrivateKey = (unsigned char*)malloc(sizeof(unsigned char) * ClientPrivateKeyLength);
            unsigned char* ServerPublicKey = (unsigned char*)malloc(sizeof(unsigned char) * ServerPublicKeyLength);

            unsigned char* PublicKey = (unsigned char*)malloc(sizeof(unsigned char) * 25);
            HexStrToByte(argv[2], PublicKey, 50);
            HexStrToByte(argv[3], ClientPrivateKey, strlen(argv[3]));
            HexStrToByte(argv[4], ServerPublicKey, strlen(argv[4]));
            unsigned char* NewShareKey = ExchangeKey(PublicKey, ClientPrivateKey, ClientPrivateKeyLength, ServerPublicKey, ServerPublicKeyLength);
            disp(NewShareKey, 24);

        }
        return 0;
    }




    return 0;

}
