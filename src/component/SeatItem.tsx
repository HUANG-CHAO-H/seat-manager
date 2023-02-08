import React, {useLayoutEffect, useMemo, useRef} from "react";
import {SeatInfo, UserInfo} from "../type";
import './component.less';

export interface SeatItemProps {
    seat: SeatInfo;
    owner?: UserInfo;
    // 是否显示用户
    showUser?: boolean;
    // 是否处于聚焦状态
    focus?: boolean;
}

export function SeatItem(props: SeatItemProps) {
    const { seat, owner, showUser = false, focus = false } = props;
    const style = useMemo<React.CSSProperties>(() => ({
        width: seat.width,
        height: seat.height,
        left: seat.x,
        top: seat.y,
        writingMode: seat.textDirection === 'column' ? 'vertical-rl' : undefined
    }), [seat]);
    const divRef = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        const div = divRef.current;
        if (!div || !focus) return;
        div.scrollIntoView();
    }, [focus]);
    const label = showUser ? owner?.username : seat.name;
    return <div ref={divRef} className={'seat-item-container'} style={style}>{label || seat.name}</div>
}
