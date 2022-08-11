import {Area, Container, Foot, Frame, Knob, Number} from './style'
import {  DoorProps } from '../../Types/Door'
import Prize from '../Prize'

export default function Door({door, onSelection, onOpen}: DoorProps){

    const {number, isSelected, isOpen, hasPrize} = door

    const selectedStyle = (isSelected && !isOpen) ? 'selected': ''
    const openStyle = isOpen ? 'open': ''

    return (
    
        <Container onClick={e => onSelection(number)}>
            <Frame className={selectedStyle}>
                <Area className={openStyle}>
                    <Number className='number'>{number}</Number>
                    <Knob onClick={e => onOpen(number)} className='knob'></Knob>
                    <Prize show={hasPrize && isOpen}/>
                </Area>
            </Frame>
            <Foot />
        </Container>
        
    )
}