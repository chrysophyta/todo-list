import React, { Component } from 'react';
import NavItem from './NavItem';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTasks: true,
      inProgress: false,
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
    const { myTasks, inProgress, completed } = this.state;
    return (
      <nav>
        <ul>
          <NavItem
            label="My Task"
            isActive={myTasks}
            onSelect={() => this.selectNavItem('myTasks')}
          />
          <NavItem
            label="In Progress"
            isActive={inProgress}
            onSelect={() => this.selectNavItem('inProgress')}
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
