import React, { Component } from 'react';

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
    //for(var j = 0; j < 150; j++){
    var j = 150;
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url).then(res=>res.json())
      .then(res => res.results)
      .then(res => res.map(post => ({
        name: post.name,
        url: post.url
      }))).then(res => {
        for(var i = 0; i < 20; i++)
        {
          if((i+1) > 99){
            var im = "/static/images/spr/" + (i+1) + "MS.png";
            var val = "" + (i+1);
          }else if((i+1) < 10){
            var im = "/static/images/spr/00" + (i+1) + "MS.png";
            var val = "00" + (i+1);
          }else if((i+1) >= 10){
            var im = "/static/images/spr/0" + (i+1) + "MS.png";
            var val = "0" + (i+1);
          }
          document.getElementById("poke").innerHTML =
            document.getElementById("poke").innerHTML +
            `<div style="display:flex;">
              <p>${val}</p>
              <img src='${im}'/>
              <p style="float:left;">${res[i].name}</p>
            </div>`;
          console.log(res[i].name);
          console.log(res[i].url);
        }
      })
      .catch(error => console.log('error', error));
    }
  //}

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
