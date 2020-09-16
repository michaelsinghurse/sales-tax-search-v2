import React from "react";

export default function ResultsItemRatesNotFound(props) {
  return (
    <div className="no-rates-message">
      <p>We are unable to determine the tax rates for this location.
        Please check the address and try again.</p>
    </div>
  );
}
