import styled from 'styled-components'

const ButtonContainer = styled.button`
    background-color: ${({ theme, active }) => (active ? theme.lightSecondary : theme.primary)};
    color: ${({ theme, active }) => (active ? theme.primary : theme.lightSecondary)};
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
    font: inherit;
    margin: ${({ margin }) => margin};
    
    &:hover {
        background-color: ${props => props.theme.darkSecondary};
    }
`

export function Button({ children, onClick, margin, active }) {
    return (
        <ButtonContainer onClick={onClick} margin={margin} active={active}>
            { children }
        </ButtonContainer>
    )
}