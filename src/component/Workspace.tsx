import React, {useMemo, useRef, useState} from "react";
import { Image, ImagePreview, Form, Button, Row, Col, Select, Switch } from "@douyinfe/semi-ui";
import type { BaseFormApi as FormApi } from '@douyinfe/semi-foundation/lib/es/form/interface';
import html2canvas from 'html2canvas';
import {SeatItem, SeatItemProps} from "./SeatItem";
import {WorkspaceB1} from "../config/workspace_B1";
import './component.less';
import {SeatInfo, UserInfo} from "../type";
import {OptionProps} from "@douyinfe/semi-ui/lib/es/select/option";

export interface WorkspaceProps {
    // Workspace的key
    readonly wsKey: string;
    // Workspace的name
    readonly wsName: string;
    // Workspace的背景图片
    readonly backgroundSrc: string;
    // 座位的map信息
    readonly seatInfoMap: Map<string | number, SeatInfo>;
    // 用户的map信息
    readonly userInfoMap: Map<string | number, UserInfo>;
    // key为座位ID，value为用户key
    readonly seatUser: Record<string | number, string | number>;
}

export function Workspace(props: WorkspaceProps) {
    const { seatInfoMap, userInfoMap, seatUser } = props;
    // 预览页是否可见
    const [visible, setVisible] = useState(false);
    // 是否显示用户
    const [showUser, setShowUser] = useState(true);
    const [selectSeat, setSelectSeat] = useState<string | number>('');
    const [selectUser, setSelectUser] = useState<string | number>('');
    const cacheRef = useRef({previewUrl: ''});
    const [userOptions, seatOptions, seatItems, reactNode] = useMemo(() => {
        cacheRef.current.previewUrl = '';
        const userOptions: OptionProps[] = [];
        const seatOptions: OptionProps[] = [];
        const items: SeatItemProps[] = [];
        let owner: UserInfo | undefined;
        let focus: boolean;
        for (const [,user] of userInfoMap) {
            userOptions.push({
                ...user,
                label: user.username,
                value: user.userKey,
            })
        }
        for (const [key, seat] of seatInfoMap) {
            seatOptions.push({
                ...seat,
                label: seat.name,
                value: seat.key,
            });
            owner = userInfoMap.get(seatUser[key]);
            focus = false;
            if (selectSeat) {
                focus = selectSeat === seat.key;
            } else if (selectUser) {
                focus = selectUser === owner?.userKey;
            }
            items.push({ seat, owner, showUser, focus });
        }

        return [
            userOptions,
            seatOptions.sort((a, b) => Number(a.index) - Number(b.index)),
            items,
            <>{items.map(m => <SeatItem key={m.seat.key} {...m}/>)}</>
        ] as const;
    }, [seatInfoMap, userInfoMap, seatUser, showUser, selectSeat, selectUser]);
    const openPreview = () => {
        const node = document.getElementById('workspace-container');
        if (!node) {
            console.error('未找到 Workspace 容器');
            return;
        }
        if (cacheRef.current.previewUrl) {
            setVisible(true);
            return;
        }
        html2canvas(node, {
            useCORS: true,
            width: node.offsetWidth + 10,
            height: node.offsetHeight + 10,
            scrollX: -10,
            scrollY: -10,
        }).then(async (canvas) => {
            cacheRef.current.previewUrl = canvas.toDataURL();
            setVisible(true);
        })
    };
    return (
        <div className={'workspace-container'}>
            <div className={'new-scroll-bar'}>
                <div id={'workspace-container'}>
                    <Image preview={false} src={WorkspaceB1.backgroundSrc}/>
                    {reactNode}
                </div>
                <ImagePreview src={cacheRef.current.previewUrl} visible={visible} onVisibleChange={setVisible}/>
            </div>
            <Row type="flex" align="middle" style={{marginTop: 10}}>
                <Col span={4}><Button theme='solid' type='primary' onClick={openPreview}>全景预览</Button></Col>
                <Col style={{ display: 'flex'}} span={4}>
                    <Form.Label align={'center'} text={'显示人员'}/>
                    <Switch checked={showUser} onChange={setShowUser}/>
                </Col>
                <Col style={{ display: 'flex'}} span={8}>
                    <Form.Label align={'center'} text={'座位'}/>
                    <Select filter style={{ width: 200 }} optionList={seatOptions} value={selectSeat} onChange={value => {
                        const seatKey = String(value);
                        setSelectSeat(seatKey);
                        setSelectUser(seatItems.find(s => s.seat.key === seatKey)?.owner?.userKey || '');
                    }}/>
                </Col>
                <Col style={{ display: 'flex'}} span={8}>
                    <Form.Label text={'人员'}/>
                    <Select filter style={{ width: 200 }} optionList={userOptions} value={selectUser} onChange={value => {
                        const userKey = String(value);
                        setSelectUser(userKey);
                        setSelectSeat(seatItems.find(s => s.owner?.userKey === userKey)?.seat?.key || '');
                    }}/>
                </Col>
            </Row>
        </div>
    )
}
