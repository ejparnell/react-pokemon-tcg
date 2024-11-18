import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Image = styled.img`
    width: 100px;
    height: 100px;
`
// TODO: need a new image. Something bigger
export function AuthPageContainer({ children }) {
    return (
        <Container>
            <Image src='../../public/pixil-frame-0.png' alt='Pixil art Pokemon Ball' />
            {children}
        </Container>
    )
}