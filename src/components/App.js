import React, { Component } from 'react';
import Nav from './Nav';
import AddTask from './AddTask';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addTask: '',
      data: [
        { title: 'item1', content: 'item1', completed: false, id: 1 },
        { title: 'item2', content: 'item2', completed: false, id: 2 },
        { title: 'item3', content: 'item3', completed: false, id: 3 },
        { title: 'item4', content: 'item4', completed: false, id: 4 }
      ]
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
        id: 123
      })
    });
  };
  render() {
    return (
      <div className="app">
        <Nav />
        <AddTask
          value={this.state.addTask}
          onChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
