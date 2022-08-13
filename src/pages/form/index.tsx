
import { Container, Group } from '../../style/form.style'
import { useState } from 'react'
import Link from 'next/link'
import Card from "../../components/Card"
import DoorNumberInput from '../../components/DoorNumberInput'
import PrizedDoorInput from '../../components/PrizeDoorInput'

export default function Form() {

  const min = 3
  const max = 10

  let [doors, setDoors] = useState(min)
  let [prizedDoor, setPrizedDoor] = useState(1)

  return (
    <Container>

      <Group>
        <Card bgcolor='var(--card1-bgColor)' classe='title'>Monty Hall</Card>
        <Card bgcolor='var(--card2-bgColor)'>
          
          <DoorNumberInput 
          min={min}
          max={max}
          onChange={setDoors}
          />

        </Card>
      </Group>

      <Group>
        <Card bgcolor='var(--card3-bgColor)'> 

          <PrizedDoorInput 
            min={1} 
            max={doors}
            onChange={setPrizedDoor}
          />
        </Card>
    
        <Card bgcolor='var(--card4-bgColor)' classe='title'> 
          <Link href={`/game?doors=${doors}&prizedDoor=${prizedDoor}`}>
            Iniciar
          </Link>
        </Card>
          
      </Group>

    </Container>
  )
}