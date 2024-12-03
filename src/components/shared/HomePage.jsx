import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Card, CardHeader, CardText, CardImage } from './Card'
import { linkStyles } from './styles'

const HomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export function HomePage({ data }) {
    return (
        <HomeContainer>
            {data.map((data) => (
                <Link key={data.header} style={linkStyles} to={data.link}>
                    <Card>
                        <CardHeader>{data.header}</CardHeader>
                        <CardText>{data.text}</CardText>
                        {data.image && <CardImage src={data.image} />}
                    </Card>
                </Link>
            ))}
        </HomeContainer>
    )
}