import React, { Component } from 'react'
import Pokedex from './Pokedex';

export class Pokegame extends Component {
  static defaultProps = {
    //TODO:  find a pokemon API to load pokemons from
    pokemon: [
      { id: 6, name: 'Charizard', type: 'fire', base_experience: 209 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 66 },
			{ id: 143, name: 'Snorlax', type: 'normal', base_experience: 154 },
			{ id: 129, name: 'Magikarp', type: 'water', base_experience: 20 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 82 },
			{ id: 150, name: 'Mewtwo', type: 'psychic', base_experience: 220 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 190 },
			{ id: 52, name: 'Meowth', type: 'normal', base_experience: 69 }
    ]
  }

  state = {
    seen: false
   };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    let deck1 = [];
    let deck2 = [...this.props.pokemon]
    while (deck1.length < deck2.length) {
      let randIndex = Math.floor(Math.random() * deck2.length);
      // take a random pokemon from deck 2
      let randPokemon = deck2.splice(randIndex, 1,)[0];
      deck1.push(randPokemon);
    }
    
    let exp1 = deck1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = deck2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    
    return (
      <div>
        <Pokedex pokemon={deck1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={deck2} exp={exp2} isWinner={exp2 > exp1}/>  
      </div>
    )
  }
}

export default Pokegame
