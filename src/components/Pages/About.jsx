import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const [mapApiData, setMapApiData] = useState({ data: { pois: [] } });

  const getMapDetails = async () => {
    try {
      const fetchMapData = await fetch("https://fortnite-api.com/v1/map");
      const mapData = await fetchMapData.json();
      setMapApiData(mapData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMapDetails();
    return () => {
      setMapApiData({});
    };
  }, []);

  return (
    <div>
      <h1>[Map]</h1>
      {!mapApiData.data.pois.length ? (
        <p>Loading...</p>
      ) : (
        mapApiData.data.pois.map((poi) => (
          <h3 style={{ color: "black" }} key={poi.id}>
            <Link to={`/about/${poi.id}`}>{poi.name}</Link>
          </h3>
        ))
      )}
    </div>
  );
}

export default About;
