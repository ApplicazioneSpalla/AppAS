'use strict';
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header, Title, Button} from 'native-base';
import Navigation from '../Navigation/Navigation';
import style from './NavTabsStyle';

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
        this.state = {
            items,
            title: this.getTitle()
        };

    }

    render() {
        const self = this;
        return (
            <View style={style.container}>
                <Tabs style={style.navbar}>
                    {
                        this.state.items.map(item => {
                            return (
                                <TouchableHighlight  key={item.icon} onPress={() => self.props.navigator.replace({ id: item.link }) }>
                                    <Icon name={item.icon} size={30} style={{ color: 'black' }}/>
                                </TouchableHighlight>)
                        })
                    }
                </Tabs>
                <Header style={style.header}>
                    <Text style={style.title}>{this.state.title}</Text>
                
                </Header>
                {this.props.mainComponent}
            </View>
        );
    }

    getTitle() {
        switch (this.props.index) {
            case 0:
                return 'Sezione Admin'
            case 1:
                return "Attualità"
            case 2:
                return 'Giornalino'
            case 3:
                return "Comunicazioni"
            case 4:
                return "Link Utili"
        }
    }
}

export default NavTabs;