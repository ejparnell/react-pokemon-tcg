import styled from 'styled-components'
import { useState } from 'react'

const CardContainer = styled.div`
  perspective: 1000px;
  width: 219px;
  height: 300px;
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
  transform: ${(props) => (props.$isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center;
`

const CardBack = styled(CardFace)`
  background-color: blue;
`

const CardFront = styled(CardFace)`
  transform: rotateY(180deg);
  background-color: pink;
`

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
 `

export function PokemonCard({ card, handleOpenBoosterPack }) {
    const [isFlipped, setIsFlipped] = useState(false)
    
    function handleClick(event) {
        if (event.target.alt === 'Pokemon Card Back') {
            setIsFlipped(true)
        } else {
            handleOpenBoosterPack(card)
            setIsFlipped(false)
        }
    }
  
    return (
      <CardContainer onClick={handleClick}>
        <Card $isFlipped={isFlipped}>
          <CardBack>
            <CardImage src={'../../../../public/cardBack.jpg'} alt={'Pokemon Card Back'} />
          </CardBack>
          <CardFront>
            <CardImage src={card.images.large} alt={card.name} />
          </CardFront>
        </Card>
      </CardContainer>
    )
}