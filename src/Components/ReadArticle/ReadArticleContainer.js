import React from 'react';
import { connect } from 'react-redux';
import ReadArticle from './ReadArticle';
import GlobalActions from '../../Services/GlobalActions';

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToDestination: (navigator,destination) => {
      dispatch(GlobalActions.goToDestination(navigator,destination));
    }
  }
}

const ReadArticleContainer = connect(mapStateToProps, mapDispatchToProps)(ReadArticle);

export default ReadArticleContainer;