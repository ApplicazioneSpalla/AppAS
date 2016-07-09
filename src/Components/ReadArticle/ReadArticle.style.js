'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    title: {
        fontSize : height / 30,
        fontWeight : 'bold'
    },
    image : {
        width : width,
        height : height/ 2
    }
});

export default style;
