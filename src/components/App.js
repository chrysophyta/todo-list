import React, { Component } from 'react';
import Nav from './Nav';
import AddTask from './AddTask';
import List from './List';
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addTask: '',
      data: [
        { title: 'item1', content: 'item1', starred:false,completed: false, id: uuid() },
        { title: 'item2', content: 'item2', starred:false,completed: false, id: uuid() },
        { title: 'item3', content: 'item3', starred:false,completed: false, id: uuid() },
        { title: 'item4', content: 'item4', starred:false,completed: false, id: uuid() }
      ],
      onTab: 'myTasks'
    };
  }

  onInputChange = event => {
    this.setState({ addTask: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    console.log('submitted');
    this.setState({
      addTask: '',
      data: this.state.data.concat({
        title: this.state.addTask,
        content: '',
        completed: false,
        starred:false,
        id: uuid()
      })
    });
  };
  toggleItem = (id,key) => {
    const { data } = this.state;
    // console.log(`${id}:${e}`);
    data.forEach(item => {
      if (item.id === id) {
        item[key] = !item[key];
      }
    });
    this.setState({ ...data });
  };

  handlePaging = selected => {
    // console.log(`from app:${selected}`);
    this.setState({ onTab: selected });
  };

  render() {
    return (
      <div className="app">
        <Nav handlePaging={this.handlePaging} />
        <AddTask
          value={this.state.addTask}
          onChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <List
          data={this.state.data}
          showList={this.state.onTab}
          toggleItem={this.toggleItem}
          checkItemStar={this.checkItemStar}
        />
      </div>
    );
  }
}

export default App;
