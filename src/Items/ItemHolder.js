
import React, { Component } from 'react';
import './ItemHolder.css';

class ItemHolder extends Component{

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      next: 'https://pokeapi.co/api/v2/item/?offset=0',
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
          var itemnum = res[i].url.substring(31,endIndex);

          if(itemnum > 99){val = "" + itemnum;}
          else if(itemnum >= 10 && itemnum <= 99){val = "0" + itemnum;}
          else if(itemnum < 10){val = "00" + itemnum;}
          else{console.log("wrong");}

          if(res[i].name.substring(0,2) !== 'tm'){
            im = "/static/images/items/" + res[i].name + ".png";
          }else{
            im = "/static/images/items/tm-normal.png";
          }
          document.getElementById("item").innerHTML =
            document.getElementById("item").innerHTML +
            `<div style="display:flex; height:40px; align-items:center;">
              <p>${val}</p>
              <img className="itemImg" src='${im}' style="height:30px;"/>
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
        <div id="item"></div>
        <input type="button" value="Next" onClick={this.onClick}/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default ItemHolder;
