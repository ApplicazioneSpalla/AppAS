import GlobalActions from '../../Services/GlobalActions';

export const ActionTypes = {
    CREATE_ARTICLE_TEXT_CHANGE: "CREATE_ARTICLE_TEXT_CHANGE",
    ADD_PHOTO_BTN_CLICK: "ADD_PHOTO_BTN_CLICK",
    CREATE_ARTICLE_BTN_CLICK: "CREATE_ARTICLE_BTN_CLICK"
};

const CreateArticleTextChange = (text, source)=> {
    return GlobalActions.TextChange(ActionTypes.CREATE_ARTICLE_TEXT_CHANGE, text, source);
};

const AddPhotoBtnClick = ()=> {
    return {
        type: ActionTypes.ADD_PHOTO_BTN_CLICK
    }
};

const CreateArticleBtnClick = ()=> {
    return {
        type: ActionTypes.CREATE_ARTICLE_BTN_CLICK
    }
};


const Actions = {CreateArticleTextChange, AddPhotoBtnClick, CreateArticleBtnClick};

export default Actions;