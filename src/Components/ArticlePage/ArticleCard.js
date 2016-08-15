import React from 'react';
import {View,Image,ScrollView,TouchableHighlight} from 'react-native';
import {Container, Content, Card, CardItem, Text, Icon, Button} from 'native-base';
import style from './ArticlePageStyle';

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
                            <View style={style.dataRow}>
                                <Text style={style.dateText}>10 minuti</Text>
                            </View>
                        </CardItem>

                        <CardItem style={style.footer}>
                            <View style={style.button}>
                                <Icon name="md-book" style={style.footerIcon} onPress={() => this.props.ArticleReadClick(this.props.navigator) }/>
                                <Text style={style.iconText} onPress={() => this.props.ArticleReadClick(this.props.navigator) }>Leggi</Text>
                            </View>
                            <View style={style.button}>
                                <Icon name="md-thumbs-up" style={style.footerIcon} onPress={this.props.ArticleLikeClick}/>
                                <Text style={style.iconText} onPress={this.props.ArticleLikeClick}>Mi Piace</Text>
                            </View>
                            <View style={style.button}>
                                <Icon name="md-chatboxes" style={style.footerIcon} onPress={() => this.props.ArticleCommentClick(this.props.navigator) }/>
                                <Text style={style.iconText} onPress={() => this.props.ArticleCommentClick(this.props.navigator) } >Commenta</Text>
                            </View>
                        </CardItem>
                    </Card>
            
                </Content>
            </Container>
        );
    }
}

export default ArticleCard;