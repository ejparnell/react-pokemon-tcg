import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const HomeCard = styled.div`
    width: 200px;
    height: 200px;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        transform: scale(1.05);
    }
`

export function Home() {
    return (
        <HomeContainer>
            <Link to='/buy-pack'>
                <HomeCard>Buy a Booster Pack</HomeCard>
            </Link>
            <Link to='/binder'>
                <HomeCard>Your Binder</HomeCard>
            </Link>
            <Link to='/battle'>
                <HomeCard>Battle</HomeCard>
            </Link>
            <Link to='/trade'>
                <HomeCard>Trade</HomeCard>
            </Link>
        </HomeContainer>
    )
}