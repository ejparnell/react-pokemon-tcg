import styled from 'styled-components'
import { Card, CardHeader } from './Card'

const SplayedCards = styled.div`
    position: relative;
    width: 310px;
    height: 355px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardBack1 = styled.img`
    position: absolute;
    width: 219px;
    height: 300px;
    -moz-transform: rotate(340deg);
    -webkit-transform: rotate(340deg);
    -o-transform: rotate(340deg);
    -ms-transform: rotate(340deg);
    transform: rotate(340deg);
`

const CardBack2 = styled.img`
    position: absolute;
    width: 219px;
    height: 300px;
    -moz-transform: rotate(345deg);
    -webkit-transform: rotate(345deg);
    -o-transform: rotate(345deg);
    -ms-transform: rotate(345deg);
    transform: rotate(345deg);
`

const CardBack3 = styled.img`
    position: absolute;
    width: 219px;
    height: 300px;
    -moz-transform: rotate(350deg);
    -webkit-transform: rotate(350deg);
    -o-transform: rotate(350deg);
    -ms-transform: rotate(350deg);
    transform: rotate(350deg);
`

const CardBack4 = styled.img`
    position: absolute;
    width: 219px;
    height: 300px;
    -moz-transform: rotate(355deg);
    -webkit-transform: rotate(355deg);
    -o-transform: rotate(355deg);
    -ms-transform: rotate(355deg);
    transform: rotate(355deg);
`

const HeroCard = styled.img`
    position: absolute;
    width: 219px;
    height: 300px;
    z-index: 10;
`

export function SplayedCardsImage({ image, text }) {
    return (
        <SplayedCards>
            {image && <HeroCard src={image} alt='Pokemon Card' />}
            {text && <Card><CardHeader>{text}</CardHeader></Card>}
            <CardBack4 src='../../../public/cardBack.jpg' alt='Pokemon Card Back' />
            <CardBack3 src='../../../public/cardBack.jpg' alt='Pokemon Card Back' />
            <CardBack2 src='../../../public/cardBack.jpg' alt='Pokemon Card Back' />
            <CardBack1 src='../../../public/cardBack.jpg' alt='Pokemon Card Back' />
        </SplayedCards>
    )
}