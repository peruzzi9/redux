import React, { useState } from "react"

 
// for  redux state and actions / store
import { connect } from "react-redux"
 
//change interface texts depending on language
import IntlMessages from '../util/IntlMessages';
 
import { useParams } from "react-router-dom";

const Car = ({ language }) => 
{
    // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
    let { id } = useParams();
    return(
    <div>
        <div><IntlMessages id="car.title" />{id}</div>
        <div><IntlMessages id="car.description" /></div>
    </div>
)
    }

const mapStateToProps = state => {
    const language = state.languageDirection.locale;
    return {
        language: language
    }
}
export default connect(mapStateToProps)(Car)
