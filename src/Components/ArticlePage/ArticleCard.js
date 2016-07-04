import React from 'react';
import {View,Image,ScrollView} from 'react-native';
import {Container, Content, Card, CardItem, Text, Icon } from 'native-base';
import style from './ArticlePage.style';

class ArticleCard extends React.Component {
    render() {
        return (
            <Container>
                <Content>

                    <Card>
                        <CardItem>
                            <Text>Competizioni</Text>
                        </CardItem>

                        <CardItem>
                            <Image style={style.image} source={require('../../../assets/codeWeek.jpg') } />
                        </CardItem>

                        <CardItem>
                            <Text style={style.title} >#CatchTheCode</Text>
                            <Text numberOfLines={3}>#CatchTheCode è l'attività proposta dagli studenti del nostro liceo alle classi delle scuole primarie e secondarie in occasione della EuCodeWeek, iniziativa della Commissione Europea a sostegno della programmazione.</Text>
                        </CardItem>

                        <CardItem style={style.footer}>
                            <View style={style.button}>
                                <Icon name="md-book" style={style.footerIcon}/>
                                <Text style={style.iconText}>Leggi</Text>
                            </View>
                            <View style={style.button}>
                                <Icon name="md-thumbs-up" style={style.footerIcon}/>
                                <Text style={style.iconText}>Mi Piace</Text>
                            </View>
                            <View style={style.button}>
                                <Icon name="md-chatboxes" style={style.footerIcon}/>
                                <Text style={style.iconText}>Commenta</Text>
                            </View>
                        </CardItem>
                    </Card>
            
                </Content>
            </Container>
        );
    }
}

export default ArticleCard;