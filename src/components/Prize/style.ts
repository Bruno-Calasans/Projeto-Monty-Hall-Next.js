import styled from "styled-components";

type ContainerProps = { show: boolean }

export const Container = styled.div.attrs((props: ContainerProps) => ({
    show: props.show
}))
`
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    position: relative;
    bottom: -19px;
    width: var(--max-prize-width);
    height: var(--max-prize-height);
    transform: scale(var(--prize-scale));
`

/* tampa da caixa */
export const Top = styled.div`
    width: 100px;
    height: 20%;
    background-image: linear-gradient(to bottom, green, rgb(1, 95, 1));
    border-bottom: 1px solid black;
`

/* laço vertical */
export const Lace1 = styled.div`
    background-image: linear-gradient(to bottom, red, rgb(195, 3, 3));
    position: absolute;
    width: var(--lace-thickness); /* grossura do laço 1*/
    height: 100%; /* comprimento do laço 1 */
`

/* laço horizontal */
export const Lace2 = styled.div`
    background-color: red;
    position: absolute;
    top: 40px;
    width: 90%; /* comprimento do laço 2*/
    height: var(--lace-thickness); /* grossura do laço 2 */
`

/* caixa */
export const Body = styled.div`
    width: 90%;
    height: 80%;
    background-image: linear-gradient(to bottom, rgb(1, 95, 1), green);
`
