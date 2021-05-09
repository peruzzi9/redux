import React from 'react';
import { Redirect, Route, Switch , useRouteMatch  } from 'react-router-dom';
/* import asyncComponent from '../../../util/asyncComponent'; */

import BMWCars from "./BMW"
import MarcedesCars from "./Marcedes"
import AllCars from "./AllCars"

const CarsRoutes = () => { 
   const { path } = useRouteMatch(); 
   console.log("AllCars useRouteMatch path===",path)// will return "/myapp" 
   return(
   <div>
        <Switch>
            {/* if link is ending with products/ then redirect to allproducts route */}
            <Redirect exact from={`${path}/`} to={`${path}/allcars`} /> 
            <Route path={`${path}/bmw`} component={ BMWCars } />
            <Route path={`${path}/marceds`} component={ MarcedesCars } />
            <Route path={`${path}/allcars`} component={ AllCars } />
        </Switch>
    </div>
   )
};

export default CarsRoutes;