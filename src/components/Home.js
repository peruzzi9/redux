import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom";

// MaterialUi
import Button from '@material-ui/core/Button';

//change interface texts depending on language
import IntlMessages from '../util/IntlMessages';


// for  redux state and actions / store
import { connect } from "react-redux"

const Home = ({ language }) => {
  //this is come after mapStateToProps

  return (
    <div>
      <div>
        {/* this is materialui Button component  themed by MuiThemeProvider 
                   every change on theme color will effect these buttons
                */}
        <h1>You are in the home page component</h1>
        <Link to="/">
          <Button variant="contained">
            <IntlMessages id="header.homepage" />
          </Button>
        </Link>
        
      </div>
      
    </div>
  )

}

const mapStateToProps = state => {
  const language = state.languageDirection.locale;
  return {
      language: language
  }
}
export default withRouter(connect(mapStateToProps)(Home))
