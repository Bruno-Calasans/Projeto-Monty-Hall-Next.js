import Door from "../components/Door"
import Prize from "../components/Prize"

export default function Home() {

  return (

    <div style={{display: 'flex'}}>
      
      <Door number='1' open/>
      <Door number='0' open prize/>

    </div>
  )
}
