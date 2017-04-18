import React, { Component } from 'react';
import './PokemonHolder.css';
import PokemonRow from './PokemonRow';
import Details from './Details';
//import Details from './Details';

class PokemonHolder extends Component{

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.show = this.show.bind(this);
    this.state = {
      next: 'https://pokeapi.co/api/v2/pokemon/?offset=0',
      pokemon: [],
      activePokemon: {
        number:"001",
        sprite:"",
        name:"bulbasaur",
        url:"https://pokeapi.co/api/v2/pokemon/1/"
      }
    };
  }

  componentDidMount(){
    this.retrieveList();
  }

  onClick(){
    this.retrieveList();
  }

  show(aPokemon, event){
    this.setState({activePokemon: aPokemon}, this.refs.details.show(aPokemon));

    //this.displayDetails();
    //console.log(this.state.activePokemon);
  }

  retrieveList(){
    var val = "";
    var im = "";
    const url = this.state.next;
    fetch(url).then(res => res.json())
      .then(res => {
        this.setState({next: res.next});
        return res;
      })
      .then(res => res.results)
      .then(res => res.map(post => ({
        name: post.name,
        url: post.url
      }))).then(res => {
        for(var i = 0; i < 20; i++)
        {
          var endIndex = res[i].url.length - 1;
          var pokenum = res[i].url.substring(34,endIndex);
          if(pokenum > 99){
            im = "/CS3630Pokedex/static/images/spr/" + pokenum + "MS.png";
            val = "" + pokenum;
          }
          else if(pokenum >= 10 && pokenum <= 99){
            im = "/CS3630Pokedex/static/images/spr/0" + pokenum + "MS.png";
            val = "0" + pokenum;
          }
          else if(pokenum < 10){
            im = "/CS3630Pokedex/static/images/spr/00" + pokenum + "MS.png";
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
      .catch(error => console.log('error', error));
  }


  render(){
    return(
      <div className="all">
        <div className="allPokemon">
          <div className="holder">
            {
              this.state.pokemon.map((item) => (
                  <div id="poke" onClick={ ()=>this.show(item) }>
			              <PokemonRow {...item} />
                  </div>
		          ))
            }
            <input type="button" value="Next" onClick={this.onClick}/>
            <br/>
            <br/>
          </div>
        </div>
        <div className="deets">
          <Details ref="details" {...this.state.activePokemon} />
        </div>
      </div>
      );
  }
}
export default PokemonHolder;
