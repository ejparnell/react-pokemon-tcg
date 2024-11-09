import styled from 'styled-components'
import { useState, useContext } from 'react'

import { AppContext } from '../../App/App'
import { POKEMON_BOOSTER_PACKS } from '../game-logic/constants'
import { getBoosterPack } from '../pokemon-services'
import { createBoosterPack } from '../game-logic/createBoosterPack'
import { PokemonCard } from './PokemonCard'
import { OpenBoosterPack } from './OpenBoosterPack'

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
    const { userContext, messageContext } = useContext(AppContext)
    const [boosterPack, setBoosterPack] = useState(null)

    async function handleBuyBoosterPack(event) {
        try {
            const packAndEnergy = await getBoosterPack(event.target.innerText)
            const pack = createBoosterPack(packAndEnergy.packData.data, packAndEnergy.energyData)
            setBoosterPack(pack)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>Buy a Booster Pack</h1>
            {boosterPack ? (
                <OpenBoosterPack boosterPack={boosterPack} setBoosterPack={setBoosterPack} />
            ) : (
                <BuyBoosterPackContainer>
                    {POKEMON_BOOSTER_PACKS.map((pack) => (
                        <BuyBoosterPackCard onClick={handleBuyBoosterPack} key={pack}>{pack}</BuyBoosterPackCard>
                    ))}

                </BuyBoosterPackContainer>
            )}

        </>
    )
}