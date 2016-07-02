import React from 'react';
import {Navigator} from 'react-native';

import LoginPage from '../LoginPage/LoginPage';
import AdminPage from '../AdminPage/AdminPage';
import ArticlePage from '../ArticlePage/ArticlePage';
import DirectingPage from '../DirectingPage/DirectingPage';
import NewsPage from '../NewsPage/NewsPage';
import LinkPage from '../LinkPage/LinkPage';

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
        }
    }
}

export default Navigation;
