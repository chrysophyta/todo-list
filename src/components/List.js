import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { checkItemComplete } = this.props;
    if (this.props.showList === 'completed') {
      return (
        <div className="list">
          <ul>
            {this.props.data.map(item => {
              if (item.completed) {
                return <ListItem {...this.props} data={item} key={item.id} />;
              }
            })}
          </ul>
          <p>{this.props.data.length} tasks left</p>
        </div>
      );
    } else if (this.props.showList === 'myTasks') {
      return (
        <div className="list">
          <ul>
            {this.props.data.map(item => {
              return <ListItem {...this.props} data={item} key={item.id} />;
            })}
          </ul>
          <p>{this.props.data.length} tasks left</p>
        </div>
      );
    } else {
      return (
        <div className="list">
          <ul>
            {this.props.data.map(item => {
              if (!item.completed) {
                return <ListItem {...this.props} data={item} key={item.id} />;
              }
            })}
          </ul>
          <p>{this.props.data.length} tasks left</p>
        </div>
      );
    }
  }
}

export default List;
