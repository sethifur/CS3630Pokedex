import React, { Component } from 'react';
import './PokemonHolder.css';
import PokemonRow from './PokemonRow';

class PokemonHolder extends Component{

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.expandPoke = this.expandPoke.bind(this);
    this.state = {
      next: 'https://pokeapi.co/api/v2/pokemon/?offset=0',
      pokemon: []
    };
  }

  componentDidMount(){
    this.retrieveList();
  }

  onClick(){
    this.retrieveList();
  }

  expandPoke(){
    console.log("hello its me");
  }

  retrieveList(){
    var val = "";
    var im = "";
    const url = this.state.next;
    fetch(url).then(res=>res.json())
      .then(res => {
        this.setState({next: res.next});
        return res;
      })
      .then(res => res.results)
      .then(res => res.map(post => ({
        name: post.name,
        // this.setState(state => ({
        //   name: [ ...state.name, res.name ]
        // }));
        url: post.url
        // this.setState(state => ({
        //   url: [ ...state.url, post.url ]
        // }));
      }))).then(res => {
        for(var i = 0; i < 20; i++)
        {
          var endIndex = res[i].url.length - 1;
          var pokenum = res[i].url.substring(34,endIndex);
          if(pokenum > 99){
            im = "/static/images/spr/" + pokenum + "MS.png";
            val = "" + pokenum;
          }
          else if(pokenum >= 10 && pokenum <= 99){
            im = "/static/images/spr/0" + pokenum + "MS.png";
            val = "0" + pokenum;
          }
          else if(pokenum < 10){
            im = "/static/images/spr/00" + pokenum + "MS.png";
            val = "00" + pokenum;
          }else{
            console.log("wrong");
          }
          var obj = {
            number:val,
            sprite:im,
            name:res[i].name,
            url:res[i].url
          };

          this.setState(state => ({
            pokemon: [...this.state.pokemon, obj]
          }));
        }
      })
      .then(console.log(this.state))
      .catch(error => console.log('error', error));
  }


  render(){
    return(
      <div ref="holder">
        <div id="poke">
          this.state.pokemon.map(p =>
            <PokemonRow {...this.state.pokemon}/>
          );
        </div>
        <input type="button" value="Next" onClick={this.onClick}/>
        <br/>
        <br/>
      </div>
      );
  }
}
export default PokemonHolder;
