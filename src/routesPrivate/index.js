import React from 'react';
import { Redirect, Route, Switch , useRouteMatch  } from 'react-router-dom';
/* import asyncComponent from '../../../util/asyncComponent'; */

import Articles from "../containers/Articles"

/* this is nested route for loggedin user only
   check id done in App using RestrictedRoute */
const MyPrivateRoutes = () => { 
   const { path } = useRouteMatch(); 
   console.log("useRouteMatch path===",path)// will return "/myapp" 
   return(
   <div>
        <Switch>
            {/* <Redirect exact from={`${path}/`} to={`${path}/lawyerdelegation`} /> */}
            <Route path={`${path}/articles`} component={ Articles } />
        </Switch>
    </div>
   )
};

export default MyPrivateRoutes;