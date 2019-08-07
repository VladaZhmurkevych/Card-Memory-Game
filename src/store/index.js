import {
  applyMiddleware, combineReducers, compose, createStore
} from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../components/store/reducers';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const rootReducer = combineReducers({
  appReducer
});

const store = createStore(rootReducer, initialState, enhancer);

export default store;