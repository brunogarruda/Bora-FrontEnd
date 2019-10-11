import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import { isAuthenticated } from "./services/auth";
import Header from "./components/Header";
import Home from "./pages/Home";

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
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}
export default Routes;
