'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import {Content, Card, CardItem} from 'native-base';
import NavTabs from '../NavTabs/NavTabs';
import NewsCard from './NewsCard';
import style from './NewsPage.style';

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
            <View>
                <NewsCard/>
            </View>)
    }

}


export default NewsPage;