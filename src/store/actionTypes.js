// store all actions names here this way
// for easy modify in the future 
// this action name will be used in two places
// final component where we call to do this action
// like here :
// const mapDispatchToProps = dispatch => {
//     return {
//       saveArticle: article =>
//         dispatch({ type: actionTypes.ADD_ARTICLE, articleData:  article  }), 
//     }
//   }
// and the second place inside reducer switch cases
// like here :
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case actionTypes.ADD_ARTICLE:
//          do something here ....


export const ADD_ARTICLE = "ADD_ARTICLE"
export const CLEAR_ARTICLES = "CLEAR_ARTICLES"


// SYSTEM Settings action types
export const THEME_COLOR = 'theme_color';
export const DARK_THEME = 'dark_theme';