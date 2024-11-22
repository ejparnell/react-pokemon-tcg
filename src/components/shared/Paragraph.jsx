import styled from 'styled-components'

const ParagraphContainer = styled.p`
    font-size: ${({ $size }) => $size || '1rem'};
`

export function Paragraph({ children, size }) {
    return (
        <ParagraphContainer $size={size}>
            { children }
        </ParagraphContainer>
    )
}