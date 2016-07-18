'use strict';
import React from 'react';
import {View, Image, TextInput, Navigator} from 'react-native';
import {InputGroup, Input, Icon, Button} from 'native-base';
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
                <InputGroup style={style.textCont} >
                    <Icon name="ios-mail" style={style.icon}/>
                    <Input
                        onChangeText={(mail) => this.setState({ mail }) }
                        value={this.state.mail}
                        placeholder="email"
                        />
                </InputGroup>
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
                        placeholder="password"
                        secureTextEntry={true}
                        />
                </InputGroup>
                <InputGroup style={style.textCont} >
                    <Icon name="ios-lock" style={style.icon}/>
                    <Input
                        onChangeText={(confirmPassword) => this.setState({ confirmPassword }) }
                        value={this.state.confirmPassword}
                        placeholder="password di nuovo"
                        secureTextEntry={true}
                        />
                </InputGroup>
                <Button style={style.button} onPress={this.signup}>Iscriviti</Button>
            </View >
        )
    }

    signup() {
        this.props.navigator.push({ id: 'newsPage' })
    }
}

export default SignupPage;