'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    titleInput: {
        width: width / 8 * 5,
        height: height / 20,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: height / 60,
        marginLeft: width / 16 * 3
    },
    textInput: {
        width: width / 6 * 5,
        height: height / 10,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: height / 25,
        marginLeft: width / 12
    },
    iconContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginTop: height / 25,
        marginLeft: width / 10,
    },
    iconText: {
        marginLeft: width / 40
    },
    button: {
        marginTop: height / 25,
        width: width / 4,
        marginLeft: width / 2 - width / 8
    }
});

export default style;