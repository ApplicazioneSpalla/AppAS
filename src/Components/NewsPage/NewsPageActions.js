import GlobalActions from '../../Services/GlobalActions';

export const ActionTypes = {
    NEWS_LIKE_CLICK: "NEWS_LIKE_CLICK",
    NEWS_COMMENT_CLICK: "NEWS_COMMENT_CLICK"
};

const NewsLikeClick = ()=> {
    return {
        type: ActionTypes.NEWS_LIKE_CLICK
    };
};

const NewsCommentClick = (navigator)=> {
    return GlobalActions.goToDestination(ActionTypes.NEWS_COMMENT_CLICK, navigator, 'commentsPage');
};

const Actions = {NewsLikeClick, NewsCommentClick};

export default Actions;