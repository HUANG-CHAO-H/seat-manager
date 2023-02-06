import {SeatCellInfo} from "../type";

export interface SeatCalculateProps {
    // 开始的横坐标x
    startX: number;
    // 开始的纵坐标y
    startY: number;
    // 每一行的数量
    row: number;
    // 每一列的数量
    column: number;
    // 每个单元格的宽度
    width: number;
    // 每个单元格的高度
    height: number;
    // 文字方向
    textDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    // 生成座位的key
    getSeatKey: (row: number, column: number) => string | number;
    // 生成座位的name
    getSeatName: (row: number, column: number) => string;
}
export function seatCalculate(props: SeatCalculateProps): SeatCellInfo[] {
    const { startX, startY, row, column, width, height, textDirection, getSeatKey, getSeatName } = props;
    const seats: SeatCellInfo[] = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            seats.push({
                key: getSeatKey(i, j),
                name: getSeatName(i, j),
                width,
                height,
                x: startX + j * width,
                y: startY + i * height,
                textDirection,
            })
        }
    }
    return seats;
}
