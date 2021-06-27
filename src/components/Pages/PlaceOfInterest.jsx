import React, { useEffect, useState } from "react";

function PlaceOfInterest({ match }) {
  const [coordinates, setCoordinates] = useState({});
  const [placeDetails, setPlaceDetails] = useState({ data: { pois: [] } });

  const placeCoordinates = async () => {
    await fetch(`https://fortnite-api.com/v1/map`)
      .then((response) => response.json())
      .then((result) => {
        setPlaceDetails(result);
      })
      .catch((err) => console.log(err));
  };

  const acquireCoordinates = (place, places) => {
    const coords = places.pois.filter((poi) => poi.id === place.id);
    setCoordinates(coords);
  };

  useEffect(() => {
    placeCoordinates();
    return () => {
      setPlaceDetails({});
    };
  }, []);

  useEffect(() => {
    acquireCoordinates(match.params, placeDetails.data);
    return () => {
      setCoordinates({});
    };
  }, [placeDetails, match.params]);

  return (
    <div>
      <h3>Place Of Interest</h3>

      <div>
        {!coordinates.length ? (
          <p>Loading...</p>
        ) : (
          coordinates.map((c) => (
            <section key={c.id}>
              <h2>{c.name}</h2>
              <hr />
              <p>X {c.location.x}</p>
              <hr />
              <p>Y {c.location.y}</p>
              <hr />
              <p>Z {c.location.z}</p>
            </section>
          ))
        )}
      </div>

      {placeDetails.data.images && (
        <div>
          <img
            src={placeDetails.data.images.pois}
            alt={placeDetails.data.images.pois}
            height="750"
            width="auto"
          />
        </div>
      )}
    </div>
  );
}

export default PlaceOfInterest;
