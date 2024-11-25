import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { getBinder } from '../pokemon-services'
import { AppContext } from '../../App/App'
import { Header } from '../../shared/Header'
import { Paragraph } from '../../shared/Paragraph'
import { Dropdown } from '../../shared/Dropdown'
import { Pagination } from '../../shared/Pagination'

const BinderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export function Binder() {
    const [allBinderCards, setAllBinderCards] = useState([])
    const [currentCards, setCurrentCards] = useState([])
    const { messageContext } = useContext(AppContext)

    useEffect(() => {
        async function fetchBinder() {
            try {
                const binder = await getBinder()
                const binderCards = binder[0].cards
                const map = {}
                binderCards.forEach((card) => {
                    if (map[card._id]) {
                        map[card._id].quantity += 1
                    } else {
                        map[card._id] = { ...card, quantity: 1 }
                    }
                })
                setCurrentCards(Object.values(map))
                setAllBinderCards(Object.values(map))
                messageContext.handleAddMessage({ id: Date.now(), message: 'Binder loaded', type: 'success' })
            } catch (error) {
                messageContext.handleAddMessage({ id: Date.now(), message: error.message, type: 'error' })
            }
        }
        fetchBinder()
    }, [])

    function handleSearch(value, option) {
        if (value === 'number') setCurrentCards([...allBinderCards].sort((a, b) => Number(a.nationalPokedexNumbers[0]) - Number(b.nationalPokedexNumbers[0])))
        if (value === 'type') setCurrentCards([...allBinderCards].filter((card) => card.types.includes(option)))
        if (value === 'rarity') setCurrentCards([...allBinderCards].filter((card) => card.rarity === option))
    }

    // TODO: needs loading spinner of some kind
    return (
        <BinderContainer>
            <Header>Your Cards</Header>
            <Dropdown handleSearch={handleSearch} />
            {allBinderCards.length === 0 ? (
                <Paragraph>Go buy some card!!</Paragraph>
            ) : (
                <Pagination cards={currentCards} />
            )}
        </BinderContainer>
    )
}