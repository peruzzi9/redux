import React, { useState } from "react"

 
// for  redux state and actions / store
import { connect } from "react-redux"
 
//change interface texts depending on language
import IntlMessages from '../util/IntlMessages';
 

const Aboutus = ({ language }) => (
    <div>
        <div><IntlMessages id="about.title" /></div>
        <div><IntlMessages id="about.description" /></div>
    </div>
)

const mapStateToProps = state => {
    const language = state.languageDirection.locale;
    return {
        language: language
    }
}
export default connect(mapStateToProps)(Aboutus)
