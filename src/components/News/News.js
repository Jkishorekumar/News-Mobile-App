import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  Share,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { COLORS } from '../../constants/Constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WINDOW_HEIGHT } from '../../constants/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { favouriteListStorage } from '../Home/store/action';

const News = ({ route: { params } }) => {
  //state management
  const [favourites, setFavourites] = useState('+ Add To Favourites');

  const dispatch = useDispatch();

  //social media share
  const socialMediaShare = async () => {
    const url = new URL(params.url);

    const shareOptions = {
      message: `To read the article , Please Click the link ${url}`,
    };

    await Share.share(shareOptions);
  };

  const favouriteList = useSelector((state) => state?.news?.favouriteList);

  useEffect(() => {
    let added = favouriteList.every((list) => list.title !== params.title);
    !added && setFavourites('Added');
  }, []);

  const onFavouriteClick = () => {
    setFavourites('Added');
    if (favourites !== 'Added') {
      const favouritePayload = [params];
      dispatch(favouriteListStorage(favouritePayload));
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{params.title}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.authorText}>{params.author}</Text>
          <TouchableWithoutFeedback onPress={() => onFavouriteClick()}>
            <Text style={styles.favouritesText}>{favourites}</Text>
          </TouchableWithoutFeedback>
        </View>

        <Image source={{ uri: params.urlToImage }} style={styles.imageTitle} />

        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{params.content}</Text>
        </View>

        <Text style={styles.linkText}>To read full article:</Text>

        <TouchableOpacity onPress={() => Linking.openURL(`${params.url}`)}>
          <Text style={styles.link}>Click Here</Text>
        </TouchableOpacity>

        <Text style={styles.linkText}>
          To share full article to your friends:
        </Text>

        <TouchableOpacity onPress={() => socialMediaShare()}>
          <Text style={styles.link}>Share</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
  favouritesText: {
    fontSize: 14,
    color: COLORS.SECONDARY_BACKGROUND_COLOR,
    fontWeight: 'bold',
  },
  imageTitle: {
    width: '100%',
    height: WINDOW_HEIGHT / 3,
  },
  contentContainer: {
    width: '100%',
    marginTop: 20,
    overflow: 'scroll',
  },
  contentText: {
    fontSize: 16,
    color: COLORS.SECONDARY_TEXT_COLOR,
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.PRIMARY_BACKGROUND_COLOR,
    marginVertical: 10,
  },
  link: {
    color: COLORS.LINK_COLOR,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default News;
