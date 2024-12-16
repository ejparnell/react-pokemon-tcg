import { useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { AppContext } from '../App/App'

const Container = styled.div`
    grid-area: main;
    display: flex;
    flex-direction: column;
`

export default function Main({ children }) {
    const mainRef = useRef()
    const { windowDimensions } = useContext(AppContext)

    useEffect(() => {
        if (mainRef.current) {
            windowDimensions.setMainHeight(mainRef.current.offsetHeight)
        }
      }, [])

    return (
        <Container ref={mainRef}>
            { children }
        </Container>
    )
}