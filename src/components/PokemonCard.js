import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: true
  }

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            {/* <img alt="oh no!" src={this.props.sprites.front} /> */}
            <img alt="oh no!" src={this.state.clicked? this.props.sprites.front : this.props.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
