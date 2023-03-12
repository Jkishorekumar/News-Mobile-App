/**
 * Developer : Kishore
 */

import { API_KEY, END_POINT } from '../../../constants/Constants';
import {
  fetchNewsListStart,
  fetchNewsListSuccess,
  fetchNewsListFailure,
  favouriteListStorage,
} from './action';
import { put } from 'redux-saga/effects';
import axios from 'axios';

// export function* favouriteListSaga(action) {
//   const favouriteData = realm.objects('Favourites')[0];

//   if (!favouriteData) {
//     realm.write(() => {
//       realm.create('Favourites', { _id: ObjectId() });
//     });
//   } else {
//     yield put(favouriteListStorage(favouriteData));
//   }
// }

export function* fetchNewsListSaga(action) {
  //   const favouriteData = realm.objects('Favourites')[0];

  try {
    let params = action?.payload?.search
      ? {
          q: action?.payload?.search,
          apiKey: API_KEY,
        }
      : action?.payload?.catagory
      ? {
          country: 'in',
          category: action?.payload?.catagory,
          apiKey: API_KEY,
        }
      : {
          country: 'in',
          apiKey: API_KEY,
        };

    yield put(fetchNewsListStart());
    const response = yield axios.get(END_POINT, {
      params: params,
    });

    if (response.status >= 200 && response.status < 300) {
      const {
        data: { articles },
      } = response;

      // realm.write(() => {
      //   favouriteData.favouritesList = articles;
      // });

      yield put(fetchNewsListSuccess(articles));
    } else {
      throw response;
    }
  } catch (err) {
    let data = {};
    yield put(fetchNewsListFailure(data));
  }
}
