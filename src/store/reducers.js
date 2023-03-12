/**
 * Developer : Kishore
 */

import { combineReducers } from 'redux';
import newsReducer from '../components/Home/store/reducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
