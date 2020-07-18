import * as $protobuf from "protobufjs";
/** Namespace OidbSvcPb. */
export namespace OidbSvcPb {

    /** Properties of an OidbSvcPack. */
    interface IOidbSvcPack {

        /** OidbSvcPack Command */
        Command?: (number|null);

        /** OidbSvcPack ServiceType */
        ServiceType?: (number|null);

        /** OidbSvcPack Result */
        Result?: (number|null);

        /** OidbSvcPack BodyBuffer */
        BodyBuffer?: (Uint8Array|null);

        /** OidbSvcPack ErrorMsg */
        ErrorMsg?: (string|null);

        /** OidbSvcPack ClientVersion */
        ClientVersion?: (string|null);
    }

    /** Represents an OidbSvcPack. */
    class OidbSvcPack implements IOidbSvcPack {

        /**
         * Constructs a new OidbSvcPack.
         * @param [properties] Properties to set
         */
        constructor(properties?: OidbSvcPb.IOidbSvcPack);

        /** OidbSvcPack Command. */
        public Command: number;

        /** OidbSvcPack ServiceType. */
        public ServiceType: number;

        /** OidbSvcPack Result. */
        public Result: number;

        /** OidbSvcPack BodyBuffer. */
        public BodyBuffer: Uint8Array;

        /** OidbSvcPack ErrorMsg. */
        public ErrorMsg: string;

        /** OidbSvcPack ClientVersion. */
        public ClientVersion: string;

        /**
         * Creates a new OidbSvcPack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OidbSvcPack instance
         */
        public static create(properties?: OidbSvcPb.IOidbSvcPack): OidbSvcPb.OidbSvcPack;

        /**
         * Encodes the specified OidbSvcPack message. Does not implicitly {@link OidbSvcPb.OidbSvcPack.verify|verify} messages.
         * @param message OidbSvcPack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OidbSvcPb.IOidbSvcPack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OidbSvcPack message, length delimited. Does not implicitly {@link OidbSvcPb.OidbSvcPack.verify|verify} messages.
         * @param message OidbSvcPack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OidbSvcPb.IOidbSvcPack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OidbSvcPack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OidbSvcPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OidbSvcPb.OidbSvcPack;

        /**
         * Decodes an OidbSvcPack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OidbSvcPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OidbSvcPb.OidbSvcPack;

        /**
         * Verifies an OidbSvcPack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OidbSvcPack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OidbSvcPack
         */
        public static fromObject(object: { [k: string]: any }): OidbSvcPb.OidbSvcPack;

        /**
         * Creates a plain object from an OidbSvcPack message. Also converts values to other types if specified.
         * @param message OidbSvcPack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OidbSvcPb.OidbSvcPack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OidbSvcPack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
