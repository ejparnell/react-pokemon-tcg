import styled from 'styled-components'

import { SplayedCardsImage } from '../../components/shared/SplayedCardsImage'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export function AuthPageContainer({ children }) {
    return (
        <Container>
            <SplayedCardsImage image={'https://images.pokemontcg.io/base5/55_hires.png'} />
            {children}
        </Container>
    )
}