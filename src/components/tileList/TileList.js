import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({ objects }) => {
  return (
    <div>
      {objects.map((obj, index) => {
        const {name, ...rest} = obj;
        return <Tile name={name} description={rest} key={index} />
        })}
    </div>
  );
};
