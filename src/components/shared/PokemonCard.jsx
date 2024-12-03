import styled from 'styled-components'
import { ToolTip } from './ToolTip'

const QuantityContainer = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
`

const Quantity = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: ${({ theme }) => theme.lightSecondary};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    &:hover {
        transform: scale(1.1);
    }
`

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

export function PokemonCard({ card, greyedOut, quantity }) {
    return (
        <QuantityContainer>
            <Card>
                <CardImage src={card.images} alt={card.name} $greyedOut={greyedOut} />
            </Card>
            {quantity && <Quantity>
                <ToolTip text='Number of Cards'>
                    {quantity}
                </ToolTip>
            </Quantity>}
        </QuantityContainer>
    )
}