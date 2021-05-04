import {
    DARK_THEME,
    THEME_COLOR
} from '../actionTypes';
import {ALAACOLOR} from '../../constants/ThemeColors';

const initialSettings = {
    themeColor: localStorage.getItem("themeColor")?localStorage.getItem("themeColor"): ALAACOLOR,
    darkTheme: false,
};

const settings = (state = initialSettings, action) => {
    console.log("Reducer initialSettings from localStorage =====",state)
    switch (action.type) {
         
        case THEME_COLOR:
            return {
                ...state,
                darkTheme: false,
                themeColor: action.color
            };
        case DARK_THEME:
            return {
                ...state,
                darkTheme: action.isDark
            };
        
        default:
            return state;
    }
};

export default settings;