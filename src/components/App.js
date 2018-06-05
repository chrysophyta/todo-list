import React, { Component } from 'react';
import Nav from './Nav';
import AddTask from './AddTask';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <AddTask />
        <List />
      </div>
    );
  }
}

export default App;
