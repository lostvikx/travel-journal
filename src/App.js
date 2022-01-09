import React from "react";
import Nav from "./components/Nav";
import data from "./travelData";
import Place from "./components/Place";

// console.log(data);

// console.log(nLines)

const travelData = data.map((place, i) => {

  let nLines = (data.length - 1) - i;
  // console.log(nLines)

  return (
    <div key={place.id}>
    <Place 
      place={place}
    />
    {nLines ? <hr /> : <></>}
    </div>
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