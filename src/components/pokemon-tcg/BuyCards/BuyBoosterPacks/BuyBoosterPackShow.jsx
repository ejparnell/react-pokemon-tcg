import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { buyBoosterPack } from '../../pokemon-services'
import { AppContext } from '../../../App/App'
import { PokemonCard } from './PokemonCard'
import { Header } from '../../../shared/Header'
import { Paragraph } from '../../../shared/Paragraph'
import { Button } from '../../../shared/Button'

const BuyBoosterPackShowContainer = styled.div`
    width: 100%;

    display: grid;
    grid:
        "header" auto
        "main" 1fr
        "footer" auto
        / 1fr;
    gap: 8px;
`

const HeaderContainer = styled.div`
    grid-area: header;
    margin: 10px;
`

const MainContainer = styled.div`
    grid-area: main;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PokemonContainer = styled.div`
    position: absolute;
`

const FooterContainer = styled.div`
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

export function BuyBoosterPackShow() {
    const { packName } = useParams()
    const { messageContext } = useContext(AppContext)
    const [boosterPack, setBoosterPack] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchBoosterPack() {
            try {
                const { boughtPack } = await buyBoosterPack(packName)
                setBoosterPack(boughtPack)
                messageContext.handleAddMessage({ id: Date.now(), message: `You bought a ${packName} booster pack!`, type: 'success' })
            } catch (error) {
                messageContext.handleAddMessage({ id: Date.now(), message: error.message, type: 'error' })
            }
        }
        fetchBoosterPack()
    }, [])

    function handleOpenBoosterPack() {
        const newBoosterPack = [...boosterPack]
        newBoosterPack.pop()
        setBoosterPack(newBoosterPack)
    }

    return (
        <BuyBoosterPackShowContainer>
            <HeaderContainer>
                <Header>Click to reveal card</Header>
            </HeaderContainer>
            <MainContainer>
                {boosterPack.map((card, index) => (
                    <PokemonContainer key={index}>
                        <PokemonCard card={card} handleOpenBoosterPack={handleOpenBoosterPack} name='unopened' />
                    </PokemonContainer>
                ))}
            </MainContainer>
            <FooterContainer>
                {boosterPack.length ? (<Paragraph>Click card to open cards: {` ${boosterPack.length} left to open`}</Paragraph>) : (<Button onClick={() => navigate('/')}>Back to Home</Button>)}
            </FooterContainer>
        </BuyBoosterPackShowContainer>
    )
}