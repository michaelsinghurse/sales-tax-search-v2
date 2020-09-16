import React from "react";
import "./Search.css";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const makeQueryString = object => {
  const keysAndValues = Object.keys(object).reduce((array, key) => {
    const keyAndValue = encodeURIComponent(key)
      + "="
      + encodeURIComponent(object[key]);
    array.push(keyAndValue);
    return array;
  }, []);

  return keysAndValues.join("&");
};

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      results: [],
      searchId: 1,
    };
    
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormSubmit(address) {
    address.searchId = this.state.searchId;
    
    const url = "/api/rates?" + makeQueryString(address);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState((state, _props) => {
          const results = [data, ...state.results]; // most recent first
          return {
            results,
            searchId: state.searchId + 1,
          };
        });
      })
      .catch(error => console.log("Error:", error));
  }

  render() {
    return (
      <div id="search">
        <SearchForm onFormSubmit={this.handleFormSubmit} />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}