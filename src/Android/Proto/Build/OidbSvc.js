/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.OidbSvcPb = (function() {

    /**
     * Namespace OidbSvcPb.
     * @exports OidbSvcPb
     * @namespace
     */
    var OidbSvcPb = {};

    OidbSvcPb.OidbSvcPack = (function() {

        /**
         * Properties of an OidbSvcPack.
         * @memberof OidbSvcPb
         * @interface IOidbSvcPack
         * @property {number|null} [Command] OidbSvcPack Command
         * @property {number|null} [ServiceType] OidbSvcPack ServiceType
         * @property {number|null} [Result] OidbSvcPack Result
         * @property {Uint8Array|null} [BodyBuffer] OidbSvcPack BodyBuffer
         * @property {string|null} [ErrorMsg] OidbSvcPack ErrorMsg
         * @property {string|null} [ClientVersion] OidbSvcPack ClientVersion
         */

        /**
         * Constructs a new OidbSvcPack.
         * @memberof OidbSvcPb
         * @classdesc Represents an OidbSvcPack.
         * @implements IOidbSvcPack
         * @constructor
         * @param {OidbSvcPb.IOidbSvcPack=} [properties] Properties to set
         */
        function OidbSvcPack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OidbSvcPack Command.
         * @member {number} Command
         * @memberof OidbSvcPb.OidbSvcPack
         * @instance
         */
        OidbSvcPack.prototype.Command = 0;

        /**
         * OidbSvcPack ServiceType.
         * @member {number} ServiceType
         * @memberof OidbSvcPb.OidbSvcPack
         * @instance
         */
        OidbSvcPack.prototype.ServiceType = 0;

        /**
         * OidbSvcPack Result.
         * @member {number} Result
         * @memberof OidbSvcPb.OidbSvcPack
         * @instance
         */
        OidbSvcPack.prototype.Result = 0;

        /**
         * OidbSvcPack BodyBuffer.
         * @member {Uint8Array} BodyBuffer
         * @memberof OidbSvcPb.OidbSvcPack
         * @instance
         */
        OidbSvcPack.prototype.BodyBuffer = $util.newBuffer([]);

        /**
         * OidbSvcPack ErrorMsg.
         * @member {string} ErrorMsg
         * @memberof OidbSvcPb.OidbSvcPack
         * @instance
         */
        OidbSvcPack.prototype.ErrorMsg = "";

        /**
         * OidbSvcPack ClientVersion.
         * @member {string} ClientVersion
         * @memberof OidbSvcPb.OidbSvcPack
         * @instance
         */
        OidbSvcPack.prototype.ClientVersion = "";

        /**
         * Creates a new OidbSvcPack instance using the specified properties.
         * @function create
         * @memberof OidbSvcPb.OidbSvcPack
         * @static
         * @param {OidbSvcPb.IOidbSvcPack=} [properties] Properties to set
         * @returns {OidbSvcPb.OidbSvcPack} OidbSvcPack instance
         */
        OidbSvcPack.create = function create(properties) {
            return new OidbSvcPack(properties);
        };

        /**
         * Encodes the specified OidbSvcPack message. Does not implicitly {@link OidbSvcPb.OidbSvcPack.verify|verify} messages.
         * @function encode
         * @memberof OidbSvcPb.OidbSvcPack
         * @static
         * @param {OidbSvcPb.IOidbSvcPack} message OidbSvcPack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OidbSvcPack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Command != null && Object.hasOwnProperty.call(message, "Command"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Command);
            if (message.ServiceType != null && Object.hasOwnProperty.call(message, "ServiceType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ServiceType);
            if (message.Result != null && Object.hasOwnProperty.call(message, "Result"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Result);
            if (message.BodyBuffer != null && Object.hasOwnProperty.call(message, "BodyBuffer"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.BodyBuffer);
            if (message.ErrorMsg != null && Object.hasOwnProperty.call(message, "ErrorMsg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ErrorMsg);
            if (message.ClientVersion != null && Object.hasOwnProperty.call(message, "ClientVersion"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ClientVersion);
            return writer;
        };

        /**
         * Encodes the specified OidbSvcPack message, length delimited. Does not implicitly {@link OidbSvcPb.OidbSvcPack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OidbSvcPb.OidbSvcPack
         * @static
         * @param {OidbSvcPb.IOidbSvcPack} message OidbSvcPack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OidbSvcPack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OidbSvcPack message from the specified reader or buffer.
         * @function decode
         * @memberof OidbSvcPb.OidbSvcPack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OidbSvcPb.OidbSvcPack} OidbSvcPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OidbSvcPack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OidbSvcPb.OidbSvcPack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Command = reader.int32();
                    break;
                case 2:
                    message.ServiceType = reader.int32();
                    break;
                case 3:
                    message.Result = reader.int32();
                    break;
                case 4:
                    message.BodyBuffer = reader.bytes();
                    break;
                case 5:
                    message.ErrorMsg = reader.string();
                    break;
                case 6:
                    message.ClientVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OidbSvcPack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OidbSvcPb.OidbSvcPack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OidbSvcPb.OidbSvcPack} OidbSvcPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OidbSvcPack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OidbSvcPack message.
         * @function verify
         * @memberof OidbSvcPb.OidbSvcPack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OidbSvcPack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Command != null && message.hasOwnProperty("Command"))
                if (!$util.isInteger(message.Command))
                    return "Command: integer expected";
            if (message.ServiceType != null && message.hasOwnProperty("ServiceType"))
                if (!$util.isInteger(message.ServiceType))
                    return "ServiceType: integer expected";
            if (message.Result != null && message.hasOwnProperty("Result"))
                if (!$util.isInteger(message.Result))
                    return "Result: integer expected";
            if (message.BodyBuffer != null && message.hasOwnProperty("BodyBuffer"))
                if (!(message.BodyBuffer && typeof message.BodyBuffer.length === "number" || $util.isString(message.BodyBuffer)))
                    return "BodyBuffer: buffer expected";
            if (message.ErrorMsg != null && message.hasOwnProperty("ErrorMsg"))
                if (!$util.isString(message.ErrorMsg))
                    return "ErrorMsg: string expected";
            if (message.ClientVersion != null && message.hasOwnProperty("ClientVersion"))
                if (!$util.isString(message.ClientVersion))
                    return "ClientVersion: string expected";
            return null;
        };

        /**
         * Creates an OidbSvcPack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OidbSvcPb.OidbSvcPack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OidbSvcPb.OidbSvcPack} OidbSvcPack
         */
        OidbSvcPack.fromObject = function fromObject(object) {
            if (object instanceof $root.OidbSvcPb.OidbSvcPack)
                return object;
            var message = new $root.OidbSvcPb.OidbSvcPack();
            if (object.Command != null)
                message.Command = object.Command | 0;
            if (object.ServiceType != null)
                message.ServiceType = object.ServiceType | 0;
            if (object.Result != null)
                message.Result = object.Result | 0;
            if (object.BodyBuffer != null)
                if (typeof object.BodyBuffer === "string")
                    $util.base64.decode(object.BodyBuffer, message.BodyBuffer = $util.newBuffer($util.base64.length(object.BodyBuffer)), 0);
                else if (object.BodyBuffer.length)
                    message.BodyBuffer = object.BodyBuffer;
            if (object.ErrorMsg != null)
                message.ErrorMsg = String(object.ErrorMsg);
            if (object.ClientVersion != null)
                message.ClientVersion = String(object.ClientVersion);
            return message;
        };

        /**
         * Creates a plain object from an OidbSvcPack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OidbSvcPb.OidbSvcPack
         * @static
         * @param {OidbSvcPb.OidbSvcPack} message OidbSvcPack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OidbSvcPack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Command = 0;
                object.ServiceType = 0;
                object.Result = 0;
                if (options.bytes === String)
                    object.BodyBuffer = "";
                else {
                    object.BodyBuffer = [];
                    if (options.bytes !== Array)
                        object.BodyBuffer = $util.newBuffer(object.BodyBuffer);
                }
                object.ErrorMsg = "";
                object.ClientVersion = "";
            }
            if (message.Command != null && message.hasOwnProperty("Command"))
                object.Command = message.Command;
            if (message.ServiceType != null && message.hasOwnProperty("ServiceType"))
                object.ServiceType = message.ServiceType;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            if (message.BodyBuffer != null && message.hasOwnProperty("BodyBuffer"))
                object.BodyBuffer = options.bytes === String ? $util.base64.encode(message.BodyBuffer, 0, message.BodyBuffer.length) : options.bytes === Array ? Array.prototype.slice.call(message.BodyBuffer) : message.BodyBuffer;
            if (message.ErrorMsg != null && message.hasOwnProperty("ErrorMsg"))
                object.ErrorMsg = message.ErrorMsg;
            if (message.ClientVersion != null && message.hasOwnProperty("ClientVersion"))
                object.ClientVersion = message.ClientVersion;
            return object;
        };

        /**
         * Converts this OidbSvcPack to JSON.
         * @function toJSON
         * @memberof OidbSvcPb.OidbSvcPack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OidbSvcPack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OidbSvcPack;
    })();

    return OidbSvcPb;
})();

module.exports = $root;
