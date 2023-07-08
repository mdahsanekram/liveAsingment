import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialState = {}
const middleware = [thunk]
const devTools = composeWithDevTools(applyMiddleware(...middleware));
	// process.env.NODE_ENV === "production"
    // ? applyMiddleware(...middleware)
    // : composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, devTools);

export default store
