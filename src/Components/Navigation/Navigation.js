import React from 'react';
import {Navigator} from 'react-native';

import LoginPageContainer from '../LoginPage/LoginPageContainer';
import SignupPageContainer from '../SignupPage/SignupPageContainer';
import AdminPage from '../AdminPage/AdminPage';
import ArticlePage from '../ArticlePage/ArticlePage';
import DirectingPage from '../DirectingPage/DirectingPage';
import NewsPageContainer from '../NewsPage/NewsPageContainer';
import LinkPageContainer from '../LinkPage/LinkPageContainer';
import ReadArticle from '../ReadArticle/ReadArticle';
import CommentsPage from '../CommentsPage/CommentsPage';
import CreateNewsPage from '../CreateNewsPage/CreateNewsPage';
import CreateArticlePage from '../CreateArticlePage/CreateArticlePage';

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
                return (<AdminPage navigator={navigator} title="adminPage"/>);
            case 'articlePage':
                return (<ArticlePage navigator={navigator} title="articlePage"/>);
            case 'directingPage':
                return (<DirectingPage navigator={navigator} title="directingPage"/>);
            case 'newsPage':
                return (<NewsPageContainer navigator={navigator} title="newsPage"/>);
            case 'linkPage':
                return (<LinkPageContainer navigator={navigator} title="linkPage"/>);
            case 'readArticle':
                return (<ReadArticle navigator={navigator} title="readArticle"/>);
            case 'commentsPage':
                return (<CommentsPage navigator={navigator} title="commentsPage"/>);
            case 'createNewsPage':
                return (<CreateNewsPage navigator={navigator} title="createNewsPage"/>);
            case 'createArticlePage':
                return (<CreateArticlePage navigator={navigator} title="createArticlePage"/>)
        }
    }
}

export default Navigation;
