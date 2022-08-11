import { Container } from './style'
import Door from "../../components/Door"
import Prize from "../../components/Prize"
import DoorHandler from '../../components/DoorHandler'
import ConfirmationModal from '../../components/ConfirmationModal';
import { useState, useEffect } from 'react';
import {randInt} from '../../functions/others'

interface HomeProps {
  quant: number
}

export default function Home({ quant }: HomeProps) {

  let [prizedDoor, setPrizedDoor] = useState(randInt(1, quant ?? 5))

  const gameOverHandler = (value : boolean) => {
    //if(value) { setReset(true) }
  }

  const resetHandler = () => {

    let sortedNumber = randInt(1, quant ?? 5)
    console.log(sortedNumber);
    setPrizedDoor(sortedNumber)
  }

  useEffect(() => {}, [prizedDoor])

  return (
    <Container>

      <DoorHandler
      quant='5' 
      prizedDoorNumber={prizedDoor}
      onGameover={gameOverHandler}
      onReset={resetHandler}
      />

    </Container>
  )
}

