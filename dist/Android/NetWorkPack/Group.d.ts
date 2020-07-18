declare class Group {
    static GetList(RequestId: number, QQ: number): Array<number>;
    static GetMemberList(QQ: number, RequestId: number, TargetGroupCode: number, TargetGroupUin: number, NextUin?: number): number[];
}
export = Group;
