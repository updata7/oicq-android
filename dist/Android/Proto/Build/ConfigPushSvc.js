"use strict";
var $protobuf = require("protobufjs/minimal");
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.ConfigPushSvcProto = (function () {
    var ConfigPushSvcProto = {};
    ConfigPushSvcProto.PushReq = (function () {
        function PushReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        PushReq.create = function create(properties) {
            return new PushReq(properties);
        };
        PushReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
        PushReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
        PushReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        PushReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
        PushReq.fromObject = function fromObject(object) {
            if (object instanceof $root.ConfigPushSvcProto.PushReq)
                return object;
            return new $root.ConfigPushSvcProto.PushReq();
        };
        PushReq.toObject = function toObject() {
            return {};
        };
        PushReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        PushReq.ServerInfo = (function () {
            function ServerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            ServerInfo.prototype.Host = "";
            ServerInfo.prototype.Port = 0;
            ServerInfo.prototype.Params = 0;
            ServerInfo.create = function create(properties) {
                return new ServerInfo(properties);
            };
            ServerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Host != null && Object.hasOwnProperty.call(message, "Host"))
                    writer.uint32(10).string(message.Host);
                if (message.Port != null && Object.hasOwnProperty.call(message, "Port"))
                    writer.uint32(16).int32(message.Port);
                if (message.Params != null && Object.hasOwnProperty.call(message, "Params"))
                    writer.uint32(24).int32(message.Params);
                return writer;
            };
            ServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            ServerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
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
            ServerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return ServerInfo;
        })();
        PushReq.ChangeServer = (function () {
            function ChangeServer(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            ChangeServer.prototype.Param = 0;
            ChangeServer.prototype.SereverList = null;
            ChangeServer.create = function create(properties) {
                return new ChangeServer(properties);
            };
            ChangeServer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Param != null && Object.hasOwnProperty.call(message, "Param"))
                    writer.uint32(8).int32(message.Param);
                if (message.SereverList != null && Object.hasOwnProperty.call(message, "SereverList"))
                    $root.ConfigPushSvcProto.PushReq.ServerInfo.encode(message.SereverList, writer.uint32(18).fork()).ldelim();
                return writer;
            };
            ChangeServer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            ChangeServer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
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
