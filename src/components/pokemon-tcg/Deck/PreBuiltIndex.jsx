import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Card, CardHeader } from '../../shared/Card'
import { linkStyles } from '../../shared/styles'
import { preBuiltDecks } from '../game-logic/preBuiltDecks'

const PreBuiltContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export function PreBuiltIndex() {
    return (
        <div>
            <PreBuiltContainer>
                {preBuiltDecks.map((deck) => (
                    <Link key={deck.name} style={linkStyles} to={`/deck/pre-built/${deck.name}`}>
                        <Card>
                            <CardHeader>{deck.name}</CardHeader>
                        </Card>
                    </Link>
                ))}
            </PreBuiltContainer>
        </div>
    )
}