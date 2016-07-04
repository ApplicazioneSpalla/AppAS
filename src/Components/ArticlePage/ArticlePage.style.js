'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container: {
        marginTop: height / 30
    },
    image: {
        width: width,
        height: height / 3
    },
    footer: {
        height: height / 14,
        flex : 1,
        justifyContent : 'center',
        flexDirection : 'row'
    },
    title : {
        fontWeight : 'bold',
        fontSize : height / 35
    },
    button: {
        width: width / 3,
        flex : 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerIcon : {
         fontSize : height / 35,
         color: '#ED4A6A',
         marginTop : height / 100
    },
    iconText: {
        fontSize: height / 50,
        marginLeft: width / 80.
    }

});

export default style;
