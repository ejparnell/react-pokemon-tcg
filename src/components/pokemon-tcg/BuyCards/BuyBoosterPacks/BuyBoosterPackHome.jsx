import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Card, CardHeader, CardText } from '../../../shared/Card'
import { linkStyles } from '../../../shared/styles'

const BOOSTER_PACKS = [{
    header: 'Base',
    text: 'Price: $4.99',
    link: '/buy/booster-packs/Base',
    image: 'https://images.pokemontcg.io/base1/4_hires.png',
},{
    header: 'Jungle',
    text: 'Price: $4.99',
    link: '/buy/booster-packs/Jungle',
    image: 'https://images.pokemontcg.io/base2/42_hires.png',
}, {
    header: 'Fossil',
    text: 'Price: $4.99',
    link: '/buy/booster-packs/Fossil',
    image: 'https://images.pokemontcg.io/base3/4_hires.png',
}, {
    header: 'Base Set 2',
    text: 'Price: $4.99',
    link: '/buy/booster-packs/Base Set 2',
    image: 'https://images.pokemontcg.io/base4/2_hires.png',
}, {
    header: 'Team Rocket',
    text: 'Price: $4.99',
    link: '/buy/booster-packs/Team Rocket',
    image: 'https://images.pokemontcg.io/base5/83_hires.png',
}, {
    header: 'Gym Heroes',
    text: 'Price: $4.99',
    link: '/buy/booster-packs/Gym Heroes',
    image: 'https://images.pokemontcg.io/gym1/15_hires.png',
}, {
    header: 'Gym Challenge',
    text: 'Price: $4.99',
    link: '/buy/booster-packs/Gym Challenge',
    image: 'https://images.pokemontcg.io/gym2/29_hires.png',
}, /* Data in the database is missing rarity field breaking the pack creation{
    header: 'Southern Islands',
    text: 'Price: $4.99',
    link: '/buy/booster-packs/Southern Islands',
    image: 'https://images.pokemontcg.io/si1/1_hires.png',
}*/]

const BuyBoosterPackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const SplayedCards = styled.div`
    position: relative;
    width: 109.5px;
    height: 150px;
`

const CardBack1 = styled.img`
    position: absolute;
    width: 109.5px;
    height: 150px;
    -moz-transform: rotate(350deg);
    -webkit-transform: rotate(350deg);
    -o-transform: rotate(350deg);
    -ms-transform: rotate(350deg);
    transform: rotate(350deg);
`

const CardBack2 = styled.img`
    position: absolute;
    width: 109.5px;
    height: 150px;
    -moz-transform: rotate(355deg);
    -webkit-transform: rotate(355deg);
    -o-transform: rotate(355deg);
    -ms-transform: rotate(355deg);
    transform: rotate(355deg);
`

const HeroCard = styled.img`
    position: absolute;
    width: 109.5px;
    height: 150px;
    z-index: 10;
`

export function BuyBoosterPackHome() {
    return (
        <BuyBoosterPackContainer>
            {BOOSTER_PACKS.map((data) => (
                <Link key={data.header} style={linkStyles} to={data.link}>
                    <Card>
                        <CardHeader>{data.header}</CardHeader>
                        <CardText>{data.text}</CardText>
                        <SplayedCards>
                            <HeroCard src={data.image} />
                            <CardBack1 src='../../../../public/cardBack.jpg' />
                            <CardBack2 src='../../../../public/cardBack.jpg' />
                        </SplayedCards>
                    </Card>
                </Link>
            ))}
        </BuyBoosterPackContainer>
    )
}