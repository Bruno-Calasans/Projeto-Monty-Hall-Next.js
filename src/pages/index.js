import Door from "../components/Door"
import Prize from "../components/Prize"

export default function Home() {

  const selectionHandler = (value) => {
    console.log('Selecionada: '+ value);

  }

  const openHandler = (value) => {
    console.log('Aberta: ' + value);
  }

  return (

    <div style={{display: 'flex'}}>
      
      <Door number='1' onSelection={selectionHandler}/>
      <Door number='0' prize onOpen={openHandler}/>

    </div>
  )
}

