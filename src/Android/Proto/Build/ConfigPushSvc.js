/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ConfigPushSvcProto = (function() {

    /**
     * Namespace ConfigPushSvcProto.
     * @exports ConfigPushSvcProto
     * @namespace
     */
    var ConfigPushSvcProto = {};

    ConfigPushSvcProto.PushReq = (function() {

        /**
         * Properties of a PushReq.
         * @memberof ConfigPushSvcProto
         * @interface IPushReq
         */

        /**
         * Constructs a new PushReq.
         * @memberof ConfigPushSvcProto
         * @classdesc Represents a PushReq.
         * @implements IPushReq
         * @constructor
         * @param {ConfigPushSvcProto.IPushReq=} [properties] Properties to set
         */
        function PushReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PushReq instance using the specified properties.
         * @function create
         * @memberof ConfigPushSvcProto.PushReq
         * @static
         * @param {ConfigPushSvcProto.IPushReq=} [properties] Properties to set
         * @returns {ConfigPushSvcProto.PushReq} PushReq instance
         */
        PushReq.create = function create(properties) {
            return new PushReq(properties);
        };

        /**
         * Encodes the specified PushReq message. Does not implicitly {@link ConfigPushSvcProto.PushReq.verify|verify} messages.
         * @function encode
         * @memberof ConfigPushSvcProto.PushReq
         * @static
         * @param {ConfigPushSvcProto.IPushReq} message PushReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PushReq message, length delimited. Does not implicitly {@link ConfigPushSvcProto.PushReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ConfigPushSvcProto.PushReq
         * @static
         * @param {ConfigPushSvcProto.IPushReq} message PushReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushReq message from the specified reader or buffer.
         * @function decode
         * @memberof ConfigPushSvcProto.PushReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ConfigPushSvcProto.PushReq} PushReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConfigPushSvcProto.PushReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ConfigPushSvcProto.PushReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ConfigPushSvcProto.PushReq} PushReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushReq message.
         * @function verify
         * @memberof ConfigPushSvcProto.PushReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PushReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ConfigPushSvcProto.PushReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ConfigPushSvcProto.PushReq} PushReq
         */
        PushReq.fromObject = function fromObject(object) {
            if (object instanceof $root.ConfigPushSvcProto.PushReq)
                return object;
            return new $root.ConfigPushSvcProto.PushReq();
        };

        /**
         * Creates a plain object from a PushReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ConfigPushSvcProto.PushReq
         * @static
         * @param {ConfigPushSvcProto.PushReq} message PushReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PushReq to JSON.
         * @function toJSON
         * @memberof ConfigPushSvcProto.PushReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PushReq.ServerInfo = (function() {

            /**
             * Properties of a ServerInfo.
             * @memberof ConfigPushSvcProto.PushReq
             * @interface IServerInfo
             * @property {string|null} [Host] ServerInfo Host
             * @property {number|null} [Port] ServerInfo Port
             * @property {number|null} [Params] ServerInfo Params
             */

            /**
             * Constructs a new ServerInfo.
             * @memberof ConfigPushSvcProto.PushReq
             * @classdesc Represents a ServerInfo.
             * @implements IServerInfo
             * @constructor
             * @param {ConfigPushSvcProto.PushReq.IServerInfo=} [properties] Properties to set
             */
            function ServerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServerInfo Host.
             * @member {string} Host
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @instance
             */
            ServerInfo.prototype.Host = "";

            /**
             * ServerInfo Port.
             * @member {number} Port
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @instance
             */
            ServerInfo.prototype.Port = 0;

            /**
             * ServerInfo Params.
             * @member {number} Params
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @instance
             */
            ServerInfo.prototype.Params = 0;

            /**
             * Creates a new ServerInfo instance using the specified properties.
             * @function create
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @static
             * @param {ConfigPushSvcProto.PushReq.IServerInfo=} [properties] Properties to set
             * @returns {ConfigPushSvcProto.PushReq.ServerInfo} ServerInfo instance
             */
            ServerInfo.create = function create(properties) {
                return new ServerInfo(properties);
            };

            /**
             * Encodes the specified ServerInfo message. Does not implicitly {@link ConfigPushSvcProto.PushReq.ServerInfo.verify|verify} messages.
             * @function encode
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @static
             * @param {ConfigPushSvcProto.PushReq.IServerInfo} message ServerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Host != null && Object.hasOwnProperty.call(message, "Host"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Host);
                if (message.Port != null && Object.hasOwnProperty.call(message, "Port"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Port);
                if (message.Params != null && Object.hasOwnProperty.call(message, "Params"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Params);
                return writer;
            };

            /**
             * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link ConfigPushSvcProto.PushReq.ServerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @static
             * @param {ConfigPushSvcProto.PushReq.IServerInfo} message ServerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ConfigPushSvcProto.PushReq.ServerInfo} ServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConfigPushSvcProto.PushReq.ServerInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Host = reader.string();
                        break;
                    case 2:
                        message.Port = reader.int32();
                        break;
                    case 3:
                        message.Params = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ConfigPushSvcProto.PushReq.ServerInfo} ServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServerInfo message.
             * @function verify
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Host != null && message.hasOwnProperty("Host"))
                    if (!$util.isString(message.Host))
                        return "Host: string expected";
                if (message.Port != null && message.hasOwnProperty("Port"))
                    if (!$util.isInteger(message.Port))
                        return "Port: integer expected";
                if (message.Params != null && message.hasOwnProperty("Params"))
                    if (!$util.isInteger(message.Params))
                        return "Params: integer expected";
                return null;
            };

            /**
             * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ConfigPushSvcProto.PushReq.ServerInfo} ServerInfo
             */
            ServerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.ConfigPushSvcProto.PushReq.ServerInfo)
                    return object;
                var message = new $root.ConfigPushSvcProto.PushReq.ServerInfo();
                if (object.Host != null)
                    message.Host = String(object.Host);
                if (object.Port != null)
                    message.Port = object.Port | 0;
                if (object.Params != null)
                    message.Params = object.Params | 0;
                return message;
            };

            /**
             * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @static
             * @param {ConfigPushSvcProto.PushReq.ServerInfo} message ServerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Host = "";
                    object.Port = 0;
                    object.Params = 0;
                }
                if (message.Host != null && message.hasOwnProperty("Host"))
                    object.Host = message.Host;
                if (message.Port != null && message.hasOwnProperty("Port"))
                    object.Port = message.Port;
                if (message.Params != null && message.hasOwnProperty("Params"))
                    object.Params = message.Params;
                return object;
            };

            /**
             * Converts this ServerInfo to JSON.
             * @function toJSON
             * @memberof ConfigPushSvcProto.PushReq.ServerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServerInfo;
        })();

        PushReq.ChangeServer = (function() {

            /**
             * Properties of a ChangeServer.
             * @memberof ConfigPushSvcProto.PushReq
             * @interface IChangeServer
             * @property {number|null} [Param] ChangeServer Param
             * @property {ConfigPushSvcProto.PushReq.IServerInfo|null} [SereverList] ChangeServer SereverList
             */

            /**
             * Constructs a new ChangeServer.
             * @memberof ConfigPushSvcProto.PushReq
             * @classdesc Represents a ChangeServer.
             * @implements IChangeServer
             * @constructor
             * @param {ConfigPushSvcProto.PushReq.IChangeServer=} [properties] Properties to set
             */
            function ChangeServer(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChangeServer Param.
             * @member {number} Param
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @instance
             */
            ChangeServer.prototype.Param = 0;

            /**
             * ChangeServer SereverList.
             * @member {ConfigPushSvcProto.PushReq.IServerInfo|null|undefined} SereverList
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @instance
             */
            ChangeServer.prototype.SereverList = null;

            /**
             * Creates a new ChangeServer instance using the specified properties.
             * @function create
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @static
             * @param {ConfigPushSvcProto.PushReq.IChangeServer=} [properties] Properties to set
             * @returns {ConfigPushSvcProto.PushReq.ChangeServer} ChangeServer instance
             */
            ChangeServer.create = function create(properties) {
                return new ChangeServer(properties);
            };

            /**
             * Encodes the specified ChangeServer message. Does not implicitly {@link ConfigPushSvcProto.PushReq.ChangeServer.verify|verify} messages.
             * @function encode
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @static
             * @param {ConfigPushSvcProto.PushReq.IChangeServer} message ChangeServer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeServer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Param != null && Object.hasOwnProperty.call(message, "Param"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Param);
                if (message.SereverList != null && Object.hasOwnProperty.call(message, "SereverList"))
                    $root.ConfigPushSvcProto.PushReq.ServerInfo.encode(message.SereverList, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ChangeServer message, length delimited. Does not implicitly {@link ConfigPushSvcProto.PushReq.ChangeServer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @static
             * @param {ConfigPushSvcProto.PushReq.IChangeServer} message ChangeServer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeServer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChangeServer message from the specified reader or buffer.
             * @function decode
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ConfigPushSvcProto.PushReq.ChangeServer} ChangeServer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeServer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConfigPushSvcProto.PushReq.ChangeServer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Param = reader.int32();
                        break;
                    case 2:
                        message.SereverList = $root.ConfigPushSvcProto.PushReq.ServerInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChangeServer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ConfigPushSvcProto.PushReq.ChangeServer} ChangeServer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeServer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChangeServer message.
             * @function verify
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangeServer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Param != null && message.hasOwnProperty("Param"))
                    if (!$util.isInteger(message.Param))
                        return "Param: integer expected";
                if (message.SereverList != null && message.hasOwnProperty("SereverList")) {
                    var error = $root.ConfigPushSvcProto.PushReq.ServerInfo.verify(message.SereverList);
                    if (error)
                        return "SereverList." + error;
                }
                return null;
            };

            /**
             * Creates a ChangeServer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ConfigPushSvcProto.PushReq.ChangeServer} ChangeServer
             */
            ChangeServer.fromObject = function fromObject(object) {
                if (object instanceof $root.ConfigPushSvcProto.PushReq.ChangeServer)
                    return object;
                var message = new $root.ConfigPushSvcProto.PushReq.ChangeServer();
                if (object.Param != null)
                    message.Param = object.Param | 0;
                if (object.SereverList != null) {
                    if (typeof object.SereverList !== "object")
                        throw TypeError(".ConfigPushSvcProto.PushReq.ChangeServer.SereverList: object expected");
                    message.SereverList = $root.ConfigPushSvcProto.PushReq.ServerInfo.fromObject(object.SereverList);
                }
                return message;
            };

            /**
             * Creates a plain object from a ChangeServer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @static
             * @param {ConfigPushSvcProto.PushReq.ChangeServer} message ChangeServer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangeServer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Param = 0;
                    object.SereverList = null;
                }
                if (message.Param != null && message.hasOwnProperty("Param"))
                    object.Param = message.Param;
                if (message.SereverList != null && message.hasOwnProperty("SereverList"))
                    object.SereverList = $root.ConfigPushSvcProto.PushReq.ServerInfo.toObject(message.SereverList, options);
                return object;
            };

            /**
             * Converts this ChangeServer to JSON.
             * @function toJSON
             * @memberof ConfigPushSvcProto.PushReq.ChangeServer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangeServer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ChangeServer;
        })();

        return PushReq;
    })();

    return ConfigPushSvcProto;
})();

module.exports = $root;
