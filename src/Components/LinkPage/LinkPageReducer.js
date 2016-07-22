const initialState = {
    lastLinkClick: 'none'
};

const LinkPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "LINK_CLICK":
            return {
                lastLinkClick: action.link
            }
        default:
            return state;
    }
}

export default LinkPageReducer;