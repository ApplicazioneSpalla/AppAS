'use strict';
import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Content, Card, CardItem} from 'native-base';
import NavTabs from '../NavTabs/NavTabs';
import NewsCard from './NewsCard';
import style from './NewsPageStyle';

class NewsPage extends React.Component {

    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() } navigator={this.props.navigator} index={3}/>)
    }

    content() {
        return (
            <View style={style.scrollView}>
                <Content>
                    <NewsCard navigator={this.props.navigator} {...this.props}/>
                </Content>
            </View>)
    }

}


export default NewsPage;