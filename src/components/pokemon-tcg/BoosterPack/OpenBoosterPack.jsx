import styled from 'styled-components'
import { PokemonCard } from './PokemonCard'

const PokemonContainer = styled.div`
    position: absolute;
    z-index: ${({ $index }) => $index};
`

export function OpenBoosterPack({ boosterPack, setBoosterPack }) {

    function handleOpenBoosterPack(event) {
        const newBoosterPack = [...boosterPack]
        newBoosterPack.pop()
        setBoosterPack(newBoosterPack)
    }

    

    return (
        <div>
            <h2>Open Booster Pack</h2>
            {boosterPack.map((card, index) => (
            <PokemonContainer key={index} $index={index}>
                <PokemonCard card={card} handleOpenBoosterPack={handleOpenBoosterPack} name='unopened'/>
            </PokemonContainer>
        ))}
        </div>
    )
}