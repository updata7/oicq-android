import * as $protobuf from "protobufjs";
/** Namespace Config. */
export namespace Config {

    /** Properties of a Struct. */
    interface IStruct {

        /** Struct Param */
        Param: number;

        /** Struct ConfigList */
        ConfigList?: (Config.IConfigList[]|null);
    }

    /** Represents a Struct. */
    class Struct implements IStruct {

        /**
         * Constructs a new Struct.
         * @param [properties] Properties to set
         */
        constructor(properties?: Config.IStruct);

        /** Struct Param. */
        public Param: number;

        /** Struct ConfigList. */
        public ConfigList: Config.IConfigList[];

        /**
         * Creates a new Struct instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Struct instance
         */
        public static create(properties?: Config.IStruct): Config.Struct;

        /**
         * Encodes the specified Struct message. Does not implicitly {@link Config.Struct.verify|verify} messages.
         * @param message Struct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Config.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Struct message, length delimited. Does not implicitly {@link Config.Struct.verify|verify} messages.
         * @param message Struct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Config.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Struct message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Struct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Config.Struct;

        /**
         * Decodes a Struct message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Struct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Config.Struct;

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
        public static fromObject(object: { [k: string]: any }): Config.Struct;

        /**
         * Creates a plain object from a Struct message. Also converts values to other types if specified.
         * @param message Struct
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Config.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Struct to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConfigList. */
    interface IConfigList {

        /** ConfigList Host */
        Host: string;

        /** ConfigList Port */
        Port: number;

        /** ConfigList Param */
        Param: number;
    }

    /** Represents a ConfigList. */
    class ConfigList implements IConfigList {

        /**
         * Constructs a new ConfigList.
         * @param [properties] Properties to set
         */
        constructor(properties?: Config.IConfigList);

        /** ConfigList Host. */
        public Host: string;

        /** ConfigList Port. */
        public Port: number;

        /** ConfigList Param. */
        public Param: number;

        /**
         * Creates a new ConfigList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfigList instance
         */
        public static create(properties?: Config.IConfigList): Config.ConfigList;

        /**
         * Encodes the specified ConfigList message. Does not implicitly {@link Config.ConfigList.verify|verify} messages.
         * @param message ConfigList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Config.IConfigList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfigList message, length delimited. Does not implicitly {@link Config.ConfigList.verify|verify} messages.
         * @param message ConfigList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Config.IConfigList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfigList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfigList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Config.ConfigList;

        /**
         * Decodes a ConfigList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfigList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Config.ConfigList;

        /**
         * Verifies a ConfigList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfigList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfigList
         */
        public static fromObject(object: { [k: string]: any }): Config.ConfigList;

        /**
         * Creates a plain object from a ConfigList message. Also converts values to other types if specified.
         * @param message ConfigList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Config.ConfigList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfigList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
