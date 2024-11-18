import styled, { ThemeProvider } from 'styled-components'

import { Nav } from '../Nav/Nav'
import { Footer } from '../Footer/Footer'
import { Main } from '../Main/Main'

const Container = styled.div`
    width: 100%;
    display: grid;
    grid:
        "header" auto
        "main" 1fr
        "footer" auto
        / 1fr;
    gap: 8px;
    height: 98vh;
`

export function Layout({ children, theme }) {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Nav />
                <Main>
                    {children}
                </Main>
                <Footer />
            </Container>
        </ThemeProvider>
    )
}