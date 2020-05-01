import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import favoriteReducer from './favorites';
import moviesReducer from './movies';


export default createStore(
    combineReducers({
        favorites: favoriteReducer,
        movies: moviesReducer
    }),
    applyMiddleware(thunk, logger)
)