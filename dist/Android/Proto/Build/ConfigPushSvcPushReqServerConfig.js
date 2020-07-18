"use strict";
var $protobuf = require("protobufjs/minimal");
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.Config = (function () {
    var Config = {};
    Config.Struct = (function () {
        function Struct(properties) {
            this.ConfigList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Struct.prototype.Param = 0;
        Struct.prototype.ConfigList = $util.emptyArray;
        Struct.create = function create(properties) {
            return new Struct(properties);
        };
        Struct.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).int32(message.Param);
            if (message.ConfigList != null && message.ConfigList.length)
                for (var i = 0; i < message.ConfigList.length; ++i)
                    $root.Config.ConfigList.encode(message.ConfigList[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };
        Struct.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
        Struct.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
        Struct.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Struct;
    })();
    Config.ConfigList = (function () {
        function ConfigList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        ConfigList.prototype.Host = "";
        ConfigList.prototype.Port = 0;
        ConfigList.prototype.Param = 0;
        ConfigList.create = function create(properties) {
            return new ConfigList(properties);
        };
        ConfigList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.Host);
            writer.uint32(16).int32(message.Port);
            writer.uint32(24).int32(message.Param);
            return writer;
        };
        ConfigList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
        ConfigList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
        ConfigList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ConfigList;
    })();
    return Config;
})();
module.exports = $root;
