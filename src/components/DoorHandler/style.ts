import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 600px;
    height: 100vh;
`

export const Title = styled.div`
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;

`

export const Content = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

`
export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;

    button {
        margin: 2px;
        background-color: #803D13;
        color: white;
    }

`