'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import {Content, Card, CardItem, Icon} from 'native-base';
import style from './NewsPage.style';

class NewsCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Content style={style.container}>
                <Card>
                    <CardItem>
                        <Text style={style.author}>Mario Rossi</Text>
                        <Text style={style.date}>15 Settembre alle 7: 50</Text>
                        <Text>
                            NativeBase is made from effective building blocks referred to as components.The Components are constructed in pure React Native platform along with some JavaScript functionality with rich set of customisable properties
                        </Text>
                        <View style={style.footer}>
                            <Text style={style.dataText}>10 Mi piace</Text>
                            <Text style={style.dataText}>20 Commenti</Text>
                        </View>
                    </CardItem>

                    <CardItem style={style.footer}>
                        <View style={style.button}>
                            <Icon name="md-thumbs-up" style={style.icon}/>
                            <Text style={style.iconText}>Mi piace</Text>
                        </View>
                        <View style={style.button}>
                            <Icon name="md-chatboxes" style={style.icon} onPress={() => this.props.navigator.replace({ id : 'commentsPage'}) }/>
                            <Text style={style.iconText} onPress={() => this.props.navigator.replace({ id : 'commentsPage'}) }>Commenta</Text>
                        </View>
                    </CardItem>
                </Card>
            </Content>)
    }

}


export default NewsCard;