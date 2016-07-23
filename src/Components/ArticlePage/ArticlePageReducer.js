const initialState = {
    currentPage: 'articlePage',
};

const ArticlePageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "READ_ARTICLE":
            return Object.assign(state, {
                currentPage: action.destination
            })
        case "GOTO_COMMENTS":
            return Object.assign(state, {
                currentPage: action.destination
            })
        default:
            return state;
    }
}

export default ArticlePageReducer;