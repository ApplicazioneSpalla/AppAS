import React from 'react';
import {Navigator} from 'react-native';

import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import AdminPage from '../AdminPage/AdminPage';
import ArticlePage from '../ArticlePage/ArticlePage';
import DirectingPage from '../DirectingPage/DirectingPage';
import NewsPage from '../NewsPage/NewsPage';
import LinkPage from '../LinkPage/LinkPage';
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
                return (<LoginPage navigator={navigator} title="loginPage"/>);
            case 'signupPage':
                return (<SignupPage navigator={navigator} title="signupPage"/>);
            case 'adminPage':
                return (<AdminPage navigator={navigator} title="adminPage"/>);
            case 'articlePage':
                return (<ArticlePage navigator={navigator} title="articlePage"/>);
            case 'directingPage':
                return (<DirectingPage navigator={navigator} title="directingPage"/>);
            case 'newsPage':
                return (<NewsPage navigator={navigator} title="newsPage"/>);
            case 'linkPage':
                return (<LinkPage navigator={navigator} title="linkPage"/>);
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
