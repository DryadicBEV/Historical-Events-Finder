import React from "react";

const NavButton = props => {
  if (props.page === 1) {
    return <></>;
  }
  if (props.increment) {
    if (props.display) {
      return (
        <button className="nav-button" onClick={props.handleClick}>
          Next Page
        </button>
      );
    } else {
      return <></>;
    }
  } else {
    return (
      <button className="nav-button" onClick={props.handleClick}>
        Previous Page
      </button>
    );
  }
};

export default NavButton;
