import React, { useState } from "react"

import BMWCars from "./BMW"
import MarcedesCars from "./Marcedes"

import { Link, useRouteMatch, useLocation } from "react-router-dom"

const AllCars = () => {
  const { path } = useRouteMatch();

  // example of use useLocation / location
  // display result depending on URL query 
  //http://localhost:3000/myapp/products/cars/allcars?brand=bmw
  const { search } = useLocation();
  const Location = useLocation();
  /* {
    pathname: "/myapp/products/cars/allcars",
     search: "?brand=bmw",
      hash: "",
       state: undefined,
        key: "nhmsyc"
    } */
  const match = search.match(/brand=(.*)/);
  const brand = match?.[1];
  console.log("useLocation ====",search,Location)//useLocation ==== ?brand=bmw
  return (
    <div>
      <div>
        <Link className="text-link"  to={`/myapp/products/cars/bmw`}>
          BMW Cars
        </Link>
      </div>
      <div>
        <Link className="text-link"  to={`/myapp/products/cars/marceds`}>
          Marcedes Cars
        </Link>
      </div>

      <div>
        <Link className="text-link"  to={`/myapp/products/cars/allcars?brand=bmw`}>
          BMW Cars by url query
        </Link>
      </div>
      <div>
        <Link className="text-link"  to={`/myapp/products/cars/allcars?brand=marceds`}>
          Marcedes Cars by url query
        </Link>
      </div>
      <h2>Cars list :</h2><h3>{brand}</h3>
      {/* display all or by brand when it is passed in URL */}
      <div>
        {(brand === 'bmw' || !brand) && <BMWCars />}
      </div>
      <div>
        {(brand === 'marceds' || !brand) && <MarcedesCars />}
      </div>
    </div>

  )
}

export default AllCars