import React from "react";
import photo from "./images/michael-singhurse.png";
import "./About.css";

export default function About() {
  return (
    <div id="about">
      <h1>About Sales Tax Search</h1>
      <p>I created this website to help tax preparers with the often tedious 
      and time consuming task of looking up the sales tax rates for an
      address or sales location.</p>

      <p>Prior to becoming a software developer, I worked as a tax
      analyst for over three years, and my speciality was sales and use tax
      compliance. While reviewing transactions and preparing returns, I would 
      repeatedly have to go back to Google and search for something like 
      "sales tax Chicago IL" or "sales tax zip 60302."</p>

      <p>In addition to looking up the rate at a given address, it's often
      helpful to see where that address is on the map. You can see where the
      location is relative to other taxing jurisdiction boundaries nearby and
      may need to do more research if it's near a county or city line.</p>

      <p>If you have any feedback about how I can make this site more useful,
      please reach out to me via email.</p>

      <p>Thanks and all the best to you,</p> 

      <figure>
        <img src={photo} alt="Michael Singhurse" />
      </figure>

      <address>
        <p>Michael Singhurse</p>
        <p>
          <a href="mailto:singhurse@lisieuxresearch.com">singhurse@lisieuxresearch.com</a>
        </p>
      </address>
      <p>P.S. If you're interested in how I built the site, check out the project
        on <a href="https://github.com/michaelsinghurse/sales-tax-search">GitHub</a>!
      </p>
    </div>
  );
}
