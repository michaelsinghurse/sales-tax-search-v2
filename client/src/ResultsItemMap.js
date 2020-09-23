import React from "react";
import mapErrorImg from "./images/map-error.png";

export default class ResultsItemMap extends React.Component {
  componentDidMount() {
    const geocode = this.props.geocode ? JSON.parse(this.props.geocode) : "";
    const id = this.props.searchId;

    const element = document.querySelector(`#search${id} .map`);

    if (geocode) {
      // eslint-disable-next-line no-undef
      const map = new google.maps.Map(element, {
        center: geocode,
        zoom: 10
      });

      // eslint-disable-next-line no-unused-vars, no-undef
      const marker = new google.maps.Marker({
        position: geocode,
        map,
        title: "Sales Location",
      });
    } else {
      const img = document.createElement("img");
      img.setAttribute("src", mapErrorImg);
      element.appendChild(img);
    }
  }

  render() {
    return (
      <div className="map-container" aria-label="google map with pin on the sales location">
        <div className="map"> </div>
      </div>
    );
  }
}
