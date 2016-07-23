import React from 'react';
import { connect } from 'react-redux';
import NewsPage from './NewsPage';
import Actions from './NewsPageActions';

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToComments: (navigator) => {
      dispatch(Actions.GoToComments(navigator));
    }
  }
}

const NewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPage);

export default NewsPageContainer;