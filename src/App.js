//react route
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import logo from './logo.svg';
import Articles from "./containers/Articles"
import Aboutus from "./containers/Aboutus"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"

import './styles/main.css';
// need npm install  @material-ui/core before import MaterialUI
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import greenTheme from './themes/greenTheme';
import redTheme from './themes/redTheme';
import blueTheme from './themes/blueTheme';
import alaaTheme from './themes/alaaTheme';
import { GREEN, RED, BLUE, ALAACOLOR } from './constants/ThemeColors';

// language provider to change user interface texts language
import { IntlProvider } from 'react-intl'
import AppLocale from './lngProvider';

// for  redux state and actions / store 
import { connect } from 'react-redux';

const App = ({ Settings }) => {
  //this is come after mapStateToProps
  console.log("App settings from  store ===", Settings)
  let { themeColor } = { themeColor: Settings.themeColor };
  let language = Settings.language;
  let isDirectionRTL = Settings.isDirectionRTL;
  document.title = language.locale == "ar" ? "مثال بالريدوكس" : "Redux Example";
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
    case BLUE: {
      applyTheme = createMuiTheme(blueTheme);
      break;
    }
    default:
      {
        applyTheme = applyTheme;
      }

  }
  /* } */
  console.log("isDirectionRTL=====", isDirectionRTL)
  if (isDirectionRTL) {
    applyTheme.direction = 'rtl';
    document.body.classList.add('rtl')
  } else {
    document.body.classList.remove('rtl');
    applyTheme.direction = 'ltr';
  }

  const currentAppLocale = AppLocale[language.locale];
  return (
    <MuiThemeProvider theme={applyTheme}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>

        <div className="App">
          <Router>
          <div>
            {/* Header should be inside Router to make Link works */}
            <Header />
          </div>
          <header  >
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          
            <div>
              {/* // You can use the last <Route> in a <Switch> as a kind of
                  // "fallback" route, to catch 404 errors.
                  //
                  // There are a few useful things to note about this example:
                 //
                // - A <Switch> renders the first child <Route> that matches
                // - A <Redirect> may be used to redirect old URLs to new ones
                // - A <Route path="*> always matches */}
              <Switch>
                 <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/articles" component={Articles} />
                <Route path="/products" component={Articles} />
                <Route path="/aboutus" component={Aboutus} />
                <Route path="/contactus" component={Articles} />
                <Route path="/login" component={Articles} />
                <Route path="/oldarticles">
                  <Redirect to="/articles" />
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </div>
          </Router>
          <div>
            <Footer />
          </div>
        </div>

      </IntlProvider>
    </MuiThemeProvider>
  )

  function NoMatch() {
    return (
      <div>
        <h3>
          404 page is not found
        </h3>
      </div>
    );
  }
}

const mapStateToProps = statefromstore => {
  console.log("App=== Global State Store ======", statefromstore)
  const { themeColor, darkTheme } = statefromstore.theme;
  //get language from redux store
  const language = statefromstore.languageDirection.locale;
  const isDirectionRTL = statefromstore.languageDirection.isDirectionRTL;
  return { Settings: { themeColor, isDarkTheme: darkTheme, language, isDirectionRTL } }
  // very very important name returned here should be the same in  
  // function defention
  // const App = ({themeSettings}) => {
  //return themeSettings
};
export default connect(mapStateToProps)(App)
