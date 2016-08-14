'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: height
    },
    image: {
        width: width / 2,
        height: height / 4,
        marginTop: height / 8
    },
    textCont: {
        width: width / 2,
        marginTop: height / 20
    },
    icon: {
        color: '#384850'
    },
    checkbox: {
        marginLeft: width / 8,
        marginTop: height / 50,
    },
    button: {
        marginTop: height / 25,
        width: width / 4,
        marginLeft: width / 2 - width / 8
    },
    linkText: {
        color: 'blue',
        fontSize: height / 50,
        marginTop: height / 50,
    }
});

export default style;