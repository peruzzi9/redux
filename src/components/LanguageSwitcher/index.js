import React from 'react';

import LanguageItem from './LanguageItem';
import languageData from './data';
import CustomScrollbars from '../util/CustomScrollbars';

// for  redux state and actions / store 
import { connect } from 'react-redux';
import { switchLanguage, /* toggleCollapsedNav */ } from '../../store/LanguageDirection/languageDirectionActions';


const LanguageSwitcher = ({language, switchLanguage /*, handleRequestClose */}) => {
    return (
        <CustomScrollbars   style={{height: 100}}>
            <ul  >
                {languageData.map((language, index) => <LanguageItem key={index} language={language} switchLanguage={switchLanguage}/>)}
            </ul>
        </CustomScrollbars>
    )
};

const mapStateToProps = ( settings ) => {
    console.log("LanguageItem settings===",settings.languageDirection.locale)
    const  language  = settings.languageDirection.locale;
    return { language:language}
};

export default connect(mapStateToProps, { switchLanguage })( LanguageSwitcher);

