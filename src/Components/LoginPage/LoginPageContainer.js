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
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginBtnClick: (navigator) => {
      dispatch(Actions.LoginBtnClick(navigator));
    },
    LoginTextChange: (text, source) => {
      dispatch(Actions.LoginTextChange(text,source));
    },
    SignupLinkClick: (navigator) => {
      dispatch(Actions.SignupLinkClick(navigator));
    }
  }
};

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;