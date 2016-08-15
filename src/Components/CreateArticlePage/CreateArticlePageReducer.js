import {ActionTypes} from './CreateArticlePageActions';

const initialState = {
    currentPage: 'createArticlePage',
    articleTitle: '',
    articleContent: ''
};

const CreateArticlePageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.CREATE_ARTICLE_TEXT_CHANGE:
            if (action.source == 'articleTitle') {
                return Object.assign(state, {
                    articleTitle: action.text
                })
            }
            else {
                return Object.assign(state, {
                    articleContent: action.text
                })
            }
        case ActionTypes.ADD_PHOTO_BTN_CLICK:
            return state;
        case ActionTypes.CREATE_ARTICLE_BTN_CLICK:
            return state;
        default:
            return state;
    }
};

export default CreateArticlePageReducer;