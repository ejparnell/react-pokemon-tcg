import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getDeckPokemon, getBinder } from '../pokemon-services'
import { preBuiltDecks } from '../game-logic/preBuiltDecks'
import { PokemonCard } from '../../shared/PokemonCard'
import { Button } from '../../shared/Button'
import { linkStyles } from '../../shared/styles'

const DeckBuilderContainer = styled.div`
    width: 100%;

    display: grid;
    grid:
        "sidebar body" 1fr
        / auto 1fr;
    gap: 8px;
    min-height: 100%;
`

const DeckBuilderSidebar = styled.div`
    grid-area: sidebar;
    min-height: 100%;
`

const DeckBuilderSidebarHeader = styled.li`
    list-style-type: none;
    font-weight: bold;
    font-size: 1.5rem;
`

const DeckBuilderSidebarLi = styled.li`
    font-size: 1.2rem;
    font-weight: normal;
`

const DeckBuilderBody = styled.div`
    grid-area: body;
    min-height: 100%;
    background-color: ${({ theme }) => theme.lightSecondary};
    border-radius: 5px;
`

const DeckBuilderBodyTab = styled.button`
    border-radius: 5px 5px 0 0;
    border: none;
    color: ${({ theme, $active }) => ($active ? theme.primary : theme.lightSecondary)};
    cursor: pointer;
    font: inherit;
    font-size: 1.5rem;
    background-color: ${({ theme, $active }) => ($active ? theme.lightSecondary : theme.primary)};
`

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const DeckBuilderSummaryCard = styled.div`
    width: 219px;
    height: 300px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.secondary};
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const SubmitButton = styled.input`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.lightSecondary};
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: ${props => props.theme.darkSecondary};
    }
    font: inherit;
`

const Input = styled.input`
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.primary};
`

const TABS = ['All Cards', 'Deck Cards']

export function PreBuiltShow() {
    const { deckName } = useParams()
    const [prebuiltDeck, setPrebuiltDeck] = useState(null)
    const [card, setCards] = useState([])
    const [userCards, setUserCards] = useState([])
    const [currentCards, setCurrentCards] = useState([])
    const [activeTab, setActiveTab] = useState(TABS[0])
    const [builtDeck, setBuiltDeck] = useState([])
    const [inputDeckName, setInputDeckName] = useState('')

    useEffect(() => {
        async function getPokemon() {
            const foundDeck = preBuiltDecks.find((deck) => deck.name === deckName)
            setPrebuiltDeck(foundDeck)
            const allCards = [...foundDeck.deck.pokemon, ...foundDeck.deck.trainer, ...foundDeck.deck.energy]
            const arrayOfNames = allCards.map(card => card.name)
            const foundPokemon = await getDeckPokemon(arrayOfNames)
            const foundPokemonWithQuantity = foundPokemon.map(card => {
                const match = allCards.find(deckItem => deckItem.name === card.name)
                if (match) {
                    return { ...card, quantity: match.quantity }
                }
                return { ...card }
            })
            setCards(foundPokemonWithQuantity)
        }
        getPokemon()

        async function getUserCards() {
            const binder = await getBinder()
            setUserCards(binder[0].cards)
        }
        getUserCards()
    }, [])

    function handleShowCards(event) {
        const splitName = event.target.innerText.split(' ')
        splitName.pop()
        const name = splitName.join(' ')
        const foundCards = card.filter(card => card.name === name)
        const inUserCards = userCards.filter(card => card.name === name)

        const foundCardsWithHasCard = foundCards.map(card => {
            const match = inUserCards.find(userCard => userCard._id === card._id)
            if (match) {
                return { ...card, hasCard: true }
            }
            return { ...card, hasCard: false }
        })
        setCurrentCards(foundCardsWithHasCard)
    }

    function handleAddToDeck(card) {
        setBuiltDeck([...builtDeck, card])
    }

    function handleNameChange(event) {
        setInputDeckName(event.target.value)
    }

    return (
        <DeckBuilderContainer>
            <DeckBuilderSidebar>
                <ul>
                    <DeckBuilderSidebarHeader>
                        Pokemon:
                        <ul>
                            {prebuiltDeck && prebuiltDeck.deck.pokemon.map((pokemon) => (
                                <DeckBuilderSidebarLi onClick={handleShowCards} key={pokemon.name}>{pokemon.name} x{pokemon.quantity} </DeckBuilderSidebarLi>
                            ))}
                        </ul>
                    </DeckBuilderSidebarHeader>
                    <DeckBuilderSidebarHeader>
                        Trainer:
                        <ul>
                            {prebuiltDeck && prebuiltDeck.deck.trainer.map((trainer) => (
                                <DeckBuilderSidebarLi onClick={handleShowCards} key={trainer.name}>{trainer.name} x{trainer.quantity} </DeckBuilderSidebarLi>
                            ))}
                        </ul>
                    </DeckBuilderSidebarHeader>
                    <DeckBuilderSidebarHeader>
                        Energy:
                        <ul>
                            {prebuiltDeck && prebuiltDeck.deck.energy.map((energy) => (
                                <DeckBuilderSidebarLi onClick={handleShowCards} key={energy.name}>{energy.name} x{energy.quantity} </DeckBuilderSidebarLi>
                            ))}
                        </ul>
                    </DeckBuilderSidebarHeader>
                </ul>
            </DeckBuilderSidebar>
            <DeckBuilderBody>
                {TABS.map((tab) => (
                    <DeckBuilderBodyTab $active={tab === activeTab} key={tab} onClick={() => setActiveTab(tab)}>{tab}</DeckBuilderBodyTab>
                ))}
                {activeTab === TABS[0] &&
                    <CardsContainer>
                        {currentCards.map((card) => (
                            <CardContainer key={card._id}>
                                <PokemonCard card={card} greyedOut={!card.hasCard} />
                                {card.hasCard ? (
                                    <Button onClick={() => handleAddToDeck(card)}>Add to Deck</Button>
                                ) : (
                                    <Button>
                                        <Link style={linkStyles} to='/buy-pack'>Buy Pack - {card.set}</Link>
                                    </Button>
                                )}
                            </CardContainer>
                        ))}
                    </CardsContainer>
                }
                {activeTab === TABS[1] &&
                    <CardsContainer>
                        {builtDeck.length === 0 ? (
                            <>Add some cards</>
                        ) : (
                            <>
                            <DeckBuilderSummaryCard>
                                        Building Deck Summary
                                        <Form>
                                            <label htmlFor='deck-name'>Deck Name:</label>
                                            <Input type='text' id='deck-name' name='deck-name' value={inputDeckName} onChange={handleNameChange} />
                                            <SubmitButton type='submit' value='Save Deck' />
                                        </Form>
                                        Current Number of Cards: {builtDeck.length} (limit 60)
                                    </DeckBuilderSummaryCard>
                            {builtDeck.map((card) => (
                                <CardContainer key={card._id}>
                                    <PokemonCard card={card} />
                                    
                                </CardContainer>
                            ))}
                            </>
                        )}
                    </CardsContainer>
                }
            </DeckBuilderBody>
        </DeckBuilderContainer>
    )
}
