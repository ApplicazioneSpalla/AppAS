'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        marginTop : height/10
    },
    link: {
        flexDirection: 'row',
        borderWidth : 0.5,
        borderColor : 'grey',
        width : width,
        padding : height/80,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginLeft : width/60
    },
    icon: {
        marginLeft : width/100
    }
});

export default style;



