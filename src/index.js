import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppProvider from "./context/AppContext";

import {BrowserRouter as Router} from "react-router-dom";

import GlobalStyle from "./styled/GlobalStyle";
import  { ThemeProvider} from "styled-components";
import Theme from './styled/theme.js';
ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <AppProvider>
            <Router>
                <GlobalStyle/>
                <App />
            </Router>
        </AppProvider>
    </ThemeProvider>,
  document.getElementById('root')
);
