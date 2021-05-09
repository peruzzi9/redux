import React, { useState } from "react"
import {useHistory} from "react-router-dom"


const BMWCars = () => {

  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  let home = e => {
    e.stopPropagation();
    history.push("/");
  };

  return (
    <div>
      <h1>BMW Cars list</h1>
      <button type="button" onClick={back}>
        back to previous page using history
      </button>
      <button type="button" onClick={home}>
        go to home using history push page
      </button>
    </div>
  )
}

export default BMWCars