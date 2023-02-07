import React, {useState} from "react";
import {Image} from "@douyinfe/semi-ui";
import { ImagePreview } from '@douyinfe/semi-ui';
import html2canvas from 'html2canvas';
import {SeatItem} from "./SeatItem";
import {WorkspaceB1} from "../config/workspace_B1";
import './component.less';

export function Workspace() {
    const [previewUrl, setPreviewUrl] = useState('');
    const [visible, setVisible] = useState(false);
    const openPreview = () => {
        const node = document.getElementById('workspace-container');
        if (!node) {
            console.error('未找到 Workspace 容器');
            return;
        }
        html2canvas(node, {
            useCORS: true,
            height: node.offsetHeight,
            width: node.offsetWidth,
            scrollY: 0,
            scrollX: 0
        }).then(async (canvas) => {
            setPreviewUrl(canvas.toDataURL());
            setVisible(true);
        })
    };
    return (
        <>
            <div className={'workspace-container'} id={'workspace-container'}>
                <div className={'workspace-preview-button'} onClick={openPreview}>预览</div>
                <Image preview={false} src={WorkspaceB1.backgroundSrc}/>
                {WorkspaceB1.seatInfoArray.map(s => <SeatItem key={s.key} seat={s}/>)}
            </div>
            <ImagePreview src={previewUrl} visible={visible} onVisibleChange={setVisible}/>
        </>
    )
}
