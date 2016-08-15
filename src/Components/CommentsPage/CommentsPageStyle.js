'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        height: height - 3 * (height / 13)
    },
    commentContainer: {
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: width / 40
    },
    row: {
    },
    author: {
        fontWeight: 'bold',
        marginBottom: height / 300
    },
    date: {
        color: 'grey',
        fontSize: height / 55,
        marginTop: height / 160
    },
    inputRow: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    input: {
        width: width / 5 * 4,
        height: height / 15,
        marginBottom: 0,
        marginTop: 0
    },
    button: {
        width: width / 5,
        height: height / 15,
        borderRadius: 0
    }
});

export default style;
