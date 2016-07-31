import React from 'react';
import { connect } from 'react-redux';
import CommentsPage from './CommentsPage';
import GlobalActions from '../../Services/GlobalActions';

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    comment: state.comment,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    TextChange: (text, source) => {
      dispatch(GlobalActions.TextChange(text, source));
    }
  }
}

const CommentsPageContainer = connect(mapStateToProps, mapDispatchToProps)(CommentsPage);

export default CommentsPageContainer;