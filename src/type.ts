export interface SeatCellInfo {
    // 座位的key
    key: string | number;
    // 座位的名称
    name: string;
    // 座位索引号，顺序
    index: number;
    // 座位的宽
    width: number;
    // 座位的高
    height: number;
    // 坐标x
    x: number;
    // 坐标y
    y: number;
    // 文字方向
    textDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export interface UserInfo {
    // 用户名称
    username: string;
    // 性别
    sex: boolean;
    // email邮箱地址
    email?: string;
    // 头像
    avatarUrl?: string;
}

export interface WorkspaceInfo {
    readonly key: string;
    readonly name: string;
    readonly seatInfoMap: Map<string | number, SeatCellInfo>;
    readonly seatInfoArray: Array<SeatCellInfo>
    readonly backgroundSrc: string;
}
