import React, { Component } from 'react';

class PokemonHolder extends Component{

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      next: 'https://pokeapi.co/api/v2/pokemon/?offset=0',
      name: [],
      pokeUrl: [],
      count: 0
    };
  }

  componentDidMount(){
    this.retrieveList();
  }

  onClick(){
    this.retrieveList();
  }

  retrieveList(){
    var val = "";
    var im = "";
    const url = this.state.next;
    fetch(url).then(res=>res.json())
      .then(res => {
        this.setState({next: res.next});
        // this.setState(state => ({
        //   name: [ ...state.name, res.name ]
        // }));
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
          document.getElementById("poke").innerHTML =
            document.getElementById("poke").innerHTML +
            `<div style="display:flex;">
              <p>${val}</p>
              <img src='${im}'/>
              <p style="float:left;">${res[i].name}</p>
            </div>`;
        }
      })
      .then(res => console.log(res.next))
      .catch(error => console.log('error', error));
  }


  render(){
    return(
      <div ref="holder">
        <div id="poke"></div>
        <input type="button" value="Next" onClick={this.onClick}/>
        <br/>
        <br/>
      </div>
      );
  }
}
export default PokemonHolder;
