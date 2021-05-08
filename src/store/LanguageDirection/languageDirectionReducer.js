import {
    CHANGE_DIRECTION,
    SWITCH_LANGUAGE
} from '../actionTypes';

// array of RTL languages
const rltLocale = ['ar'];
const initialSettings = {
   
    isDirectionRTL: localStorage.getItem('locale')? rltLocale.includes(JSON.parse(localStorage.getItem('locale')).locale): true,
    // isDirectionRTL: false,
    locale: localStorage.getItem('locale')? JSON.parse(localStorage.getItem('locale')): {
        languageId: 'saudi-arabia',
        locale: 'ar',
        name: 'Arabic',
        icon: 'ae'
    }
};

const settings = (state = initialSettings, action) => {
    switch (action.type) {
        
        case SWITCH_LANGUAGE:
        return {
                ...state,
                locale: action.payload,
                isDirectionRTL: rltLocale.includes(action.payload.locale)
            };
        
        default:
            return state;
    }
};

export default settings;
