import React from 'react';
import {connect} from 'react-redux';
import CreateArticlePage from './CreateArticlePage';
import Actions from './CreateArticlePageActions';

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        articleTitle: state.articleTitle,
        articleContent: state.articleContent
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        CreateArticleTextChange: (text, source) => {
            dispatch(Actions.CreateArticleTextChange(text, source));
        },
        AddPhotoBtnClick: () => {
            dispatch(Actions.AddPhotoBtnClick());
        },
        CreateArticleBtnClick: () => {
            dispatch(Actions.CreateArticleBtnClick());
        }
    }
};

const CreateArticlePageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateArticlePage);

export default CreateArticlePageContainer;