import {ActionTypes} from './ArticlePageActions';

const initialState = {
    currentPage: 'articlePage',
};

const ArticlePageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.ARTICLE_READ_CLICK:
            return Object.assign(state, {
                currentPage: action.destination
            });
        case ActionTypes.ARTICLE_LIKE_CLICK:
            return state;
        case ActionTypes.ARTICLE_COMMENT_CLICK:
            return Object.assign(state, {
                currentPage: action.destination
            });
        default:
            return state;
    }
}

export default ArticlePageReducer;