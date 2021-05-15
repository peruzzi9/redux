import * as actionTypes from "../actionTypes"

const reducer = (state = {news:[],loading:false,error:null}, action) => {
  switch (action.type) {
    case actionTypes.GET_NEWS:// like start loading ...
         return { ...state, loading: true };
    case actionTypes.NEWS_RECEIVED:
         return { ...state, news: action.news, loading: false }
    case actionTypes.NEWS_ERROR:
          return {
            ...state,
            loading: false,
            error: action.error
          };
    default: 
         return state;
  }
 };
 export default reducer;