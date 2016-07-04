import React from 'react';
import {Image} from 'react-native';
import {Container, Content, Card, CardItem, Text, Icon } from 'native-base';

class ArticleCard extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>Instrumental Songs</Text>
                            <Text note>Guitar</Text>
                        </CardItem>

                        <CardItem>
                            <Image source={require('../../../assets/icon.png') } />
                        </CardItem>

                        <CardItem>
                            <Icon name={'ios-musical-notes'} style={{ color: '#ED4A6A' }} />
                            <Text>Read now</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default ArticleCard;