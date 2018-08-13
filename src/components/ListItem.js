import React, { Component } from 'react';
import feather from 'feather-icons';
import Icons from './icons';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      starred:false
    }
  }
  handleClick = e => {
    this.props.checkItemComplete(e, this.props.data.id);
  };
  handleStarClick = e =>{
    this.setState({starred:!this.state.starred})
  }
  render() {
    const { data } = this.props;
    return (
      <li className="list-item">
        <div className="list-labels">
          <input type="checkbox" onClick={this.handleClick} />
          <h3 className="item-title">{data.title}</h3>
          <span onClick={this.handleStarClick}>
            <Icons iconName="star" starred={this.state.starred} />
          </span>
          <span>
            <Icons iconName="edit-2" />
          </span>
        </div>
        <div className="content-icons">
          <span>
            <Icons iconName="message-square" />
          </span>
          <span>
            <Icons iconName="file" />
          </span>
          <span>
            <Icons iconName="clock" />
          </span>
        </div>
      </li>
    );
  }
}

export default ListItem;
