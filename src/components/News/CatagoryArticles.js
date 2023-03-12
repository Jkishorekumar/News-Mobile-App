import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { COLORS } from '../../constants/Constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WINDOW_HEIGHT } from '../../constants/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsListRequest } from '../Home/store/action';
import { fetchNewsListSuccess } from '../Home/store/action';

const CatagoryArticles = ({ route: { params } }) => {
  const dispatch = useDispatch();

  //store management
  const newsList = useSelector((state) => state?.news?.newsList);

  useEffect(() => {
    dispatch(fetchNewsListRequest({ catagory: params.catagory.toLowerCase() }));
    return () => dispatch(fetchNewsListSuccess([]));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        {newsList.map((list, index) => (
          <View key={index}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{list.title}</Text>
            </View>

            <View style={styles.detailContainer}>
              <Text style={styles.authorText}>{list.author}</Text>
            </View>

            <Image
              source={{ uri: list.urlToImage }}
              style={styles.imageTitle}
            />

            <View style={styles.contentContainer}>
              <Text style={styles.contentText}>{list.content}</Text>
            </View>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.PRIMARY_TEXT_COLOR,
  },
  titleContainer: {
    width: '100%',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    color: COLORS.SECONDARY_BACKGROUND_COLOR,
    fontWeight: 'bold',
  },
  detailContainer: {
    marginBottom: 20,
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  authorText: {
    fontSize: 14,
    color: COLORS.SECONDARY_TEXT_COLOR,
  },
  imageTitle: {
    width: '100%',
    height: WINDOW_HEIGHT / 3,
  },
  contentContainer: {
    width: '100%',
    marginVertical: 20,
    overflow: 'scroll',
  },
  contentText: {
    fontSize: 16,
    color: COLORS.SECONDARY_TEXT_COLOR,
  },
});

export default CatagoryArticles;
