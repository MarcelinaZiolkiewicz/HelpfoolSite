import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = props => {

    const [darkTheme, setDarkTheme] = useState(true);
    const [isEnglish, setIsEnglish] = useState(true);

    const handleChangeLanguage = () => {
        setIsEnglish(!isEnglish);
    }

    const storeObject = {
        darkTheme,
        isEnglish,
        handleChangeLanguage,
    }

    return(
      <AppContext.Provider value={storeObject}>
          {props.children}
      </AppContext.Provider>
    );
}

export default AppProvider;