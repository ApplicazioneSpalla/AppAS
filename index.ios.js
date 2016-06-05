'use strict';
import React from 'react';
import {AppRegistry, View} from 'react-native';
import LoginPage from './src/Components/LoginPage/LoginPage';

class AppAS extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (<View>
      <LoginPage/>
    </View>);
  }
}

AppRegistry.registerComponent('AppAS', () => AppAS);
