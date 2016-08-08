import React from 'react';
import {connect} from 'react-redux';
import CommentsPage from './CommentsPage';
import Actions from './CommentsPageActions';

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        comment: state.comment
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        CommentTextChange: (text, source) => {
            dispatch(Actions.CommentTextChange(text, source));
        },
        CommentBtnClick: () => {
            dispatch(Actions.CommentBtnClick());
        }
    }
};

const CommentsPageContainer = connect(mapStateToProps, mapDispatchToProps)(CommentsPage);

export default CommentsPageContainer;