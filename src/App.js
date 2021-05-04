import logo from './logo.svg';
import Articles from "./containers/Articles"

import './styles/main.css';
// need npm install  @material-ui/core before import MaterialUI
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import greenTheme from './themes/greenTheme';
import redTheme from './themes/redTheme';
import darkTheme from './themes/darkTheme';
import alaaTheme from './themes/alaaTheme';
import { GREEN, RED, BLUE, ALAACOLOR } from './constants/ThemeColors';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { setDarkTheme, setThemeColor } from './store/Theme/themeActions'
import { useEffect } from 'react';

const App = ({ settings, setDarkTheme, setThemeColor }) => {
  //this is come after mapStateToProps
  console.log("App settings from  store ===", settings)
  let { themeColor, isDarkTheme } = { isDarkTheme: settings.darkTheme, themeColor: settings.themeColor };
  let applyTheme;
  if (localStorage.getItem("themeColor")) {
    console.log("stored theme is=========", localStorage.getItem("themeColor"))
  }

  //applyTheme= createMuiTheme(alaaTheme);
  if (isDarkTheme) {
    applyTheme = createMuiTheme(darkTheme)
  } else {
    console.log("set theme template=========", themeColor)
    switch (themeColor) {
      case GREEN: {
        applyTheme = createMuiTheme(greenTheme);
        break;
      }
      case RED: {
        applyTheme = createMuiTheme(redTheme);
        break;
      }
      case ALAACOLOR: {
        applyTheme = createMuiTheme(alaaTheme);
        break;
      }
      default:
        {
          applyTheme = applyTheme;
        }

    }
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
    <MuiThemeProvider theme={applyTheme}>
      <div className="App">
        <div>
          
          <div>
            <button onClick={() => handleDarkTheme(true)}>Activate Dark Theme</button>
          </div>
          <button style={{ color: "red" }} onClick={() => handleThemeColor(RED)}>Red Theme</button>
          <button style={{ color: "blue" }} onClick={() => handleThemeColor(BLUE)}>Blue Theme</button>
          <button style={{ color: "green" }} onClick={() => handleThemeColor(GREEN)}>Green Theme</button>
          <button style={{ color: "gray" }} onClick={() => handleThemeColor(ALAACOLOR)}>Alaa Theme</button>
        </div>
        <header  >
          <img src={logo} className="App-logo" alt="logo" />
          <Articles />
        </header>
        <div>

        </div>
        <br></br>
        <div>
            {/* this is materialui Button component  themed by MuiThemeProvider 
               every change on theme color will effect these buttons
            */}
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
              Link
            </Button>
          </div>
      </div>

    </MuiThemeProvider>
  )
}

const mapStateToProps = statefromstore => {
  console.log("App=== Global State Store ======", statefromstore)
  const { themeColor, darkTheme } = statefromstore.theme;
  return { settings: { themeColor, isDarkTheme: darkTheme } }
  // very very important name returned here should be the same in  
  // function defention
  // const App = ({settings,setDarkTheme,setThemeColor}) => {
  //return settings
};
export default connect(mapStateToProps,
  {
    setDarkTheme,
    setThemeColor
  })
  (App);
//export default App;
