const TextChange = (text, source) => {

    return {
        type: "TEXT_CHANGE",
        text: text,
        source: source
    }

}

const Login = (navigator) => {

    navigator.push({ id: 'newsPage' });

    return {
        type: "LOGIN",
        destination: 'newsPage'
    }
}

const goToSignUp = (navigator) => {

    navigator.push({ id: 'signupPage' })

    return {
        type: "GOTO_SIGNUP",
        destination: 'signupPage'
    }
}

const Actions = { Login, TextChange, goToSignUp };

export default Actions;