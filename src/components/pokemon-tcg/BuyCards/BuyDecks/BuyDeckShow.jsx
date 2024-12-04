import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { AppContext } from '../../../App/App'
import { fetchPreBuiltDeck, buyPreBuiltDecks } from '../../pokemon-services'
import { PokemonCard } from '../../../shared/PokemonCard'
import { Button } from '../../../shared/Button'

const BuyDeckShowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const DeckBreakdownContainer = styled.div`
    height: 100%;
    width: 30%;
    background-color: ${({ theme }) => theme.secondary};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

const CardsContainer = styled.div`
    height: ${({ $windowDimensions }) => $windowDimensions.height - 220}px;
    width: 70%;
    background-color: ${({ theme }) => theme.lightSecondary};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
`

const ListHeader = styled.li`
    list-style-type: none;
    font-weight: bold;
    font-size: 2rem;
`

const ListItem = styled.li`
    font-size: 1.5rem;
    font-weight: normal;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const TABS = ['Base', 'Base Set 2']

export function BuyDeckShow() {
    const { deckName: deckNameParams } = useParams()
    const { windowDimensions } = useContext(AppContext)
    const [activeTab, setActiveTab] = useState(TABS[0])
    const [baseDeck, setBaseDeck] = useState()
    const [base2Deck, setBase2Deck] = useState()

    useEffect(() => {
        async function getPrebuiltDeck() {
            try {
                const deck = await fetchPreBuiltDeck(deckNameParams)
                setBaseDeck(deck.baseDeck)
                setBase2Deck(deck.base2Deck)
            } catch (error) {
                messageContext.handleAddMessage({ id: Date.now(), message: error.message, type: 'error' })
            }
        }
        getPrebuiltDeck()
    }, [])

    async function handleBuyDeck() {
        try {
            if (activeTab === TABS[0]) {
                await buyPreBuiltDecks(deckNameParams, baseDeck)
                messageContext.handleAddMessage({ id: Date.now(), message: `${deckNameParams} was bought!`, type: 'success' })
            }
            if (activeTab === TABS[1]) {
                await buyPreBuiltDecks(deckNameParams, base2Deck)
                messageContext.handleAddMessage({ id: Date.now(), message: `${deckNameParams} was bought!`, type: 'success' })
            }
        } catch (error) {
            messageContext.handleAddMessage({ id: Date.now(), message: error.message, type: 'error' })
        }
    }

    return (
        <BuyDeckShowContainer>
            <DeckBreakdownContainer>
                <ul>
                    <ListHeader>
                        Pokemon
                        <ul>
                            {baseDeck && baseDeck.pokemon.map((card) => (
                                <ListItem key={card.card._id}>{card.card.name} x{card.quantity}</ListItem>
                            ))}
                        </ul>
                    </ListHeader>
                    <ListHeader>
                        Trainer
                        <ul>
                        {baseDeck && baseDeck.trainer.map((card) => (
                            <ListItem key={card.card._id}>{card.card.name} x{card.quantity}</ListItem>
                        ))}
                        </ul>
                    </ListHeader>
                    <ListHeader>
                        Energy
                        <ul>
                        {baseDeck && baseDeck.energy.map((card) => (
                            <ListItem key={card.card._id}>{card.card.name} x{card.quantity}</ListItem>
                        ))}
                        </ul>
                    </ListHeader>
                </ul>
                <ButtonContainer>
                    <Button active={activeTab === TABS[0]} margin={'2px'} onClick={() => setActiveTab(TABS[0])}>View Base Deck</Button>
                    <Button active={activeTab === TABS[1]} margin={'2px'} onClick={() => setActiveTab(TABS[1])} >View Base Set 2 Deck</Button>
                </ButtonContainer>
                <Button margin={'2px'} onClick={handleBuyDeck}>Buy Deck - {activeTab}</Button>
            </DeckBreakdownContainer>
            <CardsContainer $windowDimensions={windowDimensions}>
                {baseDeck && activeTab === TABS[0] && baseDeck.pokemon.map((card) => (
                    <PokemonCard key={card.card._id} card={card.card} quantity={card.quantity} />
                ))}
                {baseDeck && activeTab === TABS[0] && baseDeck.trainer.map((card) => (
                    <PokemonCard key={card.card._id} card={card.card} quantity={card.quantity} />
                ))}
                {baseDeck && activeTab === TABS[0] && baseDeck.energy.map((card) => (
                    <PokemonCard key={card.card._id} card={card.card} quantity={card.quantity} />
                ))}
                {base2Deck && activeTab === TABS[1] && base2Deck.pokemon.map((card) => (
                    <PokemonCard key={card.card._id} card={card.card} quantity={card.quantity} />
                ))}
                {base2Deck && activeTab === TABS[1] && base2Deck.trainer.map((card) => (
                    <PokemonCard key={card.card._id} card={card.card} quantity={card.quantity} />
                ))}
                {base2Deck && activeTab === TABS[1] && base2Deck.energy.map((card) => (
                    <PokemonCard key={card.card._id} card={card.card} quantity={card.quantity} />
                ))}
            </CardsContainer>
        </BuyDeckShowContainer>
    )
}