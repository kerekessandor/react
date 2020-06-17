import actionTypes from '../constants/actionTypes';

var initialState = {
    news: [],
    newsItem: {}
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    console.log(state);
    switch(action.type) {
        case actionTypes.NEWS_RECEIVED:
            updated['news'] = action.news;
            return updated;
        case actionTypes.NEWSITEM_RECEIVED:
            updated['newsItem'] = action.newsItem;
            return updated;
        default:
            return state;
    }
}
