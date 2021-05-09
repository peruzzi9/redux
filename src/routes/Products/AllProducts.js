import React, { useState } from "react"
import {Link, useRouteMatch } from "react-router-dom"

import Cars from "./Cars/AllCars"
import Ships from "./Ships"

const Allproducts = () => {
    const { path } = useRouteMatch(); 
return(
    <div>
        <div>
        <Link to={`/myapp/products/cars`}>
          Cars
        </Link>
        </div>
        <div>
        <Link to={`/myapp/products/ships`}>
          SHIPS
        </Link>
        </div>
        <div>
            <Cars />
       </div>
        <div>
           <Ships />
       </div>
    </div>

)
}

export default Allproducts