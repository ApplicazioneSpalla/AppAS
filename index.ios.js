'use strict';
import React from 'react';
import {AppRegistry, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import LoginPage from './src/Components/LoginPage/LoginPage';
import NavTabs from './src/Components/NavTabs/NavTabs';

class AppAS extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<Router>
      <Scene key="root">
        <Scene key="loginPage" component={LoginPage} title="Login"/>
        <Scene key="navTabs" component={NavTabs} title="News"/>
      </Scene>
    </Router>);
  }
}



AppRegistry.registerComponent('AppAS', () => AppAS);
