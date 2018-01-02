import React, { Component } from 'react';
import ListItem from './ListItem.js';

class ListControl extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const numbers = Array.from(new Array(this.props.list_count), (x,i) => i + this.props.list_start);
    const listItems = numbers.map((number) =>
      <ListItem key={number.toString()} value={number}/>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default ListControl;
