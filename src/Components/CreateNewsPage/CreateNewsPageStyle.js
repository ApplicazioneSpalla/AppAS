'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textInput: {
        width: width/6*5,
        height: height/10,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: height / 60,
        marginLeft: width/12
    },
    button: {
        marginTop: height / 25,
        width: width / 4,
        marginLeft: width / 2 - width / 8
    }
});

export default style;