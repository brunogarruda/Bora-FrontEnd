// import React, { lazy, Suspense } from "react";
import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { NavBarComponent } from '../components/NavBarComponent';
import { history } from '../utils/history';

import Footer from '../components/views/components/FooterDefault_C';
// const Post = lazy(() => import('./components/Loading/Post'))
const Home = lazy(() => import('../pages/home-page'));
const Perfil = lazy(() => import('../pages/perfil-page'));
const DetalheEvento = lazy(() => import('../pages/detalhe-evento'));


function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export const Routes = () => (
  <BrowserRouter>
    <NavBarComponent />
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={WaitingComponent(Home)} />
        <Route exact path="/perfil/:apelido" component={WaitingComponent(Perfil)} />
        <Route exact path="/eventos/detalhe/:id" component={WaitingComponent(DetalheEvento)} />
      </Switch>
      <Footer />
    </Router>
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
