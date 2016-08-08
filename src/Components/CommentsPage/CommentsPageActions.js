import GlobalActions from '../../Services/GlobalActions';

export const ActionTypes = {
    COMMENT_TEXT_CHANGE: "COMMENT_TEXT_CHANGE",
    COMMENT_BTN_CLICK: "COMMENT_BTN_CLICK"
};

const CommentTextChange = (text, source)=> {
    return GlobalActions.TextChange(ActionTypes.COMMENT_TEXT_CHANGE, text, source);
};


const CommentBtnClick = ()=> {
    return {
        type: ActionTypes.COMMENT_BTN_CLICK
    }
};


const Actions = {CommentTextChange, CommentBtnClick};

export default Actions;