import React from 'react';
import NavButton from './NavButton.jsx';
import Event from './Event.jsx';

const Result = props => (
  <>
    <div id="events-container">
      {props.results.map((result, idx) => (
        <Event key={idx} date={result.date} description={result.description} />
      ))}
    </div>
    <div className="button-container">
      <NavButton handleClick={props.handlePageDecrement} page={props.page} />
      <NavButton
        handleClick={props.handlePageIncrement}
        increment={true}
        display={props.results.length > 0 ? true : false}
      />
    </div>
  </>
);

export default Result;
