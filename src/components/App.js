import React, { Component } from 'react';
import Nav from './Nav';
import AddTask from './AddTask';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <AddTask />
      </div>
    );
  }
}

export default App;
