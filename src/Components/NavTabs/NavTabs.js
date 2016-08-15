'use strict';
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header, Title, Button} from 'native-base';
import style from './NavTabsStyle';

class NavTabs extends React.Component {
    constructor(props) {
        super(props);
        let showBackBtn = true;
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

        if (this.props.index < 5) {
            const activeItem = items[this.props.index].icon;
            items[this.props.index].icon = activeItem.slice(0, activeItem.length - 8);
            showBackBtn = false;
        }

        this.state = {
            items,
            title: this.getTitle(),
            showBackBtn,
            showSpinner: false
        };

        this.logOut = this.logOut.bind(this);

    }

    render() {
        const self = this;
        return (
            <View style={style.container}>
                <Tabs style={style.navbar}>
                    {
                        this.state.items.map(item => {
                            return (
                                <TouchableHighlight key={item.icon}
                                                    onPress={() => self.props.navigator.replace({id: item.link}) }>
                                    <Icon name={item.icon} size={30} style={{color: 'black'}}/>
                                </TouchableHighlight>)
                        })
                    }
                </Tabs>

                <Header style={style.header}>
                    {this.renderBackBtn()}

                    <Title>{this.state.title}</Title>

                    <Button style={style.headerBtn} transparent onPress={this.logOut}>
                        <Icon name="ios-log-out"/>
                    </Button>
                </Header>
                {this.props.mainComponent}
            </View>
        );
    }

    getTitle() {
        switch (this.props.index) {
            case 0:
                return 'Sezione Admin';
            case 1:
                return "Attualità";
            case 2:
                return 'Giornalino';
            case 3:
                return "Comunicazioni";
            case 4:
                return "Link Utili";
            case 5:
                return "Commenti";
            case 6:
                return "Crea Comunicazione";
            case 7:
                return 'Crea Articolo';
            case 8:
                return "Leggi Articolo";
        }
    }

    renderBackBtn() {
        if (this.state.showBackBtn) {
            return (<Button transparent onPress={this.props.navigator.jumpBack}>
                <Icon name="ios-arrow-back"/>
            </Button>)
        }
        else {
            return (<Button transparent>
                <Text></Text>
            </Button>)
        }
    }

    logOut() {
        this.props.navigator.replace({id: 'loginPage'});
    }
}

export default NavTabs;