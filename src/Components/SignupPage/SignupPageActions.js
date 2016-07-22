const TextChange = (text, source) => {

    return {
        type: "TEXT_CHANGE",
        text: text,
        source: source
    }

}

const Signup = (navigator) => {

    navigator.push({ id: 'newsPage' });

    return {
        type: "SIGNUP",
        destination: 'newsPage'
    }
}

const Actions = { TextChange, Signup };

export default Actions;