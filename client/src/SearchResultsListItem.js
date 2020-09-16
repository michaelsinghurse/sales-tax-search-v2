import React from "react";
import ResultsItemInput from "./ResultsItemInput";
import ResultsItemMap from "./ResultsItemMap";
import ResultsItemRates from "./ResultsItemRates";
import ResultsItemRatesNotFound from "./ResultsItemRatesNotFound";

export default function SearchResultsListItem(props) {
  const inputs = props.inputs || {};
  const location = props.location || {};
  const rates = props.rates || {};
  const searchId = inputs.searchId;

  return (
    <li id={"search" + searchId}>
      <div className="input-and-rates-container">
        <ResultsItemInput inputs={inputs} />
        {Object.keys(rates).length > 0 &&
          <ResultsItemRates 
            searchId={searchId}
            rates={rates}
            location={location} />
        }
        {Object.keys(rates).length === 0 &&
          <ResultsItemRatesNotFound />
        }
      </div>
      <ResultsItemMap geocode={location.latLng} searchId={searchId} />
    </li>
  );
}
