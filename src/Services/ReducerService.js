import { combineReducers } from 'redux';
import LoginPageReducer from '../Components/LoginPage/LoginPageReducer';
import SignupPageReducer from '../Components/SignupPage/SignupPageReducer';
import LinkPageReducer from '../Components/LinkPage/LinkPageReducer';
import NewsPageReducer from '../Components/NewsPage/NewsPageReducer';
import ArticlePageReducer from '../Components/ArticlePage/ArticlePageReducer';
import AdminPageReducer from '../Components/AdminPage/AdminPageReducer';
import ReadArticleReducer from '../Components/ReadArticle/ReadArticleReducer';

class ReducerService {

    static bundleReducers() {
        return combineReducers({
            LoginPageReducer,
            SignupPageReducer,
            LinkPageReducer,
            NewsPageReducer,
            ArticlePageReducer,
            AdminPageReducer,
            ReadArticleReducer
        })
    }
}

export default ReducerService;