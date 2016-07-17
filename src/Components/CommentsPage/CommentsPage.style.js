'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
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
    }
});

export default style;
