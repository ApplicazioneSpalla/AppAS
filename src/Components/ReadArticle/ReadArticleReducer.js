const initialState = {
    currentPage: 'readArticle',
};

const ReadArticleReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "GOTO_DESTINATION":
            return Object.assign(state, {
                currentPage: action.destination
            })
        default:
            return state;
    }
}

export default ReadArticleReducer;