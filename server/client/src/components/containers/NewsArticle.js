import React from 'react';
import { fetchNewsDetails } from '../../actions/actions';
import { connect } from 'react-redux';
import NewsItemDetail from '../presentation/NewsItemDetail';

class NewsArticle extends React.Component{

    componentDidMount(){
        this.props.dispatch(fetchNewsDetails(this.props.match.params.id));
    }

    renderContent(){
        const newsItem  = this.props.newsItem;
        
        switch(this.props.loading){
            case false:
                return (
                    newsItem ? <NewsItemDetail data={newsItem}/> : <div>News bot found</div>
                );
            default:
                return (
                    <div className="text-center">Loading</div>
                )
        }
    }

    render(){
        console.log(this.props);
        
        return (
            this.renderContent()
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        newsItem: state.news.newsItem,
        loading: state.news.loading
    }
}

export default connect(mapStateToProps)(NewsArticle);