
import React, { Component } from 'react';
import './ItemHolder.css';
import ItemRow from './ItemRow';
import Details from './Details';

class ItemHolder extends Component{

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      next: 'https://pokeapi.co/api/v2/item/?offset=0',
      activeItem: {},
      item: []
    };
  }

  componentDidMount(){
    this.retrieveList();
  }

  onClick(){
    this.retrieveList();
  }

  show(anItem, event){
    this.setState({activeItem: anItem}, this.refs.details.show(anItem));
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

          im = "/CS3630Pokedex/static/images/items/" + res[i].name + ".png";
          if(res[i].name.includes("data-card")){
            im = "/CS3630Pokedex/static/images/items/data-card.png";
          }
          var obj = {
            number:val,
            sprite:im,
            name:res[i].name,
            url:res[i].url
          };

          this.setState(state => ({
            item: [...this.state.item, obj]
          }));
        }
      })
      .then(res => console.log(res.next))
      .catch(error => console.log('error', error));
  }


  render(){
    return(
      <div className="all">
        <div className="allItems">
          <div ref="holder">
            <div id="item">
            {
              this.state.item.map((res) => (
                <div id="it" onClick={ ()=>this.show(res) }>
			           <ItemRow {...res}/>
                </div>
		          ))
            }
            </div>
            <input type="button" value="Next" onClick={this.onClick}/>
            <br/>
            <br/>
            </div>
          </div>
          <div className="deets">
            <Details ref="details" {...this.state.activeItem} />
          </div>
      </div>
    );
  }
}
export default ItemHolder;
