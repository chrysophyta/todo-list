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
    margin: 5px 15px;
    align-items: center;
    position: relative;
  }
  .list-labels > span {
    position: absolute;
  }
  .star {
    right: 50px;
  }
  .edit {
    right: 0;
  }
  .item-title {
    margin-left: 10px;
    flex-basis: 325px;
    font-size: 20px;
    font-family: 'Playfair Display';
  }
  input {
    margin-left: 10px;
    border: none;
    background: none;
    border-bottom: 2px solid black;
    font-size: 20px;
  }
  input:focus {
    outline: none;
  }
  input[type='checkbox' i] {
    opacity: 0;
  }
  label.item-title:before {
    content: '';
    padding: 8px;
    border: 1px solid black;
    position: absolute;
    top: 5px;
    left: 0px;
  }

  input[type='checkbox' i]:checked + label.item-title:after {
    content: '\\2714';
    font-size: 14px;
    position: absolute;
    top: 5px;
    left: 3px;
    color: black;
  }
  input[type='checkbox' i]:checked + .item-title {
    text-decoration: line-through;
  }

  .content-icons {
    display: flex;
    justify-content: flex-start;
    margin-left: 30px;
    line-height: 50%;
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
    this.setState({ isEditing: !this.state.isEditing });
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
              autoFocus
              value={this.state.editValue}
              onChange={this.editTitle}
              onKeyPress={this.finishEditing}
            />
          ) : (
            <label htmlFor={data.id} className="item-title">
              {data.title}
            </label>
          )}
          <span className="star" onClick={() => this.handleClick('starred')}>
            <Icons iconName="star" filled={data.starred} />
          </span>
          <span className="edit" onClick={this.toggleEditing}>
            <Icons iconName="edit-2" filled={this.state.isEditing} />
          </span>
        </div>
        <div className="content-icons">{this.renderIcons()}</div>
      </StyledListItem>
    );
  }
}

export default ListItem;
