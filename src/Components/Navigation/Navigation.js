import React from 'react';
import {Navigator} from 'react-native';

import LoginPageContainer from '../LoginPage/LoginPageContainer';
import SignupPageContainer from '../SignupPage/SignupPageContainer';
import AdminPageContainer from '../AdminPage/AdminPageContainer';
import ArticlePageContainer from '../ArticlePage/ArticlePageContainer';
import DirectingPage from '../DirectingPage/DirectingPage';
import NewsPageContainer from '../NewsPage/NewsPageContainer';
import LinkPageContainer from '../LinkPage/LinkPageContainer';
import ReadArticleContainer from '../ReadArticle/ReadArticleContainer';
import CommentsPageContainer from '../CommentsPage/CommentsPageContainer';
import CreateNewsPageContainer from '../CreateNewsPage/CreateNewsPageContainer';
import CreateArticlePageContainer from '../CreateArticlePage/CreateArticlePageContainer';

class Navigation extends React.Component {

    constructor() {
        super();
        this.navigatorRenderScene = this.navigatorRenderScene.bind(this);
    }

    render() {
        return (
            <Navigator
                initialRoute={{ id: 'loginPage' }}
                renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case 'loginPage':
                return (<LoginPageContainer navigator={navigator} title="loginPage"/>);
            case 'signupPage':
                return (<SignupPageContainer navigator={navigator} title="signupPage"/>);
            case 'adminPage':
                return (<AdminPageContainer navigator={navigator} title="adminPage"/>);
            case 'articlePage':
                return (<ArticlePageContainer navigator={navigator} title="articlePage"/>);
            case 'directingPage':
                return (<DirectingPage navigator={navigator} title="directingPage"/>);
            case 'newsPage':
                return (<NewsPageContainer navigator={navigator} title="newsPage"/>);
            case 'linkPage':
                return (<LinkPageContainer navigator={navigator} title="linkPage"/>);
            case 'readArticle':
                return (<ReadArticleContainer navigator={navigator} title="readArticle"/>);
            case 'commentsPage':
                return (<CommentsPageContainer navigator={navigator} title="commentsPage"/>);
            case 'createNewsPage':
                return (<CreateNewsPageContainer navigator={navigator} title="createNewsPage"/>);
            case 'createArticlePage':
                return (<CreateArticlePageContainer navigator={navigator} title="createArticlePage"/>)
        }
    }
}

export default Navigation;
