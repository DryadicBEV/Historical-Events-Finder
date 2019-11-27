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
    console.log("clicked");
    if (this.state.query !== "") {
      this.props.search(this.state.query);
    }
  }

  render() {
    return (
      <div>
        <h2>Search Component</h2>
        <form>
          <input
            placeholder="Search"
            onChange={e => this.handleChange(e.target.value)}
          />
          <button type="submit" onClick={this.handleClick}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
