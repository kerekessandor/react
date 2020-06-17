import actionTypes from '../constants/actionTypes';
import axios from 'axios';

export const fetchNews = () => {
    return async (dispatch) => {
        const result = await axios.get('/api/news/');
        dispatch({
            type: actionTypes.NEWS_RECEIVED,
            news: result.data.data
        });
    }
}

export const fetchNewsDetails = (id) => {
    return async dispatch => {
        const result = await axios.get(`/api/news/${id}`);
        dispatch({
            type: actionTypes.NEWSITEM_RECEIVED,
            newsItem: result.data.data
        });
    }
}

function newsItemLoading(){
    return {
        type: actionTypes.NEWSITEM_LOADING
    }
}