import { useState } from 'react'
import styled from 'styled-components'

const TooltipWrapper = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
`;

const TooltipBox = styled.div`
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    color: #fff;
    background-color: #333;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    z-index: 1000;
    visibility: visible;
    opacity: 0.9;
`;


export function ToolTip({ children, text }) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <TooltipWrapper
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && <TooltipBox>{text}</TooltipBox>}
        </TooltipWrapper>
    )
}