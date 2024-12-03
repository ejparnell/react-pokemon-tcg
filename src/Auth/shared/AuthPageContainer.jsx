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
            <SplayedCardsImage />
            {children}
        </Container>
    )
}