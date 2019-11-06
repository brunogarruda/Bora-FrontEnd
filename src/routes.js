import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import { isAuthenticated } from "./services/auth";
import Header from "./components/Header";
import  {Home} from "./pages/Home";
import DetalheEvento from "./pages/DetalheEventos";
import Perfil from "./pages/Perfil";
import EditarEvento from "./pages/EditarEventos"

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
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detalheEventos/:id" component={DetalheEvento} />
      <PrivateRoute exact path="/perfil" component = {Perfil}  />
      <Route exact path="/evento/:id" component= {EditarEvento} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
    <Footer />
  </BrowserRouter>
);
