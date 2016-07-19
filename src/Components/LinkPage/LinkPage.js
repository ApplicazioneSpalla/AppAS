'use strict';
import React from 'react';
import {View, Text, Linking} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';
import {Content, List, ListItem, Icon} from 'native-base';
import style from './LinkPageStyle';

class LinkPage extends React.Component {

    constructor(props) {
        super(props);
        const links = [
            {
                name: 'Sito Web della Scuola',
                icon: 'ios-globe',
                url: 'http://www.liceoariostospallanzani-re.gov.it/'
            },
            {
                name: 'Registro Elettronico',
                icon: 'ios-book',
                url: 'https://spallanzani-re-sito.registroelettronico.com/login/?next=/select-student/'
            },
            {
                name: 'Quaderno Elettronico',
                icon: 'md-bookmarks',
                url: 'https://ariostospallanzani-re.registroelettronico.com/quaderno/'
            },
            {
                name: 'Web Mail',
                icon: 'ios-mail',
                url: 'https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/&hl=it#identifier'
            }
        ];
        this.state = { links };
        this.content = this.content.bind(this);
        this.renderList = this.renderList.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() }  navigator={this.props.navigator} index={4}/>)
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
                <ListItem iconLeft key={item.name} onPress={() => this.props.LinkClick(item) }>
                    <Icon name={item.icon} />
                    <Text> {item.name}</Text>
                </ListItem >
            )
        })
        return values;
    }

}


export default LinkPage;