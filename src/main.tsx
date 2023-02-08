import React from 'react'
import ReactDOM from 'react-dom/client';
import {Nav} from "@douyinfe/semi-ui";
import { IconUser, IconStar, IconSetting, IconSemiLogo } from '@douyinfe/semi-icons';
import './index.less'
import {Workspace} from "./component/Workspace";
import {WorkspaceB1} from "./config/workspace_B1";
import {userInfoMap} from "./config/userInfo";

function AppIndex() {
    return (
        <div className="app-index-container">
            <div>
                <Nav
                    limitIndent={false}
                    defaultOpenKeys={['job']}
                    items={[
                        { itemKey: 'user', text: '用户列表', icon: <IconUser /> },
                        { itemKey: 'union', text: '座位管理', icon: <IconStar /> },
                        {
                            text: '任务平台',
                            icon: <IconSetting />,
                            itemKey: 'job',
                            items: ['任务管理', '用户任务查询', { itemKey: 'user', text: '用户列表', icon: <IconUser /> }],
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
                <Workspace
                    wsKey={'B1'}
                    wsName={'B1'}
                    backgroundSrc={WorkspaceB1.backgroundSrc}
                    seatInfoMap={WorkspaceB1.seatInfoMap}
                    userInfoMap={userInfoMap}
                    seatUser={{ '090': 'HuangChao.hello' }}
                />
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppIndex />
  </React.StrictMode>
)
