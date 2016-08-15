import {ActionTypes} from './AdminPageActions';

const initialState = {
    currentPage: 'adminPage',
};

const AdminPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.LINK_CLICK:
            return Object.assign(state, {
                currentPage: action.destination
            });
        default:
            return state;
    }
};

export default AdminPageReducer;