// import React, { lazy, Suspense } from "react";
import React, {Suspense } from "react";
import { MemoryRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { history } from "./history";
import Home from "./pages/Home";
// const Post = lazy(() => import('./components/Loading/Post'))
// const Home = lazy(() => import('./pages/Home'))

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export const Routes = () => (
  <BrowserRouter>
    <Header />
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={WaitingComponent(Home)} />
      </Switch>
    </Router>
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
