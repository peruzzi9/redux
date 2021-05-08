import {
    CHANGE_DIRECTION,
    SWITCH_LANGUAGE
} from '../actionTypes';
 
export function switchLanguage(locale) {
    localStorage.setItem('locale',JSON.stringify(locale));
    //document.title = locale.locale == "ar" ? "مثال بالريدوكس": "Redux Example";
    return {
        type: SWITCH_LANGUAGE,
        payload: locale
    };
}
