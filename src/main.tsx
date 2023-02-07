import React from 'react'
import ReactDOM from 'react-dom/client';
import {Nav} from "@douyinfe/semi-ui";
import { IconUser, IconStar, IconSetting, IconSemiLogo } from '@douyinfe/semi-icons';
import './index.less'
import {Workspace} from "./component/Workspace";

function AppIndex() {
    return (
        <div className="app-index-container">
            <div>
                <Nav
                    defaultOpenKeys={['job']}
                    items={[
                        { itemKey: 'user', text: '用户列表', icon: <IconUser /> },
                        { itemKey: 'union', text: '座位管理', icon: <IconStar /> },
                        {
                            text: '任务平台',
                            icon: <IconSetting />,
                            itemKey: 'job',
                            items: ['任务管理', '用户任务查询'],
                        },
                    ]}
                    onSelect={key => console.log(key)}
                    header={{
                        logo: <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />,
                        text: 'B1 座位图'
                    }}
                    footer={{
                        collapseButton: true,
                    }}
                />
            </div>
            <div>
                <Workspace/>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppIndex />
  </React.StrictMode>
)
