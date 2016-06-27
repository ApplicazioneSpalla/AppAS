'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';

class ArticlePage extends React.Component {

    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() } index={1}/>)
    }

    content() {
        return (
            <View>
                <Text>ArticlePage</Text>
            </View>)
    }

}


export default ArticlePage;