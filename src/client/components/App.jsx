import React from "react";
import Result from "./Result.jsx";
import Search from "./Search.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>APP</h1>
        <div>
          <Search />
        </div>
        <div>
          <Result />
        </div>
      </div>
    );
  }
}
