
export interface DoorObj {
    number: number,
    isSelected?: boolean 
    isOpen?: boolean 
    hasPrize?: boolean
}

export interface DoorProps {
    door: DoorObj
    onSelection: (doorNumber: number) => void
    onOpen: (doorNumber: number) => void
}


