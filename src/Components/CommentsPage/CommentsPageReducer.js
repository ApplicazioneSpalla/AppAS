import {ActionTypes} from './CommentsPageActions';

const initialState = {
    comment: '',
    currentPage: 'commentsPage',
};

const CommentsPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.COMMENT_TEXT_CHANGE:
            //alert('partito');
            return Object.assign(state, {
                comment: action.text
            });
        case ActionTypes.COMMENT_BTN_CLICK:
            return state;
        default:
            return state;
    }
};

export default CommentsPageReducer;