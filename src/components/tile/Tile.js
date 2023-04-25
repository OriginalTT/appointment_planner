import React from "react";

export const Tile = ({ name, description }) => {
  const arrayDescription = Object.values(description);
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {arrayDescription.map((info, index) => {
        return <p className="tile" key={index}>{info}</p>
      })}
    </div>
  );
};
