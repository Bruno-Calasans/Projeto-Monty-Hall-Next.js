
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1; 
`

export const Title  = styled.div`
    color: black;
    font-size: 2em;
    font-weight: bold;
`

export const Number  = styled.div`
    font-size: 2em;
`

export const Buttons  = styled.div`
    display: flex;
    justify-content: center;

    .actionBtn { 
        font-size: 1.2em;
        margin: 2px; 
        padding: 10px;
    }

    .actionBtn:hover { background-color: lightblue; }
`
export const Checkbox  = styled.input`
    transform: scale(1.3);
    margin: 5px;
    cursor: pointer;

`