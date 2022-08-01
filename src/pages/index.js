import Door from "../components/Door"
import Prize from "../components/Prize"
import { DoorHandler } from "../functions/door";

export default function Home() {

  const selectionHandler = (value) => {
    console.log('Selecionada: '+ value);

  }

  const openHandler = (value) => {
    console.log('Aberta: ' + value);
  }

  return (

    <div style={{display: 'flex'}}>


      <DoorHandler quant='4' prizedDoorNumber='2'/>
      

    </div>
  )
}

