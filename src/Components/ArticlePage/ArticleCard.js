import React from 'react';
import {Image,ScrollView} from 'react-native';
import {Container, Content, Card, CardItem, Text, Icon } from 'native-base';
import style from './ArticlePage.style';

class ArticleCard extends React.Component {
    render() {
        return (
            <Container>
                <Content>

                    <Card>
                        <CardItem>
                            <Text>Festa d'Istututo</Text>
                        </CardItem>

                        <CardItem>
                            <Image style={style.image} source={require('../../../assets/icon.png') } />
                        </CardItem>

                        <CardItem>
                            <Icon name={'md-book'} style={{ color: '#ED4A6A' }} />
                            <Text>Leggi l'Articolo</Text>
                        </CardItem>
                    </Card>
            
                </Content>
            </Container>
        );
    }
}

export default ArticleCard;