
import { Container, Label, Input } from './style'
import { useState } from 'react';
import Link from 'next/link';


export default function DoorInput() {

    const min = 3
    const max = 10

    let [doorsNumber, setDoorNumber] = useState(min)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        let value = e.target.value as number | string
       
        if(value != '') {
            if(value < min) { value = min }
            if(value > max) { value = max }
        }
    
        setDoorNumber(value as number)
    }

    return (
        <Container>
            <Label>Portas</Label>
            <Input type="number" min={min} max={max} value={doorsNumber} onChange={changeHandler}/>
            
            <Link href={`/game/${doorsNumber}`}>
                <button className='actionBtn'>Criar</button>
            </Link>
        </Container>
    )
}