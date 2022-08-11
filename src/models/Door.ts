
import { DoorObj } from "../Types/Door";

export class Door implements DoorObj {

    constructor(
        public number: number | string, 
        public hasPrize = false,
        public isSelected = false,
        public isOpen = false
    ){}
}

export {Door as DoorModel}
