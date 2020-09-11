import React from "react";
import "./Search.css";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

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
    // send a get request to the server with the address
    // append the both the address and response to this.state.results
    
    address.searchId = this.state.searchId;
    
    const location = {
      city: "HOBART",
      county: "BROWN",
      state: "WI",
      latLng: JSON.stringify({ lat: 39.409999, lng: -87.4022146 }),
    };

    const rates = {
      totalRate: "0.055",
      stateRate: "0.05",
      countyRate: "0.005",
      cityRate: "0",
      totalDistrictRate: "0",
    };

    const searchResults = {
      inputs: address,
      location,
      rates,
    };
    
    this.setState((state, _props) => {
      const results = [searchResults, ...state.results]; // most recent first
      return {
        results,
        searchId: state.searchId + 1,
      };
    });
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
