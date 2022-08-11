
import { useEffect, useState } from "react";
import { DoorModel } from "../../models/Door" ;
import Door from "../Door";
import ConfirmationModal from './../ConfirmationModal';

interface DoorHandlerProps {
    quant: string | number
    prizedDoorNumber: string | number
    onGameover: (value: boolean) => void
    onReset: () => void
}

export default function DoorHandler({quant, prizedDoorNumber, onGameover, onReset}: DoorHandlerProps) {

    const [selectedDoor, setSelectedDoor] = useState<string | number>('')
    const [doorObjs, setDoorObjs] = useState<DoorModel[] | null>(null)
    const [confirmationModal, setConfirmationModal] = useState(false)
    const [gameover, setGameover] = useState(false)

    // toda vez que uma porta for selecionada
    const selectionHandler = (selectedDoorNumber: number | string) => {

        if(doorObjs && !gameover) {

            let updatedDoorObjs = doorObjs.map(door => {
                door.isSelected = (door.number == selectedDoorNumber)
                return door
            })
            setDoorObjs(updatedDoorObjs)
            setSelectedDoor(selectedDoorNumber)
        }
    }

    // toda vez que clicar na maçaneta
    const openHandler = (openDoorNumber: number | string) => {

        // abre o modal de confirmação
        if(!gameover) { setConfirmationModal(true)  }
    }

    // toda vez que o modal de confirmação for aberto
    const confirmationHandler = (confirm: boolean) => {

        // se realmente quiser abrir a porta
        if(confirm && doorObjs) {

            // abrindo a porta com o número selecionado
            let updatedDoorObjs = doorObjs.map(door => {

                if(door.number == selectedDoor) { 
                    
                    door.isOpen = true

                    // encerra o jogo se a porta aberta tiver o presente
                    if(door.hasPrize) { 
                        onGameover(true)
                        setGameover(true) 
                    }
                }
                return door
            })
            setDoorObjs(updatedDoorObjs)
        }

        // fecha o modal de confirmação
        setConfirmationModal(false)
    }

    // cria todos os objetos Door
    const createDoorObjs = () => {

        let doorObjs = []

        for(let i = 1; i <= quant; i++) {

            let isPrized = (i == prizedDoorNumber)
            const door: DoorModel = new DoorModel(i, isPrized)
            doorObjs.push(door)
        }
        return doorObjs
    }

    // carrega todos os componentes Door
    const loadDoorComponents = () => {

        if(doorObjs) {

            return doorObjs.map(door => (
            <Door 
            key={door.number} 
            door={door}
            onSelection={selectionHandler}
            onOpen={openHandler}/>)) 
        }
    }

    // cria os door objetos na primeira vez e toda vez que 'quant' mudar
    useEffect(() => {
    
        let createdDoorObjs = createDoorObjs()
        setDoorObjs(createdDoorObjs)
        
    }, [quant])

    // atualiza a porta premiada toda vez que 'prizeDoorNumber' mudar
    useEffect(() => {

        if(doorObjs) {
            const updatedDoors = doorObjs.map(door => {
                door.hasPrize = (door.number === prizedDoorNumber)
                return door
            })
            setDoorObjs(updatedDoors)
        }

    }, [prizedDoorNumber])

    const reset = () => {

        if(doorObjs) {

            const resetedDoors = doorObjs.map(door => {
                door.isOpen = false
                door.isSelected = false
                return door
            })
            setSelectedDoor('')
            setDoorObjs(resetedDoors)
            setGameover(false)
            onReset()
        }  
    }

    return (
        <>
            <button onClick={reset}>Resetar</button>

            { loadDoorComponents() }

            <ConfirmationModal 
            show={confirmationModal}
            title="Confirmar"
            msg={`Deseja reamente abrir a porta ${selectedDoor}?`}
            onConfirmation={confirmationHandler}
            />
        </> 
    )
}

