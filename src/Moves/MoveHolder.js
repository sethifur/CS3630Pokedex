
import React, { Component } from 'react';

class MoveHolder extends Component{

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      next: 'https://pokeapi.co/api/v2/move/?offset=0',
      name: [],
      itemUrl: [],
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
          var movenum = res[i].url.substring(31,endIndex);

          if(movenum > 99){val = "" + movenum;}
          else if(movenum >= 10 && movenum <= 99){val = "0" + movenum;}
          else if(movenum < 10){val = "00" + movenum;}
          else{console.log("wrong");}
          
          document.getElementById("move").innerHTML =
            document.getElementById("move").innerHTML +
            `<div style="display:flex;">
              <p style="float:left;">${val} ${res[i].name}</p>
            </div>`;
        }
      })
      .then(res => console.log(res.next))
      .catch(error => console.log('error', error));
  }


  render(){
    return(
      <div ref="holder">
        <div id="move"></div>
        <input type="button" value="Next" onClick={this.onClick}/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default MoveHolder;
