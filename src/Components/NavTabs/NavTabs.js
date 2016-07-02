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
                link: this.props.navigator.push({id:'adminPage'})
            },
            {
                icon: "ios-paper-outline",
                link: this.props.navigator.push({id:'adminPage'})
            },
            {
                icon: "ios-compass-outline",
                link: this.props.navigator.push({id:'adminPage'})
            },
            {
                icon: "ios-notifications-outline",
                link: this.props.navigator.push({id:'adminPage'})
            },
            {
                icon: "ios-bookmark-outline",
                link: this.props.navigator.push({id:'adminPage'})
            },
        ];
        const activeItem = items[this.props.index].icon;
        items[this.props.index].icon = activeItem.slice(0, activeItem.length - 8);
        this.state = { items };

    }

    render() {
        return (
            <View style={style.container}>
                <Tabs style={{ backgroundColor: '#387EF5' }}>
                    {
                        this.state.items.map(item => {
                            return (
                                <TouchableHighlight  key={item.icon}  onPress={item.link}>
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