import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import Actions from './LoginPageActions';

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
      dispatch(Actions.TextChange(text, source));
    },
    goToSignUp: (navigator) => {
      dispatch(Actions.goToSignUp(navigator));
    }
  }
}

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;