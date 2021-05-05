import React, { useState } from "react"
 

// MaterialUi
import Button from '@material-ui/core/Button';

// for  redux state and actions / store 
import { connect } from 'react-redux';
import { setDarkTheme, setThemeColor } from '../../store/Theme/themeActions'
import { useEffect } from 'react'; 

import { GREEN, RED, BLUE, ALAACOLOR } from '../../constants/ThemeColors';

const ThemeSwitcher = ({ settings, setDarkTheme, setThemeColor }) => {
    //this is come after mapStateToProps
  console.log("ThemeSwitcher settings from  store ===", settings)
  let { themeColor, isDarkTheme } = { isDarkTheme: settings.darkTheme, themeColor: settings.themeColor };
   
  if (localStorage.getItem("themeColor")) {
    console.log("stored theme is=========", localStorage.getItem("themeColor"))
  }

    useEffect(()=>{
        // call one time to set theme from local storage
        console.log("useEffect one time====")
        const body = document.body.classList;
        if (!isDarkTheme) {
          body.remove(themeColor);
          body.add(themeColor);
        }
        else {
          body.toggle(themeColor);
        }
      },[])

      const handleThemeColor = async (colorCode, i) => {
        console.log(colorCode, "colorcode");
        setThemeColor(colorCode);
        const body = document.body.classList;
        body.remove(themeColor);
        body.remove("dark-"+themeColor);
        body.add(colorCode);
      };
      const handleDarkTheme = async (isDark) => {
        setDarkTheme(isDark);
        const body = document.body.classList;
        body.toggle((isDark ? "dark-" : "") + themeColor);
      };

      return (
        <div>
            <div>
              
              <div>
                <button onClick={() => handleDarkTheme(true)}>Activate Dark Theme</button>
              </div>
              <button style={{ color: "red" }} onClick={() => handleThemeColor(RED)}>Red Theme</button>
              <button style={{ color: "blue" }} onClick={() => handleThemeColor(BLUE)}>Blue Theme</button>
              <button style={{ color: "green" }} onClick={() => handleThemeColor(GREEN)}>Green Theme</button>
              <button style={{ color: "gray" }} onClick={() => handleThemeColor(ALAACOLOR)}>Alaa Theme</button>
            
    
            </div>
            <br></br>
            <div>
                {/* this is materialui Button component  themed by MuiThemeProvider 
                   every change on theme color will effect these buttons
                */}
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                  الصفحة الرئيسية
                </Button>
                <Button variant="contained" color="secondary">
                  المنتجات
                </Button>
                <Button variant="contained" disabled>
                  Disabled
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                  اتصل بنا
                </Button>
              </div> 
              </div> 
      )
      
            } 

const mapStateToProps = statefromstore => {
    console.log("ThemeSwitcher=== Global State Store ======", statefromstore)
    const { themeColor, darkTheme } = statefromstore.theme;
    return { settings: { themeColor, isDarkTheme: darkTheme } }
    // very very important name returned here should be the same in  
    // function defention
    // const ThemeSwitcher = ({settings,setDarkTheme,setThemeColor}) => {
    //return settings
  };
  export default connect(mapStateToProps,
    {
      setDarkTheme,
      setThemeColor
    })(ThemeSwitcher)
 