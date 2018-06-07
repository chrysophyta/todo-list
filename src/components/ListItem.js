import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li className="list-item">
        <div className="list-labels">
          <input type="checkbox" />
          <h3 className="item-title">Title</h3>
          <span>
            <i data-feather="star" />
          </span>
          <span>
            <i data-feather="edit-2" />
          </span>
        </div>
        <div className="content-icons">
          <span>
            <i data-feather="message-square" />
          </span>
          <span>
            <i data-feather="file" />
          </span>
          <span>
            <i data-feather="clock" />
          </span>
        </div>
      </li>
    );
  }
}

export default ListItem;
