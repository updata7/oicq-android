/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.DeviceInfo = (function() {

    /**
     * Namespace DeviceInfo.
     * @exports DeviceInfo
     * @namespace
     */
    var DeviceInfo = {};

    DeviceInfo.Struct = (function() {

        /**
         * Properties of a Struct.
         * @memberof DeviceInfo
         * @interface IStruct
         * @property {Uint8Array|null} [Bootloader] Struct Bootloader
         * @property {Uint8Array|null} [ProcVersion] Struct ProcVersion
         * @property {Uint8Array|null} [Codename] Struct Codename
         * @property {Uint8Array|null} [Incremental] Struct Incremental
         * @property {Uint8Array|null} [Fingerprint] Struct Fingerprint
         * @property {Uint8Array|null} [BootId] Struct BootId
         * @property {Uint8Array|null} [AndroidId] Struct AndroidId
         * @property {Uint8Array|null} [BaseBand] Struct BaseBand
         * @property {Uint8Array|null} [InnerVersion] Struct InnerVersion
         */

        /**
         * Constructs a new Struct.
         * @memberof DeviceInfo
         * @classdesc Represents a Struct.
         * @implements IStruct
         * @constructor
         * @param {DeviceInfo.IStruct=} [properties] Properties to set
         */
        function Struct(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Struct Bootloader.
         * @member {Uint8Array} Bootloader
         * @memberof DeviceInfo.Struct
         * @instance
         */
        Struct.prototype.Bootloader = $util.newBuffer([]);

        /**
         * Struct ProcVersion.
         * @member {Uint8Array} ProcVersion
         * @memberof DeviceInfo.Struct
         * @instance
         */
        Struct.prototype.ProcVersion = $util.newBuffer([]);

        /**
         * Struct Codename.
         * @member {Uint8Array} Codename
         * @memberof DeviceInfo.Struct
         * @instance
         */
        Struct.prototype.Codename = $util.newBuffer([]);

        /**
         * Struct Incremental.
         * @member {Uint8Array} Incremental
         * @memberof DeviceInfo.Struct
         * @instance
         */
        Struct.prototype.Incremental = $util.newBuffer([]);

        /**
         * Struct Fingerprint.
         * @member {Uint8Array} Fingerprint
         * @memberof DeviceInfo.Struct
         * @instance
         */
        Struct.prototype.Fingerprint = $util.newBuffer([]);

        /**
         * Struct BootId.
         * @member {Uint8Array} BootId
         * @memberof DeviceInfo.Struct
         * @instance
         */
        Struct.prototype.BootId = $util.newBuffer([]);

        /**
         * Struct AndroidId.
         * @member {Uint8Array} AndroidId
         * @memberof DeviceInfo.Struct
         * @instance
         */
        Struct.prototype.AndroidId = $util.newBuffer([]);

        /**
         * Struct BaseBand.
         * @member {Uint8Array} BaseBand
         * @memberof DeviceInfo.Struct
         * @instance
         */
        Struct.prototype.BaseBand = $util.newBuffer([]);

        /**
         * Struct InnerVersion.
         * @member {Uint8Array} InnerVersion
         * @memberof DeviceInfo.Struct
         * @instance
         */
        Struct.prototype.InnerVersion = $util.newBuffer([]);

        /**
         * Creates a new Struct instance using the specified properties.
         * @function create
         * @memberof DeviceInfo.Struct
         * @static
         * @param {DeviceInfo.IStruct=} [properties] Properties to set
         * @returns {DeviceInfo.Struct} Struct instance
         */
        Struct.create = function create(properties) {
            return new Struct(properties);
        };

        /**
         * Encodes the specified Struct message. Does not implicitly {@link DeviceInfo.Struct.verify|verify} messages.
         * @function encode
         * @memberof DeviceInfo.Struct
         * @static
         * @param {DeviceInfo.IStruct} message Struct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Struct.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Bootloader != null && Object.hasOwnProperty.call(message, "Bootloader"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Bootloader);
            if (message.ProcVersion != null && Object.hasOwnProperty.call(message, "ProcVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ProcVersion);
            if (message.Codename != null && Object.hasOwnProperty.call(message, "Codename"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Codename);
            if (message.Incremental != null && Object.hasOwnProperty.call(message, "Incremental"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.Incremental);
            if (message.Fingerprint != null && Object.hasOwnProperty.call(message, "Fingerprint"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.Fingerprint);
            if (message.BootId != null && Object.hasOwnProperty.call(message, "BootId"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.BootId);
            if (message.AndroidId != null && Object.hasOwnProperty.call(message, "AndroidId"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.AndroidId);
            if (message.BaseBand != null && Object.hasOwnProperty.call(message, "BaseBand"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.BaseBand);
            if (message.InnerVersion != null && Object.hasOwnProperty.call(message, "InnerVersion"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.InnerVersion);
            return writer;
        };

        /**
         * Encodes the specified Struct message, length delimited. Does not implicitly {@link DeviceInfo.Struct.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DeviceInfo.Struct
         * @static
         * @param {DeviceInfo.IStruct} message Struct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Struct.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Struct message from the specified reader or buffer.
         * @function decode
         * @memberof DeviceInfo.Struct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DeviceInfo.Struct} Struct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Struct.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceInfo.Struct();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Bootloader = reader.bytes();
                    break;
                case 2:
                    message.ProcVersion = reader.bytes();
                    break;
                case 3:
                    message.Codename = reader.bytes();
                    break;
                case 4:
                    message.Incremental = reader.bytes();
                    break;
                case 5:
                    message.Fingerprint = reader.bytes();
                    break;
                case 6:
                    message.BootId = reader.bytes();
                    break;
                case 7:
                    message.AndroidId = reader.bytes();
                    break;
                case 8:
                    message.BaseBand = reader.bytes();
                    break;
                case 9:
                    message.InnerVersion = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Struct message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DeviceInfo.Struct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DeviceInfo.Struct} Struct
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
         * @memberof DeviceInfo.Struct
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Struct.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Bootloader != null && message.hasOwnProperty("Bootloader"))
                if (!(message.Bootloader && typeof message.Bootloader.length === "number" || $util.isString(message.Bootloader)))
                    return "Bootloader: buffer expected";
            if (message.ProcVersion != null && message.hasOwnProperty("ProcVersion"))
                if (!(message.ProcVersion && typeof message.ProcVersion.length === "number" || $util.isString(message.ProcVersion)))
                    return "ProcVersion: buffer expected";
            if (message.Codename != null && message.hasOwnProperty("Codename"))
                if (!(message.Codename && typeof message.Codename.length === "number" || $util.isString(message.Codename)))
                    return "Codename: buffer expected";
            if (message.Incremental != null && message.hasOwnProperty("Incremental"))
                if (!(message.Incremental && typeof message.Incremental.length === "number" || $util.isString(message.Incremental)))
                    return "Incremental: buffer expected";
            if (message.Fingerprint != null && message.hasOwnProperty("Fingerprint"))
                if (!(message.Fingerprint && typeof message.Fingerprint.length === "number" || $util.isString(message.Fingerprint)))
                    return "Fingerprint: buffer expected";
            if (message.BootId != null && message.hasOwnProperty("BootId"))
                if (!(message.BootId && typeof message.BootId.length === "number" || $util.isString(message.BootId)))
                    return "BootId: buffer expected";
            if (message.AndroidId != null && message.hasOwnProperty("AndroidId"))
                if (!(message.AndroidId && typeof message.AndroidId.length === "number" || $util.isString(message.AndroidId)))
                    return "AndroidId: buffer expected";
            if (message.BaseBand != null && message.hasOwnProperty("BaseBand"))
                if (!(message.BaseBand && typeof message.BaseBand.length === "number" || $util.isString(message.BaseBand)))
                    return "BaseBand: buffer expected";
            if (message.InnerVersion != null && message.hasOwnProperty("InnerVersion"))
                if (!(message.InnerVersion && typeof message.InnerVersion.length === "number" || $util.isString(message.InnerVersion)))
                    return "InnerVersion: buffer expected";
            return null;
        };

        /**
         * Creates a Struct message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DeviceInfo.Struct
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DeviceInfo.Struct} Struct
         */
        Struct.fromObject = function fromObject(object) {
            if (object instanceof $root.DeviceInfo.Struct)
                return object;
            var message = new $root.DeviceInfo.Struct();
            if (object.Bootloader != null)
                if (typeof object.Bootloader === "string")
                    $util.base64.decode(object.Bootloader, message.Bootloader = $util.newBuffer($util.base64.length(object.Bootloader)), 0);
                else if (object.Bootloader.length)
                    message.Bootloader = object.Bootloader;
            if (object.ProcVersion != null)
                if (typeof object.ProcVersion === "string")
                    $util.base64.decode(object.ProcVersion, message.ProcVersion = $util.newBuffer($util.base64.length(object.ProcVersion)), 0);
                else if (object.ProcVersion.length)
                    message.ProcVersion = object.ProcVersion;
            if (object.Codename != null)
                if (typeof object.Codename === "string")
                    $util.base64.decode(object.Codename, message.Codename = $util.newBuffer($util.base64.length(object.Codename)), 0);
                else if (object.Codename.length)
                    message.Codename = object.Codename;
            if (object.Incremental != null)
                if (typeof object.Incremental === "string")
                    $util.base64.decode(object.Incremental, message.Incremental = $util.newBuffer($util.base64.length(object.Incremental)), 0);
                else if (object.Incremental.length)
                    message.Incremental = object.Incremental;
            if (object.Fingerprint != null)
                if (typeof object.Fingerprint === "string")
                    $util.base64.decode(object.Fingerprint, message.Fingerprint = $util.newBuffer($util.base64.length(object.Fingerprint)), 0);
                else if (object.Fingerprint.length)
                    message.Fingerprint = object.Fingerprint;
            if (object.BootId != null)
                if (typeof object.BootId === "string")
                    $util.base64.decode(object.BootId, message.BootId = $util.newBuffer($util.base64.length(object.BootId)), 0);
                else if (object.BootId.length)
                    message.BootId = object.BootId;
            if (object.AndroidId != null)
                if (typeof object.AndroidId === "string")
                    $util.base64.decode(object.AndroidId, message.AndroidId = $util.newBuffer($util.base64.length(object.AndroidId)), 0);
                else if (object.AndroidId.length)
                    message.AndroidId = object.AndroidId;
            if (object.BaseBand != null)
                if (typeof object.BaseBand === "string")
                    $util.base64.decode(object.BaseBand, message.BaseBand = $util.newBuffer($util.base64.length(object.BaseBand)), 0);
                else if (object.BaseBand.length)
                    message.BaseBand = object.BaseBand;
            if (object.InnerVersion != null)
                if (typeof object.InnerVersion === "string")
                    $util.base64.decode(object.InnerVersion, message.InnerVersion = $util.newBuffer($util.base64.length(object.InnerVersion)), 0);
                else if (object.InnerVersion.length)
                    message.InnerVersion = object.InnerVersion;
            return message;
        };

        /**
         * Creates a plain object from a Struct message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DeviceInfo.Struct
         * @static
         * @param {DeviceInfo.Struct} message Struct
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Struct.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.Bootloader = "";
                else {
                    object.Bootloader = [];
                    if (options.bytes !== Array)
                        object.Bootloader = $util.newBuffer(object.Bootloader);
                }
                if (options.bytes === String)
                    object.ProcVersion = "";
                else {
                    object.ProcVersion = [];
                    if (options.bytes !== Array)
                        object.ProcVersion = $util.newBuffer(object.ProcVersion);
                }
                if (options.bytes === String)
                    object.Codename = "";
                else {
                    object.Codename = [];
                    if (options.bytes !== Array)
                        object.Codename = $util.newBuffer(object.Codename);
                }
                if (options.bytes === String)
                    object.Incremental = "";
                else {
                    object.Incremental = [];
                    if (options.bytes !== Array)
                        object.Incremental = $util.newBuffer(object.Incremental);
                }
                if (options.bytes === String)
                    object.Fingerprint = "";
                else {
                    object.Fingerprint = [];
                    if (options.bytes !== Array)
                        object.Fingerprint = $util.newBuffer(object.Fingerprint);
                }
                if (options.bytes === String)
                    object.BootId = "";
                else {
                    object.BootId = [];
                    if (options.bytes !== Array)
                        object.BootId = $util.newBuffer(object.BootId);
                }
                if (options.bytes === String)
                    object.AndroidId = "";
                else {
                    object.AndroidId = [];
                    if (options.bytes !== Array)
                        object.AndroidId = $util.newBuffer(object.AndroidId);
                }
                if (options.bytes === String)
                    object.BaseBand = "";
                else {
                    object.BaseBand = [];
                    if (options.bytes !== Array)
                        object.BaseBand = $util.newBuffer(object.BaseBand);
                }
                if (options.bytes === String)
                    object.InnerVersion = "";
                else {
                    object.InnerVersion = [];
                    if (options.bytes !== Array)
                        object.InnerVersion = $util.newBuffer(object.InnerVersion);
                }
            }
            if (message.Bootloader != null && message.hasOwnProperty("Bootloader"))
                object.Bootloader = options.bytes === String ? $util.base64.encode(message.Bootloader, 0, message.Bootloader.length) : options.bytes === Array ? Array.prototype.slice.call(message.Bootloader) : message.Bootloader;
            if (message.ProcVersion != null && message.hasOwnProperty("ProcVersion"))
                object.ProcVersion = options.bytes === String ? $util.base64.encode(message.ProcVersion, 0, message.ProcVersion.length) : options.bytes === Array ? Array.prototype.slice.call(message.ProcVersion) : message.ProcVersion;
            if (message.Codename != null && message.hasOwnProperty("Codename"))
                object.Codename = options.bytes === String ? $util.base64.encode(message.Codename, 0, message.Codename.length) : options.bytes === Array ? Array.prototype.slice.call(message.Codename) : message.Codename;
            if (message.Incremental != null && message.hasOwnProperty("Incremental"))
                object.Incremental = options.bytes === String ? $util.base64.encode(message.Incremental, 0, message.Incremental.length) : options.bytes === Array ? Array.prototype.slice.call(message.Incremental) : message.Incremental;
            if (message.Fingerprint != null && message.hasOwnProperty("Fingerprint"))
                object.Fingerprint = options.bytes === String ? $util.base64.encode(message.Fingerprint, 0, message.Fingerprint.length) : options.bytes === Array ? Array.prototype.slice.call(message.Fingerprint) : message.Fingerprint;
            if (message.BootId != null && message.hasOwnProperty("BootId"))
                object.BootId = options.bytes === String ? $util.base64.encode(message.BootId, 0, message.BootId.length) : options.bytes === Array ? Array.prototype.slice.call(message.BootId) : message.BootId;
            if (message.AndroidId != null && message.hasOwnProperty("AndroidId"))
                object.AndroidId = options.bytes === String ? $util.base64.encode(message.AndroidId, 0, message.AndroidId.length) : options.bytes === Array ? Array.prototype.slice.call(message.AndroidId) : message.AndroidId;
            if (message.BaseBand != null && message.hasOwnProperty("BaseBand"))
                object.BaseBand = options.bytes === String ? $util.base64.encode(message.BaseBand, 0, message.BaseBand.length) : options.bytes === Array ? Array.prototype.slice.call(message.BaseBand) : message.BaseBand;
            if (message.InnerVersion != null && message.hasOwnProperty("InnerVersion"))
                object.InnerVersion = options.bytes === String ? $util.base64.encode(message.InnerVersion, 0, message.InnerVersion.length) : options.bytes === Array ? Array.prototype.slice.call(message.InnerVersion) : message.InnerVersion;
            return object;
        };

        /**
         * Converts this Struct to JSON.
         * @function toJSON
         * @memberof DeviceInfo.Struct
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Struct.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Struct;
    })();

    return DeviceInfo;
})();

module.exports = $root;
