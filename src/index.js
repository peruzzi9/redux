import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import "./index.css"
import App from "./App"
import reducer from "./store/reducer"

const store = createStore(reducer)
//or
//const store = createStore(reducer, initialState);

//initialState could be like
//const initialState = {
//   articles: [
//     { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
//     { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
//   ],
// } or  const initialState={articles:[]}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)