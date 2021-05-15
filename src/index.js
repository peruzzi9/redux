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
// greate (inspect logger) for redux
import {  logger  } from 'redux-logger';

//for use redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// With redux-thunk you can put an API call directly inside an action creator 
// while in redux-saga you can have clear separation between synchronous and asynchronous logic.

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
const saga = createSagaMiddleware();
// for multi combaining reducer to give the abiltity to access all reducers by one store
// we use combineReducers
// add saga middleware and use thunk & saga at the same time in same project 
// without any problem ... articles will work with thunk / news will work with saga
const store = createStore(combineReducers,applyMiddleware(thunk,saga,logger))

saga.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)