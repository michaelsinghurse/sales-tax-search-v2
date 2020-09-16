import React from "react";
import CopyButton from "./CopyButton";
import ResultsItemMap from "./ResultsItemMap";

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
        {Object.keys(rates).length > 0 &&
          <ul className="results-rates">
            <li>
              <ul className="jurisdiction-list">
                <li className="jurisdiction-level">Total Rate</li>
                <li className="jurisdiction-name"> </li>
                <li className="jurisdiction-rate">
                  <input id={"rate-total" + inputs.searchId} type="text" 
                    value={rates.totalRate} 
                    aria-label={"The total rate is " + rates.totalRate} 
                    readOnly />
                  <CopyButton targetId={"#rate-total" + inputs.searchId} />
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
                  <CopyButton targetId={"#name-state" + inputs.searchId} />
                </li>
                <li className="jurisdiction-rate">
                  <input id={"rate-state" + inputs.searchId} type="text" 
                    value={rates.stateRate} 
                    aria-label={"The state rate is " + rates.stateRate} 
                    readOnly />
                  <CopyButton targetId={"#rate-state" + inputs.searchId} />
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
                  <CopyButton targetId={"#name-county" + inputs.searchId} />
                </li>
                <li className="jurisdiction-rate">
                  <input id={"rate-county" + inputs.searchId} type="text" 
                    value={rates.countyRate} 
                    aria-label={"The county rate is " + rates.countyRate} 
                    readOnly />
                  <CopyButton targetId={"#rate-county" + inputs.searchId} />
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
                  <CopyButton targetId={"#name-city" + inputs.searchId} />
                </li>
                <li className="jurisdiction-rate">
                  <input id={"rate-city" + inputs.searchId} type="text" 
                    value={rates.cityRate} 
                    aria-label={"The city rate is " + rates.cityRate} 
                    readOnly />
                  <CopyButton targetId={"#rate-city" + inputs.searchId} />
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
                  <CopyButton targetId={"#rate-combined-district" + inputs.searchId} />
                </li>
              </ul>
            </li>
          </ul>
        }
        {Object.keys(rates).length === 0 &&
          <div className="no-rates-message">
            <p>We are unable to determine the tax rates for this location.
              Please check the address and try again.</p>
          </div>
        }
      </div>
      <ResultsItemMap geocode={location.latLng} searchId={inputs.searchId} />
    </li>
  );
}
