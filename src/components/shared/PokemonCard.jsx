import styled from 'styled-components'

const Card = styled.div`
    width: 219px;
    height: 300px;
    margin: 15px;
`

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export function PokemonCard({ card }) {
    return (
        <Card>
            <CardImage src={card.images} alt={card.name} />
        </Card>
    )
}