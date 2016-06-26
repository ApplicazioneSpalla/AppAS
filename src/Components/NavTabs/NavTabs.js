'use strict';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './NavTabs.style';

class NavTabs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={style.container}>
                <Tabs  style={{ backgroundColor: 'white' }}>
                    <Icon name="ios-person" size={30} style={{color:'black'}}/>
                    <Icon name="ios-paper-outline" size={30} style={{color:'black'}}/>
                    <Icon name="ios-compass-outline" size={30} style={{color:'black'}}/>
                    <Icon name="ios-notifications-outline" size={30} style={{color:'black'}}/>
                    <Icon name="ios-bookmark-outline" size={30} style={{color:'black'}}/>
                </Tabs>
                {this.props.mainComponent}
            </View>
        );
    }
}

export default NavTabs;