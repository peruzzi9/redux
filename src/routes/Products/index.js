import React from 'react';
import { Redirect, Route, Switch , useRouteMatch  } from 'react-router-dom';
/* import asyncComponent from '../../../util/asyncComponent'; */

import CarsRoutes from "./Cars"
import Ships from "./Ships"
import AllProducts from "./AllProducts"

const ProductsRoutes = () => { 
   const { path } = useRouteMatch(); 
   console.log("ProductsRoutes useRouteMatch path===",path)// will return "/myapp" 
   return(
   <div>
        <Switch>
            {/* if link is ending with products/ then redirect to allproducts route */}
            <Redirect exact from={`${path}/`} to={`${path}/allproducts`} /> 
            <Route path={`${path}/ships`} component={ Ships } />
            <Route path={`${path}/cars`} component={ CarsRoutes } />
            <Route path={`${path}/allproducts`} component={ AllProducts } />
        </Switch>
    </div>
   )
};

export default ProductsRoutes;