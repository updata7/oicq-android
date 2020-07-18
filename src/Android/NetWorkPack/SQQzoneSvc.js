"use strict";
var stream_1 = require("@tars/stream");
var Utlis_1 = require("../../Utlis");
var SQQzoneSvcTars_1 = require("../Tars/Build/SQQzoneSvcTars");
var SQQzoneSvc = /** @class */ (function () {
    function SQQzoneSvc() {
    }
    // pb 混合tars
    SQQzoneSvc.GetUndealCount = function (QQ, QQBuff, Mac, Imsi) {
        var In = new stream_1["default"].TarsOutputStream();
        //OidSvc ???
        In.writeInt64(0, 141965365);
        //comid
        In.writeInt64(1, 1000027);
        In.writeInt64(2, QQ);
        In.writeString(3, "V1_AND_SQ_7.5.8_818_YYB_D");
        In.writeString(4, "QzoneNewService.getUndealCount");
        //o =OsVersion?
        var ConfigStr = "screen_width=720&screen_height=1280&i=357748010142217&imsi=" + Imsi + "&mac=" + Mac + "&m=GT-I9508&o=4.4.2&a=19&sc=1&sd=0&p=720*1280&f=samsung&mm=1514&cf=1953&cc=2&aid=14dda9e7fc044067&sharpP=1&n=wifi";
        In.writeString(5, ConfigStr);
        var UnknownMap = "08 00 02 06 0E 67 65 74 55 6E 64 65 61 6C 43 6F 75 6E 74 18 00 01 06 20 4E 53 5F 55 4E 44 45 41 4C 5F 43 4F 55 4E 54 2E 6D 6F 62 69 6C 65 5F 63 6F 75 6E 74 5F 72 65 71 1D 00 00 63 0A 0C 10 01 20 03 48 00 01 0C 1C 58 00 03 00 23 12 5A DF 21 2A 00 21 12 5A DF 26 44 03 00 00 00 00 FF FF FF FF 12 5A DF 26 9F 66 00 78 00 02 00 02 1A 0A 0C 1C 0B 19 00 01 0A 0C 16 00 26 00 0B 26 00 0B 00 01 1A 0A 0C 1C 0B 19 00 01 0A 0C 16 00 26 00 0B 26 00 0B 88 00 01 00 21 16 01 30 96 00 AC 0B 06 07 68 6F 73 74 75 69 6E 18 00 01 06 05 69 6E 74 36 34 1D 00 00 05 02".HexStringToNumber().concat(QQBuff);
        var Pack = new Utlis_1.Package();
        Pack.SetHex(In.getBinBuffer().toNodeBuffer().toJSON().data);
        Pack.SetString("6A 00 40 1D 00 0C 28 00 01 00 01 1D 00 00 01 00 0B");
        Pack.SetString("7A 0C 1C 2C 3D 00 00 06 00 00 00 00 00 00 0B");
        Pack.SetString("8D 00 01");
        //8D simplelist tag=8
        Pack.SetHex([0, UnknownMap.length]);
        Pack.SetHex(UnknownMap);
        Pack.SetString("9D 00 01 01 CF");
        //Map
        var MobileGetConfig = "H5Url=96475&HomepageBar=20754&LiveSetting=27747&MiniVideo=21152&PAS=1051070203&PhotoAlbum=33510&PhotoNoGroup=4209243973&PSL=2578874800&PU=25029&QZVideo=76359&QS=26455&QzUrlCache=33216&RS=28882&SubAppCfgVer=1524560014&TrimVideo=17669&VideoSvrList=1450982767&WSL=3487576463&WS=35876&WnsTm=1524572758";
        var QMF_PROTOCALmobile_get_config_req = new stream_1["default"].Map(stream_1["default"].String, stream_1["default"].BinBuffer);
        var QMF_PROTOCALQmfBusiControl = new stream_1["default"].Map(stream_1["default"].String, stream_1["default"].BinBuffer);
        var Int32 = new stream_1["default"].Map(stream_1["default"].String, stream_1["default"].BinBuffer);
        var Struct2 = SQQzoneSvcTars_1.SQQZoneSvcTars.QMF_PROTOCALmobile_get_config_req["new"]();
        var QMFConfigStruct = new stream_1["default"].TarsOutputStream();
        var Struct = SQQzoneSvcTars_1.SQQZoneSvcTars.QMF_PROTOCALQmfBusiControl["new"]();
        var QMFConfig2Struct = new stream_1["default"].TarsOutputStream();
        Struct.Flag = true;
        Struct.IParam = 187;
        Struct2.Config = MobileGetConfig;
        Struct2.BParam = 102;
        Struct2.IParam = 1000027;
        QMFConfig2Struct.writeStruct(0, Struct2);
        QMFConfigStruct.writeStruct(0, Struct);
        Int32.put("int32", new stream_1["default"].BinBuffer(Buffer.from([0, 1])));
        QMF_PROTOCALmobile_get_config_req.put("QMF_PROTOCAL.mobile_get_config_req", QMFConfig2Struct.getBinBuffer());
        QMF_PROTOCALQmfBusiControl.put("QMF_PROTOCAL.QmfBusiControl", QMFConfigStruct.getBinBuffer());
        var Map3 = new stream_1["default"].Map(stream_1["default"].String, stream_1["default"].Map(stream_1["default"].String, stream_1["default"].BinBuffer));
        Map3.put("conf_info_req", QMF_PROTOCALmobile_get_config_req);
        Map3.put("busiCompCtl", QMF_PROTOCALQmfBusiControl);
        Map3.put("wns_sdk_version", Int32);
        var Map = new stream_1["default"].TarsOutputStream();
        Map.writeMap(0, Map3);
        Pack.SetHex(Map.getBinBuffer().toNodeBuffer().toJSON().data);
        Pack.SetString("AC BC");
        return Pack.Get();
    };
    return SQQzoneSvc;
}());
module.exports = SQQzoneSvc;
