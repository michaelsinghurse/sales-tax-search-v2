import React from "react";
import CopyButton from "./CopyButton";

export default function ResultsItemRates(props) {
  const searchId = props.searchId;
  const rates = props.rates;
  const location = props.location || {};

  return (
    <ul className="results-rates">
      <li>
        <ul className="jurisdiction-list">
          <li className="jurisdiction-level">Total Rate</li>
          <li className="jurisdiction-name"> </li>
          <li className="jurisdiction-rate">
            <input id={"rate-total" + searchId} type="text" 
              value={rates.totalRate} 
              aria-label={"The total rate is " + rates.totalRate} 
              readOnly />
            <CopyButton targetId={"#rate-total" + searchId} />
          </li>
        </ul>
      </li>
      <li>
        <ul className="jurisdiction-list">
          <li className="jurisdiction-level">State</li>
          <li className="jurisdiction-name">
            <input id={"name-state" + searchId} type="text" 
              value={location.state} 
              aria-label={"The jurisdiction name is " + location.state} 
              readOnly />
            <CopyButton targetId={"#name-state" + searchId} />
          </li>
          <li className="jurisdiction-rate">
            <input id={"rate-state" + searchId} type="text" 
              value={rates.stateRate} 
              aria-label={"The state rate is " + rates.stateRate} 
              readOnly />
            <CopyButton targetId={"#rate-state" + searchId} />
          </li>
        </ul>
      </li>
      <li>
        <ul className="jurisdiction-list">
          <li className="jurisdiction-level">County</li>
          <li className="jurisdiction-name">
            <input id={"name-county" + searchId} type="text" 
              value={location.county} 
              aria-label={"The jurisdiction name is " + location.county} 
              readOnly />
            <CopyButton targetId={"#name-county" + searchId} />
          </li>
          <li className="jurisdiction-rate">
            <input id={"rate-county" + searchId} type="text" 
              value={rates.countyRate} 
              aria-label={"The county rate is " + rates.countyRate} 
              readOnly />
            <CopyButton targetId={"#rate-county" + searchId} />
          </li>
        </ul>
      </li>
      <li>
        <ul className="jurisdiction-list">
          <li className="jurisdiction-level">City</li>
          <li className="jurisdiction-name">
            <input id={"name-city" + searchId} type="text" 
              value={location.city} 
              aria-label={"The jurisdiction name is " + location.city} 
              readOnly />
            <CopyButton targetId={"#name-city" + searchId} />
          </li>
          <li className="jurisdiction-rate">
            <input id={"rate-city" + searchId} type="text" 
              value={rates.cityRate} 
              aria-label={"The city rate is " + rates.cityRate} 
              readOnly />
            <CopyButton targetId={"#rate-city" + searchId} />
          </li>
        </ul>
      </li>
      <li>
        <ul className="jurisdiction-list">
          <li className="jurisdiction-level">Districts</li>
          <li className="jurisdiction-name"> </li>
          <li className="jurisdiction-rate">
            <input id={"rate-combined-district" + searchId} type="text" 
              value={rates.totalDistrictRate} 
              aria-label={"The combined-district rate is " + rates.totalDistrictRate} 
              readOnly />
            <CopyButton targetId={"#rate-combined-district" + searchId} />
          </li>
        </ul>
      </li>
    </ul>
  );
}
