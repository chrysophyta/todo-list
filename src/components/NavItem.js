import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.li`
  height: 50%;
  width: calc(100% / 3);
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  font-weight: 300;
  opacity: 0.8;
`;

export default function(props) {
  let className = 'menu-item';
  if (props.isActive) {
    className += ' active';
  }
  return (
    <StyledNavItem className={className} onClick={props.onSelect}>
      <p>{props.label}</p>
    </StyledNavItem>
  );
}
