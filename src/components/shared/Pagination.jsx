import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { PokemonCard } from './PokemonCard'
import { ToolTip } from './ToolTip'

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

// TODO: move these to the pokemon card component
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

const PokeCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export function Pagination({ cards }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [currentItems, setCurrentItems] = useState([])

    useEffect(() => {
        const currentItems = [...cards].slice(firstItemIndex, lastItemIndez)
        setCurrentItems(currentItems)
    }, [currentPage, cards])

    const ITEMS_PER_PAGE = 10
    const lastItemIndez = currentPage * ITEMS_PER_PAGE
    const firstItemIndex = lastItemIndez - ITEMS_PER_PAGE
    const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE)

    function handlePageChange(pageNumber) {
        if (pageNumber < 1 || pageNumber > totalPages) return
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <PokeCardContainer>
                {currentItems.map((card) => (
                    <QuantityContainer key={card._id}>
                        <PokemonCard card={card} />
                        <Quantity>
                            <ToolTip text='Duplicate cards'>
                                {card.quantity}
                            </ToolTip>
                        </Quantity>
                    </QuantityContainer>
                ))}
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
    )
}