
export interface DoorObj {
    number: number,
    isSelected?: boolean 
    isOpen?: boolean 
    hasPrize?: boolean
}

export default class DoorModal implements DoorObj {

    constructor(
        public number: number, 
        public hasPrize = false,
        public isSelected = false,
        public isOpen = false
    ){}
}

