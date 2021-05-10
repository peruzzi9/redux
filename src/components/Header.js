import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom";
/* if you want that your component receive RouterProps(history,location,history.push  ....),
 but don't want to wrap it in <Route component={Some}>.
  You can just use withRouter function to connect component
   to the router, without additional manipulations 
   or jsx tags wrapping. You can just "export default withRouter(component)" 
   
   Header here is shered component used every where and it is not called/warped 
   as <Route path="/header"  component={Header}>
   so we use  withRouter to give it access to Route props (history,location,history.push  ....)*/
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
        <Link to="/myapp/articlesmanage">
          <Button variant="contained" color="secondary">
            <IntlMessages id="article.allarticletitle" />
          </Button>
        </Link>
        <Link to="/privateapp/articles">
          <Button variant="contained" color="secondary">
            Private<IntlMessages id="article.allarticletitle" />
          </Button>
        </Link>
        <Link to="/myapp/products">
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
        <Link to="/privatepage">
          <Button variant="contained" color="secondary">
            Private Page
          </Button>
        </Link>





        <Button variant="contained" disabled>
          <IntlMessages id="header.contactus" />
        </Button>
        <Button variant="contained" color="primary" href="/login">
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
