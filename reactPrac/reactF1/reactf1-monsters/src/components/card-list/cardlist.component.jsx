import React from "react";
import "./cardlist.style.css";

import { CardComponent } from "../card/card.component.jsx";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((mon) => (
        <CardComponent key={mon.id} monster={mon} />
      ))}
    </div>
  );
};
