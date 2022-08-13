
import styled from "styled-components";

interface CardProps {
    bgcolor?: string
    color?: string
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 160px;
    height: 160px;
    padding: 10px;

    background-color: black;
    color: white;
    border: 1px solid black;

    opacity: 0.8;
    cursor: pointer;

    &:hover { opacity: 1; }

    &.title  {
        opacity: 1;
        font-size: 2em;
        font-weight: bold;
    }

`