'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    scrollView: {
        height: height / 5 * 4
    },
    card: {
        marginTop: height / 25,
        marginBottom: height / 30
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
    dataText: {
        color: 'grey',
        marginTop: height / 150,
        marginBottom: height / 150,
        marginRight: width / 70,
        fontSize: width / 28,
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
