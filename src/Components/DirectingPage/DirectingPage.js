'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';

class DirectingPage extends React.Component {

    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() } index={2}/>)
    }

    content() {
        return (
            <View>
                <Text>DirectingPage</Text>
            </View>)
    }

}


export default DirectingPage;