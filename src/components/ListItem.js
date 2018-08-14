import React, { Component } from 'react';
import Icons from './icons';
import styled from 'styled-components';

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  margin-bottom: 10px;
  padding: 10px;
  .list-labels {
    display: flex;
    margin: 10px;
    justify-content: space-between;
    align-items: center;
  }
  .item-title {
    flex-basis: 325px;
    font-size: 20px;
  }
  .list-labels input[type='checkbox'] {
    height: 20px;
    width: 20px;
  }
  .list-labels input[type='checkbox']:checked:after {
    content: '\\2714';
    font-size: 14px;
    position: absolute;
    top: 0px;
    left: 3px;
    color: #99a1a7;
  }
  .content-icons {
    display: flex;
    justify-content: flex-start;
    margin-left: 30px;
  }
  .content-icons svg {
    height: 15px;
    width: 15px;
    margin: 5px;
  }
`;

class ListItem extends Component {
  handleClick = key => {
    this.props.toggleItem(this.props.data.id, key);
  };
  renderIcons = () => {
    if (this.props.data.content) {
      return <Icons iconName="message-square" />;
    }
    if (this.props.data.due) {
      return (
        <span>
          <Icons iconName="clock" />
          {this.props.data.due}
        </span>
      );
    }
  };
  render() {
    const { data } = this.props;
    return (
      <StyledListItem className="list-item">
        <div className="list-labels">
          <input
            type="checkbox"
            onChange={() => this.handleClick('completed')}
            checked={data.completed}
          />
          <h3 className="item-title">{data.title}</h3>
          <span onClick={() => this.handleClick('starred')}>
            <Icons iconName="star" starred={data.starred} />
          </span>
          <span>
            <Icons iconName="edit-2" />
          </span>
        </div>
        <div className="content-icons">{this.renderIcons()}</div>
      </StyledListItem>
    );
  }
}

export default ListItem;
