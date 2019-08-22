import React, { Component, Fragment } from "react";
import TodoTable from "../TodoTable/TodoTable";
import Search from "../Search/Search";

class Dashboard extends Component {
  state = {
    searchId: ""
  };

  handleSearch = inputId => {
    console.log(inputId);
    this.setState({ searchId: inputId }, console.log(this.state));
  };

  render() {
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch} />
        <TodoTable searchBy={this.state.searchId} />
      </Fragment>
    );
  }
}

export default Dashboard;
