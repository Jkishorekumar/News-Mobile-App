/**
 * Developer : Kishore
 */

import { Dimensions } from 'react-native';

export const API_KEY = '1287d5cf4228447a98ff3557fec22796';

export const END_POINT = `https://newsapi.org/v2/top-headlines/`;

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const COLORS = {
  PRIMARY_BACKGROUND_COLOR: '#000000',
  SECONDARY_BACKGROUND_COLOR: '#1D1D1D',

  PRIMARY_TEXT_COLOR: '#FFFFFF',
  SECONDARY_TEXT_COLOR: '#A1A1A1',

  LINK_COLOR: '#154698',

  RED: 'rgb(255, 0, 0)',
  YELLOW: '	rgb(255, 191, 0)',
  GREEN: 'rgb(0, 255, 0)',
  SKYBLUE: 'rgb(0, 255, 255)',
  BLUE: 'rgb(0, 0, 255)',
  PINK: '	rgb(255, 0, 255)',
};
