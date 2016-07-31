import React from 'react';
import { connect } from 'react-redux';
import CreateNewsPage from './CreateNewsPage';
import GlobalActions from '../../Services/GlobalActions';

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    news: state.news,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    TextChange: (text, source) => {
      dispatch(GlobalActions.TextChange(text, source));
    }
  }
}

const CreateNewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateNewsPage);

export default CreateNewsPageContainer;