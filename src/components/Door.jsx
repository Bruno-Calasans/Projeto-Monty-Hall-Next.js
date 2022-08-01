import { useState } from 'react'
import style from '../styles/door.module.css'
import Prize from './Prize';

export default function Door({number, open, prize}){

    let [select, setSelected] = useState(false)

    const toggleSelection = (e) => {
        setSelected(!select)
    }

    return (
        
        <div className={style.container} onClick={toggleSelection}>

            <div className={`${style.frame} ${select ? style.selected : ''}`}>

                <div className={`${style.area} ${open ? style.opened : ''}`}>

                    <div className={style.number}>{number}</div>
                    <div className={style.knob}></div>
                    {(open && prize) && <Prize />}
                    
                </div>

            </div>

            <div className={style.foot}></div>
        </div>
        
    )
}