
import { Container, Group } from './style'
import Card from "../../components/Card"
import { useEffect, useState } from 'react'
import Link from 'next/link'

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
        <Card bgcolor='brown' classe='title'>Monty Hall</Card>
        <Card bgcolor='gray'>
          
          <DoorNumberInput 
          min={min}
          max={max}
          onSelect={doorsNumber => setDoors(doorsNumber)}
          />

        </Card>
      </Group>

      <Group>
        <Card bgcolor='gray'> 

          <PrizedDoorInput 
            min={1} 
            max={doors}
            onSelect={doorNumber => setPrizedDoor(doorNumber)}
          />

        </Card>
        <Card bgcolor='blue' classe='title'>
          <Link href={
            {
              pathname: '/game',
              query: {doors, prizedDoor}
            }
          }>Iniciar</Link>
        </Card>
      </Group>

    </Container>
  )
}