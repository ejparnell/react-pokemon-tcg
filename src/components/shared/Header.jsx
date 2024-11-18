import styled from 'styled-components'

const HeaderContainer = styled.header`
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`

export function Header({ children }) {
    return (
        <HeaderContainer>
            { children }
        </HeaderContainer>
    )
}