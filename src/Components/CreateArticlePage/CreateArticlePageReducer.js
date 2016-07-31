const initialState = {
    currentPage: 'createArticlePage',
    articleTitle: '',
    articleContent: ''
};

const LoginPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "TEXT_CHANGE":
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
        default:
            return state;
    }
}