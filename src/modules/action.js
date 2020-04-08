import axios from 'axios';
import { VIDEO_LIST, VIDEO_DETAIL, SEARCH_ITEM } from './actionType';

const getVideosAction = (searchItem,pageNo) => async (dispatch) => {
  try {
    const response = await axios.get('http://www.omdbapi.com/?s='+ searchItem +'&page=' + pageNo + '&apikey=40485215',
      {
        headers: {
          Accept: 'application/json',
        },
      });

    if (response.status === 200) {
      const { data } = response;

      dispatch({
        type: VIDEO_LIST,
        payload: { videoList: data.Search, totalResults: data.totalResults }
      });
    }
  } catch (error) {
  }
};

const getVideoDetail = (imdbID) => async (dispatch) => {
  try {
    const response = await axios.get('http://www.omdbapi.com/?i='+ imdbID +'&apikey=40485215',
      {
        headers: {
          Accept: 'application/json',
        },
      });

    if (response.status === 200) {
      const { data } = response;
      dispatch({
        type: VIDEO_DETAIL,
        payload: { videoDetail: data }
      });
    }
  } catch (error) {
  }
};

const getVideoDetailErase = () => (dispatch) => {
 
      dispatch({
        type: VIDEO_DETAIL,
        payload: { videoDetail: {} }
      }); 
};

const getSearchItemAction = (searchItem) => (dispatch) => {
 
  dispatch({
    type: SEARCH_ITEM,
    payload: { searchItem: searchItem }
  }); 
};

export  { 
  getVideosAction, 
  getVideoDetail,
  getVideoDetailErase,
  getSearchItemAction,
};