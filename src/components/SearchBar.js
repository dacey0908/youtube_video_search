import React, { useState } from "react";

const SearchBar = props => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    props.onFormSubmit(searchTerm);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={e => onFormSubmit(e)} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={searchTerm} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
