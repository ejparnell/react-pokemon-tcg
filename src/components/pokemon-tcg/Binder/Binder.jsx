import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { getBinder } from '../pokemon-services'
import { PokemonCard } from './PokemonCard'
import { AppContext } from '../../App/App'

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
`

export function Binder() {
    const [cards, setCards] = useState([])
    const { userContext, messageContext } = useContext(AppContext)

    useEffect(() => {
        async function fetchBinder() {
            try {
                const binder = await getBinder()
                setCards(binder[0].cards)
                messageContext.handleAddMessage({ id: Date.now(), message: 'Binder loaded', type: 'success' })
            } catch (error) {
                messageContext.handleAddMessage({ id: Date.now(), message: error.message, type: 'error' })
            }
        }
        fetchBinder()
    }, [])

    return (
        <CardContainer>
            {cards === 0 ? (
                <>Go buy some card!!</>
            ) : (
                cards.map((card) => (
                    <PokemonCard key={card._id} card={card} />
                ))
            )}
        </CardContainer>
    )
}