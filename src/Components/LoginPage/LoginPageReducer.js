const initialState = {
    currentPage: 'loginPage',
    username: '',
    password: ''
};

const LoginPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "LOGIN":
            return Object.assign(state, {
                currentPage: action.destination
            })
        case "TEXT_CHANGE":
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
        case "GOTO_SIGNUP":
            return Object.assign(state, {
                currentPage: action.destination
            })
        default:
            return state;
    }
}

export default LoginPageReducer;