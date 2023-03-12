import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../constants/Constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import HeadingNews from './HeadingNews';
import { fetchNewsListRequest } from '../Home/store/action';

const SearchNews = () => {
  //state management
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  //store management
  const newsList = useSelector((state) => state?.news?.newsList);

  const searchNews = (e) => {
    setSearchValue(e);
    dispatch(fetchNewsListRequest({ search: e }));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(e) => {
              searchNews(e);
            }}
            value={searchValue}
            placeholder="Search..."
          />
        </View>
        <HeadingNews list={newsList} view={'Catogory'} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.SECONDARY_BACKGROUND_COLOR,
  },
  inputContainer: {
    width: '100%',
  },
  textInput: {
    width: '98%',
    alignSelf: 'center',
    height: 60,
    backgroundColor: COLORS.PRIMARY_TEXT_COLOR,
    borderColor: COLORS.SECONDARY_TEXT_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchNews;
