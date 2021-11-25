import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import TabBar from '../components/TabBar';
import {TabAboutScreen} from '../pages/TabAboutScreen';
import {TabConfigScreen} from '../pages/TabConfigSreen';
import {TabHomeScreen} from '../pages/TabHomeScreen';

export default function MainTab() {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator
      initialRouteName="TabHome"
      tabBar={props => <TabBar {...props} />}
      // tabBarOptions={{
      //   labelStyle: {
      //     fontSize: 14,
      //   },
      // }}
      // screenOptions={({route}) => ({
      //   tabBarIcon: () => {
      //     let imageSrc = null;
      //     switch (route.name) {
      //       case 'TabHome':
      //         imageSrc = require('../assets/home.png');
      //         break;
      //       case 'TabAbout':
      //         imageSrc = require('../assets/help.png');
      //         break;
      //     }

      //     return <Image source={imageSrc} style={{width: 24, height: 24}} />;
      //   },
      // })}
    >
      <Screen
        name="TabAbout"
        component={TabAboutScreen}
        options={{tabBarLabel: 'About'}}
      />
      <Screen
        name="TabHome"
        component={TabHomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Screen
        name="TabConfig"
        component={TabConfigScreen}
        options={{tabBarLabel: 'Config'}}
      />
    </Navigator>
  );
}
