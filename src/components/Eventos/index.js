import React from "react";
import "./styles.css";
import {Icon} from "@material-ui/core";
// import data from "./data/eventos.json";


export const EventosCard = () => {
  // const te = data;
  // for (let index = 0; index < te.length; index++) {
  //   var sa = te;
  // }

  return (
    <>
    <di className="container">
      <div className="conteudo">
        {/* {sa.map(res => ( */}
          {/* <div key={res.idEvento} className="card"> */}
          <div className="card">
            {/* <h3 className="title">{res.titulo}</h3> */}
            <h3 className="title" />
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
            <div className="circle">
              <Icon>close</Icon>
            </div>
          </div>
        {/* ))} */}
      </div>
    </di>
    </>
  );
};
