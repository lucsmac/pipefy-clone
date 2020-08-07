import React from 'react'
import { Container, Label } from './styles'

const Card = ({ data }) => {
  return (
    <div>
      <Container>
        <header>
          {data.labels.map(label => <Label key={label} color={label} />)}
        </header>
        <p>{data.content}</p>
        {data.user && <img src={data.user} alt="Avatar" />}
      </Container>
    </div>
  )
}

export default Card
