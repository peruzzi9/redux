
import React, { useState } from "react"

 
// for  redux state and actions / store
import { connect } from "react-redux"
 
//change interface texts depending on language
import IntlMessages from '../util/IntlMessages';
 

const Login = ({ language }) => (
    <div>
        <div>user name :</div>
        <div>password :</div>
    </div>
)

const mapStateToProps = state => {
    const language = state.languageDirection.locale;
    return {
        language: language
    }
}
export default connect(mapStateToProps)(Login)
