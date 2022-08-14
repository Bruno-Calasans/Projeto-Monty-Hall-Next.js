
export interface DoorObj {
    number: number,
    isSelected?: boolean 
    isOpen?: boolean 
    hasPrize?: boolean
    open(): void
    close(): void
    select(): void
    deselect(): void
}

export default class DoorModal implements DoorObj {

    constructor(
        public number: number, 
        public hasPrize = false,
        public isSelected = false,
        public isOpen = false
    ){}

    open(){ this.isOpen = true }
    close(){ this.isOpen = false }
    select(){this.isSelected = true }
    deselect(){ this.isSelected = false }
}

