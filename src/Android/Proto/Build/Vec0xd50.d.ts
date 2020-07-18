import * as $protobuf from "protobufjs";
/** Namespace Vec0xd50. */
export namespace Vec0xd50 {

    /** Properties of a ReqBody. */
    interface IReqBody {

        /** ReqBody Appid */
        Appid?: (number|Long|null);

        /** ReqBody MaxPkgSize */
        MaxPkgSize?: (number|null);

        /** ReqBody StartTime */
        StartTime?: (number|null);

        /** ReqBody StartIndex */
        StartIndex?: (number|null);

        /** ReqBody ReqNum */
        ReqNum?: (number|null);

        /** ReqBody UinList */
        UinList?: (number[]|null);

        /** ReqBody ReqMusicSwitch */
        ReqMusicSwitch?: (number|null);

        /** ReqBody ReqMutualmarkAlienation */
        ReqMutualmarkAlienation?: (number|null);

        /** ReqBody ReqMutualmarkScore */
        ReqMutualmarkScore?: (number|null);

        /** ReqBody ReqKsingSwitch */
        ReqKsingSwitch?: (number|null);

        /** ReqBody ReqMutualmarkLbsshare */
        ReqMutualmarkLbsshare?: (number|null);
    }

    /** Represents a ReqBody. */
    class ReqBody implements IReqBody {

        /**
         * Constructs a new ReqBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: Vec0xd50.IReqBody);

        /** ReqBody Appid. */
        public Appid: (number|Long);

        /** ReqBody MaxPkgSize. */
        public MaxPkgSize: number;

        /** ReqBody StartTime. */
        public StartTime: number;

        /** ReqBody StartIndex. */
        public StartIndex: number;

        /** ReqBody ReqNum. */
        public ReqNum: number;

        /** ReqBody UinList. */
        public UinList: number[];

        /** ReqBody ReqMusicSwitch. */
        public ReqMusicSwitch: number;

        /** ReqBody ReqMutualmarkAlienation. */
        public ReqMutualmarkAlienation: number;

        /** ReqBody ReqMutualmarkScore. */
        public ReqMutualmarkScore: number;

        /** ReqBody ReqKsingSwitch. */
        public ReqKsingSwitch: number;

        /** ReqBody ReqMutualmarkLbsshare. */
        public ReqMutualmarkLbsshare: number;

        /**
         * Creates a new ReqBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqBody instance
         */
        public static create(properties?: Vec0xd50.IReqBody): Vec0xd50.ReqBody;

        /**
         * Encodes the specified ReqBody message. Does not implicitly {@link Vec0xd50.ReqBody.verify|verify} messages.
         * @param message ReqBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Vec0xd50.IReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqBody message, length delimited. Does not implicitly {@link Vec0xd50.ReqBody.verify|verify} messages.
         * @param message ReqBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Vec0xd50.IReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Vec0xd50.ReqBody;

        /**
         * Decodes a ReqBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Vec0xd50.ReqBody;

        /**
         * Verifies a ReqBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqBody
         */
        public static fromObject(object: { [k: string]: any }): Vec0xd50.ReqBody;

        /**
         * Creates a plain object from a ReqBody message. Also converts values to other types if specified.
         * @param message ReqBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Vec0xd50.ReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
