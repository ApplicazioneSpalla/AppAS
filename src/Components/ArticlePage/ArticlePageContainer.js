import React from 'react';
import {connect} from 'react-redux';
import ArticlePage from'./ArticlePage';
import Actions from './ArticlePageActions';

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ArticleReadClick: (navigator) => {
            dispatch(Actions.ArticleReadClick(navigator));
        },
        ArticleLikeClick: () => {
            dispatch(Actions.ArticleLikeClick());
        },
        ArticleCommentClick: (navigator) => {
            dispatch(Actions.ArticleCommentClick(navigator));
        }
    }
};

const ArticlePageContainer = connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

export default ArticlePageContainer;
