import { useEffect, useState } from 'react'
import style from '../styles/door.module.css'
import Prize from './Prize';

export default function Door({
    number, 
    isSelected, 
    isOpened, 
    prize, 
    onSelection, 
    onOpen,
}){

    let [selected, setSelected] = useState(isSelected)
    let [opened, setOpened] = useState(isOpened)

    const toggleSelection = (e) => {

        if(!opened) {
            setSelected(!selected)
        }
    }

    const open = (e) => {
        setOpened(true)
    }

    useEffect(() => {

        if(onSelection) {
            onSelection(selected ? number : null)
        }

    }, [number, onSelection, selected])

    useEffect(() => {

        if(onOpen) {
            onOpen(opened)
        }

        if(opened){ 
            setSelected(false) 
        }

    }, [onOpen, opened])

    return (
        
        <div className={style.container} onClick={toggleSelection}>

            <div className={`${style.frame} ${selected ? style.selected : ''}`}>

                <div className={`${style.area} ${opened ? style.opened : ''}`}>

                    <div className={style.number}>{number}</div>
                    <div className={style.knob} onClick={open}></div>

                    {(opened && prize) && <Prize />}
                    
                </div>

            </div>

            <div className={style.foot}></div>
        </div>
        
    )
}