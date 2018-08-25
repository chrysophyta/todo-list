import React, { Component } from 'react';
import NavItem from './NavItem';

import styled from 'styled-components';

const StyledNav = styled.nav`
  color: black;
  font-size: 0.9rem;
  height: 3.5rem;
  width: 100%;
  ul {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
  .menu-item.active {
    opacity: 1;
  }

  .active > p:after,
  .active > p:before {
    content: ' – ';
  }
  @media (hover) {
    .menu-item:hover {
      opacity: 1;
    }
    p:hover:before,
    p:hover:after {
      content: ' – ';
    }
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
