import { combineReducers } from 'redux';

import articleReducer from "./Articles/articleReducer"
import themeReducer from "./Theme/themeReducer"

export default combineReducers(
    {
        // article is name which will deal with
        // and we get it in console when we connect with global store :
        //const mapStateToProps = state => {
        // console.log("state===",state)    
        // return {
        // articles: state.article.articles,

        // articleReducer is the real name , it is the reducer with stored values
        article:articleReducer,
        theme:themeReducer
    });