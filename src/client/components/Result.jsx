import React from "react";
import NavButton from "./NavButton.jsx";
import Event from "./Event.jsx";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };

    this.handlePageIncrement = this.handlePageIncrement.bind(this);
    this.handlePageDecrement = this.handlePageDecrement.bind(this);
  }

  handlePageIncrement() {
    this.setState({ page: this.state.page + 1 }, () => {
      this.props.search(this.props.currentQuery, this.state.page);
    });
  }

  handlePageDecrement() {
    this.setState({ page: this.state.page - 1 }, () => {
      this.props.search(this.props.currentQuery, this.state.page);
    });
  }

  render() {
    return (
      <div>
        <h2>Result Component</h2>
        {this.props.results.map((result, idx) => (
          <Event
            key={idx}
            date={result.date}
            description={result.description}
            lang={result.lang}
            category1={result.category1}
            category2={result.category2}
          />
        ))}
        <NavButton
          handleClick={this.handlePageDecrement}
          page={this.state.page}
        />
        <NavButton increment={true} handleClick={this.handlePageIncrement} />
      </div>
    );
  }
}
