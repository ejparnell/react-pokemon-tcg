import { useEffect, useState } from 'react'
import styled from 'styled-components'

const ScrollMenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-x: auto;
    width: 100%;
    justify-content: center;
    padding: 30px;
`

export default function ScrollMenu({ items }) {
    return (
        <ScrollMenuContainer>
            {items.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </ScrollMenuContainer>
    )
}