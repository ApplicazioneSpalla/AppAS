import React from 'react';
import { connect } from 'react-redux';
import NewsPage from './NewsPage';
import GlobalActions from '../../Services/GlobalActions';

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToDestination: (navigator,source) => {
      dispatch(GlobalActions.goToDestination(navigator,'commentsPage'));
    }
  }
}

const NewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPage);

export default NewsPageContainer;