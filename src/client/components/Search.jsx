import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(query) {
    this.setState({ query });
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.query !== "") {
      this.props.search(this.state.query);
    }
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <form>
          <input
            className="search-bar"
            placeholder="Search"
            onChange={e => this.handleChange(e.target.value)}
          />
          <button className="button" type="submit" onClick={this.handleClick}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
