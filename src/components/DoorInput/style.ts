import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
 
    width: 100%;

    .actionBtn {
        background-color: black;
        color: white
    }
    
`

export const Label = styled.label`

`

export const Input = styled.input`
    flex-grow: 1;
    padding: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
`
