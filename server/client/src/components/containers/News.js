import React from "react";
import NewsItemListing from "../presentation/NewsItemListing";
import { connect } from "react-redux";
import { fetchNews } from "../../actions/actions";

class News extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNews());
  }

  renderContent() {
    switch (this.props.news) {
      case null:
        return <div>Sorry we have no news</div>;
      default:
        const newsItems = this.props.news.map(function (news, i) {
          return (
            <li key={i}>
              <NewsItemListing data={news}></NewsItemListing>
            </li>
          );
        });
        return <ul>{newsItems}</ul>;
    }
  }

  render() {
    return (
      <div>
        <h2>News items</h2>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
  };
};

export default connect(mapStateToProps)(News);
