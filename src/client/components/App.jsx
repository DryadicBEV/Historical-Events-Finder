import React from "react";
import Result from "./Result.jsx";
import Search from "./Search.jsx";
import getEvents from "../helpers.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuery: "",
      results: []
    };

    this.search = this.search.bind(this);
  }

  search(query, page = 1) {
    getEvents(query, page)
      .then(results => {
        this.setState({ results });
      })
      .catch(err => {
        console.log("Error ", err);
      });
  }

  render() {
    return (
      <div id="app-container">
        <h1>Historical Events Finder</h1>
        <div id="search-container">
          <Search search={this.search} />
        </div>
        <div id="result-container">
          <Result
            search={this.search}
            currentQuery={this.state.currentQuery}
            results={this.state.results}
          />
        </div>
      </div>
    );
  }
}
