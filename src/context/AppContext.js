import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = props => {

    const [darkTheme, setDarkTheme] = useState(true);

    const storeObject = {
        darkTheme,
        setDarkTheme
    }

    return(
      <AppContext.Provider value={storeObject}>
          {props.children}
      </AppContext.Provider>
    );
}

export default AppProvider;