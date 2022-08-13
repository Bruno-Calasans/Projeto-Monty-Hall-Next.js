
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from './style'
import DoorHandler from '../../components/DoorHandler'
import { randInt } from '../../functions/others'

interface GameQuery { doors: number, prizedDoor: number}

export default function Game() {

  const router = useRouter()
  let [quant, setQuant] = useState(3)
  let [prizedDoor, setPrizedDoor] = useState(1)

  // quando o jogo terminar
  const gameOverHandler = () => {
    console.log('Fim de jogo!');
  }

  // sortea um novo número toda vez que o jgo reiniciar
  const resetHandler = () => {
    let newSortedNumber = randInt(1, quant)
    setPrizedDoor(newSortedNumber)
  }

  useEffect(() => { 

    if(router.isReady) {
      let {doors, prizedDoor} = router.query as unknown as GameQuery
      setQuant(doors) 
      setPrizedDoor(prizedDoor)
    }
   
  }, [router.query])

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