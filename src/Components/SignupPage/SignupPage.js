'use strict';
import React from 'react';
import {View, Image, TextInput, Navigator} from 'react-native';
import {InputGroup, Input, Icon, Button} from 'native-base';
import style from './SignupPageStyle';

class SignupPage extends React.Component {
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
                    <Icon name="ios-mail" style={style.icon}/>
                    <Input
                        onChangeText={(mail) => this.props.SignupTextChange(mail, 'mail') }
                        value={this.props.mail}
                        placeholder="email"
                        />
                </InputGroup>
                <InputGroup style={style.textCont} >
                    <Icon name="ios-person" style={style.icon}/>
                    <Input
                        onChangeText={(username) => this.props.SignupTextChange(username, 'username') }
                        value={this.props.username}
                        placeholder="username"
                        />
                </InputGroup>
                <InputGroup style={style.textCont} >
                    <Icon name="ios-lock" style={style.icon}/>
                    <Input
                        onChangeText={(password) => this.props.SignupTextChange(password, 'password') }
                        value={this.props.password}
                        placeholder="password"
                        secureTextEntry={true}
                        />
                </InputGroup>
                <InputGroup style={style.textCont} >
                    <Icon name="ios-lock" style={style.icon}/>
                    <Input
                        onChangeText={(confirmPassword) => this.props.SignupTextChange(confirmPassword, 'confirmPassword') }
                        value={this.props.confirmPassword}
                        placeholder="password di nuovo"
                        secureTextEntry={true}
                        />
                </InputGroup>
                <Button style={style.button} onPress={() => this.props.SignupBtnClick(this.props.navigator)}>Iscriviti</Button>
            </View >
        )
    }
}

export default SignupPage;