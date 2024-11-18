import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Card, CardHeader } from '../../shared/Card'
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
            <Link style={linkStyles} to='/buy-pack'>
                <Card>
                    <CardHeader>Buy a Booster Pack</CardHeader>
                </Card>
            </Link>
            <Link style={linkStyles} to='/binder'>
                <Card>
                    <CardHeader>Your Binder</CardHeader>
                </Card>
            </Link>
            <Link style={linkStyles} to='/battle'>
                <Card>
                    <CardHeader>Battle</CardHeader>
                </Card>
            </Link>
            <Link style={linkStyles} to='/trade'>
                <Card>
                    <CardHeader>Trade</CardHeader>
                </Card>
            </Link>
        </HomeContainer>
    )
}