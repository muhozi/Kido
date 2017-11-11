import reducers from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
//import {persistStore, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk'
const configureStore = () => {

	// create store...
	const middleware = [thunk/* ...your middleware (i.e. thunk) */];
	const store = compose(
	  applyMiddleware(...middleware),
	  //autoRehydrate()
	)(createStore)(reducers);
	
	return store;
};

export default configureStore;