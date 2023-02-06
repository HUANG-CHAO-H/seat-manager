import React, {useMemo} from 'react'
import ReactDOM from 'react-dom/client'
import background from '../public/background.jpg';
import { Image } from '@douyinfe/semi-ui';
import './index.less'
import {SeatItem} from "./component/SeatItem";
import {seatInfoArray} from "./config/seat_B1";

function AppIndex() {
    return (
        <div className="app-index-container">
            <div>left</div>
            <div>
                <Image preview={false} src={background}/>
                {seatInfoArray.map(s => <SeatItem key={s.key} seat={s}/>)}
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppIndex />
  </React.StrictMode>
)
