import GlobalActions from '../../Services/GlobalActions';

export const ActionTypes = {
    ARTICLE_READ_CLICK: "ARTICLE_READ_CLICK",
    ARTICLE_LIKE_CLICK: "ARTICLE_LIKE_CLICK",
    ARTICLE_COMMENT_CLICK: "ARTICLE_COMMENT_CLICK"
};

const ArticleReadClick = (navigator)=> {
    return GlobalActions.goToDestination(ActionTypes.ARTICLE_READ_CLICK, navigator, 'readArticle');
};

const ArticleLikeClick = ()=> {
    return {
        type: ActionTypes.ARTICLE_LIKE_CLICK
    };
};

const ArticleCommentClick = (navigator)=> {
    return GlobalActions.goToDestination(ActionTypes.ARTICLE_COMMENT_CLICK, navigator, 'commentsPage');
};

const Actions = {ArticleReadClick, ArticleLikeClick, ArticleCommentClick};

export default Actions;