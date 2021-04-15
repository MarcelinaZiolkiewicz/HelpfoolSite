import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = props => {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isEnglish, setIsEnglish] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [messageVisibility, setMessageVisibility] = useState(true);

    const handleChangeLanguage = () => {
        setIsEnglish(!isEnglish);
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
        handleChangeLanguage,
        handleMenuOpen,
        handleThemeChange,
        handleBackToTop,
        handleCloseMessage,
    }

    return(
      <AppContext.Provider value={storeObject}>
          {props.children}
      </AppContext.Provider>
    );
}

export default AppProvider;