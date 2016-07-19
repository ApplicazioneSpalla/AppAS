const initialState = {
    lastLinkClick: 'none'
};

const LinkPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "LinkClick":
            return {
                lastLinkClick: action.link
            }
        default:
            return state;
    }
}

export default LinkPageReducer;