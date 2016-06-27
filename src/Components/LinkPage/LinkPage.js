'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './LinkPage.style';

class LinkPage extends React.Component {

    constructor(props) {
        super(props);
        const links = [
            {
                name: 'Sito Web della Scuola',
                icon: 'ios-person'
            },
            {
                name: 'Registro Elettronico',
                icon: 'ios-person'
            },
            {
                name: 'Quaderno Elettronico',
                icon: 'ios-person'
            }
        ];
        this.state = { links };
        this.content = this.content.bind(this);
        this.renderList = this.renderList.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() } index={4}/>)
    }

    content() {
        return (
            <View>
                {this.renderList() }
            </View>)
    }

    renderList() {
        let values = [];
        this.state.links.map(item => {
            values.push(
                <View key={item.name} style={style.link}>
                    <Icon name={item.icon} size={30} style={{ color: 'black' }}/>
                    <Text style={style.text} >{item.name}</Text>
                </View>)
        });
        return values;
    }
}


export default LinkPage;