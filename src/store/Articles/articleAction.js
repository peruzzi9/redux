import * as actionTypes from "../actionTypes"
import axios from 'axios';

export const clearAllArticles = () => ({
  type: actionTypes.CLEAR_ARTICLES

});
/* Redux Thunk is a middleware that allows you to call the action creators
 that return a function(thunk) which takes the store’s
  dispatch method as the argument 
  and which is afterwards used to dispatch the synchronous action 
  after the API or side effects has been finished. */
  
/* getAllArticles() is an action creator which returns
 a function which in turn takes dispatch method as the argument. 
 After we have received the Articles from the server,
  we will dispatch a regular synchronous action using the dispatch method. */
export const getAllArticles = () => {

  return (dispatch) => {
    // tell reducer that fetching data is started
    dispatch({ type: actionTypes.GET_ARTICLES_STARTED });

    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        //success data fetch done with success ... send it to reducer for update state
        dispatch({ type: actionTypes.GET_ARTICLES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        //failed data fetch
        dispatch( { type: actionTypes.GET_ARTICLES_FAILURE, payload: err.message }  );
      });

  }


};