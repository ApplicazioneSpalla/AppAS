import React from 'react';
import { connect } from 'react-redux';
import CreateArticlePage from './CreateArticlePage';
import GlobalActions from '../../Services/GlobalActions';

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    articleTitle: '',
    articleContent: ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    TextChange: (text, source) => {
      dispatch(GlobalActions.TextChange(text, source));
    }
  }
}

const CreateArticlePageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateArticlePage);

export default CreateArticlePageContainer;