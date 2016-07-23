import React from 'react';
import { connect } from 'react-redux';
import ArticlePage from'./ArticlePage';
import Actions from './ArticlePageActions';

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    readArticle: (navigator) => {
      dispatch(Actions.readArticle(navigator));
    },
    goToComments: (navigator) =>{
        dispatch(Actions.goToComments(navigator))
    }
  }
}

const ArticlePageContainer = connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

export default ArticlePageContainer;
