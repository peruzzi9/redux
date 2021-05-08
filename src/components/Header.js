import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom";

import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher"
import LanguageSwitcher from "./LanguageSwitcher"

// MaterialUi
import Button from '@material-ui/core/Button';

//change interface texts depending on language
import IntlMessages from '../util/IntlMessages';


const Header = () => {
  //this is come after mapStateToProps

  return (
    <div>
      <div>
        {/* this is materialui Button component  themed by MuiThemeProvider 
                   every change on theme color will effect these buttons
                */}
        <Link to="/">
          <Button variant="contained">
            <IntlMessages id="header.homepage" />
          </Button>
        </Link>
        <Link to="/articles">
          <Button variant="contained" color="secondary">
            <IntlMessages id="article.allarticletitle" />
          </Button>
        </Link>
        <Link to="/products">
          <Button variant="contained" color="primary">
            <IntlMessages id="header.products" />
          </Button>
        </Link>
        <Link to="/aboutus">
          <Button variant="contained" color="secondary">
            <IntlMessages id="header.aboutus" />
          </Button>
        </Link>
        <Button variant="contained" color="secondary">
          <Link to="/oldarticles"><IntlMessages id="article.oldariclelink" /></Link>
        </Button>
        <Button variant="contained" color="secondary">
          <Link to="/also/will/not/match"><IntlMessages id="test.anylink" /></Link>
        </Button>





        <Button variant="contained" disabled>
          <IntlMessages id="header.contactus" />
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          <IntlMessages id="header.login" />
        </Button>
      </div>
      <div>
        {/* component for switching theme with redux store */}
        <ThemeSwitcher />
      </div>
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  )

}


export default withRouter(Header)
