const initialState = {
    comment: '',
    currentPage: 'commentsPage',
};

const CommentsPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "TEXT_CHANGE":
                return Object.assign(state, {
                    comment: action.text
                })
        default:
            return state
    }
}

export default CommentsPageReducer;