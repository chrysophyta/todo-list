import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list">
        <ul>
          {this.props.data.map(item => {
            return <ListItem data={item} key={item.id} />;
          })}
        </ul>
        <p>{this.props.data.length} tasks left</p>
      </div>
    );
  }
}

export default List;
