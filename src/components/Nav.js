import React, { Component } from 'react';
import NavItem from './NavItem';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTasks: true,
      starred: false,
      completed: false
    };
  }

  selectNavItem = selectedItem => {
    const newState = { ...this.state };
    Object.keys(newState).forEach(property => {
      newState[property] = false;
    });

    newState[selectedItem] = true;
    this.setState(newState);
    this.props.handlePaging(selectedItem);
  };

  render() {
    const { myTasks, starred, completed } = this.state;
    return (
      <nav>
        <ul>
          <NavItem
            label="My Tasks"
            isActive={myTasks}
            onSelect={() => this.selectNavItem('myTasks')}
          />
          <NavItem
            label="Starred"
            isActive={starred}
            onSelect={() => this.selectNavItem('starred')}
          />
          <NavItem
            label="Completed"
            isActive={completed}
            onSelect={() => this.selectNavItem('completed')}
          />
        </ul>
      </nav>
    );
  }
}
