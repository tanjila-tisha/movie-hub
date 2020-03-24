import axios from 'axios';
import { VIDEO_LIST } from './actionType';

const getVideosAction = (pageNo) => async (dispatch) => {
  try {
    const response = await axios.get('http://www.omdbapi.com/?s=Batman&page=' + pageNo + '&apikey=40485215',
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

export default getVideosAction;