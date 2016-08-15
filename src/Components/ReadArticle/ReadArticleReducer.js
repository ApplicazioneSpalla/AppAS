import {ActionTypes} from './ReadArticleActions';

const initialState = {
    currentPage: 'readArticle',
};

const ReadArticleReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.READ_ARTICLE_COMMENT_CLICK:
            return Object.assign(state, {
                currentPage: action.destination
            });
        default:
            return state;
    }
};

export default ReadArticleReducer;