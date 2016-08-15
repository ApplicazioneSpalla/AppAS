import {ActionTypes} from './NewsPageActions';
import {ListView} from 'react-native';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const initialState = {
    currentPage: 'newsPage',
    newsList: ds.cloneWithRows(['row1', 'row2'])
};

const NewsPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.NEWS_LIKE_CLICK:
            return state;
        case ActionTypes.NEWS_COMMENT_CLICK:
            return {
                ...state,
                currentPage: action.destination
            };
        default:
            return state;
    }
};

export default NewsPageReducer;
