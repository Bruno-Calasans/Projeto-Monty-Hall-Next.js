
import { Container, Title, Buttons, Number, Checkbox} from './style'
import { useEffect, useState } from "react"
import { randInt } from './../../functions/others';

interface PrizedDoorInputProps {
    min: number
    max: number
    onChange: (prizedDoor: number) => void
}

export default function PrizedDoorInput({ min, max, onChange }: PrizedDoorInputProps ) {

    let [checked, setChecked] = useState(false)
    let [selectedPrizedDoor, setPrizedDoor] = useState(1)

    const changeHandler = (value: number) => { 

        let newValue =  selectedPrizedDoor + value
    
        if(newValue < min){ newValue = min }
        if(newValue > max ){ newValue = max }

        setPrizedDoor(newValue) 
    }

    const checkHandler = (e: any) => {
        if(e.target.checked) { setPrizedDoor(randInt(min, max)) }
        setChecked(e.target.checked)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { onChange(selectedPrizedDoor) }, [selectedPrizedDoor])

    return (
        <Container>

            <Title>Sortear</Title>

            <label>Aleatório? 
                <Checkbox type="checkbox" value='true' onChange={checkHandler}/>
            </label>

        {(!checked) &&   
        <>
            <Number>{ selectedPrizedDoor} </Number>

            <Buttons>
                <button  
                className='actionBtn' 
                onClick={e => changeHandler(-1)}>-</button>

                <button 
                className='actionBtn' 
                onClick={e => changeHandler(1)}>+</button>
            </Buttons>
        </>}

        </Container>
    )
}