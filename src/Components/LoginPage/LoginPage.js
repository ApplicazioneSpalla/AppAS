'use strict';
import React from 'react';
import {View, Image, TextInput, TouchableHighlight, Text, Navigator} from 'react-native';
import style from './LoginPage.style';

class LoginPage extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.login = this.login.bind(this);
    }

    render() {
        return (
            <View style={style.container}>
                <Image
                    style={style.image}
                    source={require('../../../assets/icon.png') }
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
                <TouchableHighlight onPress={this.login}>
                    <Text style={style.button}>Login</Text>
                </TouchableHighlight>
            </View >
        )
    }

    login() {
        this.props.navigator.push({ id: 'newsPage' })
    }
}

export default LoginPage;
