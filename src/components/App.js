import React, { Component } from 'react';
import Nav from './Nav';
import AddTask from './AddTask';
import List from './List';
import uuid from 'uuid';
import styled from 'styled-components';

const StyledApp = styled.div`
  min-height: 100vh;
  width: 460px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .title {
    margin-top: 10vh;
    margin-bottom: 20px;
    font-family: 'Playfair Display';
    display: block;
    width: 100%;
  }
  @media (max-width: 459px) {
    width: 100%;
    margin: 0px;
    padding: 30px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addTask: '',
      data: [
        {
          title: 'item1',
          content: 'item1',
          starred: false,
          completed: false,
          id: uuid()
        },
        {
          title: 'item2',
          content: 'item2',
          starred: false,
          completed: false,
          id: uuid()
        },
        {
          title: 'item3',
          content: 'item3',
          starred: false,
          completed: false,
          id: uuid()
        },
        {
          title: 'item4',
          content: 'item4',
          starred: false,
          completed: false,
          id: uuid()
        }
      ],
      onTab: 'myTasks'
    };
  }

  onSubmit = (item, event) => {
    event.preventDefault();
    console.log('submitted');
    this.setState({
      data: this.state.data.concat(item)
    });
  };
  toggleItem = (id, key) => {
    const { data } = this.state;
    // console.log(`${id}:${e}`);
    data.forEach(item => {
      if (item.id === id) {
        item[key] = !item[key];
      }
    });
    this.setState({ ...data });
  };
  editItem = (id, newTitle) => {
    const { data } = this.state;
    const item = data.filter(item => item.id === id);
    item[0].title = newTitle;
    this.setState({ ...data, ...item });
    console.table(this.state.data);
  };
  handlePaging = selected => {
    // console.log(`from app:${selected}`);
    this.setState({ onTab: selected });
  };

  render() {
    return (
      <StyledApp className="app">
        <h1 className="title">To Do List </h1>
        <AddTask onSubmit={this.onSubmit} />
        <Nav handlePaging={this.handlePaging} />
        <List
          data={this.state.data}
          showList={this.state.onTab}
          toggleItem={this.toggleItem}
          checkItemStar={this.checkItemStar}
          editItem={this.editItem}
        />
      </StyledApp>
    );
  }
}

export default App;
