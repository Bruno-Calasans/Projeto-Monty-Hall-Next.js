import styled from "styled-components";


/* elemento principal da porta */
export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--door-area-width);
    height: var(--door-area-height);
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;


    /* porta aberta */
    .opened {
        background-color: darkgray;
        justify-content: flex-end;
    }

    .opened .number { display: none; }
    .opened .knob { display: none }
`

/* primeiro nível */
type FrameProps = {
    selected: boolean
}
export const Frame = styled.div.attrs((props: FrameProps) => ({
    selected: props.selected
}))
`
    border-top: 5px solid black;
    border-left: 5px solid black;
    border-right: 5px solid black; 
    width: 90%;
    height: 100%;

    /* seleção da porta */
    &.selected {
        border-top: 5px solid gold;
        border-left: 5px solid gold;
        border-right: 5px solid gold;  
    }

    &.selected .number { color: gold; }

    &.selected .knob { background-color: gold; }
`

/* segundo nível */
export const Area = styled.div`    
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #803D13;

    &.open {
        background-color: darkgray;
        justify-content: flex-end;
    }

    &.open .number { display: none; }
    &.open .knob { display: none }
`

export const Number = styled.div`
    align-self: center;
    font-size: 2.5em;
    font-weight: bold;
    flex-grow: 1;
`

export const Knob = styled.div`
    position: absolute;
    left: 5%;
    top: 60%;
    background-color: black;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`

/* terceiro nível */
export const Foot = styled.div`
    background-color: gray;
    width: 100%;
    height: 10px;
`




