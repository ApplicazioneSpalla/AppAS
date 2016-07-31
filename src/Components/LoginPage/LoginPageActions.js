const Login = (navigator) => {

    navigator.push({ id: 'newsPage' });

    return {
        type: "LOGIN",
        destination: 'newsPage'
    }
}

const Actions = { Login };

export default Actions;