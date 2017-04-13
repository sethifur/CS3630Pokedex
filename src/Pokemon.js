import React, {Component} from 'react';
import PokemonHolder from "./Pokemon";

class Pokemon extends React.Component {
   render() {
      return (
        <div className="pHolder">
          <PokemonHolder />
        </div>
      )
   }
}

export default Pokemon;
