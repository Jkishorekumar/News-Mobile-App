import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../constants/Constants';
import { FlatList } from 'react-native';
import { rootNavigate } from '../../navigation/Navigation';

const Header = (item, keyIndex) => {
  const articleScreen = () => {
    rootNavigate('News', 'push', item);
  };

  return (
    <TouchableWithoutFeedback onPress={() => articleScreen()}>
      <View style={styles.innerContainer} key={keyIndex}>
        <Image source={{ uri: item.urlToImage }} style={styles.newsImage} />
        <View style={styles.newsTitle}>
          <Text style={styles.titleText}>{item.title}</Text>
          <TouchableWithoutFeedback>
            <Text style={styles.timeText}>{item.publishedAt}</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const HeadingNews = ({ list }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => Header(item, index)}
        keyExtractor={(_, index) => index}
        initialNumToRender={10}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: WINDOW_HEIGHT - 150,
  },
  innerContainer: {
    width: '100%',
    height: 100,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  newsImage: {
    width: 100,
    height: '100%',
    overflow: 'hidden',
  },
  newsTitle: {
    width: WINDOW_WIDTH - 120,
    height: '100%',
    justifyContent: 'space-between',
    paddingLeft: 10,
    marginTop: -10,
  },
  titleText: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    height: 60,
    overflow: 'hidden',
  },
  timeText: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default HeadingNews;
