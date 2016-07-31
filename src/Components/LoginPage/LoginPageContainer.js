import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import Actions from './LoginPageActions';
import GlobalActions from '../../Services/GlobalActions';

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    username: state.username,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Login: (navigator) => {
      dispatch(Actions.Login(navigator));
    },
    TextChange: (text, source) => {
      dispatch(GlobalActions.TextChange(text, source));
    },
    goToDestination: (navigator,destination) => {
      dispatch(GlobalActions.goToDestination(navigator,destination));
    }
  }
}

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;