import {ActionTypes} from './LoginPageActions';

const initialState = {
    currentPage: 'loginPage',
    username: '',
    password: ''
};

const LoginPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.LOGIN_BTN_CLICK:
            return Object.assign(state, {
                currentPage: action.destination
            });
        case ActionTypes.LOGIN_TEXT_CHANGE:
            if (action.source == 'username') {
                return Object.assign(state, {
                    username: action.text
                })
            }
            else {
                return Object.assign(state, {
                    password: action.text
                })
            }
        case ActionTypes.SIGNUP_LINK_CLICK:
            return Object.assign(state, {
                currentPage: action.destination
            });
        default:
            return state;
    }
};

export default LoginPageReducer;