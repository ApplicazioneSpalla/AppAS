'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        marginTop: height / 25
    },
    author: {
        fontWeight: 'bold',
        marginBottom: height / 150
    },
    date: {
        color: 'grey',
        fontSize: width / 30,
        marginBottom: height / 80
    },
    footer: {
        flexDirection: 'row'
    },
    button: {
        width: width / 2,
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        fontSize: height / 35
    },
    iconText: {
        fontSize: height / 50,
        marginLeft: width / 80
    }
});

export default style;
