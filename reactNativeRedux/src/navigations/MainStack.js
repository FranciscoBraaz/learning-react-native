import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import About from '../pages/About';
import Home from '../pages/Home';

const {Navigator, Screen} = createStackNavigator();

export default () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="About" component={About} />
    </Navigator>
  );
};
