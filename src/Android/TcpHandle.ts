const Net = require('net')
import EventManage from './EventManage'

interface TcpPackage {
    Length: number,
    Body: Buffer,
    End: boolean,
    NextPackageSize: number
}


class TcpHandle {
    public TCP
    private Queun: Array<TcpPackage> = [];
    private EventManage: EventManage

    constructor(EventMange: EventManage) {
        this.TCP = new Net.Socket()
        this.EventManage = EventMange
    }

    private SendData(Data: Array<number>) {
        this.TCP.write(Buffer.from(Data), () => {
            this.EventManage.Trigger("TcpSendFinish", {})
        })
    }

    public async Connenct(host: string, port: number): Promise<boolean> {
        return new Promise(((resolve) => {
            this.TCP.connect({
                host: host,
                port: port,
                family: 4
            }, () => {
                this.EventManage.Trigger("ConnectSuccess", {
                    Message: `server host:${host} port:${port}`
                })
                this.TCP.setKeepAlive(true)
                this.EventManage.OnEvent("SendTcpPack", (Params) => {
                    if ("Pack" in Params) {
                        this.SendData(Params.Pack)
                    }
                })
                resolve(true)
            })
            this.TCP.on("error", () => {
                resolve(false)
            })
            this.TCP.on('data', (Data) => {
                let TcpSocketDataLength = Data.length
                let PackageLength = Data.readInt32BE()
                //粘包处理 遇到 [0,0,255,255] 00 00 ff ff 会翻车
                let Haeder2Byte = Data.readInt16BE()
                if (Haeder2Byte === 0) {
                    if (PackageLength > TcpSocketDataLength) {
                        let NextPackageSize = PackageLength - TcpSocketDataLength
                        let FullBuffer = Buffer.alloc(PackageLength)
                        FullBuffer.fill(Data, 0, Data.length)
                        this.Queun.push({
                            Body: FullBuffer,
                            Length: PackageLength,
                            End: false,
                            NextPackageSize
                        })
                    } else {
                        this.EventManage.Trigger("RecvFullPack", {
                            Pack: Data
                        })
                        return
                    }
                } else {
                    for (let i = 0; i < this.Queun.length; i++) {
                        if (this.Queun[i].NextPackageSize === TcpSocketDataLength) {
                            let PopValue = this.Queun.splice(i, 1)[0]
                            PopValue.Body.fill(Data, PopValue.Length - PopValue.NextPackageSize)
                            this.EventManage.Trigger("RecvFullPack", {
                                Pack: PopValue.Body
                            })
                            break;
                        }
                    }
                }
            })
        }))


    }


}

export = TcpHandle