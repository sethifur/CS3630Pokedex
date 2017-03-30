
import React, { Component } from 'react';

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
            im = "/static/images/items/" + res[i].name + ".png";
            val = "" + itemnum;

          document.getElementById("item").innerHTML =
            document.getElementById("item").innerHTML +
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
        <div id="item"></div>
        <input type="button" value="Next" onClick={this.onClick}/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default ItemHolder;
