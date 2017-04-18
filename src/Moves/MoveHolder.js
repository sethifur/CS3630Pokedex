import React, { Component } from 'react';
import MoveRow from './MoveRow';
import Details from './Details';
import './MoveHolder.css';
class MoveHolder extends Component{

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      next: 'https://pokeapi.co/api/v2/move/?offset=0',
      move: [],
      activeMove:{}
    };
  }

  componentDidMount(){
    this.retrieveList();
  }

  onClick(){
    this.retrieveList();
  }
  show(aMove, event){
    this.setState({activeMove: aMove}, this.refs.details.show(aMove));
  }
  retrieveList(){
    var val = "";
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
          var movenum = res[i].url.substring(31,endIndex);

          if(movenum > 99){val = "" + movenum;}
          else if(movenum >= 10 && movenum <= 99){val = "0" + movenum;}
          else if(movenum < 10){val = "00" + movenum;}
          else{console.log("wrong");}
          var obj = {
            number:val,
            name:res[i].name,
            url:res[i].url
          };

          this.setState(state => ({
            move: [...this.state.move, obj]
          }));
        }
      })
      .then(res => console.log(res.next))
      .catch(error => console.log('error', error));
  }


  render(){
    return(
      <div className="all">
        <div className="allMoves">
          <div ref="holder">
            <div id="moves">
            {
              this.state.move.map((res) => (
                <div id="it" onClick={ ()=>this.show(res) }>
			           <MoveRow {...res}/>
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
            <Details ref="details" {...this.state.activeMove} />
          </div>
      </div>
    );
  }
}
export default MoveHolder;
