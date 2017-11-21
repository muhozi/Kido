import { FETCHING, FETCH_SUCCESS, FETCH_FAIL } from '../actions/constants'
const initialState = {
  fetching: false,
  fetched : false,
  data: [],
  error:false,
}

export default function videoReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error:false,
        data: [],
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data,
      }
    case FETCH_FAIL:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error:true,
        data: [],
      }
    default:
      return state
  }
}