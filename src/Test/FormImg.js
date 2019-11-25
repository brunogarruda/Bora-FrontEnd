/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/"
});

export const FormImg = () => {
  const [img, setImg] = useState({
    file: ""
  });

  const [respo, setRespo] = useState({
    nome: "",
    tipo: "",
    pic: ""
  });

  const onChange = e => {
    setImg({
      ...img,
      [e.target.name]: e.target.files[0]
    });
  };

  const onSubmit = () => {
    const data = new FormData();
    const file = img;
    data.append("file", file.file);
    data.append("user", "Guilherme");
    api.post("usuarios", data).then(res => console.log(res.data));
  };

  const busca = () => {
    api.get("usuarios/1").then(res => setRespo(res.data));
  };


  return (
    <>
      <input name="file" id="name" type="file" onChange={onChange} />
      <br />
      <button type="button" onClick={onSubmit}>
        Enviar
      </button>
      <br />
      <button type="button" onClick={busca}>
        Receber
      </button>
      <br />
      <img src={`data:image/jpeg;base64,${respo.pic}`} width="100px" height="100px" />
    </>
  );
};
