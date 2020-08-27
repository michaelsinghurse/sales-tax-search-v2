import React from "react";

export default function ResultsItem(props) {
  const inputs = props.inputs || {};
  const location = props.location || {};
  const rates = props.rates || {};

  return (
    <li id={"search" + inputs.searchId}>
      <div className="input-and-rates-container">
        <ul className="results-input">
          <li>
            <span>Street:</span>
            {inputs.street} 
          </li>
          <li>
            <span>City:</span>
            {inputs.city} 
          </li>
          <li>
            <span>State:</span>
            {inputs.state} 
          </li> 
          <li>
            <span>Zip:</span>
            {inputs.zip} 
          </li>
        </ul>
        <ul className="results-rates">
          <li>
            <ul className="jurisdiction-list">
              <li className="jurisdiction-level">Total Rate</li>
              <li className="jurisdiction-name"> </li>
              <li className="jurisdiction-rate">
                <input id={"rate-total" + inputs.searchId} type="text" 
                  value={rates.totalRate} 
                  aria-label={"The county rate is " + rates.totalRate} 
                  readOnly />
                <button type="button" className="btn-copy" 
                  data-clipboard-target={"#rate-total" + inputs.searchId} 
                  aria-label="Copy rate to clipboard" data-copied-hint="Copied!">.
                  <span className="tooltiptext">Copy</span>
                </button>
              </li>
            </ul>
          </li>
          <li>
            <ul className="jurisdiction-list">
              <li className="jurisdiction-level">State</li>
              <li className="jurisdiction-name">
                <input id={"name-state" + inputs.searchId} type="text" 
                  value={location.state} 
                  aria-label={"The jurisdiction name is " + location.state} 
                  readOnly />
                <button type="button" className="btn-copy" 
                  data-clipboard-target={"#name-state" + inputs.searchId} 
                  aria-label="Copy jurisdiction name to clipboard" data-copied-hint="Copied!">.
                  <span className="tooltiptext">Copy</span>
                </button>
              </li>
              <li className="jurisdiction-rate">
                <input id={"rate-state" + inputs.searchId} type="text" 
                  value={rates.stateRate} 
                  aria-label={"The state rate is " + rates.stateRate} 
                  readOnly />
                <button type="button" className="btn-copy" 
                  data-clipboard-target={"#rate-state" + inputs.searchId} 
                  aria-label="Copy rate to clipboard" data-copied-hint="Copied!">.
                  <span className="tooltiptext">Copy</span>
                </button>
              </li>
            </ul>
          </li>
          <li>
            <ul className="jurisdiction-list">
              <li className="jurisdiction-level">County</li>
              <li className="jurisdiction-name">
                <input id={"name-county" + inputs.searchId} type="text" 
                  value={location.county} 
                  aria-label={"The jurisdiction name is " + location.county} 
                  readOnly />
                <button type="button" className="btn-copy" 
                  data-clipboard-target={"#name-county" + inputs.searchId} 
                  aria-label="Copy jurisdiction name to clipboard" data-copied-hint="Copied!">.
                  <span className="tooltiptext">Copy</span>
                </button>
              </li>
              <li className="jurisdiction-rate">
                <input id={"rate-county" + inputs.searchId} type="text" 
                  value={rates.countyRate} 
                  aria-label={"The county rate is " + rates.countyRate} 
                  readOnly />
                <button type="button" className="btn-copy" 
                  data-clipboard-target={"#rate-county" + inputs.searchId} 
                  aria-label="Copy rate to clipboard" data-copied-hint="Copied!">.
                  <span className="tooltiptext">Copy</span>
                </button>
              </li>
            </ul>
          </li>
          <li>
            <ul className="jurisdiction-list">
              <li className="jurisdiction-level">City</li>
              <li className="jurisdiction-name">
                <input id={"name-city" + inputs.searchId} type="text" 
                  value={location.city} 
                  aria-label={"The jurisdiction name is " + location.city} 
                  readOnly />
                <button type="button" className="btn-copy" 
                  data-clipboard-target={"#name-city" + inputs.searchId} 
                  aria-label="Copy jurisdiction name to clipboard" data-copied-hint="Copied!">.
                  <span className="tooltiptext">Copy</span>
                </button>
              </li>
              <li className="jurisdiction-rate">
                <input id={"rate-city" + inputs.searchId} type="text" 
                  value={rates.cityRate} 
                  aria-label={"The city rate is " + rates.cityRate} 
                  readOnly />
                <button type="button" className="btn-copy" 
                  data-clipboard-target={"#rate-city" + inputs.searchId} 
                  aria-label="Copy rate to clipboard" data-copied-hint="Copied!">.
                  <span className="tooltiptext">Copy</span>
                </button>
              </li>
            </ul>
          </li>
          <li>
            <ul className="jurisdiction-list">
              <li className="jurisdiction-level">Districts</li>
              <li className="jurisdiction-name"> </li>
              <li className="jurisdiction-rate">
                <input id={"rate-combined-district" + inputs.searchId} type="text" 
                  value={rates.totalDistrictRate} 
                  aria-label={"The combined-district rate is " + rates.totalDistrictRate} 
                  readOnly />
                <button type="button" className="btn-copy" 
                  data-clipboard-target={"#rate-combined-district" + inputs.searchId} 
                  aria-label="Copy rate to clipboard" data-copied-hint="Copied!">.
                  <span className="tooltiptext">Copy</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="map-container" aria-label="google map with pin on the sales location">
        <div className="map" data-geocode={location.latLng}> </div>
      </div>
    </li>
  );
}
