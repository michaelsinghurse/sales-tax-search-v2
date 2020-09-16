import React from "react";

export default function ResultsItemInput(props) {
  return (
    <ul className="results-input">
      <li>
        <span>Street:</span>
        {props.inputs.street} 
      </li>
      <li>
        <span>City:</span>
        {props.inputs.city} 
      </li>
      <li>
        <span>State:</span>
        {props.inputs.state} 
      </li> 
      <li>
        <span>Zip:</span>
        {props.inputs.zip} 
      </li>
    </ul>
  );
}
