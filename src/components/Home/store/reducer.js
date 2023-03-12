/**
 * Developer : Kishore
 */

import {
  FETCH_NEWS_LIST_START,
  FETCH_NEWS_LIST_FAILURE,
  FETCH_NEWS_LIST_SUCCESS,
  FAVORITE_LIST_STORAGE,
} from './action';

const INITIAL_STATE = {
  loading: false,
  newsList: [],
  favouriteList: [],
  errorMessage: '',
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NEWS_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        newsList: action.payload,
        errorMessage: '',
      };
    case FETCH_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case FAVORITE_LIST_STORAGE:
      const value = [...state.favouriteList, ...action.payload];
      return {
        ...state,
        favouriteList: value,
      };
    default:
      return state;
  }
};

export default newsReducer;
