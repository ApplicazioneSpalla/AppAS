import GlobalActions from '../../Services/GlobalActions';

export const ActionTypes = {
    READ_ARTICLE_COMMENT_CLICK: "READ_ARTICLE_COMMENT_CLICK"
};

const ReadArticleCommentClick = (navigator) => {
    return GlobalActions.goToDestination(ActionTypes.READ_ARTICLE_COMMENT_CLICK, navigator, 'commentsPage');
};

const Actions = {ReadArticleCommentClick}

export default Actions;