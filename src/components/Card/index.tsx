
import { Container } from './style'


interface CardProps {
    children?: any
    bgcolor?: string
    color?: string
    classe?: string
}

export default function Card ({children, bgcolor, color, classe}: CardProps) {

    const style = {backgroundColor: bgcolor, color}

    return (
        <Container style={style} className={classe}>{ children }</Container>
    )
}