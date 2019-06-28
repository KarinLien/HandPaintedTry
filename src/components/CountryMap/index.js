import React from "react";
import { VectorMap } from "react-jvectormap";

let mapData = {
  TW: 100000,
  IN: 9900,
  SA: 86,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20
};

class CountryMap extends React.Component {
  render() {
    return (
      <div>
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent" //change it to blue !!!
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "520px"
          }}
          //   onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 1,
              "stroke-opacity": 0.8,
              "stroke-linejoin": "round",
              "stroke-miterlimit": 1
            },
            hover: {
              "fill-opacity": 0.5,
              cursor: "pointer"
            },
            selected: {
              fill: "#2938bc" //what colour clicked country will be
            },
            selectedHover: {}
          }}
          regionsSelectable={true}
          series={{
            regions: [
              {
                values: mapData, //this is your data
                scale: ["#146804", "#ff0000"], //your color game's here
                normalizeFunction: "polynomial"
              }
            ]
          }}
        />
      </div>
    );
  }
}
export default CountryMap;
