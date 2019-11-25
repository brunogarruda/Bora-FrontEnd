/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
// import React, { lazy, Suspense } from "react";
import React, { Suspense } from "react";
import { MemoryRouter as Router, Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSignUp from "./components/HeaderSignUp";
import Home from "./pages/Home";
import DetalheEvento from "./pages/DetalheEvento";
import Perfil from "./pages/Perfil";
import EditarEvento from "./pages/EditarEvento";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import NavbarDeslogado from "./components/NavbarDeslogado";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )}
  />
);

export const Routes = () => (
  <BrowserRouter>
    <Header />
    {/* {(isAuthenticated() ?     <Header /> :     <NavbarDeslogado />)} */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/eventos/detalhe/:id" component={DetalheEvento} />
      <PrivateRoute exact path="/perfil/:id" component={Perfil} />
      <Route exact path="/eventos/editar/:id" component={EditarEvento} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/login" component={Login} />
      <Route path="*" component={PaginaNaoEncontrada} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

// export const Routes = () => (

// )

// import React from "react";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Footer from "./components/Footer";
// import { isAuthenticated } from "./services/auth";
// import Header from "./components/Header";
// import  {Home} from "./pages/Home";
// import DetalheEvento from "./pages/DetalheEventos";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )}
//   />
// );

// export const Routes = () => (
//   <BrowserRouter>
//     <Header />
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <PrivateRoute exact path="/perfil/:id" component={<h1>Teste</h1>} />
//       <Route exact path="/detalheEventos/:id" component={DetalheEvento} />
//       <Route path="*" component={() => <h1>Page not found</h1>} />
//     </Switch>
//     <Footer />
//   </BrowserRouter>
// );
