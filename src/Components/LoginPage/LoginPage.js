'use strict';
import React from 'react';
import {View, Image, TextInput, TouchableHighlight, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import style from './LoginPage.style';

class LoginPage extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={style.container}>
                <Image
                    style={style.image}
                    source={require('./icon.png') }
                    />
                <TextInput
                    style={style.textInput}
                    onChangeText={(username) => this.setState({ username }) }
                    value={this.state.username}
                    placeholder=' username'
                    />
                <TextInput
                    style={style.textInput}
                    onChangeText={(password) => this.setState({ password }) }
                    value={this.state.password}
                    placeholder=' password'
                    />
                <TouchableHighlight onPress={Actions.navTabs}>
                    <Text style={style.button}>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default LoginPage;