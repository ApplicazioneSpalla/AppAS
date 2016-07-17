'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    date: {
        fontSize: height / 40,
        marginLeft: width / 4 * 5
    },
    title: {
        fontSize: height / 30,
        fontWeight: 'bold'
    },
    image: {
        width: width,
        height: height / 2
    },
    linkText: {
        fontSize: height / 50,
        color: 'grey'
    }
});

export default style;
