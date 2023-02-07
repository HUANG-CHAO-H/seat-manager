import React, {useMemo} from "react";
import {SeatCellInfo, UserInfo} from "../type";
import './component.less';

export interface SeatItemProps {
    seat: SeatCellInfo;
    owner?: UserInfo;
}

export function SeatItem(props: SeatItemProps) {
    const { seat, owner } = props;
    const style = useMemo<React.CSSProperties>(() => ({
        width: seat.width,
        height: seat.height,
        left: seat.x,
        top: seat.y,
    }), [seat]);
    return <div className={'seat-item-container'} style={style}>{seat.name}</div>
}
