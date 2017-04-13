import ItemHolder from "./Items";
import React, {Component} from 'react';

class Item extends React.Component {
   render() {
      return (
        <div className="pHolder">
          <ItemHolder />
        </div>
      )
   }
}

export default Item;
