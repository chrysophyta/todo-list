import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li className="list-item">
        <input type="checkbox" />
        <h3 className="item-title">Title</h3>
        <div>☆</div>
        <div>✎</div>
        <div>
          <div>⚐</div>
          <div>☻</div>
          <div>✌︎</div>
        </div>
      </li>
    );
  }
}

export default ListItem;
