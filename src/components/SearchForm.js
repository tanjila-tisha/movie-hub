import React from 'react';


const SearchForm = (props) => {
  return (
  <div>
    <form className="search-form">
        <div> <input placeholder="Find your movie" type="text" className="input-text" value={props.inputValue} onChange={(event) => props.inputHandler(event)}/>
        <span className="button-field" onClick={() =>props.searchHandler()} >Search</span>
        </div>
    </form>
  </div>
  );
};

export default SearchForm;
