//import style from '../../styles/prize.module.css'
import React from 'react'
import { Container, Top, Lace1, Lace2, Body } from './style'

type PrizeProps = { show?: boolean}

export default function Prize({show}: PrizeProps){

    return (
        <Container show={show}>
            <Top></Top>
            <Lace1></Lace1>
            <Lace2></Lace2>
            <Body></Body>
        </Container>
    )
}