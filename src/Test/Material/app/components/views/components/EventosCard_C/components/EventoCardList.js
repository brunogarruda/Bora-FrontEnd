import React from "react";
import { CardDefault } from "..";

const EventoCardList = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  if (list) {
    cards = list.map((m, i) => <CardDefault key={i} item={m} />);
  }

  return (
    <div>
      <div>{cards}</div>
    </div>
  );
};

export default EventoCardList;
