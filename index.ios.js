'use strict';
import React from 'react';
import {AppRegistry, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import LoginPage from './src/Components/LoginPage/LoginPage';
import NewsPage from './src/Components/NewsPage/NewsPage';

class AppAS extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<Router>
      <Scene key="root">
        <Scene key="loginPage" component={LoginPage} title="Login"/>
        <Scene key="newsPage" component={NewsPage} title="News"/>
      </Scene>
    </Router>);
  }
}



AppRegistry.registerComponent('AppAS', () => AppAS);
