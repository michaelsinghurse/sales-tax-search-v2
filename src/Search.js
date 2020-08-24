import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div id="search">
      <form action="#" method="get" className="search-form">
        <fieldset>
          <legend>Enter Your Sales Location</legend>
          <ul> 
            <li>
              <label htmlFor="street" className="label-street">Street:</label>
              <input id="street" type="text" className="input-street" required/>
            </li>
            <li>
              <label htmlFor="city">City:</label>
              <input id="city" type="text" className="input-city" required/>
            </li>
            <li>
              <label htmlFor="state">State:</label>
              <input id="state" type="text" className="input-state"
                pattern="[A-Za-z]{2}" 
                title="Two letter state abbreviation" required/>
            </li>
            <li>
              <label htmlFor="zip">Zip:</label>
              <input id="zip" type="text" className="input-zip" 
                pattern="\d{5}"
                title="Five digit zip code" required/>
            </li>
          </ul> 
        </fieldset>
        <button type="submit">Find Rates</button>
      </form>
      <ul className="results" aria-live="assertive"> 
      </ul>
    </div>
  );
}
