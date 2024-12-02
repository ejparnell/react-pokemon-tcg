import styled from 'styled-components'
import { useState, useContext } from 'react'

import { AppContext } from '../../App/App'
import { POKEMON_BOOSTER_PACKS } from '../game-logic/constants'
import { buyBoosterPack } from '../pokemon-services'
import { OpenBoosterPack } from './OpenBoosterPack'
import { Header } from '../../shared/Header'
import { Card, CardHeader, CardImage } from '../../shared/Card'

const BuyBoosterPackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const BuyBoosterPackCard = styled.div`
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

export function BuyBoosterPack() {
    const [boosterPack, setBoosterPack] = useState(null)
    const { userContext, messageContext } = useContext(AppContext)

    async function handleBuyBoosterPack(event) {
        try {
            const { boughtPack } = await buyBoosterPack(event.target.innerText, userContext.user._id)
            setBoosterPack(boughtPack)
            messageContext.handleAddMessage({ id: Date.now(), message: `You bought a ${boughtPack.name} booster pack!`, type: 'success' })
        } catch (error) {
            messageContext.handleAddMessage({ id: Date.now(), message: error.message, type: 'error' })
        }
    }

    return (
        <>
            <Header>Buy a Booster Pack</Header>
            {boosterPack ? (
                <OpenBoosterPack boosterPack={boosterPack} setBoosterPack={setBoosterPack} />
            ) : (
                <BuyBoosterPackContainer onClick={handleBuyBoosterPack}>
                    {POKEMON_BOOSTER_PACKS.map((pack) => (
                        <Card key={pack}>
                            <CardHeader>{pack}</CardHeader>
                        </Card>
                    ))}
                </BuyBoosterPackContainer>
            )}

        </>
    )
}