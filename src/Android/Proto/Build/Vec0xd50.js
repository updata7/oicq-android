/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Vec0xd50 = (function() {

    /**
     * Namespace Vec0xd50.
     * @exports Vec0xd50
     * @namespace
     */
    var Vec0xd50 = {};

    Vec0xd50.ReqBody = (function() {

        /**
         * Properties of a ReqBody.
         * @memberof Vec0xd50
         * @interface IReqBody
         * @property {number|Long|null} [Appid] ReqBody Appid
         * @property {number|null} [MaxPkgSize] ReqBody MaxPkgSize
         * @property {number|null} [StartTime] ReqBody StartTime
         * @property {number|null} [StartIndex] ReqBody StartIndex
         * @property {number|null} [ReqNum] ReqBody ReqNum
         * @property {Array.<number>|null} [UinList] ReqBody UinList
         * @property {number|null} [ReqMusicSwitch] ReqBody ReqMusicSwitch
         * @property {number|null} [ReqMutualmarkAlienation] ReqBody ReqMutualmarkAlienation
         * @property {number|null} [ReqMutualmarkScore] ReqBody ReqMutualmarkScore
         * @property {number|null} [ReqKsingSwitch] ReqBody ReqKsingSwitch
         * @property {number|null} [ReqMutualmarkLbsshare] ReqBody ReqMutualmarkLbsshare
         */

        /**
         * Constructs a new ReqBody.
         * @memberof Vec0xd50
         * @classdesc Represents a ReqBody.
         * @implements IReqBody
         * @constructor
         * @param {Vec0xd50.IReqBody=} [properties] Properties to set
         */
        function ReqBody(properties) {
            this.UinList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqBody Appid.
         * @member {number|Long} Appid
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.Appid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqBody MaxPkgSize.
         * @member {number} MaxPkgSize
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.MaxPkgSize = 0;

        /**
         * ReqBody StartTime.
         * @member {number} StartTime
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.StartTime = 0;

        /**
         * ReqBody StartIndex.
         * @member {number} StartIndex
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.StartIndex = 0;

        /**
         * ReqBody ReqNum.
         * @member {number} ReqNum
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.ReqNum = 0;

        /**
         * ReqBody UinList.
         * @member {Array.<number>} UinList
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.UinList = $util.emptyArray;

        /**
         * ReqBody ReqMusicSwitch.
         * @member {number} ReqMusicSwitch
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.ReqMusicSwitch = 0;

        /**
         * ReqBody ReqMutualmarkAlienation.
         * @member {number} ReqMutualmarkAlienation
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.ReqMutualmarkAlienation = 0;

        /**
         * ReqBody ReqMutualmarkScore.
         * @member {number} ReqMutualmarkScore
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.ReqMutualmarkScore = 0;

        /**
         * ReqBody ReqKsingSwitch.
         * @member {number} ReqKsingSwitch
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.ReqKsingSwitch = 0;

        /**
         * ReqBody ReqMutualmarkLbsshare.
         * @member {number} ReqMutualmarkLbsshare
         * @memberof Vec0xd50.ReqBody
         * @instance
         */
        ReqBody.prototype.ReqMutualmarkLbsshare = 0;

        /**
         * Creates a new ReqBody instance using the specified properties.
         * @function create
         * @memberof Vec0xd50.ReqBody
         * @static
         * @param {Vec0xd50.IReqBody=} [properties] Properties to set
         * @returns {Vec0xd50.ReqBody} ReqBody instance
         */
        ReqBody.create = function create(properties) {
            return new ReqBody(properties);
        };

        /**
         * Encodes the specified ReqBody message. Does not implicitly {@link Vec0xd50.ReqBody.verify|verify} messages.
         * @function encode
         * @memberof Vec0xd50.ReqBody
         * @static
         * @param {Vec0xd50.IReqBody} message ReqBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Appid != null && Object.hasOwnProperty.call(message, "Appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Appid);
            if (message.MaxPkgSize != null && Object.hasOwnProperty.call(message, "MaxPkgSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MaxPkgSize);
            if (message.StartTime != null && Object.hasOwnProperty.call(message, "StartTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.StartTime);
            if (message.StartIndex != null && Object.hasOwnProperty.call(message, "StartIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.StartIndex);
            if (message.ReqNum != null && Object.hasOwnProperty.call(message, "ReqNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ReqNum);
            if (message.UinList != null && message.UinList.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.UinList.length; ++i)
                    writer.int32(message.UinList[i]);
                writer.ldelim();
            }
            if (message.ReqMusicSwitch != null && Object.hasOwnProperty.call(message, "ReqMusicSwitch"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ReqMusicSwitch);
            if (message.ReqMutualmarkAlienation != null && Object.hasOwnProperty.call(message, "ReqMutualmarkAlienation"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.ReqMutualmarkAlienation);
            if (message.ReqMutualmarkScore != null && Object.hasOwnProperty.call(message, "ReqMutualmarkScore"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.ReqMutualmarkScore);
            if (message.ReqKsingSwitch != null && Object.hasOwnProperty.call(message, "ReqKsingSwitch"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.ReqKsingSwitch);
            if (message.ReqMutualmarkLbsshare != null && Object.hasOwnProperty.call(message, "ReqMutualmarkLbsshare"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.ReqMutualmarkLbsshare);
            return writer;
        };

        /**
         * Encodes the specified ReqBody message, length delimited. Does not implicitly {@link Vec0xd50.ReqBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Vec0xd50.ReqBody
         * @static
         * @param {Vec0xd50.IReqBody} message ReqBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqBody message from the specified reader or buffer.
         * @function decode
         * @memberof Vec0xd50.ReqBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Vec0xd50.ReqBody} ReqBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Vec0xd50.ReqBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Appid = reader.int64();
                    break;
                case 2:
                    message.MaxPkgSize = reader.int32();
                    break;
                case 3:
                    message.StartTime = reader.int32();
                    break;
                case 4:
                    message.StartIndex = reader.int32();
                    break;
                case 5:
                    message.ReqNum = reader.int32();
                    break;
                case 6:
                    if (!(message.UinList && message.UinList.length))
                        message.UinList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.UinList.push(reader.int32());
                    } else
                        message.UinList.push(reader.int32());
                    break;
                case 7:
                    message.ReqMusicSwitch = reader.int32();
                    break;
                case 8:
                    message.ReqMutualmarkAlienation = reader.int32();
                    break;
                case 9:
                    message.ReqMutualmarkScore = reader.int32();
                    break;
                case 10:
                    message.ReqKsingSwitch = reader.int32();
                    break;
                case 11:
                    message.ReqMutualmarkLbsshare = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Vec0xd50.ReqBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Vec0xd50.ReqBody} ReqBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqBody message.
         * @function verify
         * @memberof Vec0xd50.ReqBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Appid != null && message.hasOwnProperty("Appid"))
                if (!$util.isInteger(message.Appid) && !(message.Appid && $util.isInteger(message.Appid.low) && $util.isInteger(message.Appid.high)))
                    return "Appid: integer|Long expected";
            if (message.MaxPkgSize != null && message.hasOwnProperty("MaxPkgSize"))
                if (!$util.isInteger(message.MaxPkgSize))
                    return "MaxPkgSize: integer expected";
            if (message.StartTime != null && message.hasOwnProperty("StartTime"))
                if (!$util.isInteger(message.StartTime))
                    return "StartTime: integer expected";
            if (message.StartIndex != null && message.hasOwnProperty("StartIndex"))
                if (!$util.isInteger(message.StartIndex))
                    return "StartIndex: integer expected";
            if (message.ReqNum != null && message.hasOwnProperty("ReqNum"))
                if (!$util.isInteger(message.ReqNum))
                    return "ReqNum: integer expected";
            if (message.UinList != null && message.hasOwnProperty("UinList")) {
                if (!Array.isArray(message.UinList))
                    return "UinList: array expected";
                for (var i = 0; i < message.UinList.length; ++i)
                    if (!$util.isInteger(message.UinList[i]))
                        return "UinList: integer[] expected";
            }
            if (message.ReqMusicSwitch != null && message.hasOwnProperty("ReqMusicSwitch"))
                if (!$util.isInteger(message.ReqMusicSwitch))
                    return "ReqMusicSwitch: integer expected";
            if (message.ReqMutualmarkAlienation != null && message.hasOwnProperty("ReqMutualmarkAlienation"))
                if (!$util.isInteger(message.ReqMutualmarkAlienation))
                    return "ReqMutualmarkAlienation: integer expected";
            if (message.ReqMutualmarkScore != null && message.hasOwnProperty("ReqMutualmarkScore"))
                if (!$util.isInteger(message.ReqMutualmarkScore))
                    return "ReqMutualmarkScore: integer expected";
            if (message.ReqKsingSwitch != null && message.hasOwnProperty("ReqKsingSwitch"))
                if (!$util.isInteger(message.ReqKsingSwitch))
                    return "ReqKsingSwitch: integer expected";
            if (message.ReqMutualmarkLbsshare != null && message.hasOwnProperty("ReqMutualmarkLbsshare"))
                if (!$util.isInteger(message.ReqMutualmarkLbsshare))
                    return "ReqMutualmarkLbsshare: integer expected";
            return null;
        };

        /**
         * Creates a ReqBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Vec0xd50.ReqBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Vec0xd50.ReqBody} ReqBody
         */
        ReqBody.fromObject = function fromObject(object) {
            if (object instanceof $root.Vec0xd50.ReqBody)
                return object;
            var message = new $root.Vec0xd50.ReqBody();
            if (object.Appid != null)
                if ($util.Long)
                    (message.Appid = $util.Long.fromValue(object.Appid)).unsigned = false;
                else if (typeof object.Appid === "string")
                    message.Appid = parseInt(object.Appid, 10);
                else if (typeof object.Appid === "number")
                    message.Appid = object.Appid;
                else if (typeof object.Appid === "object")
                    message.Appid = new $util.LongBits(object.Appid.low >>> 0, object.Appid.high >>> 0).toNumber();
            if (object.MaxPkgSize != null)
                message.MaxPkgSize = object.MaxPkgSize | 0;
            if (object.StartTime != null)
                message.StartTime = object.StartTime | 0;
            if (object.StartIndex != null)
                message.StartIndex = object.StartIndex | 0;
            if (object.ReqNum != null)
                message.ReqNum = object.ReqNum | 0;
            if (object.UinList) {
                if (!Array.isArray(object.UinList))
                    throw TypeError(".Vec0xd50.ReqBody.UinList: array expected");
                message.UinList = [];
                for (var i = 0; i < object.UinList.length; ++i)
                    message.UinList[i] = object.UinList[i] | 0;
            }
            if (object.ReqMusicSwitch != null)
                message.ReqMusicSwitch = object.ReqMusicSwitch | 0;
            if (object.ReqMutualmarkAlienation != null)
                message.ReqMutualmarkAlienation = object.ReqMutualmarkAlienation | 0;
            if (object.ReqMutualmarkScore != null)
                message.ReqMutualmarkScore = object.ReqMutualmarkScore | 0;
            if (object.ReqKsingSwitch != null)
                message.ReqKsingSwitch = object.ReqKsingSwitch | 0;
            if (object.ReqMutualmarkLbsshare != null)
                message.ReqMutualmarkLbsshare = object.ReqMutualmarkLbsshare | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Vec0xd50.ReqBody
         * @static
         * @param {Vec0xd50.ReqBody} message ReqBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UinList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Appid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Appid = options.longs === String ? "0" : 0;
                object.MaxPkgSize = 0;
                object.StartTime = 0;
                object.StartIndex = 0;
                object.ReqNum = 0;
                object.ReqMusicSwitch = 0;
                object.ReqMutualmarkAlienation = 0;
                object.ReqMutualmarkScore = 0;
                object.ReqKsingSwitch = 0;
                object.ReqMutualmarkLbsshare = 0;
            }
            if (message.Appid != null && message.hasOwnProperty("Appid"))
                if (typeof message.Appid === "number")
                    object.Appid = options.longs === String ? String(message.Appid) : message.Appid;
                else
                    object.Appid = options.longs === String ? $util.Long.prototype.toString.call(message.Appid) : options.longs === Number ? new $util.LongBits(message.Appid.low >>> 0, message.Appid.high >>> 0).toNumber() : message.Appid;
            if (message.MaxPkgSize != null && message.hasOwnProperty("MaxPkgSize"))
                object.MaxPkgSize = message.MaxPkgSize;
            if (message.StartTime != null && message.hasOwnProperty("StartTime"))
                object.StartTime = message.StartTime;
            if (message.StartIndex != null && message.hasOwnProperty("StartIndex"))
                object.StartIndex = message.StartIndex;
            if (message.ReqNum != null && message.hasOwnProperty("ReqNum"))
                object.ReqNum = message.ReqNum;
            if (message.UinList && message.UinList.length) {
                object.UinList = [];
                for (var j = 0; j < message.UinList.length; ++j)
                    object.UinList[j] = message.UinList[j];
            }
            if (message.ReqMusicSwitch != null && message.hasOwnProperty("ReqMusicSwitch"))
                object.ReqMusicSwitch = message.ReqMusicSwitch;
            if (message.ReqMutualmarkAlienation != null && message.hasOwnProperty("ReqMutualmarkAlienation"))
                object.ReqMutualmarkAlienation = message.ReqMutualmarkAlienation;
            if (message.ReqMutualmarkScore != null && message.hasOwnProperty("ReqMutualmarkScore"))
                object.ReqMutualmarkScore = message.ReqMutualmarkScore;
            if (message.ReqKsingSwitch != null && message.hasOwnProperty("ReqKsingSwitch"))
                object.ReqKsingSwitch = message.ReqKsingSwitch;
            if (message.ReqMutualmarkLbsshare != null && message.hasOwnProperty("ReqMutualmarkLbsshare"))
                object.ReqMutualmarkLbsshare = message.ReqMutualmarkLbsshare;
            return object;
        };

        /**
         * Converts this ReqBody to JSON.
         * @function toJSON
         * @memberof Vec0xd50.ReqBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqBody;
    })();

    return Vec0xd50;
})();

module.exports = $root;
