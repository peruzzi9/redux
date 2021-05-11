import * as actionTypes from "../actionTypes"
import axios from 'axios';

export const clearAllArticles = () => ({
  type: actionTypes.CLEAR_ARTICLES

});

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