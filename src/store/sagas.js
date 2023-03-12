/**
 * Developer : Kishore
 */

import { takeLatest } from 'redux-saga/effects';
import {
  favouriteListSaga,
  fetchNewsListSaga,
} from '../components/Home/store/saga';
import {
  FETCH_NEWS_LIST_REQUEST,
  FAVORITE_LIST_CREATOR,
} from '../components/Home/store/action';

export function* watchAuth() {
  yield takeLatest(FETCH_NEWS_LIST_REQUEST, fetchNewsListSaga);
  // yield takeLatest(FAVORITE_LIST_CREATOR, favouriteListSaga);
}
