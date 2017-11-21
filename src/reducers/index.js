import { combineReducers } from 'redux';
import routes from './routes';
import videos from './videoReducer';

export default combineReducers({
  routes,
  videos,
});