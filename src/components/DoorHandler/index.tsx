
import { useEffect, useState } from "react";
import Link from "next/link";
import { DoorModel } from "../../models/Door" ;
import { Container, Title, Content, Buttons } from './style'
import Door from "../Door";
import ConfirmationModal from './../ConfirmationModal';

interface DoorHandlerProps {
    quant: number
    prizedDoorNumber:  number
    onGameover: () => void
    onReset: () => void
}

export default function DoorHandler({quant, prizedDoorNumber, onGameover, onReset}: DoorHandlerProps) {

    let [selectedDoor, setSelectedDoor] = useState<number>(0)
    let [doorObjs, setDoorObjs] = useState<DoorModel[]>([])
    let [confirmationModal, setConfirmationModal] = useState(false)
    let [gameover, setGameover] = useState(false)

    // toda vez que uma porta for selecionada
    const selectionHandler = (selectedDoorNumber: number) => {

        if(doorObjs.length > 0 && !gameover) {

            const updatedDoorObjs = doorObjs.map(door => {

                // alterna a porta clicada
                if(door.number == selectedDoorNumber) {
                   door.isSelected = !door.isSelected 

                // deseleciona todas as outras 
                }else { 
                    door.isSelected = false 
                }
                return door
            })

            setDoorObjs(updatedDoorObjs)
            setSelectedDoor(selectedDoorNumber)
        }
    }

    // toda vez que clicar na maçaneta
    const openHandler = (openDoorNumber: number) => {

        // abre o modal de confirmação
        if(!gameover) { setConfirmationModal(true)  }
    }

    // toda vez que o modal de confirmação for aberto
    const confirmationHandler = (confirm: boolean) => {

        // se realmente quiser abrir a porta
        if(confirm && doorObjs.length > 0) {

            // abrindo a porta com o número selecionado
            const updatedDoorObjs = doorObjs.map(door => {

                if(door.number == selectedDoor) { 
                    door.isOpen = true

                    // encerra o jogo se a porta aberta tiver o presente
                    if(door.hasPrize) { 
                        setGameover(true)  
                        onGameover()
                    }
                }
                return door
            })
            setDoorObjs(updatedDoorObjs)
        }

        // fecha o modal de confirmação
        setConfirmationModal(false)
    }

    // cria um array de objetos Door
    const createDoorObjs = () => {

        if(quant > 0 && (prizedDoorNumber > 0 && prizedDoorNumber <= quant)) {

            let doorObjs = []

            for(let i = 1; i <= quant; i++) {
                let isPrized = (i == prizedDoorNumber)
                doorObjs.push(new DoorModel(i, isPrized))
            }
            setDoorObjs(doorObjs)
        } 
    }

    // carrega todos os componentes Door
    const loadDoorComponents = () => {

        if(doorObjs.length > 0) {

            return doorObjs.map(door => (
            <Door
            key={door.number} 
            door={door}
            onSelection={selectionHandler}
            onOpen={openHandler}/>
            )) 
        }
    }

    // cria os door objetos na primeira vez e toda vez que 'quant' mudar
    useEffect(() => { createDoorObjs() }, [quant])

    // atualiza a porta premiada toda vez que 'prizeDoorNumber' mudar
    useEffect(() => {

        if(doorObjs.length > 0) {
            const updatedDoors = doorObjs.map(door => {
                door.hasPrize = (door.number === prizedDoorNumber)
                return door
            })
            setDoorObjs(updatedDoors)
        }

    }, [prizedDoorNumber])

    // quando o jogo for reiniciado
    const reset = () => {

        if(doorObjs.length > 0) {

            const resetedDoors = doorObjs.map(door => {
                door.isOpen = false
                door.isSelected = false
                return door
            })
            setSelectedDoor(0)
            setDoorObjs(resetedDoors)
            setGameover(false)
            onReset()
        }  
    }

    return (
        <Container>

            <Title>Escolha uma porta</Title>

            <Content>{ loadDoorComponents() }</Content>

            <ConfirmationModal 
            show={confirmationModal}
            title="Confirmar"
            msg={`Deseja realmente abrir a porta ${selectedDoor}?`}
            onConfirmation={confirmationHandler}
            />

            <Buttons>
                <button className="actionBtn" onClick={reset}>Reiniciar</button>
                <Link href='/'>
                    <button className="actionBtn" onClick={reset}>
                        Voltar Home
                    </button>
                </Link>
            </Buttons>

        </Container> 
    )
}

