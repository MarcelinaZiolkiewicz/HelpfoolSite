import React from 'react';

import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import About from "../view/About";
import Help from "../view/Help";
import Login from "../view/Login";
import MainSite from "../view/MainSite";

const ContentSelector = () => {
    return(
      <main>
          <Switch>
              <Route
                component={About}
                path="/about"
              />
              <Route
                component={Help}
                path="/help"
              />
              <Route
                component={Login}
                path="/login"
              />
              <Route
                component={MainSite}
                path="/"
              />
              <Redirect from="*" to="/" />
          </Switch>
      </main>
    );
}

export default ContentSelector;