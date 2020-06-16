/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React from "react";
import { useSignUpForm } from "./Modal/component/CustomHooks";
import { api } from "../services/api";

export const Signup = () => {

  const { inputs, hanldeInputChange } = useSignUpForm(
    {
      nome: "",
      apelido: "",
      email: "",
      celular: "",
      senha: ""
    }
  );

  console.log(inputs);


  const teste=()=>{
    api.post("/auth/v1/api/usuarios", inputs).then(
      res=>{
        console.log(res.data);
      }
    );
  };
// <form onSubmit={teste} autoComplete="off">
  return (
    <div>
      <form autoComplete="off">
        <label htmlFor="nome">Nome: </label>
        <input type="text" name="nome" onChange={hanldeInputChange} value={inputs.nome} />

        <label htmlFor="apelido">Apelido: </label>
        <input type="text" name="apelido" onChange={hanldeInputChange} value={inputs.apelido} />

        <label htmlFor="email">email: </label>
        <input type="text" name="email" onChange={hanldeInputChange} value={inputs.email} />

        <label htmlFor="celular">celular: </label>
        <input type="text" name="celular" onChange={hanldeInputChange} value={inputs.celular} />

        <label htmlFor="senha">Senha: </label>
        <input type="text" name="senha" onChange={hanldeInputChange} value={inputs.senha} />
        <button onClick={teste} type="button">Cadastrar</button>
      </form>
    </div>
  );
};
