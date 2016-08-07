'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import {Content, Card, CardItem, Icon} from 'native-base';
import style from './NewsPageStyle';

class NewsCard extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <Card style={style.card}>
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
                        <Icon name="md-thumbs-up" style={style.icon} onPress={this.props.NewsLikeClick}/>
                        <Text style={style.iconText} onPress={this.props.NewsLikeClick}>Mi piace</Text>
                    </View>
                    <View style={style.button}>
                        <Icon name="md-chatboxes" style={style.icon} onPress={() => this.props.NewsCommentClick(this.props.navigator) }/>
                        <Text style={style.iconText} onPress={() => this.props.NewsCommentClick(this.props.navigator) }>Commenta</Text>
                    </View>
                </CardItem>
            </Card>)
    }

}


export default NewsCard;