import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Card, CardHeader, CardText } from '../../shared/Card'
import { linkStyles } from '../../shared/styles'

const HomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
`

// TODO: need to add images to the home page
export function Home() {
    return (
        <HomeContainer>
            <Link style={linkStyles} to='/buy'>
                <Card>
                    <CardHeader>Buy Cards</CardHeader>
                    <CardText>Buy decks and booster packs.</CardText>
                </Card>
            </Link>
            <Link style={linkStyles} to='/owned-cards'>
                <Card>
                    <CardHeader>Your Cards</CardHeader>
                    <CardText>View your cards.</CardText>
                </Card>
            </Link>
            {/* <Link style={linkStyles} to='/buy-pack'>
                <Card>
                    <CardHeader>Buy a Booster Pack</CardHeader>
                </Card>
            </Link>
            <Link style={linkStyles} to='/binder'>
                <Card>
                    <CardHeader>Your Binder</CardHeader>
                </Card>
            </Link>
            <Link style={linkStyles} to='/deck'>
                <Card>
                    <CardHeader>Your Decks</CardHeader>
                </Card>
            </Link> */}
            {/* <Link style={linkStyles} to='/battle'>
                <Card>
                    <CardHeader>Battle</CardHeader>
                </Card>
            </Link>
            <Link style={linkStyles} to='/trade'>
                <Card>
                    <CardHeader>Trade</CardHeader>
                </Card>
            </Link> */}

        </HomeContainer>
    )
}