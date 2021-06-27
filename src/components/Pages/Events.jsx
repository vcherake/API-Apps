import React, { useEffect, useState } from "react";

function Events() {
  const [brData, setBrData] = useState({ data: {} });

  const fetchBr = () => {
    try {
      fetch("https://fortnite-api.com/v2/news/br")
        .then((response) => response.json())
        .then((result) => {
          setBrData(result);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBr();
    return () => {
      setBrData({});
    };
  }, []);

  const ImgStyles = {
    height: "400px",
    width: "700px",
    overflow: "hidden",
  };

  const eventCol = {
    color: "blue",
  };

  const { date, image, hash } = brData.data;

  return (
    <div>
      <div>
        <h3>Results:</h3>
        <p style={eventCol}>Response Date: {date || "No Date"}</p>
        <p style={eventCol}>Response Status: {brData.status || "No Status"}</p>
        <p style={eventCol}>Hash Response: {hash || "No Hash Resposne"}</p>
      </div>

      {!image ? (
        <span>Loading Image...</span>
      ) : (
        <img style={ImgStyles} src={image} alt={image} />
      )}
    </div>
  );
}

export default Events;
