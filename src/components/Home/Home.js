import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Constants';
import HeadingNews from '../News/HeadingNews';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsListRequest, fetchNewsListSuccess } from './store/action';
import SearchNews from '../News/SearchNews';
import CatagoryNews from '../News/CatagoryNews';

const Home = () => {
  //state management
  const [view, setView] = useState('Home');

  const dispatch = useDispatch();

  //store management
  const favouriteList = useSelector((state) => state?.news?.favouriteList);
  const newsList = useSelector((state) => state?.news?.newsList);

  useEffect(() => {
    if (view === 'Home') {
      dispatch(fetchNewsListRequest());
    }
  }, [view]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>THE KISHORE NEWS</Text>
        </View>

        {view === 'Search' ? (
          <SearchNews />
        ) : view === 'Catogory' ? (
          <CatagoryNews />
        ) : (
          <HeadingNews list={view === 'Home' ? newsList : favouriteList} />
        )}
      </SafeAreaView>

      <View style={styles.navbarContainer}>
        <TouchableWithoutFeedback onPress={() => setView('Home')}>
          <View
            style={[
              styles.navbarTextContainer,
              view === 'Home' && {
                borderTopColor: COLORS.SECONDARY_TEXT_COLOR,
              },
            ]}
          >
            <Text style={styles.navbarText}>Home</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setView('Favourites');
            dispatch(fetchNewsListSuccess([]));
          }}
        >
          <View
            style={[
              styles.navbarTextContainer,
              view === 'Favourites' && {
                borderTopColor: COLORS.SECONDARY_TEXT_COLOR,
              },
            ]}
          >
            <Text style={styles.navbarText}>Favourites</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setView('Search');
            dispatch(fetchNewsListSuccess([]));
          }}
        >
          <View
            style={[
              styles.navbarTextContainer,
              view === 'Search' && {
                borderTopColor: COLORS.SECONDARY_TEXT_COLOR,
              },
            ]}
          >
            <Text style={styles.navbarText}>Search</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setView('Catogory');
            dispatch(fetchNewsListSuccess([]));
          }}
        >
          <View
            style={[
              styles.navbarTextContainer,
              view === 'Catogory' && {
                borderTopColor: COLORS.SECONDARY_TEXT_COLOR,
              },
            ]}
          >
            <Text style={styles.navbarText}>Catogory</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY_BACKGROUND_COLOR,
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    height: 50,
    width: '100%',
    backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
  },
  navbarContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 75,
    backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navbarTextContainer: {
    height: '100%',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 5,
    borderTopColor: 'transparent',
  },
  navbarText: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
