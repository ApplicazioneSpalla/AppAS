import GlobalActions from '../../Services/GlobalActions';

export const ActionTypes = {
    LOGIN_TEXT_CHANGE: "LOGIN_TEXT_CHANGE",
    REMEMBER_ME_CHANGE: "REMEMBER_ME_CHANGE",
    SIGNUP_LINK_CLICK: "SIGN_UP_LINK_CLICK",
    LOGIN_BTN_CLICK: "LOGIN_BTN_CLICK"
};

const LoginTextChange = (text, source) => {
    return GlobalActions.TextChange(ActionTypes.LOGIN_TEXT_CHANGE, text, source);
};

const RememberMeChange = () => {
    return {
        type: ActionTypes.REMEMBER_ME_CHANGE,
    }
};

const SignupLinkClick = (navigator) => {
    return GlobalActions.goToDestination(ActionTypes.SIGNUP_LINK_CLICK, navigator, 'signupPage');
};

const LoginBtnClick = (navigator) => {

    navigator.push({id: 'newsPage'});

    return {
        type: ActionTypes.LOGIN_BTN_CLICK,
        destination: 'newsPage'
    }
};

const Actions = {LoginBtnClick, RememberMeChange, SignupLinkClick, LoginTextChange};

export default Actions;