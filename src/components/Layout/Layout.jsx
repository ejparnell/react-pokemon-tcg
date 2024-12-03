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
    height: ${({ height }) => `${height}px` || '100vh'};
    box-sizing: border-box;
    padding: 5px;
`

export function Layout({ children, theme, height }) {
    return (
        <ThemeProvider theme={theme}>
            <Container height={height}>
                <Nav />
                <Main>
                    {children}
                </Main>
                <Footer />
            </Container>
        </ThemeProvider>
    )
}