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

`

/* primeiro nível */
type FrameProps = {
    selected: boolean
}
export const Frame = styled.div.attrs((props: FrameProps) => ({
    selected: props.selected
}))
`
    border-top: 5px solid var(--frame-color);
    border-left: 5px solid var(--frame-color);
    border-right: 5px solid var(--frame-color); 
    width: 90%;
    height: 100%;

    /* seleção da porta */
    &.selected {
        border-top: 5px solid var(--selected-color);
        border-left: 5px solid var(--selected-color);
        border-right: 5px solid var(--selected-color);  
    }

    &.selected .number { color: var(--selected-color); }

    &.selected .knob { background-color: var(--selected-color); }
`

/* segundo nível */
export const Area = styled.div`    
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--area-color);

    &.open {
        background-color: var(--open-color);
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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--knob-color);
    cursor: pointer;
`

/* terceiro nível */
export const Foot = styled.div`
    background-color: var(--foot-color);
    width: 100%;
    height: 10px;
`




