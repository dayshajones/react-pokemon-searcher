import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: "a"
  }

  componentDidMount() {
      fetch("http://localhost:3000/pokemon")
      .then((resp) => resp.json())
      .then(pokemon => this.setState({pokemon}))
  }

  changeSearchTerm = (termTyped) => {
    this.setState({
      searchTerm: termTyped
    })
  }

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon.filter((p) => {
          return p.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          })} />
      </Container>
    )
  }
}

export default PokemonPage
