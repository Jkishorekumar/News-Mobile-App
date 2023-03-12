/**
 * Developer : Kishore
 */

const FETCH_NEWS_LIST_REQUEST = 'FETCH_NEWS_LIST_REQUEST';
const FETCH_NEWS_LIST_START = 'FETCH_NEWS_LIST_START';
const FETCH_NEWS_LIST_SUCCESS = 'FETCH_NEWS_LIST_SUCCESS';
const FETCH_NEWS_LIST_FAILURE = 'FETCH_NEWS_LIST_FAILURE';

const FAVORITE_LIST_CREATOR = 'FAVORITE_LIST_CREATOR';
const FAVORITE_LIST_STORAGE = 'FAVORITE_LIST_STORAGE';

const fetchNewsListRequest = (requestData) => {
  return {
    type: FETCH_NEWS_LIST_REQUEST,
    payload: requestData,
  };
};

const fetchNewsListStart = (newsList) => {
  return {
    type: FETCH_NEWS_LIST_START,
  };
};

const fetchNewsListSuccess = (newsList) => {
  return {
    type: FETCH_NEWS_LIST_SUCCESS,
    payload: newsList,
  };
};

const fetchNewsListFailure = (error) => {
  return {
    type: FETCH_NEWS_LIST_FAILURE,
    payload: error,
  };
};

const favouriteListCreator = (favouriteList) => {
  return {
    type: FAVORITE_LIST_CREATOR,
    payload: favouriteList,
  };
};

const favouriteListStorage = (favouriteList) => {
  return {
    type: FAVORITE_LIST_STORAGE,
    payload: favouriteList,
  };
};

export {
  FETCH_NEWS_LIST_FAILURE,
  FETCH_NEWS_LIST_SUCCESS,
  FETCH_NEWS_LIST_REQUEST,
  FETCH_NEWS_LIST_START,
  FAVORITE_LIST_CREATOR,
  FAVORITE_LIST_STORAGE,
  fetchNewsListFailure,
  fetchNewsListRequest,
  fetchNewsListSuccess,
  fetchNewsListStart,
  favouriteListCreator,
  favouriteListStorage,
};
