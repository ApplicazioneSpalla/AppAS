'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';
import ArticleCard from './ArticleCard';
import style from './ArticlePageStyle';

class ArticlePage extends React.Component {

    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() }  navigator={this.props.navigator} index={1}/>)
    }

    content() {
        return (
            <View style={style.container} >
                <ArticleCard navigator={this.props.navigator} {...this.props}/>
            </View>)
    }

}


export default ArticlePage;