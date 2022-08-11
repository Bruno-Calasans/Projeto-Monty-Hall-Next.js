
import { useEffect, useState } from "react";
import Door from "../components/Door";

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function DoorHandler({quant, prizedDoorNumber}) {

    let [selected, setSelected] = useState(null)

    let [doors, setDoors] = useState(() => {

        let doorsArray = []

        for(let i = 1; i <= quant; i++) {
    
            let isPrized = (i == prizedDoorNumber)

            let createdDoor = <Door 
            key={i} 
            number={i} 
            prize={isPrized} 
            onSelection={setSelected}/>

            doorsArray.push(createdDoor)
        }
    
        return doorsArray
    })

    useEffect(() => {



    }, [selected])


    return doors
}