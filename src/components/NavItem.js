import React from 'react';

export default function(props) {
  let className = 'menu-item';
  if (props.isActive) {
    className += ' active';
  }
  return (
    <li className={className} onClick={props.onSelect}>
      {props.label}
    </li>
  );
}
