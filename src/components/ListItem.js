import React, { Component } from 'react';
import Icons from './icons';

class ListItem extends Component {
  handleClick = (key) => {
    this.props.toggleItem(this.props.data.id,key);
  };

  render() {
    const { data } = this.props;
    return (
      <li className="list-item">
        <div className="list-labels">
          <input type="checkbox" onChange={()=>this.handleClick('completed')} checked={data.completed}/>
          <h3 className="item-title">{data.title}</h3>
          <span onClick={()=>this.handleClick('starred')}>
            <Icons iconName="star" starred={data.starred} />
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
