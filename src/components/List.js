import React, { Component } from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';

const StyledList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    color: darkgrey;
  }
  @media (max-width: 459px) {
    width: 100%;
    margin: 0 2rem;
  }
`;

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
      <StyledList>
        <ul>{this.renderList(this.props.showList)}</ul>
        <p>{this.calcItemsLeft()} tasks left</p>
      </StyledList>
    );
  }
}

export default List;
