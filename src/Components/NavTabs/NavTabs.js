'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import Tabs from 'react-native-tabs';
import style from './NavTabs.style';

class NavTabs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={style.container}>
                <Tabs  style={{ backgroundColor: 'white' }}>
                    <Text name="first">Notizie</Text>
                    <Text name="second">Giornalino</Text>
                    <Text name="third">Attualità</Text>
                    <Text name="fourth">Link</Text>
                    <Text name="fifth">Admin</Text>
                </Tabs>
                <Text style={style.welcome}>
                    Benvenuto all'App del liceo Ariosto Spallanzani
                </Text>
            </View>
        );
    }
}

export default NavTabs;