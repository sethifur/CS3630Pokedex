import React, { Component } from 'react';
import "./Details.css";


class Details extends Component{

  constructor(props) {
    super(props);
    this.state = {
      url: "https://pokeapi.co/api/v2/item/1/",
      name: "master-ball",
      number: "001",
      category:"",
      cost:"",
      attributes:[],
      effect_entries:[]
    }
  }

  show(item){
    this.setState({url: item.url}, this.fetchInfo(item.url));
  }

  componentDidMount(){
    this.fetchInfo(this.state.url);
  }

  fetchInfo(url){
    fetch(url)
      .then(res => res.json())
      .then(res => {this.setState(state => ({
          name: res.name,
          cost: res.cost,
          category: res.category.name,
          sprite: res.sprites.default
        }))
        return res;
      })
      .then(res => {this.setState(state => ({
        attributes : res.attributes.map(post => ({
            name: post.name,
        }))}))
        return res;
      })
      .then(res => {this.setState(state => ({
        effect_entries : res.effect_entries.map(post => ({
            short_effect: post.short_effect,
        }))}))
        return res;
      })
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className="all">
        <div className="one">
          <div className="spriteName"><img src={this.state.sprite}/>{this.state.name}</div>
          <div>Cost:{this.state.cost} </div>
          <div>Category:{this.state.category}</div>

            <h4>attributes</h4>
            {
              this.state.attributes.map((item) => (
                <div id="attributes">
                  {item.name}
                </div>
              ))
            }
            <h4>effect entries</h4>
            {
              this.state.effect_entries.map((item) => (
                <div id="eentries">
                  {item.short_effect}
                </div>
              ))
            }
          </div>
      </div>
    )
  }
}
export default Details;
