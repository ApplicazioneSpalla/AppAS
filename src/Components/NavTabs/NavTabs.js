'use strict';
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../Navigation/Navigation';
import style from './NavTabs.style';

class NavTabs extends React.Component {
    constructor(props) {
        super(props);
        const items = [
            {
                icon: "ios-home-outline",
                link: 'adminPage'
            },
            {
                icon: "ios-paper-outline",
                link: 'articlePage'
            },
            {
                icon: "ios-compass-outline",
                link: 'directingPage'
            },
            {
                icon: "ios-notifications-outline",
                link: 'newsPage'
            },
            {
                icon: "ios-bookmark-outline",
                link: 'linkPage'
            },
        ];
        const activeItem = items[this.props.index].icon;
        items[this.props.index].icon = activeItem.slice(0, activeItem.length - 8);
        this.state = { items };

    }

    render() {
        const self = this;
        return (
            <View style={style.container}>
                <Tabs style={{ backgroundColor: '#387EF5' }}>
                    {
                        this.state.items.map(item => {
                            return (
                                <TouchableHighlight  key={item.icon} onPress={() => self.props.navigator.replace({ id: item.link}) }>
                                    <Icon name={item.icon} size={30} style={{ color: 'black' }}/>
                                </TouchableHighlight>)
                        })
                    }
                </Tabs>
                {this.props.mainComponent}
            </View>
        );
    }
}

export default NavTabs;