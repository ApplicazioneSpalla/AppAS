'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';
import style from './DirectingPageStyle';

class DirectingPage extends React.Component {

    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() }  navigator={this.props.navigator} index={2}/>)
    }

    content() {
        return (
            <View>
                <View style={style.container}>
                    <Text>DirectingPage</Text>
                </View>
            </View>)
    }

}


export default DirectingPage;