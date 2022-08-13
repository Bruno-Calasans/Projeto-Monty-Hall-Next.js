
import { useState } from 'react';
import { Container, Title, Number, Buttons } from './style';
import { useEffect } from 'react';

interface DoorNumberInput {
    min: number
    max: number
    onSelect: (value: number) => void}

export default function DoorNumberInput({min, max, onSelect }: DoorNumberInput) {

    let [doorsNumber, setDoorsNumber] = useState(min)

    const increment = (value: number) => { 

        let newValue =  doorsNumber + value
    
        if(newValue < min) { newValue = min }
        if(newValue > max ){ newValue = max }
        setDoorsNumber(newValue)
    }

    useEffect(() => { onSelect(doorsNumber) }, [doorsNumber])

    return(
    <Container>

        <Title>Portas</Title>

        <Number>{ doorsNumber }</Number>

        <Buttons>
            <button  
            className='actionBtn' 
            onClick={e => increment(-1)}>-</button>

            <button 
            className='actionBtn' 
            onClick={e => increment(1)}>+</button>
        </Buttons>

  </Container>
  )
}