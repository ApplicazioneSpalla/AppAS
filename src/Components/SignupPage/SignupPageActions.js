const Signup = (navigator) => {

    navigator.push({ id: 'newsPage' });

    return {
        type: "SIGNUP",
        destination: 'newsPage'
    }
}

const Actions = { Signup };

export default Actions;