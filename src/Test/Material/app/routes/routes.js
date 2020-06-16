// import React, { lazy, Suspense } from "react";
import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Loading from '../components/views/components/LoadingCircular_C';
import { NavBarComponent } from '../components/NavBarComponent';
// import NavBarComponent from '../../../../components/Header';
// import { history } from '../utils/history';
import Footer from '../components/views/components/FooterDefault_C';
import { isAuthenticated } from '../services/auth';
const Home = lazy(() => import('../pages/home-page'));
const Perfil = lazy(() => import('../pages/perfil-page'));
const DetalheEvento = lazy(() => import('../pages/detalhe-evento'));
const EditarEvento = lazy(() => import('../pages/editar-evento-page'));

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              from: props.location
            }
          }}
        />
      )
    }
  />
);

export const Routes = () => (
  <BrowserRouter>
    <NavBarComponent />
    <Switch>
      <Route exact path="/" component={WaitingComponent(Home)} />
      <Route exact path="/perfil/:apelido" component={WaitingComponent(Perfil)} />
      <Route exact path="/eventos/detalhe/:id" component={WaitingComponent(DetalheEvento)} />
      <PrivateRoute exact path="/eventos/editar/:id" component={WaitingComponent(EditarEvento)} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
    <Footer />
  </BrowserRouter>
  // <BrowserRouter>
  //   <NavBarComponent />
  //     <Switch>
  //       <Route exact path="/" component={WaitingComponent(Home)} />
  //       <Route exact path="/perfil" component={WaitingComponent(Perfil)} />
  //     </Switch>
  //     <Footer />
  //   </Router>
  // </BrowserRouter>
);
