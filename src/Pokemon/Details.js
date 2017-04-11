import React, { Component } from 'react';
import './Details.css';
import MoveRow    from './PokemonMoveRow';
import AbilityRow from './PokemonAbilityRow';
import StatRow    from './PokemonStatRow';
import TypeRow    from './PokemonTypeRow';

class Details extends Component{

  constructor(props) {
    super(props);
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      picture: "/static/images/img/001Bulbasaur.png",
      name: "bulbasaur",
      number: "001",
      base_experience: 64,
      height: 7,
      weight: 69,
      moves: [],
      abilities: [],
      types: [],
      stats: []
    }
  }

  show(pokemon){
    this.setState({
      name: pokemon.name,
      number: pokemon.number,
      url: pokemon.url,
      picture: '/static/images/img/' + pokemon.number + pokemon.name + '.png'}
      , this.fetchInfo());
  }

  componentDidMount(){
    this.fetchInfo();
  }

  fetchInfo(){
    const url = this.props.url;
    fetch(url)
      .then(res => res.json())
      .then(res => res)
      .then(res => {this.setState(state => ({
          height: res.height,
          weight: res.weight,
          base_experience: res.base_experience
        }))
        return res;
      })
      .then(res => {this.setState(state => ({
        moves : res.moves.map(post => ({
            name: post.move.name,
            url: post.move.url,
            number: post.move.url.substring(31,post.move.url.length - 1)
        }))}))
        return res;
      })
      .then(res => {this.setState(state => ({
        abilities: res.abilities.map(post => ({
            name: post.ability.name,
            url: post.ability.url,
            number: post.ability.url.substring(35,post.ability.url.length - 1)
        }))}))
        return res;
      })
      .then(res => {this.setState(state => ({
        types: res.types.map(post => ({
            name: post.type.name,
            url: post.type.url,
            number: post.type.url.substring(32,post.type.url.length - 1)
        }))}))
        return res;
      })
      .then(res => {this.setState(state => ({
        stats: res.stats.map(post => ({
            base_stat: post.base_stat,
            name: post.stat.name,
            url: post.stat.url,
            number: post.stat.url.substring(32,post.stat.url.length - 1)
        }))}))
        return res;
      })
  }

  render() {
    return (
      <div className='pokemonDetails'>
        <div className="imageDesign">
          <div className='pokemonImg'>
            <img src={'/static/images/img/' + this.state.number + this.state.name + '.png'}/>
            <h1>{this.state.number}  {this.state.name}</h1>
          </div>
          <div className="pokemonTypeList">
            <h6>Height: {this.state.height}m</h6>
            <h6>Weight: {this.state.weight}kg</h6>
            <h6>Base Expirience: {this.state.base_experience}xp</h6>
            {
              this.state.types.map((typeIndex) => (
                <div className="type">
                  <TypeRow {...typeIndex} />
                </div>
              ))
            }
          </div>
        </div>
        <div className="pokemonMoveList">
          <h5>Moves learned</h5>
          {
            this.state.moves.map((moveIndex) => (
              <div id="move">
                <MoveRow {...moveIndex} />
              </div>
            ))
          }
        </div>
        <div className="lists">
          <div className="pokemonAbilityList">
            <h5>Abilities</h5>
            {
              this.state.abilities.map((abilityIndex) => (
                <div id="ability">
                  <AbilityRow {...abilityIndex} />
                  </div>
                ))
            }
          </div>
          <div className="pokemonStatsList">
            <h5>Stats</h5>
            {
              this.state.stats.map((statIndex) => (
                <div id="stat">
                  <StatRow {...statIndex} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
export default Details;
