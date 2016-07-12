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
    textInput: {
        width: width / 2,
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: height / 20,
        marginLeft: width / 4
    },
    button: {
        backgroundColor: '#6666ff',
        color: 'white',
        padding: 5,
        width: width / 4,
        marginTop: height / 25,
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 10
    },
    linkText: {
        color: 'blue',
        fontSize: height / 50,
        marginTop: height / 50,
    }
});

export default style;