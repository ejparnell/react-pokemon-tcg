import styled from 'styled-components'

const CardContainer = styled.div`
    width: 219px;
    height: 300px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.lightSecondary};
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
        transform: scale(1.05);
    }
`

const CardHeaderContainer = styled.h2`
    font-size: 2rem;
    text-align: center;
    color: ${props => props.theme.primary};
    padding: 2px;
`

const CardTextContainer = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: ${props => props.theme.primary};
    padding: 2px;
`

const CardImageContainer = styled.img`
    width: 70%;
    height: 70%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`

export function Card({ children }) {
    return (
        <CardContainer>
            { children }
        </CardContainer>
    )
}

export function CardHeader({ children }) {
    return (
        <CardHeaderContainer>
            { children }
        </CardHeaderContainer>
    )
}

export function CardImage ({ src }) {
    return (
        <CardImageContainer src={src} />
    )
}

export function CardText({ children }) {
    return (
        <CardTextContainer>
            { children }
        </CardTextContainer>
    )
}