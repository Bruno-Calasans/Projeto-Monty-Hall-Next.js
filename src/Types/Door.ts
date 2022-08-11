
export interface DoorObj {
    number: number | string,
    isSelected?: boolean 
    isOpen?: boolean 
    hasPrize?: boolean
}

export interface DoorProps {
    door: DoorObj
    onSelection: (doorNumber: number | string) => void
    onOpen: (doorNumber: number | string) => void
}


