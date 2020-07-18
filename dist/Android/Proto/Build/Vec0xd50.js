"use strict";
var $protobuf = require("protobufjs/minimal");
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.Vec0xd50 = (function () {
    var Vec0xd50 = {};
    Vec0xd50.ReqBody = (function () {
        function ReqBody(properties) {
            this.UinList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        ReqBody.prototype.Appid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        ReqBody.prototype.MaxPkgSize = 0;
        ReqBody.prototype.StartTime = 0;
        ReqBody.prototype.StartIndex = 0;
        ReqBody.prototype.ReqNum = 0;
        ReqBody.prototype.UinList = $util.emptyArray;
        ReqBody.prototype.ReqMusicSwitch = 0;
        ReqBody.prototype.ReqMutualmarkAlienation = 0;
        ReqBody.prototype.ReqMutualmarkScore = 0;
        ReqBody.prototype.ReqKsingSwitch = 0;
        ReqBody.prototype.ReqMutualmarkLbsshare = 0;
        ReqBody.create = function create(properties) {
            return new ReqBody(properties);
        };
        ReqBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Appid != null && Object.hasOwnProperty.call(message, "Appid"))
                writer.uint32(8).int64(message.Appid);
            if (message.MaxPkgSize != null && Object.hasOwnProperty.call(message, "MaxPkgSize"))
                writer.uint32(16).int32(message.MaxPkgSize);
            if (message.StartTime != null && Object.hasOwnProperty.call(message, "StartTime"))
                writer.uint32(24).int32(message.StartTime);
            if (message.StartIndex != null && Object.hasOwnProperty.call(message, "StartIndex"))
                writer.uint32(32).int32(message.StartIndex);
            if (message.ReqNum != null && Object.hasOwnProperty.call(message, "ReqNum"))
                writer.uint32(40).int32(message.ReqNum);
            if (message.UinList != null && message.UinList.length) {
                writer.uint32(50).fork();
                for (var i = 0; i < message.UinList.length; ++i)
                    writer.int32(message.UinList[i]);
                writer.ldelim();
            }
            if (message.ReqMusicSwitch != null && Object.hasOwnProperty.call(message, "ReqMusicSwitch"))
                writer.uint32(56).int32(message.ReqMusicSwitch);
            if (message.ReqMutualmarkAlienation != null && Object.hasOwnProperty.call(message, "ReqMutualmarkAlienation"))
                writer.uint32(64).int32(message.ReqMutualmarkAlienation);
            if (message.ReqMutualmarkScore != null && Object.hasOwnProperty.call(message, "ReqMutualmarkScore"))
                writer.uint32(72).int32(message.ReqMutualmarkScore);
            if (message.ReqKsingSwitch != null && Object.hasOwnProperty.call(message, "ReqKsingSwitch"))
                writer.uint32(80).int32(message.ReqKsingSwitch);
            if (message.ReqMutualmarkLbsshare != null && Object.hasOwnProperty.call(message, "ReqMutualmarkLbsshare"))
                writer.uint32(88).int32(message.ReqMutualmarkLbsshare);
            return writer;
        };
        ReqBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
                        }
                        else
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
        ReqBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
                }
                else
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
        ReqBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ReqBody;
    })();
    return Vec0xd50;
})();
module.exports = $root;
