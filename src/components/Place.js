import React from "react";

export default function Place(props) {
  return (
    <div className="place">
      <figure>
        <img 
          src={props.place.imageUrl} 
          alt={props.place.imgAlt}
          loading="lazy" 
        />
      </figure>
      <div className="place-details">
        <div className="location">
          <div>
            <ion-icon name="location-outline"></ion-icon>
            <span className="country-name"> 
              {props.place.location.toUpperCase()}
            </span>
          </div>
          <a 
            href={props.place.googleMapsUrl} 
            target="_blank" 
            rel="noreferrer"
          >
            View on Google Maps ↗
          </a>
        </div>
        <div className="header">
          <h1>{props.place.title}</h1>
          <p>{props.place.startDate} - {props.place.endDate}</p>
        </div>
        <article className="description">
          <p>
            {props.place.description}
          </p>
        </article>
      </div>
    </div>
  );
}