"use strict";
var $protobuf = require("protobufjs/minimal");
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.OidbSvcPb = (function () {
    var OidbSvcPb = {};
    OidbSvcPb.OidbSvcPack = (function () {
        function OidbSvcPack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        OidbSvcPack.prototype.Command = 0;
        OidbSvcPack.prototype.ServiceType = 0;
        OidbSvcPack.prototype.Result = 0;
        OidbSvcPack.prototype.BodyBuffer = $util.newBuffer([]);
        OidbSvcPack.prototype.ErrorMsg = "";
        OidbSvcPack.prototype.ClientVersion = "";
        OidbSvcPack.create = function create(properties) {
            return new OidbSvcPack(properties);
        };
        OidbSvcPack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Command != null && Object.hasOwnProperty.call(message, "Command"))
                writer.uint32(8).int32(message.Command);
            if (message.ServiceType != null && Object.hasOwnProperty.call(message, "ServiceType"))
                writer.uint32(16).int32(message.ServiceType);
            if (message.Result != null && Object.hasOwnProperty.call(message, "Result"))
                writer.uint32(24).int32(message.Result);
            if (message.BodyBuffer != null && Object.hasOwnProperty.call(message, "BodyBuffer"))
                writer.uint32(34).bytes(message.BodyBuffer);
            if (message.ErrorMsg != null && Object.hasOwnProperty.call(message, "ErrorMsg"))
                writer.uint32(42).string(message.ErrorMsg);
            if (message.ClientVersion != null && Object.hasOwnProperty.call(message, "ClientVersion"))
                writer.uint32(50).string(message.ClientVersion);
            return writer;
        };
        OidbSvcPack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
        OidbSvcPack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
        OidbSvcPack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return OidbSvcPack;
    })();
    return OidbSvcPb;
})();
module.exports = $root;
