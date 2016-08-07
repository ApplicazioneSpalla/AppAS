import {ActionTypes} from './NewsPageActions';

const initialState = {
    currentPage: 'newsPage',
};

const NewsPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.NEWS_LIKE_CLICK:
            return state;
        case ActionTypes.NEWS_COMMENT_CLICK:
            return Object.assign(state, {
                currentPage: action.destination
            });
        default:
            return state;
    }
};

export default NewsPageReducer;
