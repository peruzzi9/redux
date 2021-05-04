import {
    DARK_THEME,
    THEME_COLOR
} from '../actionTypes';


export function setThemeColor(color) {
    console.log("setThemeColor action====",color) 
    // theme color can be also stored here in database
    localStorage.setItem("themeColor",color)
    return {type: THEME_COLOR, color};
}

export function setDarkTheme(isDark) {
    // theme color can be also stored here in database
    localStorage.setItem("isDarkTheme",isDark)
    return {type: DARK_THEME,isDark};
}