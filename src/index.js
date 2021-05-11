import React from "react"
import ReactDOM from "react-dom"

//import "./index.css"
import App from "./App"

// redux main import
import { createStore } from "redux"
import { Provider } from "react-redux"

//for use redux-thunk
import thunk from 'redux-thunk';
import {  applyMiddleware } from 'redux';

import combineReducers from "./store/combineReducers"

//for one reducer we can call
//import articleReducer from "./store/Articles/articleReducer"
//const store = createStore(articleReducer)
//or
//const store = createStore(reducer, initialState);

//initialState could be like
//const initialState = {
//   articles: [
//     { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
//     { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
//   ],
// } or  const initialState={articles:[]}


//====================================================

// for multi combaining reducer to give the abiltity to access all reducers by one store
// we use combineReducers
const store = createStore(combineReducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)