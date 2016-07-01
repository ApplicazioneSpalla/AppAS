'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';
class NewsPage extends React.Component {

    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() } index={3}/>)
    }

    content() {
        return (
            <View>
                <Text>NewsPage</Text>
            </View>)
    }

}


export default NewsPage;