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
    filter: ${({ $greyedOut }) => $greyedOut ? 'grayscale(100%)' : 'none'};
`

export function PokemonCard({ card, greyedOut }) {
    return (
        <Card>
            <CardImage src={card.images} alt={card.name} $greyedOut={greyedOut} />
        </Card>
    )
}