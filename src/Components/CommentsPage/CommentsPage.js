'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import {Container, Content, List, ListItem} from 'native-base';
import NavTabs from '../NavTabs/NavTabs';
import style from './CommentsPage.style';

class CommentsPage extends React.Component {

    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() }  navigator={this.props.navigator} index={3}/>)
    }

    content() {
        return (
            <View>
                <Content>
                    <View style={style.commentContainer}>
                        <View style={style.row}>
                            <Text style={style.author}>Nathaniel Clyne</Text>
                            <Text>f i got locked away and we lost it all today tell me honestly would you still love me the same</Text>
                        </View>
                        <Text style={style.date}>20 Settembre alle 10: 55</Text>
                    </View>
                </Content>
            </View>)
    }

}


export default CommentsPage;