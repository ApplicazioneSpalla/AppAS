'use strict';
import React from 'react';
import {View, TextInput, Text, CameraRoll} from 'react-native';
import {Button, Icon} from 'native-base';
import NavTabs from '../NavTabs/NavTabs';
import style from './CreateArticlePageStyle';

class CreateArticlePage extends React.Component {
    constructor() {
        super();

        this.state = {
            articleTitle: '',
            articleText: '',
        }
    }

    render() {
        return (<NavTabs mainComponent={this.content() }  navigator={this.props.navigator} index={0}/>)
    }

    content() {
        return (
            <View style={style.container}>
                <TextInput
                    style={style.titleInput}
                    onChangeText={(articleTitle) => this.props.TextChange(articleTitle,'articleTitle') }
                    value={this.props.articleTitle}
                    placeholder="Titolo dell' articolo"
                    multiline={true}
                    />
                <TextInput
                    style={style.textInput}
                    onChangeText={(articleContent) => this.props.TextChange(articleContent,'articleContent') }
                    value={this.props.articleContent}
                    placeholder="Testo dell' articolo"
                    multiline={true}
                    />
                <View style={style.iconContainer}>
                    <Icon name="ios-camera"/>
                    <Text style={style.iconText}>Carica Immagine</Text>
                </View>
                <Button style={style.button}>Invia</Button>
            </View>
        )
    }



}

export default CreateArticlePage;
