'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';
import style from './LinkPage.style';

class LinkPage extends React.Component {

    constructor(props) {
        super(props);
        const links = ['Sito Web della Scuola', 'Registro Elettronico', 'Quaderno Elettronico'];
        this.state = { links };
        this.content = this.content.bind(this);
        this.renderList = this.renderList.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() }/>)
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
            values.push(<Text key={item}>{item}</Text>)
        });
        return values;
    }
}


export default LinkPage;