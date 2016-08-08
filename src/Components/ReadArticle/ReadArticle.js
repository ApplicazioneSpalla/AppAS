import React from 'react';
import {View, Image} from 'react-native';
import {Container, Content, Text, Icon, Card,CardItem } from 'native-base';
import NavTabs from '../NavTabs/NavTabs';
import style from './ReadArticleStyle';

class ReadArticle extends React.Component {
    
    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    render() {
        return (<NavTabs mainComponent={this.content() }  navigator={this.props.navigator} index={1}/>)
    }

    content() {
        return (
            <View>
                <Content>
                    <Card>
                        <CardItem>
                            <Text style={style.title}>#CatchTheCode</Text>
                        </CardItem>

                        <CardItem>
                            <Image style={style.image} source={require('../../../assets/codeWeek.jpg') } />
                        </CardItem>

                        <CardItem>
                            <Text>#CatchTheCode è l'attività proposta dagli studenti del nostro liceo alle classi delle scuole primarie e secondarie in occasione della EuCodeWeek, iniziativa della Commissione Europea a sostegno della programmazione.</Text>
                            <Text style={style.linkText} onPress={()=> this.props.ReadArticleCommentClick(this.props.navigator)}>Leggi i Commenti</Text>
                        </CardItem>
                    </Card>
                </Content>
            </View>
        );
    }
}

export default ReadArticle;