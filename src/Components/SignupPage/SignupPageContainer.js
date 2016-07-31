import React from 'react';
import { connect } from 'react-redux';
import SignupPage from './SignupPage';
import Actions from './SignupPageActions';
import GlobalActions from '../../Services/GlobalActions';


const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    mail: state.mail,
    username: state.username,
    password: state.password,
    confirmPassword: state.confirmPassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    TextChange: (text, source) => {
      dispatch(GlobalActions.TextChange(text, source));
    },
    Signup: (navigator) => {
      dispatch(Actions.Signup(navigator));
    }
  }
}

const SignupPageContainer = connect(mapStateToProps, mapDispatchToProps)(SignupPage);

export default SignupPageContainer;