import React, { Component } from 'react';
import './Details.css';
import MoveRow from './PokemonMoveRow';
class Details extends Component{

  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      picture: '/static/images/img/' + this.props.number + this.props.name + '.png',
      moves: []

    }
  }

componentWillReceiveProps (){
    this.fetchInfo();
  }

  componentDidMount(){
    this.fetchInfo();
  }

  fetchInfo(){
    const url = this.props.url;
    fetch(url)
      .then(res => res.json())
      .then(res => res.moves)
      .then(res => res.map(post => (
      {
          name: post.move.name,
          url: post.move.url,
          number: post.move.url.substring(31,post.move.url.length - 1)
      })))
      .then(res => {this.setState(state => ({
        moves: res
      }))})
      .then(() => console.log(this.state.moves));
  }

  render() {
    return (
      <div className='pokemonDetails'>
        <div className='pokemonImg'>
          <img src={'/static/images/img/' + this.props.number + this.props.name + '.png'}/>
          <h1>{this.props.number}  {this.props.name}</h1>
        </div>
        <div className="pokemonMoveList">
          <h5>Moves learned</h5>
          {
            this.state.moves.map((item) => (
              <div id="poke">
                <MoveRow {...item} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
export default Details;
