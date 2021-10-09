import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from '../pages/Main'
import Product from '../pages/Product'
import Partners from '../pages/Partners'
//import Main from '../pages/Main'

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/user/data_catalog" exact>
        <Main />
      </Route>
      <Route path="/user/product">
        <Product />
      </Route>
      <Route path="/user/partners">
        <Partners />
      </Route>
      <Redirect to="/user/data_catalog"/>
    </Switch>
  );
};

export default AppRouter;
