'use strict';
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Navigation from './Components/Navigation/Navigation';

class AppAS extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<Navigation/>);
  }
}

export default AppAS;