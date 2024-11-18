import styled from 'styled-components'

const ButtonContainer = styled.button`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.lightSecondary};
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
        background-color: ${props => props.theme.darkSecondary};
    }
`

export function Button({ children }) {
    return (
        <ButtonContainer>
            { children }
        </ButtonContainer>
    )
}