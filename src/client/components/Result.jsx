import React from "react";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // potential need to keep track of pages
      page: null
    };
  }

  render() {
    return (
      <div>
        <h2>Result Component</h2>
      </div>
    );
  }
}
