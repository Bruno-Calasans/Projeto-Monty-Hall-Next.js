import { useEffect, useState } from 'react'
//import style from '../../styles/door.module.css'
import {Area, Container, Foot, Frame, Knob, Number} from './style'
import Prize from '../Prize'

interface DoorProps {
    number: number | string,
    isSelected: boolean
    isOpen: boolean
    hasPrize: boolean
}

export default function Door({number, isSelected, isOpen, hasPrize}: DoorProps){

    const selectedStyle = (isSelected && !isOpen) ? 'selected': ''
    const openStyle = isOpen ? 'open': ''

    return (
    
        <Container>
            <Frame className={selectedStyle}>
                <Area className={openStyle}>
                    <Number className='number'>{number}</Number>
                    <Knob className='knob'></Knob>
                    <Prize show={hasPrize && isOpen}/>
                </Area>
            </Frame>
            <Foot />
        </Container>
        
    )
}