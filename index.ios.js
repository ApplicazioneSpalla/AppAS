'use strict';
import React from 'react';
import {AppRegistry, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import LoginPage from './src/Components/LoginPage/LoginPage';
import LinkPage from './src/Components/LinkPage/LinkPage';
import ArticlePage from './src/Components/ArticlePage/ArticlePage';
import DirectingPage from './src/Components/DirectingPage/DirectingPage';
import NewsPage from './src/Components/NewsPage/NewsPage';
import AdminPage from './src/Components/AdminPage/AdminPage';

class AppAS extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<Router>
      <Scene key="root" tabs={true}>
        <Scene key="loginPage" component={LoginPage} title="Login"/>
        <Scene key="linkPage" component={LinkPage} title="Link Utili"/>
        <Scene key="articlePage" component={ArticlePage} title="Attualità"/>
        <Scene key="directingPage" component={DirectingPage} title="Orientamento"/>
        <Scene key="newsPage" component={NewsPage} title="Comunicazioni"/>
        <Scene key="adminPage" component={AdminPage} title="Sezione Admin"/>
      </Scene>
    </Router>);
  }
}

AppRegistry.registerComponent('AppAS', () => AppAS);
