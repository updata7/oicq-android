/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Config = (function() {

    /**
     * Namespace Config.
     * @exports Config
     * @namespace
     */
    var Config = {};

    Config.Struct = (function() {

        /**
         * Properties of a Struct.
         * @memberof Config
         * @interface IStruct
         * @property {number} Param Struct Param
         * @property {Array.<Config.IConfigList>|null} [ConfigList] Struct ConfigList
         */

        /**
         * Constructs a new Struct.
         * @memberof Config
         * @classdesc Represents a Struct.
         * @implements IStruct
         * @constructor
         * @param {Config.IStruct=} [properties] Properties to set
         */
        function Struct(properties) {
            this.ConfigList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Struct Param.
         * @member {number} Param
         * @memberof Config.Struct
         * @instance
         */
        Struct.prototype.Param = 0;

        /**
         * Struct ConfigList.
         * @member {Array.<Config.IConfigList>} ConfigList
         * @memberof Config.Struct
         * @instance
         */
        Struct.prototype.ConfigList = $util.emptyArray;

        /**
         * Creates a new Struct instance using the specified properties.
         * @function create
         * @memberof Config.Struct
         * @static
         * @param {Config.IStruct=} [properties] Properties to set
         * @returns {Config.Struct} Struct instance
         */
        Struct.create = function create(properties) {
            return new Struct(properties);
        };

        /**
         * Encodes the specified Struct message. Does not implicitly {@link Config.Struct.verify|verify} messages.
         * @function encode
         * @memberof Config.Struct
         * @static
         * @param {Config.IStruct} message Struct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Struct.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Param);
            if (message.ConfigList != null && message.ConfigList.length)
                for (var i = 0; i < message.ConfigList.length; ++i)
                    $root.Config.ConfigList.encode(message.ConfigList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Struct message, length delimited. Does not implicitly {@link Config.Struct.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Config.Struct
         * @static
         * @param {Config.IStruct} message Struct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Struct.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Struct message from the specified reader or buffer.
         * @function decode
         * @memberof Config.Struct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Config.Struct} Struct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Struct.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Config.Struct();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Param = reader.int32();
                    break;
                case 2:
                    if (!(message.ConfigList && message.ConfigList.length))
                        message.ConfigList = [];
                    message.ConfigList.push($root.Config.ConfigList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Param"))
                throw $util.ProtocolError("missing required 'Param'", { instance: message });
            return message;
        };

        /**
         * Decodes a Struct message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Config.Struct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Config.Struct} Struct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Struct.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Struct message.
         * @function verify
         * @memberof Config.Struct
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Struct.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Param))
                return "Param: integer expected";
            if (message.ConfigList != null && message.hasOwnProperty("ConfigList")) {
                if (!Array.isArray(message.ConfigList))
                    return "ConfigList: array expected";
                for (var i = 0; i < message.ConfigList.length; ++i) {
                    var error = $root.Config.ConfigList.verify(message.ConfigList[i]);
                    if (error)
                        return "ConfigList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Struct message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Config.Struct
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Config.Struct} Struct
         */
        Struct.fromObject = function fromObject(object) {
            if (object instanceof $root.Config.Struct)
                return object;
            var message = new $root.Config.Struct();
            if (object.Param != null)
                message.Param = object.Param | 0;
            if (object.ConfigList) {
                if (!Array.isArray(object.ConfigList))
                    throw TypeError(".Config.Struct.ConfigList: array expected");
                message.ConfigList = [];
                for (var i = 0; i < object.ConfigList.length; ++i) {
                    if (typeof object.ConfigList[i] !== "object")
                        throw TypeError(".Config.Struct.ConfigList: object expected");
                    message.ConfigList[i] = $root.Config.ConfigList.fromObject(object.ConfigList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Struct message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Config.Struct
         * @static
         * @param {Config.Struct} message Struct
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Struct.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ConfigList = [];
            if (options.defaults)
                object.Param = 0;
            if (message.Param != null && message.hasOwnProperty("Param"))
                object.Param = message.Param;
            if (message.ConfigList && message.ConfigList.length) {
                object.ConfigList = [];
                for (var j = 0; j < message.ConfigList.length; ++j)
                    object.ConfigList[j] = $root.Config.ConfigList.toObject(message.ConfigList[j], options);
            }
            return object;
        };

        /**
         * Converts this Struct to JSON.
         * @function toJSON
         * @memberof Config.Struct
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Struct.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Struct;
    })();

    Config.ConfigList = (function() {

        /**
         * Properties of a ConfigList.
         * @memberof Config
         * @interface IConfigList
         * @property {string} Host ConfigList Host
         * @property {number} Port ConfigList Port
         * @property {number} Param ConfigList Param
         */

        /**
         * Constructs a new ConfigList.
         * @memberof Config
         * @classdesc Represents a ConfigList.
         * @implements IConfigList
         * @constructor
         * @param {Config.IConfigList=} [properties] Properties to set
         */
        function ConfigList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConfigList Host.
         * @member {string} Host
         * @memberof Config.ConfigList
         * @instance
         */
        ConfigList.prototype.Host = "";

        /**
         * ConfigList Port.
         * @member {number} Port
         * @memberof Config.ConfigList
         * @instance
         */
        ConfigList.prototype.Port = 0;

        /**
         * ConfigList Param.
         * @member {number} Param
         * @memberof Config.ConfigList
         * @instance
         */
        ConfigList.prototype.Param = 0;

        /**
         * Creates a new ConfigList instance using the specified properties.
         * @function create
         * @memberof Config.ConfigList
         * @static
         * @param {Config.IConfigList=} [properties] Properties to set
         * @returns {Config.ConfigList} ConfigList instance
         */
        ConfigList.create = function create(properties) {
            return new ConfigList(properties);
        };

        /**
         * Encodes the specified ConfigList message. Does not implicitly {@link Config.ConfigList.verify|verify} messages.
         * @function encode
         * @memberof Config.ConfigList
         * @static
         * @param {Config.IConfigList} message ConfigList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfigList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Host);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Port);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Param);
            return writer;
        };

        /**
         * Encodes the specified ConfigList message, length delimited. Does not implicitly {@link Config.ConfigList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Config.ConfigList
         * @static
         * @param {Config.IConfigList} message ConfigList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfigList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConfigList message from the specified reader or buffer.
         * @function decode
         * @memberof Config.ConfigList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Config.ConfigList} ConfigList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfigList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Config.ConfigList();
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
                    message.Param = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Host"))
                throw $util.ProtocolError("missing required 'Host'", { instance: message });
            if (!message.hasOwnProperty("Port"))
                throw $util.ProtocolError("missing required 'Port'", { instance: message });
            if (!message.hasOwnProperty("Param"))
                throw $util.ProtocolError("missing required 'Param'", { instance: message });
            return message;
        };

        /**
         * Decodes a ConfigList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Config.ConfigList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Config.ConfigList} ConfigList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfigList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConfigList message.
         * @function verify
         * @memberof Config.ConfigList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConfigList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Host))
                return "Host: string expected";
            if (!$util.isInteger(message.Port))
                return "Port: integer expected";
            if (!$util.isInteger(message.Param))
                return "Param: integer expected";
            return null;
        };

        /**
         * Creates a ConfigList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Config.ConfigList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Config.ConfigList} ConfigList
         */
        ConfigList.fromObject = function fromObject(object) {
            if (object instanceof $root.Config.ConfigList)
                return object;
            var message = new $root.Config.ConfigList();
            if (object.Host != null)
                message.Host = String(object.Host);
            if (object.Port != null)
                message.Port = object.Port | 0;
            if (object.Param != null)
                message.Param = object.Param | 0;
            return message;
        };

        /**
         * Creates a plain object from a ConfigList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Config.ConfigList
         * @static
         * @param {Config.ConfigList} message ConfigList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConfigList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Host = "";
                object.Port = 0;
                object.Param = 0;
            }
            if (message.Host != null && message.hasOwnProperty("Host"))
                object.Host = message.Host;
            if (message.Port != null && message.hasOwnProperty("Port"))
                object.Port = message.Port;
            if (message.Param != null && message.hasOwnProperty("Param"))
                object.Param = message.Param;
            return object;
        };

        /**
         * Converts this ConfigList to JSON.
         * @function toJSON
         * @memberof Config.ConfigList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConfigList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConfigList;
    })();

    return Config;
})();

module.exports = $root;
