import ActionTypes from './SignupPageActions';

const initialState = {
    currentPage: 'signupPage',
    mail: '',
    username: '',
    password: '',
    confirmPassword: ''
};

const SignupPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_TEXT_CHANGE:
            const newState = state;
            newState[action.source] = action.text;
            return newState;
        case ActionTypes.SIGNUP_BTN_CLICK:
            return Object.assign(state, {
                currentPage: action.destination
            });
        default:
            return state;
    }
};

export default SignupPageReducer;