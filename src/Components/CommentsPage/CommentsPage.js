'use strict';
import React from 'react';
import {View, Text} from 'react-native';
import {Container, Content, List, ListItem, InputGroup, Input, Button, Icon} from 'native-base';
import NavTabs from '../NavTabs/NavTabs';
import style from './CommentsPageStyle';

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
                <Content style={style.container}>
                    <View style={style.commentContainer}>
                        <View style={style.row}>
                            <Text style={style.author}>Nathaniel Clyne</Text>
                            <Text>If i got locked away and we lost it all today tell me honestly would you still love me the same</Text>
                        </View>
                        <Text style={style.date}>20 Settembre alle 10: 55</Text>
                    </View>
                </Content>
                <View  style={style.inputRow} >
                    <InputGroup borderType="regular" style={style.input} >
                        <Input 
                        onChangeText={(comment) => this.props.CommentTextChange(comment, 'comment') }
                        value={this.props.comment}
                        placeholder="Scrivi il tuo commento qui"/>
                    </InputGroup>
                    <Button primary style={style.button} onPress={this.props.CommentBtnClick}>
                        <Icon name="md-send" />
                    </Button>
                </View>
            </View>)
    }

}


export default CommentsPage;