import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {TabAboutScreen} from '../pages/TabAboutScreen';
import {TabHomeScreen} from '../pages/TabHomeScreen';

export default function MainTab() {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let imageSrc = null;
          switch (route.name) {
            case 'TabHome':
              imageSrc = require('../assets/home.png');
              break;
            case 'TabAbout':
              imageSrc = require('../assets/help.png');
              break;
          }

          return <Image source={imageSrc} style={{width: 24, height: 24}} />;
        },
      })}>
      <Screen name="TabHome" component={TabHomeScreen} />
      <Screen name="TabAbout" component={TabAboutScreen} />
    </Navigator>
  );
}
