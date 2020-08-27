import React from "react";
import "./Search.css";
import AddressForm from "./AddressForm";
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
    console.log("Handling submit from withing Search class");
    // send a get request to the server with the address
    // append the both the address and response to this.state.results
   
    // TODO: temp values
    const inputs = {
      street: "815 Centennial Centre Blvd Apt 57",
      city: "Hobart",
      state: "WI",
      zip: "54155",
      searchId: this.state.searchId,
    };

    const location = {
      city: "HOBART",
      county: "BROWN",
      state: "WI",
      latLng: "45,-88",
    };

    const rates = {
      totalRate: "0.055",
      stateRate: "0.05",
      countyRate: "0.005",
      cityRate: "0",
      totalDistrictRate: "0",
    };

    const searchResults = {
      inputs,
      location,
      rates,
    };
    
    this.setState((state, _props) => {
      const results = [...state.results];
      results.push(searchResults);
      return {
        results,
        searchId: state.searchId + 1,
      };
    });
  }

  render() {
    return (
      <div id="search">
        <AddressForm onFormSubmit={this.handleFormSubmit} />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}
