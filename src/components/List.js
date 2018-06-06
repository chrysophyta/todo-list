import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render() {
    return (
      <div className="list">
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
        <p>? tasks left</p>
      </div>
    );
  }
}

export default List;
