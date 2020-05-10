import React, { Component } from 'react'
import './Pokecard.css';
const POKE_API='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// if the number smaller than 999, then add 00 in front of id.
// slice to take last 3 digits.
// this ensures there is always 3 digits for the API. e.g 001, 011, 111
let getThreeDigits = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${getThreeDigits(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name}/>
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard
