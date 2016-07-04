'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        marginTop: height / 30
    },
    image: {
        width : width,
        height : height/3
    }
});

export default style;
