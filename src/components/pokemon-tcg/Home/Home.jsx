import { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'

import { AppContext } from '../../App/App'
import { SplayedCardsImage } from '../../shared/SplayedCardsImage'
import { Header } from '../../shared/Header'
import Menu from '../../shared/ScrollMenu'

const HeroCards = [
    {
        name: 'Charizard',
        imageUrl: 'https://images.pokemontcg.io/base1/4_hires.png',
    },
    {
        name: 'Venusaur',
        imageUrl: 'https://images.pokemontcg.io/base1/15_hires.png',
    },
    {
        name: 'Blastoise',
        imageUrl: 'https://images.pokemontcg.io/base1/2_hires.png',
    },
]

const HomeContainer = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: ${({ $mainHeight }) => $mainHeight}px;
`

const DownChevron = styled.img`
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    width: 100px;  
    cursor: pointer;
`

const menuItems = [
    {
        name: 'Instructions',
        link: '/instructions',
        needsAuth: false,
    },
    {
        name: 'View Cards',
        link: '/cards',
        needsAuth: false,
    },
    {
        name: 'Buy Cards',
        link: '/buy',
        needsAuth: true,
    },
    {
        name: 'View Your Cards',
        link: '/your-cards',
        needsAuth: true,
    },
    {
        name: 'Trade Cards',
        link: '/trade',
        needsAuth: true,
    },
    {
        name: 'Battle',
        link: '/battle',
        needsAuth: true,
    }
]

export default function Home({ mainHeight }) {
    const [image, setImage] = useState('')
    const [aboveTheFold, setAboveTheFold] = useState(true)
    const { userContext } = useContext(AppContext)

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * HeroCards.length)
        setImage(HeroCards[randomIndex].imageUrl)
    }, [])

    function createMenuCards() {
        const noAuthMenuItems = menuItems.filter(item => !item.needsAuth)
        const authMenuItems = menuItems.filter(item => item.needsAuth)
        return userContext.user ? [...noAuthMenuItems, ...authMenuItems].map((item, index) => {
            return (
                <SplayedCardsImage key={index} text={item.name} />
            )
        }) : noAuthMenuItems.map((item, index) => {
            return (
                <SplayedCardsImage key={index} text={item.name} />
            )
        })
    }

    return (
        <HomeContainer $mainHeight={mainHeight}>
            <Header>Welcome to the Pokemon TCG</Header>
            {aboveTheFold ? (
                <>
                    <SplayedCardsImage image={image} />
                    <DownChevron src='../../../../public/chevron_right.svg' alt='Down Chevron' onClick={() => setAboveTheFold(false)}/>
                </>
            ) : <Menu items={createMenuCards()} />}
        </HomeContainer>
    )
}