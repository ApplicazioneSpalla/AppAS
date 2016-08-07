import GlobalActions from '../../Services/GlobalActions';

export const ActionTypes = {
    LOGIN_TEXT_CHANGE: "LOGIN_TEXT_CHANGE",
    SIGNUP_LINK_CLICK: "SIGN_UP_LINK_CLICK",
    LOGIN_BTN_CLICK: "LOGIN_BTN_CLICK"
};

const LoginTextChange = (text, source) => {
    return GlobalActions.TextChange(ActionTypes.LOGIN_TEXT_CHANGE, text, source);
};

const SignupLinkClick = (navigator) => {
    return GlobalActions.goToDestination(ActionTypes.SIGNUP_LINK_CLICK,navigator,'signupPage');
};

const LoginBtnClick = (navigator) => {

    navigator.push({id: 'newsPage'});

    return {
        type: ActionTypes.LOGIN_TEXT_CHANGE,
        destination: 'newsPage'
    }
};

const Actions = {LoginBtnClick, SignupLinkClick, LoginTextChange};

export default Actions;