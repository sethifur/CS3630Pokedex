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
      picture: "/CS3630Pokedex/static/images/img/001Bulbasaur.png",
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
      picture: '/CS3630Pokedex/static/images/img/' + 
        pokemon.number + pokemon.name.replace(pokemon.name[0], pokemon.name[0].toUpperCase()) + '.png'}
      , this.fetchInfo(pokemon.url));
  }

  componentDidMount(){
    this.fetchInfo(this.state.url);
  }

  fetchInfo(url){
    //const url = this.props.url;
    fetch(url)
      .then(res => res.json())
      .then(res => res)
      .then(res => {this.setState(state => ({
          height: (res.height * .1).toFixed(1),
          weight: (res.weight * .1).toFixed(1),
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
      }).then(res => {
        console.log(this.state)
        console.log(res)
      })
  }

  render() {
    return (
      <div className='all'>

        <div className="one">
          <img src={this.state.picture} className="bigPic"/>
          <h3>{this.state.number}  {this.state.name}</h3>
          {
            this.state.types.map((typeIndex) => (
              <div className="type">
                <TypeRow {...typeIndex} />
              </div>
            ))
          }

          <table>
            <tr>
              <td>Height</td>
              <td>{this.state.height}m</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{this.state.weight}kg</td>
            </tr>
            <tr>
              <td>Base Xp</td>
              <td>{this.state.base_experience}</td>
            </tr>
          </table>
        </div>


        <div className="two">
        <div>
          <table>
          <tr>
            <th>Stats</th>
            <th>pts</th>
          </tr>
          {
            this.state.stats.map((statIndex) => (
                <StatRow {...statIndex} />
            ))
          }
          </table>
          <table>
          <tr>
            <th>Abilities</th>
          </tr>
          {
            this.state.abilities.map((abilityIndex) => (
                <AbilityRow {...abilityIndex} />
            ))
          }
          </table>
          </div>
          <div className="moverow">
          <h3>Moves Learned</h3>
          {
            this.state.moves.map((moveIndex) => (
              <div className="move">
                <MoveRow {...moveIndex} />
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
