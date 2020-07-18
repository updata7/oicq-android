import EventManage from './EventManage';
declare class TcpHandle {
    TCP: any;
    private Queun;
    private EventManage;
    constructor(EventMange: EventManage);
    private SendData;
    Connenct(host: string, port: number): Promise<boolean>;
}
export = TcpHandle;
