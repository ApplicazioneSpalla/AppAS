'use strict';
import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {Button} from 'native-base';
import NavTabs from '../NavTabs/NavTabs';
import style from './CreateNewsPageStyle';

class CreateNewsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            newsText: '',
        }
    }

    render() {
        return (<NavTabs mainComponent={this.content() }  navigator={this.props.navigator} index={6}/>)
    }

    content() {
        return (
            <View style={style.container}>
                <TextInput
                    style={style.textInput}
                    onChangeText={(news) => this.props.CreateNewsTextChange(news,'news') }
                    value={this.props.news}
                    placeholder=' Inserisci qui il testo del messaggio'
                    multiline={true}
                    />
                <Button style={style.button} onPress={this.props.CreateNewsBtnClick}>Invia</Button>
            </View>
        )
    }



}

export default CreateNewsPage;
