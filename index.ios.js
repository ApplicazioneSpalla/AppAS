'use strict';
import React from 'react';
import {AppRegistry, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import LoginPage from './src/Components/LoginPage/LoginPage';
import LinkPage from './src/Components/LinkPage/LinkPage';

class AppAS extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<Router>
      <Scene key="root">
        <Scene key="loginPage" component={LoginPage} title="Login"/>
        <Scene key="linkPage" component={LinkPage} title="Link Utili">
        </Scene>
      </Scene>
    </Router>);
  }
}

AppRegistry.registerComponent('AppAS', () => AppAS);
