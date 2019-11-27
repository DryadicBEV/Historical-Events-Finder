import React from 'react';

const NavButton = props => {
  if (props.page === 1) {
    return <div></div>;
  }
  if (props.increment) {
    return <button onClick={props.handleClick}>Next Page</button>;
  } else {
    return <button onClick={props.handleClick}>Previous Page</button>;
  }
};

export default NavButton;
