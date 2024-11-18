import styled from 'styled-components'

import { Paragraph } from '../shared/Paragraph'

const Container = styled.footer`
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.lightSecondary};
    border-radius: 0 0 15px 15px;
`;

export function Footer() {
    return (
        <Container>
            <Paragraph>Create by Elizabeth Parnell</Paragraph>
        </Container>
    )
}