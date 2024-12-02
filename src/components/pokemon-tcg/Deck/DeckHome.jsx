import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from '../../shared/Header'
import { Card, CardHeader } from '../../shared/Card'
import { linkStyles } from '../../shared/styles'

const OptionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export function DeckHome() {
    return (
        <div>
            <Header>Deck Home</Header>
            <OptionsContainer>
            <Link style={linkStyles} to='/deck/create'>
                <Card>
                    <CardHeader>Create a Deck from Scratch</CardHeader>
                </Card>
            </Link>
            <Link style={linkStyles} to='/deck/pre-built'>
                <Card>
                    <CardHeader>View and Create Pre-Built Decks</CardHeader>
                </Card>
            </Link>
            </OptionsContainer>
        </div>
    )
}