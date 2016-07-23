const readArticle = (navigator) => {

    navigator.push({ id: 'readArticle' })

    return {
        type: "READ_ARTICLE",
        destination: 'readArticle'
    }
}

const goToComments = (navigator) => {

    navigator.push({ id: 'commentsPage' });

    return {
        type: "GOTO_COMMENTS",
        destination: 'commentsPage'
    }
}


const Actions = { readArticle, goToComments };

export default Actions;