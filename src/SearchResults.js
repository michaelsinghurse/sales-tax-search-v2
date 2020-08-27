import React from "react";
import ResultsItem from "./ResultsItem";

export default function SearchResults(props) {
  const results = props.results;
  
  const listItems = results.map(result => (
    <ResultsItem
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
