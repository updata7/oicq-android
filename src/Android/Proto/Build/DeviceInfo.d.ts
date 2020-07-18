import * as $protobuf from "protobufjs";
/** Namespace DeviceInfo. */
export namespace DeviceInfo {

    /** Properties of a Struct. */
    interface IStruct {

        /** Struct Bootloader */
        Bootloader?: (Uint8Array|null);

        /** Struct ProcVersion */
        ProcVersion?: (Uint8Array|null);

        /** Struct Codename */
        Codename?: (Uint8Array|null);

        /** Struct Incremental */
        Incremental?: (Uint8Array|null);

        /** Struct Fingerprint */
        Fingerprint?: (Uint8Array|null);

        /** Struct BootId */
        BootId?: (Uint8Array|null);

        /** Struct AndroidId */
        AndroidId?: (Uint8Array|null);

        /** Struct BaseBand */
        BaseBand?: (Uint8Array|null);

        /** Struct InnerVersion */
        InnerVersion?: (Uint8Array|null);
    }

    /** Represents a Struct. */
    class Struct implements IStruct {

        /**
         * Constructs a new Struct.
         * @param [properties] Properties to set
         */
        constructor(properties?: DeviceInfo.IStruct);

        /** Struct Bootloader. */
        public Bootloader: Uint8Array;

        /** Struct ProcVersion. */
        public ProcVersion: Uint8Array;

        /** Struct Codename. */
        public Codename: Uint8Array;

        /** Struct Incremental. */
        public Incremental: Uint8Array;

        /** Struct Fingerprint. */
        public Fingerprint: Uint8Array;

        /** Struct BootId. */
        public BootId: Uint8Array;

        /** Struct AndroidId. */
        public AndroidId: Uint8Array;

        /** Struct BaseBand. */
        public BaseBand: Uint8Array;

        /** Struct InnerVersion. */
        public InnerVersion: Uint8Array;

        /**
         * Creates a new Struct instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Struct instance
         */
        public static create(properties?: DeviceInfo.IStruct): DeviceInfo.Struct;

        /**
         * Encodes the specified Struct message. Does not implicitly {@link DeviceInfo.Struct.verify|verify} messages.
         * @param message Struct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DeviceInfo.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Struct message, length delimited. Does not implicitly {@link DeviceInfo.Struct.verify|verify} messages.
         * @param message Struct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DeviceInfo.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Struct message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Struct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceInfo.Struct;

        /**
         * Decodes a Struct message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Struct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceInfo.Struct;

        /**
         * Verifies a Struct message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Struct message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Struct
         */
        public static fromObject(object: { [k: string]: any }): DeviceInfo.Struct;

        /**
         * Creates a plain object from a Struct message. Also converts values to other types if specified.
         * @param message Struct
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DeviceInfo.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Struct to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
