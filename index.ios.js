'use strict';
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Navigation from './src/Components/Navigation/Navigation';

class AppAS extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<Navigation/>);
  }
}

AppRegistry.registerComponent('AppAS', () => AppAS);
