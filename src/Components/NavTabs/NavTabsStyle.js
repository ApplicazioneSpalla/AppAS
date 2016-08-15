'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const mainColor = '#4CAF50';


const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    logo: {
        width: width / 12,
        height: height / 22
    },
    navbar: {
        backgroundColor: mainColor,
        height: height / 13
    },
    header: {
        backgroundColor: mainColor,
        height: height / 12
    },
    title: {
        color: 'white',
        marginTop: height / 150,
        fontSize: height / 40
    },
    headerBtn: {
    }
});

export default style;
