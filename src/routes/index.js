import React from 'react';
import { Redirect, Route, Switch , useRouteMatch  } from 'react-router-dom';
/* import asyncComponent from '../../../util/asyncComponent'; */

import Articles from "../containers/Articles"
import ProductsRoutes from "./Products"

const MyRoutes = () => { 
   const { path } = useRouteMatch(); 
   console.log("useRouteMatch path===",path)// will return "/myapp" 
   return(
   <div>
        <Switch>
            {/* <Redirect exact from={`${path}/`} to={`${path}/lawyerdelegation`} /> */}
            <Route path={`${path}/articlesmanage`} component={ Articles } />
            <Route path={`${path}/products`} component={ ProductsRoutes } />
        </Switch>
    </div>
   )
};

export default MyRoutes;