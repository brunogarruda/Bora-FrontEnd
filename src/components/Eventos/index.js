/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Icon } from "@material-ui/core";
import data from "./data/eventos.json";

export const EventosCard = () => {
  const te = data;
  for (let index = 0; index < te.length; index++) {
    var sa = te;
  }

  // const vaiParaODetalhe = () => {};

  return (
    <>
      <di className="container">
        <div className="conteudo">
          {sa.map(res => (
            <div key={res.idEvento} className="card">
              <h3 className="title">{res.titulo}</h3>
              <div className="bar">
                <div className="emptybar" />
                <div className="filledbar">{res.organizador}</div>
                <button>
                  <Link to={`/eventos/detalhe/${res.idEvento}`}>
                    <b>Detalhes</b>
                  </Link>
                </button>
              </div>
              <div className="circle">
                <Icon>close</Icon>
              </div>
            </div>
          ))}
        </div>
      </di>
    </>
  );
};
