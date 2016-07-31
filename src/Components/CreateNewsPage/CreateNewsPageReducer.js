const initialState = {
    news: '',
    currentPage: 'createNewsPage',
};

const CreateNewsPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "TEXT_CHANGE":
                return Object.assign(state, {
                    news: action.text
                })
        default:
            return state
    }
}

export default CreateNewsPageReducer;