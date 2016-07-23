'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';
import {Content, List, ListItem, Icon} from 'native-base';
import style from './AdminPageStyle';

class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        const navigator = this.props.navigator;
        const links = [
            {
                name: 'Scrivi Comunicazione',
                icon: 'ios-paper',
                onPress: () => this.props.goToDestination(navigator,'createNewsPage') 
            },
            {
                name: 'Scrivi Articolo Di Attualità',
                icon: 'ios-compass',
                onPress: () => this.props.goToDestination(navigator,'createArticlePage')  
            },
            {
                name: 'Scrivi Articolo di Orientamento',
                icon: 'ios-notifications',
                onPress: () => this.props.goToDestination(navigator,'createArticlePage')  
            }
        ];
        this.state = { links };
        this.content = this.content.bind(this);
        this.renderList = this.renderList.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() }  navigator={this.props.navigator} index={0}/>)
    }

    content() {
        return (
            <View style={style.container}>
                <Content>
                    <List>
                        {this.renderList() }
                    </List>
                </Content>
            </View>)
    }

    renderList() {
        let values = [];
        this.state.links.map(item => {
            values.push(
                <ListItem iconLeft key={item.name} onPress={item.onPress}>
                    <Icon name={item.icon} />
                    <Text> {item.name}</Text>
                </ListItem>
            )
        })
        return values;
    };

}


export default AdminPage;