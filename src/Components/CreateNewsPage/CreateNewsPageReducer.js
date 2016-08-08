import {ActionTypes} from './CreateNewsPageActions';

const initialState = {
    news: '',
    currentPage: 'createNewsPage',
};

const CreateNewsPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.CREATE_NEWS_TEXT_CHANGE:
            return Object.assign(state, {
                news: action.text
            });
        case ActionTypes.CREATE_NEWS_BTN_CLICK:
            return state;
        default:
            return state;
    }
};

export default CreateNewsPageReducer;