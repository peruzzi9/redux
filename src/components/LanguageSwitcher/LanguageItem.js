import React from 'react';


const LanguageItem = ({language, switchLanguage /*, handleRequestClose */}) => {
    console.log("LanguageItem rturned language===",language)
    const {icon, name} = language;
    return (
        <li className="pointer" onClick={() => {
            //handleRequestClose();
            switchLanguage(language);
        }}>
            <div >
                <i className={`flag flag-24 flag-${icon}`}/>
                <h4 >{name}</h4>
            </div>
        </li>
    );
};
 

export default LanguageItem;
