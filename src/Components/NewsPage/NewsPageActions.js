const GoToComments = (navigator) => {

    navigator.push({ id: 'commentsPage' });

    return {
        type: "GOTO_COMMENTS",
        destination: 'commentsPage'
    }
}

const Actions = { GoToComments };

export default Actions;