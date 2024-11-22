import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { getBinder } from '../pokemon-services'
import { PokemonCard } from '../../shared/PokemonCard'
import { AppContext } from '../../App/App'
import { Header } from '../../shared/Header'
import { Paragraph } from '../../shared/Paragraph'
import { ToolTip } from '../../shared/ToolTip'
import { Dropdown } from '../../shared/Dropdown'

const ITEMS_PER_PAGE = 12

const BinderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const PokeCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const PaginationControls = styled.div`
    display: flex;
    justify-content: center;
`;

const PaginationChevron = styled.img`
    cursor: pointer;
    width: 40px;
`

const PaginationNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin: 0 0.5rem;
    color: ${({ $active, theme }) => $active ? theme.darkSecondary : theme.primary};
`

const QuantityContainer = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
`

const Quantity = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: ${({ theme }) => theme.lightSecondary};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    &:hover {
        transform: scale(1.1);
    }
`

export function Binder() {
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const { messageContext } = useContext(AppContext)

    const lastItemIndez = currentPage * ITEMS_PER_PAGE
    const firstItemIndex = lastItemIndez - ITEMS_PER_PAGE
    const currentItems = [...cards].slice(firstItemIndex, lastItemIndez)

    const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE)

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
                setCards(Object.values(map))
                messageContext.handleAddMessage({ id: Date.now(), message: 'Binder loaded', type: 'success' })
            } catch (error) {
                messageContext.handleAddMessage({ id: Date.now(), message: error.message, type: 'error' })
            }
        }
        fetchBinder()
    }, [])

    function handlePageChange(pageNumber) {
        if (pageNumber < 1 || pageNumber > totalPages) return
        setCurrentPage(pageNumber)
    }

    function handleSearch(value, option) {
        if (value === 'number') {
            setSearch([...cards].sort((a, b) => Number(a.nationalPokedexNumbers[0]) - Number(b.nationalPokedexNumbers[0])))
        }
        if (value === 'type') {
            setSearch([...cards].filter((card) => card.types.includes(option)))
        }
        if (value === 'rarity') {
            setSearch([...cards].filter((card) => card.rarity === option))
        }
    }

    return (
        <BinderContainer>
            <Header>Your Cards</Header>
            <Dropdown handleSearch={handleSearch} />
            {cards.length === 0 ? (
                <Paragraph>Go buy some card!!</Paragraph>
            ) : (
                <>
                    <PokeCardContainer>
                        {search ? (search.map((card) => (
                            <QuantityContainer key={card._id}>
                                <PokemonCard card={card} />
                                <Quantity>
                                    <ToolTip text='Duplicate cards'>
                                        {card.quantity}
                                    </ToolTip>
                                </Quantity>
                            </QuantityContainer>
                        ))) : (
                            currentItems.map((card) => (
                                <QuantityContainer key={card._id}>
                                    <PokemonCard card={card} />
                                    <Quantity>
                                        <ToolTip text='Duplicate cards'>
                                            {card.quantity}
                                        </ToolTip>
                                    </Quantity>
                                </QuantityContainer>
                            ))
                        )}
                    </PokeCardContainer>
                    <PaginationControls>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <PaginationNumber $active={index + 1 === currentPage} key={index}>
                                {index === 0 && (
                                    <PaginationChevron
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        src='../../../../public/chevron_left.svg' />
                                )}
                                {index + 1}
                                {index === totalPages - 1 && (
                                    <PaginationChevron
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        src='../../../../public/chevron_right.svg' />
                                )}
                            </PaginationNumber>
                        ))}
                    </PaginationControls>
                </>
            )}
        </BinderContainer>
    )
}