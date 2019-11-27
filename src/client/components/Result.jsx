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
        {this.props.results.map((result, idx) => (
          <div key={idx}>{JSON.stringify(result)}</div>
        ))}
      </div>
    );
  }
}
