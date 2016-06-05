'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        alignItems: 'center'
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
        marginTop: height / 20,
        alignSelf: 'center'
    }
});

export default style;