import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppProvider from "./context/AppContext";
import LoginProvider from "./context/AdminContext";

import {BrowserRouter as Router} from "react-router-dom";

import GlobalStyle from "./styled/GlobalStyle";
import  { ThemeProvider} from "styled-components";
import Theme from './styled/theme.js';

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <AppProvider>
            <LoginProvider>
                <Router>
                    <GlobalStyle/>
                    <App />
                </Router>
            </LoginProvider>
        </AppProvider>
    </ThemeProvider>,
  document.getElementById('root')
);
