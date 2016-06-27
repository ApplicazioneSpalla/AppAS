'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';

class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() } index={0}/>)
    }

    content() {
        return (
            <View>
                <Text>AdminPage</Text>
            </View>)
    }

}


export default AdminPage;