import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    //we change the state to the input of what user types in
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    //we send state up to parent App by callback via props
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
