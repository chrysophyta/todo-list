import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  calcItemsLeft = () => {
    let itemsLeft = this.props.data.filter(item => !item.completed);
    return itemsLeft.length;
  };
  renderList = list => {
    if (list === 'completed') {
      let listData = this.props.data
        .filter(item => item.completed)
        .map(item => {
          return <ListItem {...this.props} data={item} key={item.id} />;
        });
      return listData;
    } else if (list === 'myTasks') {
      let listData = this.props.data
        .filter(item => !item.completed)
        .map(item => {
          return <ListItem {...this.props} data={item} key={item.id} />;
        });
      return listData;
    } else {
      let listData = this.props.data.filter(item => item.starred).map(item => {
        return <ListItem {...this.props} data={item} key={item.id} />;
      });
      return listData;
    }
  };

  render() {
    return (
      <div className="list">
        <ul>{this.renderList(this.props.showList)}</ul>
        <p>{this.calcItemsLeft()} tasks left</p>
      </div>
    );
  }
}

export default List;
