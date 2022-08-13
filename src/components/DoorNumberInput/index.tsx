
import { useState } from 'react';
import { Container, Title, Number, Buttons } from './style';
import { useEffect } from 'react';

interface DoorNumberInput {
    min: number
    max: number
    onChange: (value: number) => void}

export default function DoorNumberInput({min, max, onChange }: DoorNumberInput) {

    let [doorsNumber, setDoorsNumber] = useState(min)

    const changeHandler = (value: number) => { 

        let newValue =  doorsNumber + value
    
        if(newValue < min) { newValue = min }
        if(newValue > max ){ newValue = max }
        setDoorsNumber(newValue)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { onChange(doorsNumber) }, [doorsNumber])

    return(
    <Container>

        <Title>Portas</Title>

        <Number>{ doorsNumber }</Number>

        <Buttons>
            <button  
            className='actionBtn' 
            onClick={e => changeHandler(-1)}>-</button>

            <button 
            className='actionBtn' 
            onClick={e => changeHandler(1)}>+</button>
        </Buttons>

  </Container>
  )
}