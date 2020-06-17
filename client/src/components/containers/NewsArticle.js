import React from 'react';
import { fetchNewsItem } from '../../actions/actions';
import { connect } from 'react-redux';
import NewsItemDetail from '../presentation/NewsItemDetail';

class NewsArticle extends React.Component{

    componentDidMount(){
        var fakeNewsItem = {
            id: '1',
            title: 'Mad owl chases car',
            teaser: 'Mad owl seen tormenting drivers in Morecambe',
            body: `Morecambe - Tuesday 8th August 2017

            Yesterday evening motorists were left running for their lives as a mad owl began a campaign of terror on rush traffic. 
            Eye Witness, Eric Barnes said "When I heard it Squawk in the sky above me, I thought I was done for"`
        };

        this.props.dispatch(fetchNewsItem(fakeNewsItem));
    }

    render(){
        const newsItem  = this.props.newsItem;
        return (
            newsItem ? <NewsItemDetail data={newsItem}/> : null 
        )
    }
}

const mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem
    }
}

export default connect(mapStateToProps)(NewsArticle);