import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header-Deslogado'
import Home from './pages/Home';
import Footer from './components/Footer';


const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}
export default Routes;
