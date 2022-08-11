
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from './style'
import DoorHandler from '../../components/DoorHandler'
import { randInt } from '../../functions/others'

export default function Game() {

  const router = useRouter()
  let [quant, setQuant] = useState(0)
  let [prizedDoor, setPrizedDoor] = useState(randInt(1, quant))

  const gameOverHandler = (value : boolean) => {
    
  }

  const resetHandler = () => {
    let sortedNumber = randInt(1, quant)
    setPrizedDoor(sortedNumber)
  }

  // quando 
  useEffect(() => {
    setQuant(router.query.doors as unknown as number)

  }, [router.query.doors])

  useEffect(() => {}, [prizedDoor])

  return (

    <Container>
      <DoorHandler 
      quant={quant} 
      prizedDoorNumber={prizedDoor} 
      onGameover={gameOverHandler}
      onReset={resetHandler}
      />
    </Container>
  )
}
