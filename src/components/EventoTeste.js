/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from "react";

import EventoCard from "./EventoCard";


const EventoTeste = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  if (list) {
    cards = list.map((m, i) => <EventoCard key={i} item={m} />);
  }

  return (
    <div>
      <div>{cards}</div>
    </div>
  );
};

export default EventoTeste;
