import styled from 'styled-components'

const ParagraphContainer = styled.p`
    font-size: 1rem;
`

export function Paragraph({ children }) {
    return (
        <ParagraphContainer>
            { children }
        </ParagraphContainer>
    )
}