import * as $protobuf from "protobufjs";
/** Namespace ConfigPushSvcProto. */
export namespace ConfigPushSvcProto {

    /** Properties of a PushReq. */
    interface IPushReq {
    }

    /** Represents a PushReq. */
    class PushReq implements IPushReq {

        /**
         * Constructs a new PushReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: ConfigPushSvcProto.IPushReq);

        /**
         * Creates a new PushReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushReq instance
         */
        public static create(properties?: ConfigPushSvcProto.IPushReq): ConfigPushSvcProto.PushReq;

        /**
         * Encodes the specified PushReq message. Does not implicitly {@link ConfigPushSvcProto.PushReq.verify|verify} messages.
         * @param message PushReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ConfigPushSvcProto.IPushReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushReq message, length delimited. Does not implicitly {@link ConfigPushSvcProto.PushReq.verify|verify} messages.
         * @param message PushReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ConfigPushSvcProto.IPushReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConfigPushSvcProto.PushReq;

        /**
         * Decodes a PushReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConfigPushSvcProto.PushReq;

        /**
         * Verifies a PushReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushReq
         */
        public static fromObject(object: { [k: string]: any }): ConfigPushSvcProto.PushReq;

        /**
         * Creates a plain object from a PushReq message. Also converts values to other types if specified.
         * @param message PushReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ConfigPushSvcProto.PushReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PushReq {

        /** Properties of a ServerInfo. */
        interface IServerInfo {

            /** ServerInfo Host */
            Host?: (string|null);

            /** ServerInfo Port */
            Port?: (number|null);

            /** ServerInfo Params */
            Params?: (number|null);
        }

        /** Represents a ServerInfo. */
        class ServerInfo implements IServerInfo {

            /**
             * Constructs a new ServerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: ConfigPushSvcProto.PushReq.IServerInfo);

            /** ServerInfo Host. */
            public Host: string;

            /** ServerInfo Port. */
            public Port: number;

            /** ServerInfo Params. */
            public Params: number;

            /**
             * Creates a new ServerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerInfo instance
             */
            public static create(properties?: ConfigPushSvcProto.PushReq.IServerInfo): ConfigPushSvcProto.PushReq.ServerInfo;

            /**
             * Encodes the specified ServerInfo message. Does not implicitly {@link ConfigPushSvcProto.PushReq.ServerInfo.verify|verify} messages.
             * @param message ServerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ConfigPushSvcProto.PushReq.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link ConfigPushSvcProto.PushReq.ServerInfo.verify|verify} messages.
             * @param message ServerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ConfigPushSvcProto.PushReq.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConfigPushSvcProto.PushReq.ServerInfo;

            /**
             * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConfigPushSvcProto.PushReq.ServerInfo;

            /**
             * Verifies a ServerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServerInfo
             */
            public static fromObject(object: { [k: string]: any }): ConfigPushSvcProto.PushReq.ServerInfo;

            /**
             * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
             * @param message ServerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ConfigPushSvcProto.PushReq.ServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServerInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChangeServer. */
        interface IChangeServer {

            /** ChangeServer Param */
            Param?: (number|null);

            /** ChangeServer SereverList */
            SereverList?: (ConfigPushSvcProto.PushReq.IServerInfo|null);
        }

        /** Represents a ChangeServer. */
        class ChangeServer implements IChangeServer {

            /**
             * Constructs a new ChangeServer.
             * @param [properties] Properties to set
             */
            constructor(properties?: ConfigPushSvcProto.PushReq.IChangeServer);

            /** ChangeServer Param. */
            public Param: number;

            /** ChangeServer SereverList. */
            public SereverList?: (ConfigPushSvcProto.PushReq.IServerInfo|null);

            /**
             * Creates a new ChangeServer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChangeServer instance
             */
            public static create(properties?: ConfigPushSvcProto.PushReq.IChangeServer): ConfigPushSvcProto.PushReq.ChangeServer;

            /**
             * Encodes the specified ChangeServer message. Does not implicitly {@link ConfigPushSvcProto.PushReq.ChangeServer.verify|verify} messages.
             * @param message ChangeServer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ConfigPushSvcProto.PushReq.IChangeServer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChangeServer message, length delimited. Does not implicitly {@link ConfigPushSvcProto.PushReq.ChangeServer.verify|verify} messages.
             * @param message ChangeServer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ConfigPushSvcProto.PushReq.IChangeServer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChangeServer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChangeServer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConfigPushSvcProto.PushReq.ChangeServer;

            /**
             * Decodes a ChangeServer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChangeServer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConfigPushSvcProto.PushReq.ChangeServer;

            /**
             * Verifies a ChangeServer message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChangeServer message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChangeServer
             */
            public static fromObject(object: { [k: string]: any }): ConfigPushSvcProto.PushReq.ChangeServer;

            /**
             * Creates a plain object from a ChangeServer message. Also converts values to other types if specified.
             * @param message ChangeServer
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ConfigPushSvcProto.PushReq.ChangeServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChangeServer to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
