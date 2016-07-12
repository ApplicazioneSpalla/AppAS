'use strict';
import React from 'react';
import {View, Image, TextInput, TouchableHighlight, Text, Navigator} from 'react-native';
import style from './SignupPage.style';

class SignupPage extends React.Component {
    constructor() {
        super();

        this.state = {
            mail: '',
            username: '',
            password: '',
            confirmPassword: ''
        }

        this.signup = this.signup.bind(this);
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
                    onChangeText={(mail) => this.setState({ mail }) }
                    value={this.state.mail}
                    placeholder='mail'
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
                <TextInput
                    style={style.textInput}
                    onChangeText={(confirmPassword) => this.setState({ confirmPassword }) }
                    value={this.state.confirmPassword}
                    placeholder='conferma password'
                    />
                <TouchableHighlight onPress={this.signup}>
                    <Text style={style.button}>Iscriviti</Text>
                </TouchableHighlight>
            </View >
        )
    }

    signup() {
        this.props.navigator.push({ id: 'newsPage' })
    }
}

export default SignupPage;