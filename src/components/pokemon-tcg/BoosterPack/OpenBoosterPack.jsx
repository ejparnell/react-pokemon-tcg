import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { PokemonCard } from './PokemonCard'
import { AppContext } from '../../App/App'
import { Paragraph } from '../../shared/Paragraph'

const PokemonContainer = styled.div`
    position: absolute;
    z-index: ${({ $index }) => $index};
`

const OpenBoosterPackContainer = styled.div`
    width: 100%;

    display: grid;
    grid:
        "header" auto
        "main" 1fr
        "footer" auto
        / 1fr;
    gap: 8px;
`

const Header = styled.div`
    grid-area: header;
`

const CardsContainer = styled.div`
    grid-area: main;
    height: 300px;
`

const ControlPanel = styled.div`
    grid-area: footer;
`

export function OpenBoosterPack({ boosterPack, setBoosterPack }) {
    const { userContext, messageContext } = useContext(AppContext)
    const navigate = useNavigate()

    // async function addBoosterPackToBinder(currentCard) {
    //     try {
    //         await addBoosterPack(userContext.user._id, currentCard)
    //         messageContext.handleAddMessage({ id: Date.now(), message: `${currentCard.name} added to binder!`, type: 'success' })
    //     } catch (error) {
    //         messageContext.handleAddMessage({ id: Date.now(), message: error.message, type: 'error' })
    //     }
    // }

    async function handleOpenBoosterPack() {
        const newBoosterPack = [...boosterPack]
        const currentCard = newBoosterPack.pop()
        // addBoosterPackToBinder(currentCard)
        setBoosterPack(newBoosterPack)
    }

    return (
        <OpenBoosterPackContainer>
            <Header>
                <h2>Open Booster Pack</h2>
            </Header>
            <CardsContainer>
                {boosterPack.map((card, index) => (
                    <PokemonContainer key={index} $index={index}>
                        <PokemonCard card={card} handleOpenBoosterPack={handleOpenBoosterPack} name='unopened' />
                    </PokemonContainer>
                ))}
            </CardsContainer>
            <ControlPanel>
                {boosterPack.length ? (<Paragraph>Click card to open cards: {` ${boosterPack.length} left to open`}</Paragraph>) : (<button onClick={() => navigate('/')}>Back to Home</button>)}
            </ControlPanel>
        </OpenBoosterPackContainer>
    )
}