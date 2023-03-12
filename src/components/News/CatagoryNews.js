import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../constants/Constants';
import { rootNavigate } from '../../navigation/Navigation';

let Catagories = [
  'BUSINESS',
  'TECHNOLOGY',
  'GENERAL',
  'HEALTH',
  'SCIENCE',
  'SPORTS',
];
let Colors = [
  COLORS.RED,
  COLORS.YELLOW,
  COLORS.GREEN,
  COLORS.SKYBLUE,
  COLORS.BLUE,
  COLORS.PINK,
];

const CatagoryNews = () => {
  const onCatagory = (catagory) => {
    rootNavigate('CatagoryArticles', 'push', { catagory: catagory });
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {Catagories.map((Catagory, index) => (
          <TouchableWithoutFeedback
            key={Catagory}
            onPress={() => onCatagory(Catagory)}
          >
            <View
              style={[styles.tabContainer, { backgroundColor: Colors[index] }]}
            >
              <View style={styles.textContainer}>
                <Text style={styles.text}>{Catagory}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT - 150,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    width: '30%',
    height: 100,
    borderRadius: 10,
    backgroundColor: 'blue',
    border: 'none',
    outline: 'none',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.PRIMARY_TEXT_COLOR,
  },
});

export default CatagoryNews;
