import { FETCHING, FETCH_SUCCESS, FETCH_FAIL } from './constants';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export function fetchingVideos() {
  return {
    type: FETCHING
  }
}
export function fetchVideosSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    data,
  }
}
export function fetchVideosFail(data) {
  return {
    type: FETCHQ_FAIL,
    data,
  }
}
export function fetchVideos() {
   return (dispatch) => {
    dispatch(fetchingVideos());
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        key : '',
        playlistId : 'PL0-84-yl1fUkall6a14nqzXpG79-RgI1F', // Selected playlist ID
        part : 'snippet,id',
        order : 'date',
        maxResults : 20
      }
    })
    .then((response) => {
      dispatch(fetchVideosSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchVideosFail(error));
    });
  }
}