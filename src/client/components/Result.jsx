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
      <>
        <div id="events-container">
          {this.props.results.map((result, idx) => (
            <Event
              key={idx}
              date={result.date}
              description={result.description}
            />
          ))}
        </div>
        <div className="button-container">
          <NavButton
            handleClick={this.handlePageDecrement}
            page={this.state.page}
          />
          <NavButton
            handleClick={this.handlePageIncrement}
            increment={true}
            display={this.props.results.length > 0 ? true : false}
          />
        </div>
      </>
    );
  }
}
