import React from "react";

import "./cardComponent.style.css";

export const CardComponent = (props) => {
  return <h1 className="card-container">{props.monster.name}</h1>;
};
