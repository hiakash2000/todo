import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(this.searchId.value);
          this.props.handleSearch(this.searchId.value);
        }}
      >
        <input
          type="text"
          placeholder="Provide id to Search"
          required
          ref={curr => (this.searchId = curr)}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default Search;
