import GlobalActions from '../../Services/GlobalActions';

export const ActionTypes = {
    CREATE_NEWS_TEXT_CHANGE: "CREATE_NEWS_TEXT_CHANGE",
    CREATE_NEWS_BTN_CLICK: "CREATE_NEWS_BTN_CLICK"
};

const CreateNewsTextChange = (text, source)=> {
    return GlobalActions.TextChange(ActionTypes.CREATE_NEWS_TEXT_CHANGE, text, source);
};


const CreateNewsBtnClick = ()=> {
    return {
        type: ActionTypes.CREATE_NEWS_BTN_CLICK
    }
};


const Actions = {CreateNewsTextChange, CreateNewsBtnClick};

export default Actions;