import GlobalActions from '../../Services/GlobalActions';

export const ActionTypes = {
    SIGNUP_TEXT_CHANGE: "SIGNUP_TEXT_CHANGE",
    SIGNUP_BTN_CLICK: "SIGNUP_BTN_CLICK"
};

const SignupTextChange = (text, source) => {
    return GlobalActions.TextChange(ActionTypes.SIGNUP_TEXT_CHANGE, text, source);
};

const SignupBtnClick = (navigator) => {

    navigator.push({ id: 'newsPage' });

    return {
        type: ActionTypes.SIGNUP_BTN_CLICK,
        destination: 'newsPage'
    }
};

const Actions = { SignupTextChange,SignupBtnClick };

export default Actions;