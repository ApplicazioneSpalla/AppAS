'use strict';
import React from 'react';
import {View, Image, TextInput, Text, Navigator} from 'react-native';
import {InputGroup, Input, Icon, Button } from 'native-base';
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
                <InputGroup style={style.textCont} >
                    <Icon name="ios-person" style={style.icon}/>
                    <Input
                        onChangeText={(username) => this.setState({ username }) }
                        value={this.state.username}
                        placeholder="username"
                        />
                </InputGroup>
                <InputGroup style={style.textCont} >
                    <Icon name="ios-lock" style={style.icon}/>
                    <Input
                        onChangeText={(password) => this.setState({ password }) }
                        value={this.state.password}
                        secureTextEntry={true}
                        placeholder="password"
                        />
                </InputGroup>
                <Button style={style.button} onPress={this.login}>Accedi</Button>
                <Text style={style.linkText} onPress={() => this.props.navigator.push({ id: 'signupPage' }) }>Non hai un account?Iscriviti!</Text>
            </View >
        )
    }

    login() {
        this.props.navigator.push({ id: 'newsPage' });
    }


}

export default LoginPage;
