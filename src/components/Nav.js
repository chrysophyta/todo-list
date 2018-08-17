import React, { Component } from 'react';
import NavItem from './NavItem';

import styled from 'styled-components';

const StyledNav = styled.nav`
  color: black;
  font-size: 18px;
  height: 55px;
  ul {
    display: flex;
    height: 100%;
    width: 460px;
    justify-content: space-around;
    align-items: center;
  }
  .menu-item.active,
  .menu-item:hover {
    border-left: black 2px solid;
    font-weight: 400;
  }
`;

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
      <StyledNav>
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
      </StyledNav>
    );
  }
}
