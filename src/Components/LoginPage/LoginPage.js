'use strict';
import React from 'react';
import {View, Image, TextInput, Text, Navigator} from 'react-native';
import {InputGroup, Input, Icon, Button } from 'native-base';
import style from './LoginPageStyle';

class LoginPage extends React.Component {
    constructor() {
        super();
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
                        onChangeText={(username) => this.props.TextChange(username, 'username') }
                        value={this.props.username}
                        placeholder="username"
                        />
                </InputGroup>
                <InputGroup style={style.textCont} >
                    <Icon name="ios-lock" style={style.icon}/>
                    <Input
                        onChangeText={(password) => this.props.TextChange(password, 'password') }
                        value={this.props.password}
                        secureTextEntry={true}
                        placeholder="password"
                        />
                </InputGroup>
                <Button style={style.button} onPress={() => this.props.Login(this.props.navigator) }>Accedi</Button>
                <Text style={style.linkText} onPress={() => this.props.goToDestination(this.props.navigator,'signupPage')  }>Non hai un account?Iscriviti!</Text>
            </View >
        )
    }

}

export default LoginPage;
