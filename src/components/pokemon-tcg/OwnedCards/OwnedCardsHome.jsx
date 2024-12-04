import styled from 'styled-components'
import { useContext, useEffect } from 'react'

import { AppContext } from '../../App/App'
import { fetchBinder } from '../pokemon-services'

const OwnedCardsHomeContainer = styled.div`
    height: ${({ $windowDimensions }) => $windowDimensions.height - 220}px;
`

export function OwnedCardsHome() {
    const { windowDimensions } = useContext(AppContext)

    useEffect(() => {
        async function getOwnedCards() {
            try {
                const ownedCards = await fetchBinder()
                console.log(ownedCards[0].cards)
            } catch (error) {
                console.error(error)
            }
        }
        getOwnedCards()
    }, [])

    return (
        <OwnedCardsHomeContainer $windowDimensions={windowDimensions}>

        </OwnedCardsHomeContainer>
    )
}