import React, {Component} from 'react';
import MoveHolder from "./Moves";

class Move extends React.Component {
   render() {
      return (
        <div className="pHolder">
          <MoveHolder />
        </div>
      )
   }
}

export default Move;
