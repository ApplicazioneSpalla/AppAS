import React from 'react';
import {connect} from 'react-redux';
import ReadArticle from './ReadArticle';
import Actions from './ReadArticleActions';

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ReadArticleCommentClick: (navigator) => {
            dispatch(Actions.ReadArticleCommentClick(navigator));
        }
    }
};

const ReadArticleContainer = connect(mapStateToProps, mapDispatchToProps)(ReadArticle);

export default ReadArticleContainer;