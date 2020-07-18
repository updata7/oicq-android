"use strict";
const Net = require('net');
class TcpHandle {
    constructor(EventMange) {
        this.Queun = [];
        this.TCP = new Net.Socket();
        this.EventManage = EventMange;
    }
    SendData(Data) {
        this.TCP.write(Buffer.from(Data), () => {
            this.EventManage.Trigger("TcpSendFinish", {});
        });
    }
    async Connenct(host, port) {
        return new Promise(((resolve) => {
            this.TCP.connect({
                host: host,
                port: port,
                family: 4
            }, () => {
                this.EventManage.Trigger("ConnectSuccess", {
                    Message: `server host:${host} port:${port}`
                });
                this.TCP.setKeepAlive(true);
                this.EventManage.OnEvent("SendTcpPack", (Params) => {
                    if ("Pack" in Params) {
                        this.SendData(Params.Pack);
                    }
                });
                resolve(true);
            });
            this.TCP.on("error", () => {
                resolve(false);
            });
            this.TCP.on('data', (Data) => {
                let TcpSocketDataLength = Data.length;
                let PackageLength = Data.readInt32BE();
                let Haeder2Byte = Data.readInt16BE();
                if (Haeder2Byte === 0) {
                    if (PackageLength > TcpSocketDataLength) {
                        let NextPackageSize = PackageLength - TcpSocketDataLength;
                        let FullBuffer = Buffer.alloc(PackageLength);
                        FullBuffer.fill(Data, 0, Data.length);
                        this.Queun.push({
                            Body: FullBuffer,
                            Length: PackageLength,
                            End: false,
                            NextPackageSize
                        });
                    }
                    else {
                        this.EventManage.Trigger("RecvFullPack", {
                            Pack: Data
                        });
                        return;
                    }
                }
                else {
                    for (let i = 0; i < this.Queun.length; i++) {
                        if (this.Queun[i].NextPackageSize === TcpSocketDataLength) {
                            let PopValue = this.Queun.splice(i, 1)[0];
                            PopValue.Body.fill(Data, PopValue.Length - PopValue.NextPackageSize);
                            this.EventManage.Trigger("RecvFullPack", {
                                Pack: PopValue.Body
                            });
                            break;
                        }
                    }
                }
            });
        }));
    }
}
module.exports = TcpHandle;
