'use strict';
import React from 'react';
import {View, ListView} from 'react-native';
import NavTabs from '../NavTabs/NavTabs';
import NewsCard from './NewsCard';
import style from './NewsPageStyle';

class NewsPage extends React.Component {

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            ds:ds.cloneWithRows(['row1', 'row2'])
        };
    }

    render() {
        return (<NavTabs mainComponent={this.content() } navigator={this.props.navigator} index={3}/>)
    }

    content() {
        return (
            <View style={style.scrollView}>
                <ListView
                    dataSource={this.state.ds}
                    renderRow={(data) => <NewsCard navigator={this.props.navigator} data={data} {...this.props}/>}
                />
            </View>)
    }

}


export default NewsPage;