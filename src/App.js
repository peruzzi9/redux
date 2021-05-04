import logo from './logo.svg';
import Articles from "./containers/Articles"
import ThemeSwitcher from "./containers/ThemeSwitcher"

import './styles/main.css';
// need npm install  @material-ui/core before import MaterialUI
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import greenTheme from './themes/greenTheme';
import redTheme from './themes/redTheme';
import darkTheme from './themes/darkTheme';
import alaaTheme from './themes/alaaTheme';
import { GREEN, RED, BLUE, ALAACOLOR } from './constants/ThemeColors';

// for  redux state and actions / store 
import { connect } from 'react-redux';

const App = ({themeSettings}) => {
//this is come after mapStateToProps
console.log("App settings from  store ===", themeSettings)
let { themeColor } = { themeColor: themeSettings.themeColor };
  
  //applyTheme= createMuiTheme(alaaTheme);
  /* if (isDarkTheme) {
    applyTheme = createMuiTheme(darkTheme)
  } else { */
    let applyTheme;
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
  /* } */

  return (
    <MuiThemeProvider theme={applyTheme}>
      <div className="App">
        <div>
          {/* component for switching theme with redux store */}
          <ThemeSwitcher />
        </div>
        <header  >
          <img src={logo} className="App-logo" alt="logo" />
          <Articles />
        </header>

      </div>

    </MuiThemeProvider>
  )
}

const mapStateToProps = statefromstore => {
  console.log("App=== Global State Store ======", statefromstore)
  const { themeColor, darkTheme } = statefromstore.theme;
  return { themeSettings: { themeColor, isDarkTheme: darkTheme } }
  // very very important name returned here should be the same in  
  // function defention
  // const App = ({themeSettings}) => {
  //return themeSettings
};
export default connect(mapStateToProps)(App) 
