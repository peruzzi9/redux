import * as actionTypes from "./actionTypes"

// we can initial here inside reducer or when/where we call createStore
// Ex: const store = createStore(reducer, initialState);
const initialState = {
  articles: [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ],
}

const reducer = (state = initialState, action) => {
  // action is an object of minimum two properties 
  // type : is the real action
  // payload : data to be added/deleted/edited ....
  console.log("action===",action)
  switch (action.type) {

    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(), // not really unique but it's just an example
        title: action.articleData.title,
        body: action.articleData.body,
      }
      console.log("newArticle===",newArticle)
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      }

    case actionTypes.CLEAR_ARTICLES :
      return {
        articles: [],
      } 
      
    default:
      return state;
  } 
}
export default reducer