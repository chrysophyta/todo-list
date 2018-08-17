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
  input[type='checkbox' i] {
    height: 20px;
    width: 20px;
  }
  input[type='checkbox' i]:checked:after {
    content: '\\2714';
    font-size: 14px;
    position: absolute;
    top: 0px;
    left: 3px;
    color: #99a1a7;
  }
  input[type='checkbox' i]:checked + .item-title {
    text-decoration: line-through;
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
  .content-icons span {
    display: flex;
    align-items: center;
    font-size: 10px;
  }
`;

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editValue: props.data.title
    };
  }
  handleClick = key => {
    this.props.toggleItem(this.props.data.id, key);
  };
  toggleEditing = () => {
    this.setState({ isEditing: true });
  };
  editTitle = event => {
    this.setState({ editValue: event.target.value });
  };
  finishEditing = event => {
    const { data, editItem } = this.props;
    if (event.key === 'Enter') {
      editItem(data.id, this.state.editValue);
      this.setState({ isEditing: false });
    }
  };
  renderIcons = () => {
    const { content, due } = this.props.data;
    if (content && due) {
      return (
        <span>
          <Icons iconName="message-square" />
          <Icons iconName="clock" />
          {due}
        </span>
      );
    }
    if (due) {
      return (
        <span>
          <Icons iconName="clock" />
          {due}
        </span>
      );
    }
    if (content) {
      return <Icons iconName="message-square" />;
    }
  };
  render() {
    const { data } = this.props;
    const { isEditing } = this.state;
    return (
      <StyledListItem className="list-item">
        <div className="list-labels">
          <input
            id={data.id}
            type="checkbox"
            checked={data.completed}
            onChange={() => this.handleClick('completed')}
          />

          {isEditing ? (
            <input
              value={this.state.editValue}
              onChange={this.editTitle}
              onKeyPress={this.finishEditing}
            />
          ) : (
            <label htmlFor={data.id} className="item-title">
              {data.title}
            </label>
          )}
          <span onClick={() => this.handleClick('starred')}>
            <Icons iconName="star" starred={data.starred} />
          </span>
          <span onClick={this.toggleEditing}>
            <Icons iconName="edit-2" />
          </span>
        </div>
        <div className="content-icons">{this.renderIcons()}</div>
      </StyledListItem>
    );
  }
}

export default ListItem;
