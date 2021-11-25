import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import TabBar from '../components/TabBar';
import TabBarIcon from '../components/TabBarIcon';
import {TabAboutScreen} from '../pages/TabAboutScreen';
import {TabConfigScreen} from '../pages/TabConfigSreen';
import {TabHomeScreen} from '../pages/TabHomeScreen';

export default function MainTab() {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator
      initialRouteName="TabHome"
      // tabBar={props => <TabBar {...props} />}
      // tabBarOptions={{
      //   labelStyle: {
      //     fontSize: 14,
      //   },
      // }}
      screenOptions={({route}) => ({
        tabBarIcon: () => <TabBarIcon route={route} />,
      })}>
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
