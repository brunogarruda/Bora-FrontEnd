import React from "react";

export const EventoCard = props => {
  const { nome, descricao,organizador } = props.item;

  return (
    <>
      <div>
        <span>{nome}</span>
      </div>

      <div>
        <h3>{descricao}</h3>
      </div>
      <div>
        <h3>{organizador}</h3>
      </div>
    </>
  );
};

// export default EventoCard;
