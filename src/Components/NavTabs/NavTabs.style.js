'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const mainColor = '#4CAF50';


const style = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    logo: {
        width: width / 12,
        height: height / 22
    },
    navbar : {
        backgroundColor : mainColor
    },
    header : {
        backgroundColor : mainColor,
        marginTop : height/30,
        height: height / 15
    },
    title : {
        color : 'white',
        marginBottom : height / 70,
        fontSize : height/40
    }
});

export default style;
