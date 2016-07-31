const initialState = {
    currentPage: 'newsPage',
};

const NewsPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "GOTO_DESTINATION":
            return Object.assign(state, {
                currentPage: action.destination
            })
        default:
            return state;
    }
}

export default NewsPageReducer;
