import React from "react";
import Nav from "./components/Nav";
import data from "./travelData";
import Place from "./components/Place";

// console.log(data);

const travelData = data.map(place => {
  return (
    <Place 
      key={place.id}
      place={place}
    />
  );
});

export default function App() {
  return (
    <div className="container">
      <Nav />
      <div className="all-places">
        {travelData}
      </div>
    </div>
  );
}