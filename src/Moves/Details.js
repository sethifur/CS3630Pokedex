import React, { Component } from 'react';
import './Details.css';

class Details extends Component{
  constructor(props) {
    super(props);
    this.state = {
      next: 'https://pokeapi.co/api/v2/move/?offset=0',
      name: "",
      number:"001",
      url:'https://pokeapi.co/api/v2/move/1/',
      accuracy:'',
      damage_class:'',
      ailment:'',
      ailment_chance:'',
      category:'',
      crit_rate:'',
      drain:'',
      flinch_chance:'',
      healing:'',
      max_hits:'',
      max_turns:'',
      min_hits:'',
      min_turns:'',
      stat_chance:'',
      power:'',
      pp:'',
      priority:'',
      target:'',
      type:'',
      normal_use_after:[],
      normal_use_before:[],
      effect_entries:[],
      stat_change:[],
    };
  }

  show(move){
    this.setState({
      name: move.name,
      number: move.number,
      url: move.url}
      , this.fetchInfo(move.url));
  }

  componentDidMount(){
    this.fetchInfo(this.state.url);
  }

  fetchInfo(url){
    fetch(url)
      .then(res => res.json())
      .then(res => res)
      .then(res => {this.setState(state => ({
          name: res.name,
          power: res.power,
          pp: res.pp,
          priority: res.priority,
          accuracy: res.accuracy,
          effect_chance: res.effect_chance,
          damage_class: res.damage_class.name,
          target: res.target.name,
          type: res.type.name,
          ailment: res.meta.ailment.name,
          category: res.meta.category.name,
          ailment_chance: res.meta.ailment_chance,
          crit_rate: res.meta.crit_rate,
          drain:  res.meta.drain,
          flinch_chance: res.meta.flinch_chance,
          healing: res.meta.healing,
          max_hit: res.meta.max_hits,
          max_turns: res.meta.max_turns,
          stat_changes: res.meta.stat_changes
        }))
        return res;
      })
      .then(res => {
        if(res.contest_combos.normal.use_after){
        this.setState(state => ({
        normal_use_after : res.contest_combos.normal.use_after.map(post => ({
            name: post.name
        }))}))}else{
          this.setState(state => ({
          normal_use_after : []
        }))}
        return res;
      })
      .then(res => {
        if(res.contest_combos.normal.use_before){
        this.setState(state => ({
        normal_use_before : res.contest_combos.normal.use_before.map(post => ({
            name: post.name
        }))}))}else{
          this.setState(state => ({
          normal_use_before : []}))
        }
        return res;
      })
      .then(res => {
        if(res.stat_changes){
        this.setState(state => ({
        stat_change : res.stat_changes.map(post => ({
          change: post.change,
          stat_effected: post.stat.name
        }))
      }))}else{
        this.setState(state => ({
          stat_change : []
        }))
        }
        return res;
      })
      .then(res => {
        if(res.effect_entries){
        this.setState(state => ({
        effect_entries : res.effect_entries.map(post => ({
            name: post.effect
        }))}))}else{
          this.setState(state => ({
            effect_entries : []
          }))
        }
        return res;
      }).then(res => console.log(res))
  }

  render(){
    return(
      <div className="all">
        <div className="one">
          <h3>{this.state.number}-{this.state.name}</h3>

          <p>PP: {this.state.pp}</p>

          <p>Power: {this.state.power}</p>

          <p>Accuracy: {this.state.accuracy}</p>

          <p>Priority: {this.state.priority}</p>

          <p>Ailment: {this.state.ailment}</p>

          <p>Ailment Chance: {this.state.ailment_chance}</p>

          <p>Chance Flinch: {this.state.flinch_chance}</p>

          <p>Damage: {this.state.damage_class}  {this.state.type}</p>

          <p>Target: {this.state.target}</p>

          <p>Max Hits: {this.state.max_hit}</p>

          <p>Max Turns: {this.state.max_turns}</p>

          <p>Healing: {this.state.healing}</p>

          <p>Drain: {this.state.drain}</p>

          <p>Critial Hit Rate: {this.state.crit_rate}</p>
        </div>
        <div className="two">
          <div>
          <div>
            <h4>Combo Use Before</h4>
            {
              this.state.normal_use_before.map((move) => (
                <div>
                  {move.name}
                </div>
              ))
            }
          </div>
          <div>
            <h4>Combo Use After</h4>
            {
              this.state.normal_use_after.map((move) => (
                <div>
                  {move.name}
                </div>
              ))
            }
          </div>
          <div>
            <h4>Stat Effected</h4>
            {
              this.state.stat_change.map((stat) => (
                <div>
                  {stat.change} to {stat.stat_effected}
                </div>
              ))
            }
          </div>
          <div>
            <h4>Discription</h4>
            {
              this.state.effect_entries.map((stat) => (
                <div>
                  {stat.name.replace("$effect_chance%", this.state.effect_chance)}
                </div>
              ))
            }
          </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Details;
