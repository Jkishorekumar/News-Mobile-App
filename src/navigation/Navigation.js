/**
 * Developer : Kishore
 */

import React from 'react';
import {
  NavigationContainer,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home/Home';
import News from '../components/News/News';
import CatagoryArticles from '../components/News/CatagoryArticles';

const Stack = createNativeStackNavigator();

const navigationRef = React.createRef();

export function rootNavigate(name, action, params = null) {
  if (action === 'navigate') {
    navigationRef.current?.navigate(name, params);
  } else if (action === 'replace') {
    navigationRef.current.dispatch(StackActions.replace(name, params));
  } else if (action === 'push') {
    navigationRef.current.dispatch(StackActions.push(name, params));
  } else if (action === 'reset') {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name, params }],
      })
    );
  } else if (action === 'back') {
    navigationRef.current?.goBack();
  }
}

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
          gestureEnabled: 'false',
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="CatagoryArticles" component={CatagoryArticles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
