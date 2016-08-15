import React from 'react';
import { connect } from 'react-redux';
import SignupPage from './SignupPage';
import Actions from './SignupPageActions';

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    mail: state.mail,
    username: state.username,
    password: state.password,
    confirmPassword: state.confirmPassword
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    SignupTextChange: (text, source) => {
      dispatch(Actions.SignupTextChange(text,source));
    },
    SignupBtnClick: (navigator) => {
      dispatch(Actions.SignupBtnClick(navigator));
    }
  }
};

const SignupPageContainer = connect(mapStateToProps, mapDispatchToProps)(SignupPage);

export default SignupPageContainer;