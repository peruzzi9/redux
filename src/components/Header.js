import React, { useState } from "react"
 

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
                <Button variant="contained">
                  <IntlMessages id="header.homepage" />
                  </Button>
                <Button variant="contained" color="primary">
                <IntlMessages id="header.products" />
                </Button>
                <Button variant="contained" color="secondary">
                <IntlMessages id="header.aboutus" />
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
          <LanguageSwitcher/>
        </div>
        </div> 
      )
      
            } 

 
  export default  Header
 