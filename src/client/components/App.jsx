import React from 'react';
import Result from './Result.jsx';
import Search from './Search.jsx';
import getEvents from '../helpers.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuery: '',
      results: [],
      page: 1
    };

    this.search = this.search.bind(this);
    this.handlePageIncrement = this.handlePageIncrement.bind(this);
    this.handlePageDecrement = this.handlePageDecrement.bind(this);
  }

  search(query, page = 1) {
    const previousQuery = this.state.currentQuery;

    getEvents(query, page)
      .then(results => {
        if (query !== previousQuery) {
          this.setState({ page: 1, currentQuery: query, results });
        } else {
          this.setState({ results, currentQuery: query });
        }
      })
      .catch(err => {
        console.log('Error ', err);
      });
  }

  handlePageIncrement() {
    this.setState({ page: this.state.page + 1 }, () => {
      this.search(this.state.currentQuery, this.state.page);
    });
  }

  handlePageDecrement() {
    this.setState({ page: this.state.page - 1 }, () => {
      this.search(this.state.currentQuery, this.state.page);
    });
  }

  render() {
    return (
      <div id="app-container">
        <h1>Historical Events Finder</h1>
        <div id="search-container" className="card">
          <Search search={this.search} />
        </div>
        <div id="result-container">
          <Result
            search={this.search}
            currentQuery={this.state.currentQuery}
            results={this.state.results}
            page={this.state.page}
            handlePageDecrement={this.handlePageDecrement}
            handlePageIncrement={this.handlePageIncrement}
          />
        </div>
      </div>
    );
  }
}
