import actionTypes from '../constants/actionTypes';

var initialState = {
    news: [],
    newsItem: {},
    loading: true
}

export default (state = initialState, action) => {
    var updated = Object.assign({}, state);
    switch(action.type) {
        case actionTypes.NEWS_RECEIVED:
            updated['news'] = action.news;
            updated['loading'] = false;
            return updated;
        case actionTypes.NEWSITEM_RECEIVED:
            updated['newsItem'] = action.newsItem;
            updated['loading'] = false;
            return updated;
        case actionTypes.NEWSITEM_LOADING:
            updated['loading'] = true;
            return updated;
        default:
            return state;
    }
}
