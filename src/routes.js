import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './component/Header-Deslogado'
import Home from './pages/';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;