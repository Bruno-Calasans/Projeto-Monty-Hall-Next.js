
import { useEffect, useState } from "react";
import Link from "next/link";
import DoorModel from "../../models/Door" ;
import { Container, Title, Content, Buttons } from './style'
import Door from "../Door";
import ConfirmationModal from './../ConfirmationModal';
import {randInt} from '../../functions/others'



interface DoorHandlerProps {
    quant: number
    prizedDoorNumber: number
    onGameover: () => void
    onReset: () => void
}

export default function DoorHandler({quant, prizedDoorNumber, onGameover, onReset}: DoorHandlerProps) {

    let [doorObjs, setDoorObjs] = useState<DoorModel[]>([])
    let [selectedDoorNumber, setSelectedDoor] = useState<number>(0)
    let [confirmationModal, setConfirmationModal] = useState(false)
    let [gameover, setGameover] = useState(false)

    //console.log(quant, doorObjs);

    // cria um array de objetos Door
    const createDoorObjs = () => {

        if(quant > 0 && prizedDoorNumber > 0 && prizedDoorNumber <= quant) {

            let doorsArray = []

            for(let i = 1; i <= quant; i++) {
                let isPrized = (i == prizedDoorNumber)
                doorsArray.push(new DoorModel(i, isPrized))
            }
            return doorsArray

        } else {
            return []
        }
    }

    // cria os door objetos toda vez que o props quant mudar
    useEffect(() => { 
        let createdDoorObjs = createDoorObjs()
        setDoorObjs(createdDoorObjs)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quant, prizedDoorNumber])
    
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

    // toda vez que uma porta for selecionada
    const selectionHandler = (selectedDoor: number) => {

        if(doorObjs.length > 0 && !gameover) {

            const updatedDoorObjs = doorObjs.map(door => {

                // seleciona a prota escolhida
                if(door.number == selectedDoor) {
                   door.select()

                // deseleciona todas as outras 
                }else { 
                    door.deselect() 
                }

                return door
            })

            setDoorObjs(updatedDoorObjs)
            setSelectedDoor(selectedDoor)
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

            let closedDoors = doorObjs.filter(door => !door.isOpen)
            let sortedDoorNumber: number

            const updatedDoorObjs = doorObjs.map(door => {

                let { number } = door

                if(closedDoors.length > 2) {

                    // a porta selecionada é diferente da porta premiada
                    if(selectedDoorNumber !== prizedDoorNumber) {

                        // abrir todas as portas não selecionadas e não premiadas
                        if(number !== selectedDoorNumber 
                        && number !== prizedDoorNumber) {
                            door.open()
                        }

                    // quando a porta selecionada é igual a porta premiada
                    }else {

                        // sortear uma porta pra ficar fechada
                        if(!sortedDoorNumber) {

                            let possibleDoors = doorObjs.filter(door => {
                                return door.number !== selectedDoorNumber
                            })
    
                            sortedDoorNumber = possibleDoors[randInt(0, possibleDoors.length - 1)].number

                        }
                        
                        // fecha todas as outras portas que não sejam as portas selecionada e sorteada
                        if(number !== sortedDoorNumber 
                            && number !== selectedDoorNumber) { 
                            door.open() 
                        }
                    }

                // abre todas as portas se tiver apenas duas
                }else if (closedDoors.length === 2) {
                    door.open()
                }

                // retorna a porta
                return door
            })

            if(doorObjs.filter(door => door.isOpen).length === quant) {
                setGameover(true)
                onGameover()
            }
            setDoorObjs(updatedDoorObjs)
        }

        // fecha o modal de confirmação
        setConfirmationModal(false)    
    }


    // quando o jogo for reiniciado
    const resetHandler = () => {

        if(doorObjs.length > 0) {

            const resetedDoors = doorObjs.map(door => {
                door.close()
                door.deselect()
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
            msg={`Deseja realmente abrir a porta ${selectedDoorNumber}?`}
            onConfirmation={confirmationHandler}
            />

            <Buttons>
                <button
                title="Desceleciona, fecha e troca o número da porta sorteada" 
                className="actionBtn" onClick={resetHandler}>Reiniciar</button>
                <Link href='/'>
                    <button
                    title="Volta à página inicial para configurar novamente" 
                    className="actionBtn" onClick={resetHandler}>
                        Voltar Home
                    </button>
                </Link>
            </Buttons>

        </Container> 
    )
}

