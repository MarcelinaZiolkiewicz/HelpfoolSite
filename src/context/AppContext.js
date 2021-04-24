import React, { createContext, useState } from 'react';

import { language } from '../language';

export const AppContext = createContext();

const AppProvider = props => {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isEnglish, setIsEnglish] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [messageVisibility, setMessageVisibility] = useState(true);

    const [globalLanguage, setGlobalLanguage] = useState(language.english);

    const handleChangeLanguage = () => {
        setIsEnglish(!isEnglish);
    }

    const handleSetLanguage = lang => {
        switch (lang) {
            case 1:
                setGlobalLanguage(language.polish);
                break;
            case 2:
                setGlobalLanguage(language.english);
                break;
            default:
                console.log('Error');
                break;
        }
    }


    const handleMenuOpen = () => {
        if (!isMenuOpen){
            setScrollPosition(window.pageYOffset);
        }else {
            window.scrollTo(0, scrollPosition);
        }
        setIsMenuOpen(!isMenuOpen);
    }
    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleCloseMessage = () => {
        setMessageVisibility(!messageVisibility);
    }

    const storeObject = {
        isDarkTheme,
        isEnglish,
        isMenuOpen,
        messageVisibility,
        globalLanguage,
        handleChangeLanguage,
        handleMenuOpen,
        handleThemeChange,
        handleBackToTop,
        handleCloseMessage,
        handleSetLanguage
    }

    return(
      <AppContext.Provider value={storeObject}>
          {props.children}
      </AppContext.Provider>
    );
}

export default AppProvider;