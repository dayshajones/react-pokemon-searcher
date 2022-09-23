import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ({pokemon}) => {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokemon.map((p) => <PokemonCard {...p} key={p.id} /> )} 
      </Card.Group>
    )
}

export default PokemonCollection
