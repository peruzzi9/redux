import React, { useState } from "react"

import BMWCars from "./BMW"
import MarcedesCars from "./Marcedes"

import {Link, useRouteMatch } from "react-router-dom"

const AllCars = () => {
  const { path } = useRouteMatch(); 
return(
  <div>
    <div>
        <Link to={`/myapp/products/cars/bmw`}>
        BMW Cars
        </Link>
        </div>
        <div>
        <Link to={`/myapp/products/cars/marceds`}>
        Marcedes Cars
        </Link>
        </div>
    Cars list :
    <div>
      <BMWCars />
    </div>
    <div>
      <MarcedesCars />
    </div>
  </div>

)
}

export default AllCars