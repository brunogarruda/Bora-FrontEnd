import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Header from './components/Header-Deslogado'
import Home from './pages/Home';
import Footer from './components/Footer';
import { isAuthenticated } from "./services/auth";
import DetalheEvento from "./pages/DetalheEventos"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <PrivateRoute exact path="/perfil/:id" component={<h1>Teste</h1>}></PrivateRoute>
                <Route exact path="/detalheEventos/:id" component={DetalheEvento}></Route>
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}
export default Routes;
