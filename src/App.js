'use strict';
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from "react-redux";
import { createStore, compose} from 'redux';
import devTools from 'remote-redux-devtools';
import Navigation from './Components/Navigation/Navigation';
import ReducerService from './Services/ReducerService';

const reducers = ReducerService.budleReducers();
const enhancer = compose(devTools());

const store = createStore(reducers, {}, enhancer);

class AppAS extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}

export default AppAS;