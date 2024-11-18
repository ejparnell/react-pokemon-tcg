import styled from 'styled-components'

const CardContainer = styled.div`
    width: 219px;
    height: 300px;
    margin: 1rem;
    display: flex;
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
    margin: 0;
    text-align: center;
    align-self: flex-start;
    margin-top: 20px;
    color: ${props => props.theme.primary};
`

// TODO: After getting home images, update this to use an image
const CardImageContainer = styled.img`
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