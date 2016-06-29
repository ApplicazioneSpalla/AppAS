'use strict';
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './NavTabs.style';

class NavTabs extends React.Component {
    constructor(props) {
        super(props);
        const items = [
            {
                icon: "ios-home-outline",
                link: Actions.adminPage
            },
            {
                icon: "ios-paper-outline",
                link: Actions.articlePage
            },
            {
                icon: "ios-compass-outline",
                link: Actions.directingPage
            },
            {
                icon: "ios-notifications-outline",
                link: Actions.newsPage
            },
            {
                icon: "ios-bookmark-outline",
                link: Actions.linkPage
            },
        ];
        const activeItem = items[this.props.index].icon;
        items[this.props.index].icon = activeItem.slice(0, activeItem.length - 8);
        this.state = { items };

    }

    render() {
        return (
            <View style={style.container}>
                <Tabs style={{ backgroundColor: 'white' }}>
                    {
                        this.state.items.map(item => {
                            return (
                                <TouchableHighlight  key={item.icon} onPress={item.link}>
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