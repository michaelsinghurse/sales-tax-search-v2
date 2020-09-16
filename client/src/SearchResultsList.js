import React from "react";
import SearchResultsListItem from "./SearchResultsListItem";

export default function SearchResults(props) {
  const results = props.results;
  
  const listItems = results.map(result => (
    <SearchResultsListItem
      key={"searchId" + result.inputs.searchId}
      inputs={result.inputs}
      location={result.location}
      rates={result.rates} />
  ));

  return (
    <ul className="results" aria-live="assertive"> 
      {listItems}
    </ul>
  );
}
