import React, { Component } from 'react';
import pic from '../spr';
class PokemonHolder extends Component{

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      next: '',
      name: [],
      pokeUrl: [],
      count: 0
    };
  }

  onClick(){
    const url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url).then(res=>res.json())
      .then(res => res.results)
      .then(res => res.map(post => ({
        name: post.name,
        url: post.url
      }))).then(res => {
        for(var i = 0; i < 20; i++)
        {
          if(i > 99){
            var im = pic.{i + "MS.png"};
          }else if(i < 10){
            var im = pic.{"00" + i + "MS.png"};
          }else {
            var im = pic.{"0" + i + "MS.png"};
          }

          document.getElementById("poke").innerHTML =
          document.getElementById("poke").innerHTML + `<img src={im}/><h3>${res[i].name}</h3><br />`;
          console.log(res[i].name);
          console.log(res[i].url);
        }
      })
      .catch(error => console.log('error', error));

  }

  blah({name,url}){
    console.log(name + " " + url);
  }

  render(){
    return(
      <div ref="holder">
        <input type="button" value="click" onClick={this.onClick}/>
        <div id="poke"></div>
      </div>
      );
  }
}
export default PokemonHolder;
