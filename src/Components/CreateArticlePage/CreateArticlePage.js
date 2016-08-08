'use strict';
import React from 'react';
import {View, TextInput, Text, CameraRoll} from 'react-native';
import {Button, Icon} from 'native-base';
import NavTabs from '../NavTabs/NavTabs';
import style from './CreateArticlePageStyle';

class CreateArticlePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<NavTabs mainComponent={this.content() }  navigator={this.props.navigator} index={0}/>)
    }

    content() {
        return (
            <View style={style.container}>
                <TextInput
                    style={style.titleInput}
                    onChangeText={(articleTitle) => this.props.CreateArticleTextChange(articleTitle,'articleTitle') }
                    value={this.props.articleTitle}
                    placeholder="Titolo dell' articolo"
                    multiline={true}
                    />
                <TextInput
                    style={style.textInput}
                    onChangeText={(articleContent) => this.props.CreateArticleTextChange(articleContent,'articleContent') }
                    value={this.props.articleContent}
                    placeholder="Testo dell' articolo"
                    multiline={true}
                    />
                <View style={style.iconContainer}>
                    <Icon name="ios-camera" onPress={this.props.AddPhotoBtnClick}/>
                    <Text style={style.iconText} onPress={this.props.AddPhotoBtnClick}>Carica Immagine</Text>
                </View>
                <Button style={style.button} onPress={this.props.CreateArticleBtnClick}>Invia</Button>
            </View>
        )
    }



}

export default CreateArticlePage;
